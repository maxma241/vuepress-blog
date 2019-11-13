const introduce = {
    cname: '馬楊陞',
    ename: 'Max Ma',
    jobTitle: 'Full-stack Developer',
    livedIn: 'Taipei, Taiwan',
    email: 'marfi241@gmail.com',
    github: 'https://github.com/maxma241',
    about: `Enthusiastic about new techs, currently rolling in the JS ecosystem. I like to discuss how to solve problems with people, with independent development, problem solving and good learning ability. I usually care about articles from various technical and technical communities.`
}

const experiences = [
    {
        workAt: '香港商阿爾伊股份有限公司(RE, Red Envelop)',
        companyUrl: 'https://myre.life/',
        position: 'Front-end Developer, Full-stack Developer',
        duration: '2017/04 – 2017/12, 2018/01 - now',
        description: 'By entering the payment amount, up to 4% cash rebate for you, no matter how you pay',
        highlights: [
            'Having projects experience from 0 to 1, like RE-Boss, Official Web Site, RE Admin(CRM, CMS)...etc',
            'Participate in product feature development and planning, and co-work with other front-end and back-end colleagues, like UI/UX, Database design, micro services...etc',
            'Resolve browsers, iOS/Android webview compatibility problems',
            'Opened git/git-flow/gitlab-flow, github/gitlab sharing session',
            'Opened the GraphQL Sharing Session',
            'Developed micro service by TDD(jest)',
            'Participated in the construction of CI/CD(jenkins, gitlab-ci, ELK), now using jenkins',
        ],
        projects: [
            {
                name: 'RE Boss',
                description: 'Created vue Web App(hybrid on Native App) from zero, MVP first, then, keep developing and optimizing features',
                tags: ['Vue', 'Vuex', 'Vue-router', 'Sass', 'RWD', 'Webpack', 'Express', 'i18n']
            },
            {
                name: 'RE Admin',
                description: 'Created Nuxt App(Full-stack) from zero, including CRM, CMS, WorkFlow...etc. Develop many features independently',
                tags: ['Nuxt', 'TypeScript', 'Sass', 'Element-UI', 'Express', 'GraphQL', 'Apollo GraphQL', 'i18n', 'MySql', 'Sequelize', 'MongoDB', 'Mongoose', 'Redis', 'GCS',]
            },
            {
                name: 'RE Official Web site',
                description: 'Created express.js web first. mainly develop the activity page at the beginning. Later, it was changed to Nuxt web.',
                tags: ['Nuxt', 'TypeScript', 'Sass', 'Express', 'i18n',]
            },
            {
                name: 'RE API',
                description: 'Responsible for new feature development, collaborative development with colleagues',
                tags: ['Express', 'TypeScript', 'Molecular', 'i18n', 'MySql', 'Redis', 'MongoDB', 'GCS']
            },
            {
                name: 'RE Micro-services',
                description: 'For international projects, new requirements are developed by microservices. developed many services, like currency exchange rate service, MGM serial number, CMS for each platform, electronic invoice, family convenience store information, accounting, RE serial number...etc.',
                tags: ['TypeScript', 'NATS', 'Molecular', 'i18n', 'MySql', 'TypeORM', 'Redis']
            },
            {
                name: 'RE Line@ ChatBot',
                description: 'A simple and extensible KYC Q&A structure. Member will get RE coin reward after the Q&A.',
                tags: ['TypeScript', 'Bottender', 'Express', 'Molecular', 'TypeORM', 'MySql', 'Redis']
            },
        ],
    },
    {
        workAt: '商智資訊(BI)',
        companyUrl: 'http://www.bi.com.tw/',
        position: 'Java Engineer',
        duration: '2016/06 – 2017/02',
        description: 'BI provides banking financial services solutions such as wealth management systems, mobile technology apps, and asset allocation systems.',
        highlights: [
            'Responsible for wealth management system (WMS), using Java Struts2, Spring',
            'Help companies import git version control and opened internal education training courses (<a href="https://www.slideshare.net/maxma98/git-73699918" target="_blank">slideshare</a>)',
            'Sharing New thins with colleague, like ES6, react, vue, with colleague',
            'Using Jenkins, and git flow'
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
        educatedAt: 'National Taiwan Ocean University',
        title: 'Computer Science master\'s degree',
        duration: '2013/08 – 2015/08',
        description: 'Service-Oriented and Soft Engineer Lab(SOSELab)',
    },
    {
        educatedAt: 'National Taiwan Ocean University',
        title: 'Computer Science bachelor degree',
        duration: '2009/09 – 2013/06',
        description: 'major Web knowledge'
    }
]
// Ud4b544877ee32adeb15a4bd735209962
const projects = [
    {
        title: 'Personal Web site',
        meta: ['vuepress', 'markdown'],
        description: 'Write some tech articles, and resume',
        url: 'https://maxma241.github.io/vuepress-blog/',
        repository: 'https://github.com/maxma241/vuepress-blog'
    },
    {
        title: 'Tech murmur',
        meta: ['github', 'issue', 'markdown'],
        description: 'Irregularly write tech articles in issues',
        url: '',
        repository: 'https://github.com/maxma241/tech-murmur/issues'
    },
    {
        title: 'Old resume',
        meta: ['vue', 'vue-cli', 'vue-material', 'ES6', 'scss'],
        description: 'Create resume by vue and vue-material',
        url: 'https://maxma241.github.io/',
        repository: 'https://github.com/maxma241/maxma241.github.io'
    },
    {
        title: 'for auto punch',
        meta: ['node', 'selenium-webdriver', 'babel', 'ES6'],
        description: 'I did this to punch in order to save time.',
        url: '',
        repository: 'https://github.com/maxma241/work_punch'
    },
    {
        title: 'React Beginner',
        meta: ['react'],
        description: 'Refactor old jQuery project to React.(the two YouTube channels are disabled)',
        url: 'http://maxma241.github.io/tvprogram/TVRE.html',
        repository: 'https://github.com/maxma241/tvprogram'
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
    { name: 'Gulp', value: 60 }
]

export default {
    introduce,
    experiences,
    educations,
    projects,
    skills
}
