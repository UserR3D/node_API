import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['./src/**.ts'],
    ignores: ['**.json', 'node_modules/*', './dist'],
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      semi: ['warn', 'always'],
      'no-unused-expressions': 'error',
    },
  },
];
