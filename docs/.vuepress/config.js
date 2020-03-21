module.exports = {
    title: 'wang-ui', // 设置网站标题
    description: 'wang-ui 一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库', //描述
    dest: './build', // 设置输出目录
    port: 1234, //端口
    head: [
        ['link', { rel: 'icon', type: "image/x-icon", href: '/favicon.ico' }]
    ],
    themeConfig: { //主题配置
        nav: [{
                text: '主页',
                link: '/'
            }, // 导航条
            {
                text: 'Github',
                link: 'https://github.com/wjq1994/wang-vue-ui'
            }, // 导航条
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/components/': [{
                collapsable: false,
                title: "开发指南",
                children: [
                    'guide'
                ]
            }, {
                collapsable: false,
                title: "组件",
                children: [
                    'button',
                    'icon',
                    'testVue'
                ]
            }]
        }
    }
}