---
title: Deploying Umbraco with Team City & Octopus Deploy
tags:
  - Tools
  - Umbraco
  - uSync
date: 2017-10-04 10:50:43
---

As a minimum (for this) you will want the following packages:

*   UmbracoCms
*   OctoPack
*   uSync
You should source control this solution as per other posts, but note you don’t want to source control the umbraco or umbraco_clients directories.

## Team City Build

The Teamcity build should have two steps:

1.  Nuget the packages from the repo
2.  Build the project (and package with OctoDeploy)

## Octopus .nuspec file

A standard umbraco build doesn’t include the umbraco, or umbraco_client folders in the solution, this then means they don’t then appear in the octopus deploy nuget package .

If you put a .nuspec file in the root of the project (with the same name as the project) you can then add extra files - via the files section of the file. When OctoPack runs it will add any files in this section to the build.

_If you do a deploy of Umbraco using WebDeploy these folders are included through the use of a .target file. (/packages/UmbracoCms.x/Build/UmbracoCms.targets). This .nuspec file tells octopack to copy the same files into our package._
<pre>&lt;files&gt;
      &lt;file src="App_Browsers\**\*" target="App_Browsers" /&gt;
      &lt;file src="Config\Splashes\**\*" target="Config\Splashes" /&gt;
      &lt;file src="Umbraco\**\*.*" target="Umbraco" /&gt;
      &lt;file src="Umbraco_Client\**\*.*" target="Umbraco_Client" /&gt;
 &lt;/files&gt;  
</pre>
Using this section in your .nuspec file means you will get umbraco on the destination server.
<table style="background-color: aliceblue;">
<tbody>
<tr>
<td>**Note: **The default behaviour of OctoPack when it sees the files section is to only add these files to the project meaning all your other bits will be missing. To make octopack include the project files and the files in the files section. Add the following to the build parameters in your Teamcity build:

/p:OctoPackEnforceAddingFiles=true

</td>
</tr>
</tbody>
</table>
If you are also using uSync you will want to add the uSync files to this section:

This will mean uSync also gets its files copied to the build without you needing to add anything to your solution file

_Corrupt .nuget package? It's quite common if you (or someone on your development team) haven’t worked with deploy targets before, that you will be tempted to add the umbraco or umbraco_client folder to your solution. DON’T DO THIS! If you do octopack will include the files in the project and those in the .nuspec file and you will end up with duplicates inside your package. Octopus will then refuse to deploy this, and you will be left scratching your head wondering why. _

## Deployment

Once you have an octopack with all the files in it you can use octopus deploy to get the site onto the server. There is very little extra configuration here, although it’s good to have scripts to increment the clientdependency version and ideally clean the usync folder before the deployment, so you don’t get any rogue files hanging around after deletion.
