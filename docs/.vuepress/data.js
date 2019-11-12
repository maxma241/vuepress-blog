const introduce = {
  cname: '馬楊陞',
  ename: 'Max Ma',
  jobTitle: 'Full-stack Engineer',
  livedIn: '台北市',
  email: 'marfi241@gmail.com',
  github: 'https://github.com/maxma241',
  about:`熱衷程式新事物。喜歡與人討論如何解決問題，具有獨立開發，解決問題及良好的學習能力。平常會關心各種技術及技術社團的文章。`
}

const experiences = [
  {
    workAt: '香港商阿爾伊股份有限公司(RE 紅包)',
    companyUrl: 'https://myre.life/',
    position: 'Front-end Engineer / Full-stack Engineer',
    duration: '2017/04 – 2017/12 / 2018/01 - now',
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
    projects:[
      {
        name: 'RE Boss店家平台',
        description: '從0建置vue Web App(Native App則為hybrid)，先以MVP方式，後續持續的開發新功能及優化後台管理功能...等等',
        tags: ['Vue', 'Vuex', 'Vue-router', 'Sass', 'RWD', 'Webpack', 'Express', 'i18n']
      },
      {
        name: 'RE Admin管理平台',
        description: '從0建置Nuxt App(Full-stack)，包括CRM、CMS、workflow...等等，獨立開發許多功能',
        tags: ['Nuxt', 'TypeScript', 'Sass', 'Element-UI', 'Express', 'GraphQL', 'Apollo GraphQL', 'i18n', 'MySql', 'Sequelize', 'MongoDB', 'Mongoose', 'Redis', 'GCS',]
      },
      {
        name: 'RE官方網站',
        description: '從0建置開發第一版Express網站，一開始主要寫活動頁面，後來脫手後被改為Nuxt',
        tags: ['Nuxt', 'TypeScript', 'Sass', 'Express', 'i18n',]
      },
      {
        name: 'RE API',
        description: '負責各種新功能開發，與同事們協同開發',
        tags: ['Express', 'TypeScript', 'Moleculer', 'i18n', 'MySql', 'Redis', 'MongoDB', 'GCS']
      },
      {
        name: 'RE Micro-services',
        description: '為了國際專案，新需求以micro-service開發，開發過幣別匯率服務、MGM專屬序號、各平台之CMS、電子發票、全家便利商店資訊、會計帳務、RE序號...等等',
        tags: ['TypeScript', 'NATS', 'Moleculer', 'i18n', 'MySql', 'TypeORM', 'Redis']
      },
      {
        name: 'RE Line@ 活動ChatBot',
        description: '因應line@ 2.0，做此bot爾後精準行銷用',
        tags: ['TypeScript', 'Bottender', 'Express', 'Molecular','TypeORM', 'MySql', 'Redis']
      },
    ],
  },
  {
    workAt: '商智資訊',
    companyUrl: 'http://www.bi.com.tw/',
    position: 'Java Engineer',
    duration: '2016/06 – 2017/02',
    description: '商智資訊提供了銀行金融服務解決方案，例如財富管理系統、行動理專APP、資產配置系統。',
    highlights: [
      '負責財富管理系統',
      '幫助公司導入git版控，開了內部教育訓練課程 (<a href="https://www.slideshare.net/maxma98/git-73699918" target="_blank">slideshare</a>)',
      '傳教同事ES6, vue, react等等新奇東西',
      '專案follow git flow 使用jenkins自動包版'
    ],
    projects:[
      {
        name: 'WMS財富管理系統(Wealth Management System)',
        description: '維護及開發新功能',
        tags: ['Java', 'Struts2', 'Spring', 'MSSQL', 'JSP', 'jQuery']
      },
    ]
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
    duration: '2013/08 – 2015/08',
    description: '服務導向暨軟體工程實驗室(SOSELab)',
  },
  {
    educatedAt: '國立台灣海洋大學',
    title: '資工系學士',
    duration: '2009/09 – 2013/06',
    description: '主要走Web領域'
  }
]
// Ud4b544877ee32adeb15a4bd735209962
const projects = [
  {
    title: '個人網站',
    meta: ['vuepress', 'markdown'],
    description: '把履歷跟技術文章整合在這',
    url:'',
    repository: 'https://github.com/maxma241/vuepress-blog'
  },
  {
    title: '技術文章',
    meta: ['github', 'issue', 'markdown'],
    description: '不定期會開issue寫技術文章',
    url:'',
    repository: 'https://github.com/maxma241/tech-murmur/issues'
  },
  {
    title: '個人簡歷',
    meta: ['vue', 'vue-cli 2.x', 'vue-material', 'ES6', 'scss'],
    description: '用了vue寫了個簡歷頁面，使用vue material',
    url:'https://maxma241.github.io/',
    repository: 'https://github.com/maxma241/maxma241.github.io'
  },
  {
    title: '為了下指令打卡',
    meta: ['node', 'selenium-webdriver', 'babel', 'ES6'],
    description: '為了省時間打卡就做了這個',
    url:'',
    repository: 'https://github.com/maxma241/work_punch'
  },
  {
    title: '初學React',
    meta: ['react'],
    description: '將以前用jQuery寫的專案，改為React (兩個youtube channel皆已消失)',
    url:'http://maxma241.github.io/tvprogram/TVRE.html',
    repository: 'https://github.com/maxma241/tvprogram'
  },
]

const skills = [
  { name: 'JavaScript', value:90 },
  { name: 'HTML/CSS', value:70 },
  { name: 'ES6', value:87 },
  { name: 'Vue.js', value:70 },
  { name: 'React.js', value: 60 },
  { name: 'Node.js', value: 50},
  { name: 'Webpack', value: 80},
  { name: 'Git', value:90 },
  { name: 'Git/Github flow', value:87 },
  { name: 'Gulp', value:60 }
]

export default {
  introduce,
  experiences,
  educations,
  projects,
  skills
}
