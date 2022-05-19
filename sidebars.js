/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually

  tutorialSidebar: [
    "index",
    {
      type: "category",
      label: "Getting started",
      link: { type: "doc", id: "getting-started/index" },
      items: [
        {
          type: "category",
          label: "Installation",
          link: { type: "doc", id: "getting-started/installation/index" },
          items: [
            {
              type: "category",
              label: "NodeJS",
              link: { type: "doc", id: "getting-started/installation/nodejs/index" },
              items: [
                "getting-started/installation/nodejs/linux",
                "getting-started/installation/nodejs/windows",
                "getting-started/installation/nodejs/apple-intel",
                "getting-started/installation/nodejs/apple-arm",
              ],
            },
            "getting-started/installation/react-native",
            // "concepts/did-and-didcomm",
            // "concepts/platform-and-environment",
          ],
        },
        // "concepts/did-and-didcomm",
        // "concepts/platform-and-environment",
      ],
    },
    {
      type: "category",
      label: "Concepts",
      link: { type: "doc", id: "concepts/index" },
      items: ["concepts/agents", "concepts/did-and-didcomm", "concepts/platform-and-environment"],
    },
    {
      type: "category",
      label: "Tutorials",
      link: { type: "doc", id: "tutorials/index" },
      items: ["concepts/agents"],
    },
    {
      type: "category",
      label: "Ecosystem",
      link: { type: "doc", id: "ecosystem/index" },
      items: ["ecosystem/framework", "ecosystem/extensions", "ecosystem/bifold"],
    },
  ],
}

module.exports = sidebars