<template>
<div>
  <div class="blog-masthead">
      <div class="container">
        <nav class="blog-nav">
          <template v-for="menu in menuList">
            <a
              class="blog-nav-item"
              :class="{active: $route.name===menu.routerName}"
              href="#"
              @click.prevent="to(menu.routerName)"
              :key="menu.name"
            >
              {{menu.name}}
            </a>
          </template>
        </nav>
      </div>
    </div>
    <div class="container">
      <router-view/>
    </div><!-- /.container -->
    <footer class="blog-footer">
      <p>Blog template from <a href="http://getbootstrap.com">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
      <p>
        <a href="#">Back to top</a>
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'app'
})
export default class App extends Vue {
  menuList: Array<any> = [
    {name: 'Home', routerName: 'Home'},
    {name: 'Resume', routerName: 'Resume'},
    {name: 'About Me', routerName: 'About'}
  ]
  to (routerName: any) {
    this.$router.push({ name: routerName })
  }
  mounted () {
    console.log(this.$route)
  }
}
</script>
<style>
#app{
  font-size: 14px;
}
</style>