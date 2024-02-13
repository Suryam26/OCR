module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'prettier',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
    rules: {
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        semi: ['error', 'always'],
        'keyword-spacing': ['error', { before: true, after: true }],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        quotes: ['error', 'single'],
        'no-var': 'error',
        'no-undef': 'error',
        'no-cond-assign': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        complexity: ['warn', 5],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
    },
};
