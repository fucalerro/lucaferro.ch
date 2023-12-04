import { defaultTheme } from 'vuepress'
import { defineUserConfig } from 'vuepress'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { searchProPlugin } from "vuepress-plugin-search-pro";

import getConfig from 'vuepress-bar';
const { nav, sidebar } = getConfig(`${__dirname}/..`, {"multipleSideBar": true, "addReadMeToFirstGroup": false, "skipEmptySidebar": true});


export default defineUserConfig({
  // site-level locales config
  locales: {
    '/': {
      lang: 'en-US',
      title: '',
      description: 'Resources for building & running a Swapbox kit, aswell as technical documentation.',
      head:
      [
        ['link', { rel: 'icon', href: '/icon.svg' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap' }]
      ],
   },
  },
  plugins: [
    mdEnhancePlugin({
      // Enable mermaid
      mermaid: true,
    }),
    searchProPlugin({
      indexContent: true,
    }),
  ],
  theme: defaultTheme({
    // set config here
    hostname: "https://swapbox.cash",

  author: {
    name: "TrueLevel SA",
    url: "https://gitlab.com/truelevel/swapbox/docs",
  },

  logo: "/swapbox-light.svg",
  logoDark: "/swapbox-dark.svg",

  navbar: [
  { text: 'Work', 
    link: '/work/' },
  { text: 'Blog', 
    link: '/blog/' },
  { text: 'About', 
    link: '/about/' },
  { text: 'Github',
    link: 'https://github.com/fucalerro/' }
],

//  repo: "TrueLevelSA/",

  pageInfo: ["Original", "Category"],

  locales: {
    "/": {
      lang: 'en-GB',
      title: 'SwapBox documentation',
      nav,
      sidebar,
    },
  },

  editLink: false,
  lastUpdated: true,
  contributors: true,
  copyright: false,
  displayFooter: true,

  }),

  base: "/docs/",
})