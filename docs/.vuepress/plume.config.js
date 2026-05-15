import {defineThemeConfig} from 'vuepress-theme-plume'
import {navbar} from './navbar'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
    profile: {
        avatar: 'https://avatars.githubusercontent.com/u/91131723?s=400&u=cc52bb8ae67e4a4706570ac84399dc7519cfa749&v=4',
        name: 'rand777',
        description: 'Life is a long lesson in humility.',
        circle: true,
        location: 'Shenzhen, China',
        organization: 'PGuide Dev',
    },
    navbar,
    social: [
        {icon: 'github', link: 'https://github.com/rand777gg'},
        {icon: 'gitlab', link: 'https://gitlab.com/rand777'},
        {icon: 'stackoverflow', link: 'https://stackoverflow.com/users/21395974/rand777'},
        {icon: 'docker', link: 'https://hub.docker.com/repositories/threedimesional'},
        {icon: 'zhihu', link: 'https://www.zhihu.com/people/rand777'},
        {icon: 'discord', link: 'https://discord.gg/WctS5uku'},
        {icon: 'npm', link: 'https://www.npmjs.com/~rand777gg'},
    ],
    transition: { appearance: 'soft-blur-fade' },
})
