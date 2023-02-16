module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'standard-with-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-absolute-path': 'off',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        types: 'prefer-import',
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: null,
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'enum',
        format: ['UPPER_CASE'],
      },
    ],
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-useless-empty-export': 'warn',
    '@typescript-eslint/prefer-enum-initializers': 'warn',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/unified-signatures': 'warn',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'error',
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'off',
      {
        ignoreArrayIndexes: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreTypeIndexes: true,
      },
    ],
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-template-curly-in-string': 'error',
    'no-self-compare': 'error',
    'prefer-destructuring': 'off',
    'import/no-duplicates': 'error',
    complexity: [
      'warn',
      {
        max: 12,
      },
    ],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    eqeqeq: ['error', 'smart'],
    'default-case-last': 'error',
    curly: ['error', 'multi-line'],
    'max-lines': ['warn', 300],
    'id-match': 'error',
    'no-else-return': 'error',
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'dir',
          'time',
          'timeEnd',
          'timeLog',
          'trace',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupEnd',
          'table',
          'debug',
          'info',
          'dirxml',
          'error',
          'groupCollapsed',
          'Console',
          'profile',
          'profileEnd',
          'timeStamp',
          'context',
        ],
      },
    ],
    'no-caller': 'error',
    'no-bitwise': 'error',
    'no-floating-decimal': 'error',
    'no-extra-bind': 'error',
    'no-eval': 'error',
    'no-new-wrappers': 'error',
    'no-new-func': 'error',
    'no-nested-ternary': 'warn',
    'no-multi-assign': 'warn',
    'no-lonely-if': 'error',
    'no-sequences': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'quote-props': ['error', 'as-needed'],
    'prefer-template': 'error',
    'object-shorthand': 'error',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-param-reassign': 'off',
    'no-undef-init': 'error',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: ['external', ['builtin', 'internal', 'unknown', 'parent', 'sibling', 'index', 'object', 'type']],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        alphabetize: { order: 'asc' },
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/no-deprecated': 'warn',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: false, optionalDependencies: false, peerDependencies: false },
    ],
    'import/namespace': ['warn', { allowComputed: true }],
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        jsxSingleQuote: false,
        trailingComma: 'all',
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: 'always',
        endOfLine: 'lf',
        singleAttributePerLine: true,
      },
      {
        usePrettierrc: true,
      },
    ],
  },
}
