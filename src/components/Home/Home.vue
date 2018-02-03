<template>
  <div class="row">
    <div class="col-sm-8 blog-main">
      <div class="blog-header">
        <h1 class="blog-title">Zhangw Blog</h1>
        <p class="lead blog-description">Keep Calm and Carry On</p>
      </div>
      <template v-for="(article, index) in articles">
        <ArticleItem
          :key="index"
          :id="index"
          :title="article.title"
          :author="article.author"
          :preview="article.preview"
          :subTitle="article.subTitle"
          :createdTime="article.createdTime"
        />
      </template>
      <nav>
        <ul class="pager">
          <li><a href="#">Previous</a></li>
          <li><a href="#">Next</a></li>
        </ul>
      </nav>
    </div><!-- /.blog-main -->
    <div class="col-sm-3 col-sm-offset-1 blog-sidebar">
      <!-- <hr/> -->
      <div class="sidebar-module" style="margin-top: 30px;">
        <h4>About Me</h4>
        <img src="https://avatars1.githubusercontent.com/u/16274199?s=460&v=4" class="avatar" />
        <p>写写代码, 养养多肉<br/>喧嚣一时, 孤独常伴</p>
      </div>
      <hr/>
      <div class="sidebar-module">
        <h4>Elsewhere</h4>
        <ol class="list-unstyled">
          <li><a href="https://github.com/only4ly">GitHub</a></li>
          <li><a href="https://juejin.im/user/57f6332a128fe100544c08f2">JueJin</a></li>
          <li><a href="#">Weibo</a></li>
        </ol>
      </div>
      <hr/>
    </div><!-- /.blog-sidebar -->
  </div><!-- /.row -->
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ArticleItem from './components/ArticleItem.vue'
import Articles from '@/articles/index.json'
// import Avatar from '../../assets/img/avatar.jpeg'

@Component({
  components: {
   ArticleItem
  }
})
export default class Home extends Vue {
  articles: Array<any> = Articles
  mounted() {}
}
</script>
<style>
.avatar{
  width: 128px;
  height: 128px;
  border-radius: 4px;
  margin-bottom: 8px;
}
</style>
