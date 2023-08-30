import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'
import vue from '@vitejs/plugin-vue'
import Jsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import UnpluginSvgComponent from 'unplugin-svg-component/vite'
import {
  HeadlessUiResolver,
  VueUseComponentsResolver,
  VueUseDirectiveResolver,
} from 'unplugin-vue-components/resolvers';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue({
      script: {
        propsDestructure: true,
        defineModel: true,
      }
    }),
    Jsx(),
    viteCommonjs(),
    Components({
      dirs: ['src/components'],
      resolvers: [
        HeadlessUiResolver(),
        VueUseComponentsResolver(),
        VueUseDirectiveResolver(),
      ],
    }),
    AutoImport({
      imports: ['vue', '@vueuse/core', 'pinia'],
    }),
    UnpluginSvgComponent({
      iconDir: resolve(__dirname, 'src/assets/svg/icon'),
      // 预设颜色的icon
      preserveColor: resolve(__dirname, 'src/assets/svg/common'),
      dts: true,
      dtsDir: resolve(__dirname, './'),
      scanGlob: [resolve(__dirname, 'src/assets/svg')],
      symbolIdFormatter: (svgName: string, prefix: string): string => {
        const nameArr = svgName.split('/')
        if (prefix) nameArr.unshift(prefix)
        return nameArr.join('-').replace(/\.svg$/, '')
      },
      optimizeOptions: undefined,
      vueVersion: 3,
      scanStrategy: 'component',
      treeShaking: true,
    }),
    electron([
      {
        // Main-Process entry file of the Electron App.
        entry: 'electron/main.ts',
      },
      {
        entry: 'electron/preload.ts',
        onstart(options) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
          // instead of restarting the entire Electron App.
          options.reload()
        },
      },
    ]),
    renderer(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
