import prettier from 'eslint-plugin-prettier'
import jsxA11Y from 'eslint-plugin-jsx-a11y'
import globals from 'globals'
import babelParser from '@babel/eslint-parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ),
  {
    plugins: {
      prettier,
      'jsx-a11y': jsxA11Y,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: babelParser,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      strict: 0,
      'no-console': 'warn',
      quotes: ['warn', 'single'],
      'click-events-have-key-events': 0,
      'prettier/prettier': 'error',
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/no-noninteractive-element-interactions': 0,

      'react/display-name': [
        0,
        {
          ignoreTranspilerName: 0,
        },
      ],
    },
  },
]
