import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import solid from 'eslint-plugin-solid/configs/typescript'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
    eslintConfigPrettier,
    { files: ['**/*.{js,mjs,cjs,ts}'], ...solid },
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
]
