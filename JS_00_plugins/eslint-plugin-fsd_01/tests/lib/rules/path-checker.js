"use strict";

const rule = require("../../../lib/rules/path-checker"),
  RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
});
ruleTester.run("path-checker", rule, {
  valid: [{
    filename: "\\home\\blog_app\\src\\entities\\Article",
    code: "import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';",
    errors: [],
    options: [{
      alias: ''
    }]
  }, ],

  invalid: [{
      filename: "\\home\\blog_app\\src\\entities\\Article",
      code: "import { addCommentFormActions, addCommentFormReducer } from '@/entities/Article/model/slices/addCommentFormSlice';",
      errors: [{
        message: "Within one slide, imports must be relative"
      }],
      options: [{
        alias: '@'
      }]
    },
    {
      filename: "\\home\\blog_app\\src\\entities\\Article",
      code: "import { addCommentFormActions, addCommentFormReducer } from 'entities/Article/model/slices/addCommentFormSlice';",
      errors: [{
        message: "Within one slide, imports must be relative"
      }],
      options: [{
        alias: ''
      }]
    },
  ],
});