"use strict";
const rule = require("../../../lib/rules/public-api-imports"),
  RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
});
ruleTester.run("public-api-imports", rule, {
  valid: [{
    code: "import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';",
    errors: [],
    options: [{
      alias: ''
    }]
  },{
    code: "import { addCommentFormActions, addCommentFormReducer } from '@/entities/Article';",
    errors: [],
    options: [{
      alias: '@'
    }]
  }],

  invalid: [{
      filename: "\\home\\blog_app\\src\\entities\\Article",
      code: "import { addCommentFormActions, addCommentFormReducer } from '@/entities/Article/model/slices/addCommentFormSlice';",
      errors: [{
        message: "Absolute imports are only allowed from Public API (index.ts)"
      }],
      options: [{
        alias: '@'
      }]
    },
  ],
});