module.exports = {
  url: "https://blog.jumoo.co.uk",
  name: "Jumoo Blog",
  description:
    "Jumoo is a digital services company specialising in helping people build evidence based, customer focused, digital services.",
  image: "/images/og-default.png",

  // The main Jumoo site, and the other sites that hang off it. The header and
  // footer link back to these, matching jumoo.co.uk's own header and footer.
  home: "https://jumoo.co.uk",
  tagline: "Umbraco tools that make deployment and translation simple",
  email: "info@jumoo.co.uk",
  docs: "https://docs.jumoo.co.uk",
  releases: "https://releases.jumoo.co.uk",

  nav: [
    { name: "uSync", url: "https://jumoo.co.uk/usync/" },
    { name: "Translation Manager", url: "https://jumoo.co.uk/translate/" },
    { name: "Docs", url: "https://docs.jumoo.co.uk/" },
    { name: "Blog", url: "/", current: true },
    { name: "About", url: "https://jumoo.co.uk/about/" },
    { name: "Contact", url: "https://jumoo.co.uk/contact/" },
  ],
};
