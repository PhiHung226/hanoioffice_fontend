module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'react-app',
  ],
  'parser': 'babel-eslint',
  'settings': {
    'react': {
      'version': 'detect'
    },
    'import/resolver': {
      'node': {
        'paths': [ 'src' ]
      }
    }
  },
  'env': {
    'browser': true,
    'es6': true
  },
  'plugins': [ 'react' ],
  'parserOptions': {
    'sourceType': 'module',
    'allowImportExportEverywhere': false,
    'ecmaFeatures': {
      'globalReturn': false,
      'jsx': true
    },
    'babelOptions': {
      'configFile': 'path/to/config.js'
    }
  },
  'ignorePatterns': [
    '/node_modules/**',
    '/build/**',
    '/src/App.test.js',
    '/src/reportWebVitals.js',
    '/src/setupTests.js',
    '/src/initFacebookSdk.js'
  ],
  'rules': {
    'no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'after-used',
        'ignoreRestSiblings': false
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': [
      2,
      { 'ignore': [ 'children' ] }
    ],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 'error',
    'react/jsx-curly-spacing': [
      2,
      {
        'when': 'always',
        'allowMultiline': false
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'quotes': [
      2,
      'single'
    ],
    'indent': [
      2,
      2,
      { 'SwitchCase': 1 }
    ],
    'semi': [
      2,
      'always'
    ],
    'curly': [
      2,
      'all'
    ],
    'camelcase': [
      0,
      { 'properties': 'always' }
    ],
    'eqeqeq': [
      2,
      'smart'
    ],
    'one-var-declaration-per-line': [
      2,
      'always'
    ],
    'new-cap': 2,
    'no-case-declarations': 0,
    'react/function-component-definition': [
      2,
      { 'namedComponents': 'arrow-function' }
    ],
    'space-before-function-paren': 'error',
    'react/display-name': [ 0 ],
    'linebreak-style': [ 0, 'windows' ],
    'react-hooks/exhaustive-deps': 'off',
    'import/order': [
      'error',
      {
        'groups': [ 'builtin', 'external', 'internal' ],
        'pathGroups': [
          {
            'pattern': 'react',
            'group': 'external',
            'position': 'before'
          }
        ],
        'pathGroupsExcludedImportTypes': [ 'react' ],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        }
      }
    ],
    'import/no-anonymous-default-export': [ 0, { 'allowCallExpression': true } ]
  }
};
