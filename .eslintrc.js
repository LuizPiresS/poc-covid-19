module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'standard',
    'plugin:boundaries/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: ['eslint-plugin-import-helpers', 'boundaries'],
  settings: {
    'boundaries/types': ['entities', 'usecases', 'adapters', 'adapters', 'shared'],
    'boundaries/ignore': ['src/**/*.test.js', 'src/**/*.integration.js'],
    'boundaries/alias': {
      entities: 'src/entities',
      usecases: 'src/usecases',
      adapters: 'src/adapters',
      main: 'src/main',
      shared: 'src/shared'
    }
  },
  rules: {
    'boundaries/entry-point': 'off',
    'boundaries/allowed-types': [2, {
      allow: {
        entities: ['entities'],
        usecases: ['entities', 'usecases'],
        adapters: ['entities', 'usecases', 'adapters'],
        main: ['entities', 'usecases', 'adapters', 'main'],
        shared: ['shared']
      }
    }],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^@shared/',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  }
}
