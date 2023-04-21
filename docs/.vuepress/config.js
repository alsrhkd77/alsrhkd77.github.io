const { description } = require('../../package')
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
import { defineUserConfig } from "vuepress";
import { defaultTheme } from '@vuepress/theme-default'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
    lang: 'ko-KR',
    title: '송 민광',
    description: description,
    head: [
        ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png" }],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png" }],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png" }],
        ['meta', { name: 'theme-color', content: '#D1B2FF' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    theme: defaultTheme({
        logo: './plant.png',
        navbar: [
            {
                text: 'About',
                link: '/about'
            },
        ]
    }),
    lastUpdated: false,
})