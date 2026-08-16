#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const readline = require("readline/promises");
const { execSync } = require("child_process");

const POSTS_DIR = path.join(__dirname, "..", "src", "posts");

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatDate(d) {
  const pad = (n) => String(n).padStart(2, "0");
  return (
    `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ` +
    `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
  );
}

function currentBranch() {
  try {
    return execSync("git rev-parse --abbrev-ref HEAD", { encoding: "utf8" }).trim();
  } catch {
    return null;
  }
}

async function main() {
  const [argTitle, argTags] = process.argv.slice(2);
  let title = argTitle ? argTitle.trim() : "";
  let tagsInput = argTags || "";

  if (!title) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    title = (await rl.question("Post title: ")).trim();
    if (!title) {
      console.error("A title is required.");
      rl.close();
      process.exit(1);
    }
    tagsInput = (await rl.question("Tags (comma separated, optional): ")).trim();
    rl.close();
  }

  const slug = slugify(title);
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (fs.existsSync(filePath)) {
    console.error(`src/posts/${slug}.md already exists.`);
    process.exit(1);
  }

  const tags = tagsInput
    ? tagsInput.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  const frontmatter = [
    "---",
    `title: ${title}`,
    `date: ${formatDate(new Date())}`,
    ...(tags.length ? ["tags:", ...tags.map((t) => `  - ${t}`)] : []),
    "---",
    "",
    "",
  ].join("\n");

  fs.mkdirSync(POSTS_DIR, { recursive: true });
  fs.writeFileSync(filePath, frontmatter);
  console.log(`\nCreated src/posts/${slug}.md`);

  const branch = currentBranch();
  if (branch === "main") {
    const branchName = `post/${slug}`;
    try {
      execSync(`git checkout -b ${branchName}`, { stdio: "inherit" });
      console.log(`\nSwitched to new branch: ${branchName}`);
    } catch {
      console.log(`\nCouldn't create branch ${branchName} automatically — create one yourself before committing.`);
    }
  } else if (branch) {
    console.log(`\nStaying on current branch: ${branch}`);
  }

  console.log(`
Next steps:
  1. Write the post in src/posts/${slug}.md
  2. git add src/posts/${slug}.md
  3. git commit -m "${slug}"
  4. git push -u origin HEAD
  5. Open a PR into main — merging it deploys the site
`);
}

main();
