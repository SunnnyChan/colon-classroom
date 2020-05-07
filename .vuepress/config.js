// .vuepress/config.js
module.exports = {
  title: '冒号课堂',  // 设置网站标题
  description : "",
  base : '/colon-classroom/',
  themeConfig: {
    nav : [
        { text: 'Github', link: 'http://www.github.com/sunnnychan' }
    ],
    sidebar: [
      {
        title: '章节',   // 必要的
        path: '/chapter/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: '参考',   // 必要的
        path: '/notes/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      }
    ]
  }
}
