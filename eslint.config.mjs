import importPlugin from 'eslint-plugin-import';
import { FlatCompat } from "@eslint/eslintrc";
import ts from 'typescript-eslint';
import { fileURLToPath } from 'node:url';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

const eslintConfig = [
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ...ts.configs.recommended,
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
  }),
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'index', 'sibling', 'parent'],
          alphabetize: {
            order: 'asc',
          },
        },
      ],
    },
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  }
];

export default eslintConfig;
