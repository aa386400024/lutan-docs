import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",
  theme: defaultTheme({
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: "前端面试",
        children: [
          {
            text: "技术面",
            children: [
              {
                text: "js",
                link: "/",
              },
              {
                text: "vue",
                link: "/interview-category/skill/vue/component-communication.md",
              },
              {
                text: "react",
                link: "/",
              },
              {
                text: "移动端",
                link: "/",
              },
            ],
          },
        ],
      },
      // 控制元素何时被激活
      {
        text: "关于",
        children: [
          {
            text: "Always active",
            link: "/",
            // 该元素将一直处于激活状态
            activeMatch: "/",
          },
          {
            text: "Active on /foo/",
            link: "/not-foo/",
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: "^/foo/",
          },
        ],
      },
    ],
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      "/interview-category/": [
        {
          text: "技术面",
          children: [
            {
              text: "VUE",
              collapsible: true,
              children: [
                {
                  text: "组件通信有哪些方式",
                  link: "/interview-category/skill/vue/component-communication.md",
                },
                {
                  text: "生命周期钩子函数",
                  link: "/interview-category/skill/vue/life-cycle.md",
                },
                {
                  text: "双向数据绑定是如何实现的",
                  link: "/interview-category/skill/vue/two-way-data-binding.md",
                },
                {
                  text: "常见的 Vue.js 指令及作用",
                  link: "/interview-category/skill/vue/instruct.md",
                },
                {
                  text: "nextTick函数",
                  link: "/interview-category/skill/vue/nextTick.md",
                },
                {
                  text: "computed和watcher的区别",
                  link: "/interview-category/skill/vue/computed-wather.md",
                },
                {
                  text: "Router 的理解和工作原理",
                  link: "/interview-category/skill/vue/router.md",
                },
              ],
            },
          ],
        },
      ],
      "/reference/": [
        {
          text: "Reference",
          children: ["/reference/cli.md", "/reference/config.md"],
        },
      ],
    },
  }),
});
