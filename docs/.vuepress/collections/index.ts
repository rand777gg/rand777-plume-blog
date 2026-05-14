import { defineCollections } from "vuepress-theme-plume";
import hobby from './hobby'
import learn from './learn'
import life from './life'
import read from './read'

export default defineCollections([
    hobby,
    learn,
    life,
    read,
    {
        type: 'post',
        dir: 'blog',
        title: '博客',
        autoFrontmatter: {
            title: false,
            createTime: true,
            permalink: false,
        },
        postCover: {
            layout: 'odd-left',
            ratio: '3:2',
            width: 300,
            compact: true,
        }
    }
])

