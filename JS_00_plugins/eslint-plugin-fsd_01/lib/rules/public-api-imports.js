/* eslint-disable eslint-plugin/prefer-message-ids */
const isPathRelative = require("../helpers");
const micromatch = require("micromatch");
const path = require("path");

const PUBLIC_ERROR = 'PUBLIC_ERROR';
const TESTING_PUBLIC_ERROR = 'TESTING_PUBLIC_ERROR';


module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: " ",
      recommended: false,
      url: null,
    },
    fixable: 'code',
    messages: {
      [PUBLIC_ERROR]: "Absolute imports are only allowed from Public API (index.ts)",
      [TESTING_PUBLIC_ERROR]: "Testing imports are only allowed from Public API (testing.ts)"
    },
    schema: [{
      type: "object",
      properties: {
        alias: {
          type: "string",
        },
        testFilesPatterns: {
          type: "array",
        }
      },
    }],
  },

  create(context) {
    const {
      alias = '', testFilesPatterns = []
    } = context.options[0] ? context.options[0] : {};

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

        const isTestingPublicApi = segments[2] === 'testing' && segments.length < 4;

        const layer = segments[0];
        const slice = segments[1];

        if (!acceptableLayers[layer]) {
          return;
        }

        if (isImportNotFromPublicApi && !isTestingPublicApi) {
          context.report({
            node: node,
            messageId: PUBLIC_ERROR,
            fix: fixer => fixer.replaceText(node.source, `'${alias}/${layer}/${slice}'`)
          })
        }

        if (isTestingPublicApi) {
          const currentFilePath = context.getFilename();
          const normalizedPath = path
            .toNamespacedPath(currentFilePath)
            .replace(/\\/g, '/')

          const isCurrentFileTesting = testFilesPatterns.some(
            pattern => micromatch.isMatch(normalizedPath, pattern)
          )

          if (!isCurrentFileTesting) {
            context.report({
              node: node,
              messageId: TESTING_PUBLIC_ERROR
            })

          }
        }
      }
    }
  }
}