module.exports = {
  title: 'Max Ma Personal page',
  description: 'Max Ma 個人頁面',
  // theme: 'vue',
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'tech murmur', link: '/blogs/' },
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
        title: 'tech murmur',
        collapsable: false,
        children: [
          '/blogs/vue-vs-react-hooks',
          '/blogs/first-jest-toy',
          '/blogs/vue-composition-api-debounce',
        ]
      }
    ]
  },
  
}