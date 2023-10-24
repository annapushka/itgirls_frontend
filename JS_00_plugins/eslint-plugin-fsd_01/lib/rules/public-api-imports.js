/* eslint-disable eslint-plugin/prefer-message-ids */
const isPathRelative = require("../helpers");

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: " ",
      recommended: false,
      url: null,
    },
    fixable: null,
    schema: [{
      type: "object",
      properties: {
        alias: {
          type: "string",
        },
      },
    }],
  },

  create(context) {
    const alias = context.options[0].alias || '';

    const acceptableLayers = {
      entities: "entities",
      features: "features",
      pages: "pages",
      widgets: "widgets",
    };

    return {
      ImportDeclaration(node) {
        const value = node.source.value;
        const importTo = alias ? value.replace(`${alias}/`, '') : value;

        if (isPathRelative(importTo)) {
          return;
        }
        const segments = importTo.split('/');
        const isImportNotFromPublicApi = segments.length > 2;

        const layer = segments[0];

        if (!acceptableLayers[layer]) {
          return;
        }

        if (isImportNotFromPublicApi) {
          context.report({
            node: node,
            message: "Absolute imports are only allowed from Public API (index.ts)"
          })
        }
      }
    }
  }
}