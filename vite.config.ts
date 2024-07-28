import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path, { resolve } from "path";
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // 开发阶段启用源码映射：https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#需主动开启-sourcemap
    sourcemap: process.env.NODE_ENV === 'development',
  },
  plugins: [
    uni(),
    
    // 自定义插件
    githubPlugin()
  ],
})

/**
 * 部署到 github 时，覆盖 .gitignore，删除掉里面的 dist 目录。
 * 因为 dist 目录要提交到 gh-pages 分支，以便部署到 Github Pages
 */
function githubPlugin() {
  const gitignore = '# Logs\nlogs\n*.log\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\npnpm-debug.log*\nlerna-debug.log*\n\nnode_modules\n.DS_Store\n*.local'

  return {
    name: 'github-plugin',
    writeBundle() {
      if (process.argv.includes('--deploy')) {
        const file = path.resolve(__dirname, '.gitignore');
        fs.writeFileSync(file, gitignore, 'utf8');
      }
    }
  }
}
