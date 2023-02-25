/// <reference types="vitest" />

import { type AliasOptions, defineConfig } from 'vite'
import { tscPlugin } from 'vite-plugin-tsc-watch'

import path from 'path'

const getAlias = (aliases: string[]): AliasOptions =>
  aliases.map((alias) => ({
    find: alias,
    replacement: path.resolve(__dirname, 'src', alias),
  }))

const alias: AliasOptions = getAlias([
  'api',
  'observers',
  'assets',
  'constants',
  'components',
  'variables',
  'enums',
  'forms',
  'helpers',
  'interfaces',
  'pages',
  'router',
  'types',
  'utils',
  'mocks',
  'langs',
])

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [tscPlugin()],
  resolve: {
    alias,
  },
  appType: 'spa',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, 'src', 'mocks', 'vitest.setup.ts')],
    root: path.resolve(__dirname, 'src'),
    clearMocks: true,
    coverage: {
      enabled: false,
      reporter: ['text', 'html'],
      reportsDirectory: path.resolve(__dirname, 'coverage'),
      branches: 10,
      functions: 10,
      statements: 10,
      lines: 10,
      clean: true,
      all: true,
      include: [
        'src/**/*.ts?(x)',
        '!src/**/*.d.ts',
        '!src/mocks/**/*.ts?(x)',
        '!src/**/__test__/*',
        '!src/**/*.{test,spec}.{ts?(x)}',
        '!**/node_modules/**',
        '!**/dist/**',
      ],
    },
    alias,
    passWithNoTests: true,
  },
})
