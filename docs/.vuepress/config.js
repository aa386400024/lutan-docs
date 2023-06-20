/*
 * @Author: zcl 41391477@qq.com
 * @Date: 2023-05-31 09:28:39
 * @LastEditors: zcl 41391477@qq.com
 * @LastEditTime: 2023-06-01 13:13:22
 * @FilePath: \docs-web\docs\.vuepress\config.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import getVueSidebar from "./sidebar/vue.js";
import getJsSidebar from "./sidebar/javascript.js";
import getCoreIdeaSidebar from "./sidebar/core-idea.js";
import getReactSidebar from "./sidebar/react.js";
import getMobileSidebar from "./sidebar/mobile.js";
import getHtmlSidebar from "./sidebar/html.js";
import getCssSidebar from "./sidebar/css.js";

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
                    text: "核心概念",
                    link: "/interview-category/skill/core-idea/closure.md",
                },
                {
                    text: "html",
                    link: "/interview-category/skill/html/what-html5.md",
                },
                {
                    text: "css",
                    link: "/",
                },
                {
                    text: "js",
                    link: "/interview-category/skill/js/execution-context.md",
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
                    text: "mobile",
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
                    text: "核心概念",
                    collapsible: true,
                    children: getCoreIdeaSidebar()
                },
                {
                    text: "html",
                    collapsible: true,
                    children: getHtmlSidebar()
                },
                {
                    text: "css",
                    collapsible: true,
                    children: getCssSidebar()
                },
                {
                    text: "js",
                    collapsible: true,
                    children: getJsSidebar()
                },
                {
                    text: "vue",
                    collapsible: true,
                    children: getVueSidebar()
                },
                {
                    text: "react",
                    collapsible: true,
                    children: getReactSidebar()
                },
                {
                    text: "mobile",
                    collapsible: true,
                    children: getMobileSidebar()
                }
            ]
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
