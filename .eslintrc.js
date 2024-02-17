module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      //files: ['.eslintrc.{js,cjs}'],
      files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-indent': [2, 4],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx', '.ts'] },
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    //сдедит за правильностью написания хуков и их зависимостей
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error', //checks effect dependencies
  },
  globals: {
    __IS_DEV__: true,
  },
};
