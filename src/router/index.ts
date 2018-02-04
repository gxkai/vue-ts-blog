import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'
import Article from '../components/Article/Article.vue'
import Home from '../components/Home/Home.vue'
import Articles from '../articles/index.json'

const HelloWorld: AsyncComponent = (): any => import('@/components/HelloWorld.vue')

Vue.use(Router)

const ArticleComponents:any = Articles.map((item: any, index: number) => (
  {
    path: `${index}`,
    name: item.name,
    meta: {id: index, all: Articles.length},
    component: () => import(`../articles/${item.file}`)
  }
))
console.log(ArticleComponents)
const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
    children: ArticleComponents
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../components/Resume/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About/index.vue')
  }
]

const router: Router = new Router({
  base: '/',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
