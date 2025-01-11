import { defineConfig } from 'vitepress'
import topNav from "./topNav";
import { net } from "./sideBar/net";
import { os } from "./sideBar/os";
import { algorithm } from "./sideBar/algorithm";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/makeFriends/",
  title: "和我交个朋友吧😊",
  // description: "A VitePress Site to show myBlog.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: topNav,
    // sidebar: {
    //   "/baseLesson/net": net,
    //   "/baseLesson/os": os,
    //   "/baseLesson/algorithm": algorithm

    // },
    // logo: "/elmo.png",
    sidebar: false,
      // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: true, // string | boolean
    footer: {
      copyright: "Copyright © 2025ztb",
    },
    lastUpdatedText: "最后更新",
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/Elmo2022' }
    // ]
  }
})
