const introduce = {
  cname: '馬楊陞',
  ename: 'Max Ma',
  jobTitle: 'Full-stack Engineer',
  livedIn: '台北市',
  email: 'marfi241@gmail.com',
  github: 'https://github.com/maxma241',
  about: `熱衷程式新事物。喜歡與人討論如何解決問題，具有獨立開發，解決問題及良好的學習能力。平常會關心各種技術及技術社團的文章。`,
}

const experiences = [
  {
    workAt: '電獺股份有限公司',
    companyUrl: 'https://aotter.net/',
    position: 'Front-end Engineer, Senior Software Engineer',
    duration: '2020/06/15 - 2021/05/31, 2021/06/01 - now',
    description: 'Ahead of Time，縮短「價值創造（Time to value）」的時間',
    highlights: [
      '負責公司自有產品，包含 CI/CD',
      '2021 走鐘獎網站',
      '解決各種四面八方來的 web 技術問題( pm2, npm, CI/CD with node.js, Vue, Typescript, JavaScript ...etc )',
      '分享過 Vue 2 to Vue 3, Typegoose, Vanilla to Vue, Git',
      'Linode / Rancher / Azure pipeline / GitHub',
      'Asana / Slack / Google Meet'
    ],
    projects: [
      {
        name: '2021 走鐘獎官方網站',
        description: '主要開發 API - 獎項提名, 會員票選, 會員搶票',
        tags: [
          'Nuxt',
          'composition-api',
          'TypeScript',
          'ChakraUI',
          'Express',
          'MongoDB',
          'Typegoose',
          'Rancher',
          'K8S',
          'Azure Pipeline',
        ],
      },
      {
        name: 'Supr.Link - 短網址服務',
        description:
          '維護 / 新增功能，修正訂閱金流問題。為了解決技術債，大重構 API',
        tags: [
          'TypeScript',
          'Buefy',
          'Nuxt',
          'Express',
          'MongoDB',
          'Typegoose',
          'vue-class-component',
          'jest',
          'Rancher',
          'K8S',
          'Azure Pipeline',
        ],
      },
      {
        name: 'Supr.One - 創作者平台',
        description: '維護為主，建立 Native App JavaScript bridge layer',
        tags: ['Vuetify v1.x', 'Nuxt', 'Plyr', 'vue-class-component'],
      },
      {
        name: '電獺少女官方網站',
        description: '新增 Apple Event 直播頁面，RSS feeds API。開發 / 維護 Trek 廣告置入。',
        tags: ['Nuxt', 'TailwindCSS', 'Plyr', 'vue-class-component'],
      },
      {
        name: 'Aotter Account - SSO service',
        description:
          '主要負責前端，實作 sign in with apple, email verification flow',
        tags: ['Nuxt', 'vue-class-component'],
      },
      {
        name: 'CatRun / CatWalk',
        description: '廣告呈現平台, 呈現多種類型廣告，像是圖片 / 影音 / 互動式廣告。實作新類型的廣告',
        tags: ['Nuxt', 'Vanilla.js', 'Express', 'Ads', 'MongoDB', 'Google IMA'],
      },
      {
        name: 'Trek Web SDK',
        description: '提供 JS API ( Ads 生命週期及設定檔 )。從 Trek API 取得廣告 Payload',
        tags: ['Nuxt', 'Vanilla.js', 'Ads', 'MongoDB'],
      },
      {
        name: '鄉民晚報爬蟲',
        description: '新建立的repository。定期爬 feedly / twitter API',
        tags: ['node.js', 'TypeScript', 'Crawler', 'MongoDB'],
      },
    ],
  },
  {
    workAt: '趨勢科技 TrendMicro',
    companyUrl: 'https://www.trendmicro.com/',
    position: 'Software Engineer',
    duration: '2020/02/24 - 2020/06/10',
    description: '',
    highlights: [
      '負責公司內部service',
      '需要找stakeholder談需求',
      '目前負責PLVRS (Project Legal Vulnerabilities Review System)',
      '學習AWS',
      'DevOps with Jenkins',
      'Scrum, weekly meeting',
      '使用Jira',
    ],
    projects: [
      {
        name: 'PLVRS (Project Legal Vulnerabilities Review System)',
        description:
          'migrate 15 年老 web app 成 react SPA, pending 兩年的 React SPA, 整個專案大重構',
        tags: [
          'GO',
          'React',
          'React Redux',
          'React Router',
          'Styled Component',
          'React-use',
          'TypeScript',
          'TrendMicro Frontend',
          'Jenkins',
        ],
      },
    ],
  },
  {
    workAt: '香港商阿爾伊股份有限公司(RE 紅包)',
    companyUrl: 'https://myre.life/',
    position: 'Front-end Developer, Full-stack Developer',
    duration: '2017/04 - 2017/12, 2018/01 - 2020/02',
    description: '只要登錄消費金額，管你怎麼Pay，皆享最高4%現金回饋',
    highlights: [
      '在這具有從0到有的經驗，建立店家平台、官網、內部管理平台...等等',
      '參與產品的功能發想與規劃，與其他前端及後端討論UI/UX和micro service之間的溝通',
      '解browsers/iOS/Android webview問題',
      '開過git/git flow/gitlab flow, github/gitlab的分享會',
      '開過GraphQL分享會',
      '以TDD(jest)建置micro service(RE序號)',
      '參與過CI/CD的建置(jenkins, gitlab ci, ELK......)，目前使用jenkins',
    ],
    projects: [
      {
        name: 'RE Boss店家平台',
        description:
          '從0建置vue Web App(Native App則為hybrid)，先以MVP方式，後續持續的開發新功能及優化後台管理功能...等等',
        tags: [
          'Vue',
          'Vuex',
          'Vue-router',
          'Sass',
          'RWD',
          'Webpack',
          'Express',
          'i18n',
        ],
      },
      {
        name: 'RE Admin管理平台',
        description:
          '從0建置Nuxt App(Full-stack)，包括CRM、CMS、workflow...等等，獨立開發許多功能',
        tags: [
          'Nuxt',
          'TypeScript',
          'Sass',
          'Element-UI',
          'Express',
          'GraphQL',
          'Apollo GraphQL',
          'i18n',
          'MySql',
          'Sequelize',
          'MongoDB',
          'Mongoose',
          'Redis',
          'GCS',
        ],
      },
      {
        name: 'RE官方網站',
        description:
          '從0建置開發第一版Express網站，一開始主要寫活動頁面，後來脫手後被改為Nuxt',
        tags: ['Nuxt', 'TypeScript', 'Sass', 'Express', 'i18n'],
      },
      {
        name: 'RE API',
        description: '負責各種新功能開發，與同事們協同開發',
        tags: [
          'Express',
          'TypeScript',
          'Moleculer',
          'i18n',
          'MySql',
          'Redis',
          'MongoDB',
          'GCS',
        ],
      },
      {
        name: 'RE Micro-services',
        description:
          '為了國際專案，新需求以micro-service開發，開發過幣別匯率服務、MGM專屬序號、各平台之CMS、電子發票、全家便利商店資訊、會計帳務、RE序號...等等',
        tags: [
          'TypeScript',
          'NATS',
          'Moleculer',
          'i18n',
          'MySql',
          'TypeORM',
          'Redis',
        ],
      },
      {
        name: 'RE Line@ 活動ChatBot',
        description:
          '一個簡單可擴充的KYC問答架構，會員完成活動後能獲得紅包現金',
        tags: [
          'TypeScript',
          'Bottender',
          'Express',
          'Molecular',
          'TypeORM',
          'MySql',
          'Redis',
        ],
      },
    ],
  },
  {
    workAt: '商智資訊',
    companyUrl: 'http://www.bi.com.tw/',
    position: 'Java Engineer',
    duration: '2016/06 - 2017/02',
    description:
      '商智資訊提供了銀行金融服務解決方案，例如財富管理系統、行動理專APP、資產配置系統。',
    highlights: [
      '負責財富管理系統',
      '幫助公司導入git版控，開了內部教育訓練課程 (<a href="https://www.slideshare.net/maxma98/git-73699918" target="_blank">slideshare</a>)',
      '傳教同事ES6, vue, react等等新奇東西',
      '專案follow git flow 使用jenkins自動包版',
    ],
    projects: [
      {
        name: 'WMS財富管理系統(Wealth Management System)',
        description: '維護及開發新功能',
        tags: ['Java', 'Struts2', 'Spring', 'MSSQL', 'JSP', 'jQuery'],
      },
    ],
  },
  // {
  //   workAt: '基隆某家高中補習班',
  //   companyUrl: '',
  //   position: '數理輔導老師',
  //   duration: '2009/09 – 2011/01',
  //   description: '高中數理還不錯，因緣際會的在這邊打工',
  //   highlights: [
  //     '教數學、物理、化學'
  //   ]
  // }
]

const educations = [
  {
    educatedAt: '國立台灣海洋大學',
    title: '資工所碩士',
    duration: '2013/08 - 2015/08',
    description: '服務導向暨軟體工程實驗室(SOSELab)',
  },
  {
    educatedAt: '國立台灣海洋大學',
    title: '資工系學士',
    duration: '2009/09 - 2013/06',
    description: '主要走Web領域',
  },
]
// Ud4b544877ee32adeb15a4bd735209962
const projects = [
  {
    title: '個人網站',
    meta: ['vuepress', 'markdown'],
    description: '把履歷跟技術文章整合在這',
    url: '',
    repository: 'https://github.com/maxma241/vuepress-blog',
  },
  {
    title: '技術文章',
    meta: ['github', 'issue', 'markdown'],
    description: '不定期會開issue寫技術文章',
    url: '',
    repository: 'https://github.com/maxma241/tech-murmur/issues',
  },
  {
    title: '個人簡歷',
    meta: ['vue', 'vue-cli 2.x', 'vue-material', 'ES6', 'scss'],
    description: '用了vue寫了個簡歷頁面，使用vue material',
    url: 'https://maxma241.github.io/',
    repository: 'https://github.com/maxma241/maxma241.github.io',
  },
  {
    title: '為了下指令打卡',
    meta: ['node', 'selenium-webdriver', 'babel', 'ES6'],
    description: '為了省時間打卡就做了這個',
    url: '',
    repository: 'https://github.com/maxma241/work_punch',
  },
  {
    title: '初學React',
    meta: ['react'],
    description:
      '將以前用jQuery寫的專案，改為React (兩個youtube channel皆已消失)',
    url: 'http://maxma241.github.io/tvprogram/TVRE.html',
    repository: 'https://github.com/maxma241/tvprogram',
  },
]

const skills = [
  { name: 'JavaScript', value: 90 },
  { name: 'HTML/CSS', value: 70 },
  { name: 'ES6', value: 87 },
  { name: 'Vue.js', value: 70 },
  { name: 'React.js', value: 60 },
  { name: 'Node.js', value: 50 },
  { name: 'Webpack', value: 80 },
  { name: 'Git', value: 90 },
  { name: 'Git/Github flow', value: 87 },
  { name: 'Gulp', value: 60 },
]

export default {
  introduce,
  experiences,
  educations,
  projects,
  skills,
}
