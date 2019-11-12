module.exports = {
  // theme: 'vue',
  base: '/vuepress-blog/',
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-93361335-2' // UA-00000000-0
      }
    ]
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/en/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Max Ma webpage',
      description: 'Max Ma 個人頁面',
    },
    '/': {
      lang: 'zh-TW',
      title: 'Max Ma網站',
      description: 'Max Ma 個人頁面',
    }
  },
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    locales: {
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'Resume', link: '/' },
          { text: 'tech murmur', link: '/blogs/' },
          { text: 'GitHub', link: 'https://github.com/maxma241' },
        ],
        sidebar: [
          {
            title: 'a',
            collapsable: false,
            path: '/',
            children: [ 
              '/'
            ]
          },
          {
            title: 'tech murmur',
            collapsable: false,
            path: '/blogs/',
            children: [
              '/blogs/vue-vs-react-hooks',
              '/blogs/first-jest-toy',
              '/blogs/vue-composition-api-debounce',
            ]
          }
        ],
      },
      '/': {
        selectText: '選擇語言',
        label: '繁體中文',
        editLinkText: '在 GitHub 上編輯此頁',
        serviceWorker: {
          updatePopup: {
            message: "發現新內容！",
            buttonText: "更新"
          }
        },
        algolia: {},
        nav: [
          { text: '履歷', link: '/' },
          { text: '技術文章', link: '/blogs/' },
          { text: 'GitHub', link: 'https://github.com/maxma241' },
        ],
        sidebar: [
          {
            title: '簡介相關',
            collapsable: false,
            children: [ 
              '/'
            ]
          },
          {
            title: '技術文章',
            collapsable: false,
            children: [
              '/blogs/vue-vs-react-hooks',
              '/blogs/first-jest-toy',
              '/blogs/vue-composition-api-debounce',
            ]
          }
        ],
      }
    }
  },
  
}