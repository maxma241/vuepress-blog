import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  lang: 'zh-TW',
  title: 'Max Ma Resume',
  description: 'Max Ma 個人頁面',
  base: '/vuepress-blog/',
  vite: {
    plugins: [UnoCSS()],
  },
  themeConfig: {
    nav: [
      { text: 'Resume', link: '/' },
      { text: 'Tech Blog', link: '/blogs/' },
      { text: 'GitHub', link: 'https://github.com/maxma241' },
    ],
    sidebar: {
      '/blogs/': [
        { text: '文章列表', items: [
          { text: 'Vue vs React hooks', link: '/blogs/vue-vs-react-hooks' },
          { text: 'First jest toy', link: '/blogs/first-jest-toy' },
          { text: 'Vue composition api debounce', link: '/blogs/vue-composition-api-debounce' },
          { text: 'Use apollo', link: '/blogs/use-apollo' },
        ]}
      ]
    }
  }
})
