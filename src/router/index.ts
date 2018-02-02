import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'
import Article from '../components/Article.vue'
import Articles from './articles.json'

const HelloWorld: AsyncComponent = (): any => import('@/components/HelloWorld.vue')

Vue.use(Router)

const ArticleComponents:any = Articles.map((item: any, index: number) => (
  {
    path: `${index}`,
    name: item.name,
    component: () => import(`../articles/${item.file}`)
  }
))
console.log(ArticleComponents)
const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
    children: ArticleComponents
  }
]

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router
