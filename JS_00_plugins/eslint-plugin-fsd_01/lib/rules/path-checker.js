/* eslint-disable eslint-plugin/prefer-message-ids */
/* eslint-disable eslint-plugin/require-meta-type */
"use strict";

const path = require("path");

module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "feature sliced relative path checker",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        // example src/shared/ui/Card
        const importTo = node.source.value;

        // /home/anna_push/blog_app/src/shared/ui/Card
        const fromFilename = context.getFilename();

        if(shouldBeRelative(fromFilename, importTo))
        context.report({ node: node, message: "Within one slide, imports must be relative" });
      },
    };
  },
};

function isPathRelative(path) {
  return path.startsWith("./") || path.startsWith("../") || path === ".";
}

const layers = {
  entities: "entities",
  features: "features",
  shared: "shared",
  pages: "pages",
  widgets: "widgets",
};

function shouldBeRelative(from, to) {
  if (isPathRelative(to)) {
    return false;
  }

  const toArray = to.split("/");
  const toLayer = toArray[0];
  const toSlice = toArray[1];

  if (!toLayer || !toSlice || !layers[toLayer]) {
    return false;
  }

  const normalizedPath = path.toNamespacedPath(from);
  const projectFrom = normalizedPath.split("src")[1];
  const fromArray = projectFrom.split("\\");

  const fromLayer = fromArray[1];
  const fromSlice = fromArray[2];

  if (!fromLayer || !fromSlice || !layers[fromLayer]) {
    return false;
  }

  return fromSlice === toSlice && toLayer === fromLayer;
}