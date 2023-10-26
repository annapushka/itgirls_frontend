/* eslint-disable eslint-plugin/require-meta-type */
/* eslint-disable eslint-plugin/prefer-message-ids */
"use strict";
const isPathRelative = require('../helpers');
const micromatch = require('micromatch');

module.exports = {
  meta: {
    type: null,
    docs: {
      description: "saf",
      category: "Fill me in",
      recommended: false,
      url: null,
    },
    fixable: null,
    schema: [{
      type: 'object',
      properties: {
        alias: {
          type: 'string',
        },
        ignoreImportPatterns: {
          type: 'array',
        }
      },
    }],
  },

  create(context) {
    const layers = {
      'app': ['pages', 'widgets', 'features', 'shared', 'entities'],
      'pages': ['widgets', 'features', 'shared', 'entities'],
      'widgets': ['features', 'shared', 'entities'],
      'features': ['shared', 'entities'],
      'entities': ['shared', 'entities'],
      'shared': ['shared'],
    }

    const availableLayers = {
      'app': 'app',
      'entities': 'entities',
      'features': 'features',
      'shared': 'shared',
      'pages': 'pages',
      'widgets': 'widgets',
    }


    const { alias = '', ignoreImportPatterns = [] } = context.options[0] ? context.options[0] : {};

    const getCurrentFileLayer = () => {
      const currentFilePath = context.getFilename();

      const normalizedPath = currentFilePath.replace(/[\\]+/g, "/")
      const projectPath = normalizedPath?.split('src')?.[1]
      const segments = projectPath?.split('/')

      return segments?.[1]
    }

    const getImportLayer = (value) => {
      const importPath = alias ? value.replace(`${alias}/`, '') : value;
      const segments = importPath?.split('/')

      return segments?.[0]
    }

    return {
      ImportDeclaration(node) {
        const importPath = node.source.value
        const currentFileLayer = getCurrentFileLayer()
        const importLayer = getImportLayer(importPath)

        if (isPathRelative(importPath)) {
          return;
        }

        if (!availableLayers[importLayer] || !availableLayers[currentFileLayer]) {
          return;
        }

        const isIgnored = ignoreImportPatterns.some(pattern => {
          return micromatch.isMatch(importPath, pattern)
        });

        if (isIgnored) {
          return;
        }

        if (!layers[currentFileLayer].includes(importLayer)) {
          context.report({node: node, message: 'A slice can only import subordinate slices into itself (shared, entities, features, widgets, pages, app)'});
        }
      }
    };
  },
};