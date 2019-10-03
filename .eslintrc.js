module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jest/recommended'],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'new-cap': ['error', { capIsNewExceptions: ['ObjectId', 'Fastify'] }],
    'max-len': [
      'error',
      {
        code: 80,
        comments: 999,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
      },
    ],
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: [2, 'always'],
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'no-console': 'warn',
    'valid-jsdoc': 'off',
    'require-jsdoc': 'off',
  },
};
