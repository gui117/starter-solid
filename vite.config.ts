import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import Unocss from 'unocss/vite'
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    Unocss(),
    /*
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
  ],
  resolve: {
    alias: [{ find: '~/', replacement: `${resolve(__dirname, 'src')}/` }],
  },
  base: './',
})
