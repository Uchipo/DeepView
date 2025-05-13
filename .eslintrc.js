module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parserOptions: {
        project: [
      './packages/server/tsconfig.json',
      './packages/client/tsconfig.json'
    ]
  },
  rules: {}
};