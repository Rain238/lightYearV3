import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 设置反向代理，跨域
  // server: {
  //   // host: '0.0.0.0',//设置地址：http://localhost
  //   port: 4500, // 设置服务启动端口号
  //   // open: true, // 设置服务启动时是否自动打开浏览器
  //   cors: true, // 允许跨域
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5170/',//代理的地址
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')//这里的/需要转义
  //     }
  //   }
  // },
  //解决打包Js大小限制
  build: {
    chunkSizeWarningLimit: 3000, // 加大限制的大小将500kb改成1500kb或者更大
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 分解块，将大块分解成更小的块,在vite.config.js当中的build下面进行配置
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
            // 但是生成的文件都在dist下面的assets文件下，里面既有js、css等等。
          }
        },
        // 可以将不同的文件放在不同的文件下
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
          const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
          return `js/${fileName}/[name].[hash].js`;
        }
      }
    },
  },
})

