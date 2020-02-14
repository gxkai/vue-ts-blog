<template>
<div class="full-container">
  <div class="header-bac">
    <div class="blog-header">
      <h1 class="blog-title">gxkai Blog</h1>
      <p class="lead blog-description">Keep Calm and Carry On</p>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-sm-8 blog-main">
        <template v-for="(article, index) in pageArticles">
          <ArticleItem
            :key="index"
            :id="index"
            :name="article.name"
            :title="article.title"
            :author="article.author"
            :preview="article.preview"
            :subTitle="article.subTitle"
            :createdTime="article.createdTime"
          />
        </template>
        <nav>
          <ul class="pager">
            <li><a href="#" v-if="hasPreviousPage" @click.prevent="toPreviousPage">Previous</a></li>
            <li><a href="#" v-if="hasNextPage" @click.prevent="toNextPage">Next</a></li>
          </ul>
        </nav>
      </div><!-- /.blog-main -->
      <div class="col-sm-3 col-sm-offset-1 blog-sidebar">
        <!-- <hr/> -->
        <div class="sidebar-module" style="margin-top: 30px;">
          <h4>About Me</h4>
          <img src="https://avatars2.githubusercontent.com/u/30716965?s=40&u=3570765d7758a482e2bc3dec62fd6309de00eaf8&v=4" class="avatar" />
          <p>写写代码，看看比赛<br/>永远年轻，永远热泪盈眶</p>
        </div>
        <hr/>
        <div class="sidebar-module">
          <h4>Elsewhere</h4>
          <ol class="list-unstyled">
            <li><a href="https://github.com/gxkai">GitHub</a></li>
            <li><a href="https://juejin.im/user/59f900066fb9a044fa192a6a">JueJin</a></li>
            <li><a href="#">Weibo</a></li>
          </ol>
        </div>
        <hr/>
      </div><!-- /.blog-sidebar -->
    </div><!-- /.row -->
  </div>
</div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ArticleItem from './components/ArticleItem.vue'
import Articles from '@/articles/list.json'
// import bac from '@/assets/img/bac.jpg'

@Component({
  components: {
    ArticleItem
  }
})
export default class Home extends Vue {
  articles: Array<any> = Articles
  pageNum: number = 1
  get pageArticles () {
    return this.articles.slice((this.pageNum - 1) * 10, this.pageNum * 10)
  }
  get hasNextPage () {
    return this.articles.length > this.pageNum * 10
  }
  get hasPreviousPage () {
    return this.pageNum > 1
  }
  toNextPage () {
    this.pageNum = this.pageNum + 1
  }
  toPreviousPage () {
    this.pageNum = this.pageNum - 1
  }
  mounted () {}
}
</script>
<style>
</style>
