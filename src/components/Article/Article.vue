<template>
  <div>
    <div class="header-bac" :style="{backgroundImage: `url(${this.$route.meta.bac})`}">
      <div class="blog-header">
        <h1 class="blog-title" style="color: #fff;">{{this.$route.meta.title}}</h1>
      </div>
    </div>
    <div class="container" style="margin-top:30px;">
      <router-view class="blog-post"/>
      <nav>
        <ul class="pager">
          <li><a href="#" v-if="hasPreviousArticle" @click.prevent="previous">Previous</a></li>
          <li><a href="#" v-if="hasNextArticle" @click.prevent="next">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Article extends Vue {
  get hasPreviousArticle () {
    return this.$route.meta.id > 0
  }
  get hasNextArticle () {
    return this.$route.meta.id < (this.$route.meta.all - 1)
  }
  next () {
    this.$router.push('/article/' + (this.$route.meta.id + 1))
  }
  previous () {
    this.$router.push('/article/' + (this.$route.meta.id - 1))
  }
  mounted () {
    console.log(this.$route.meta)
  }
}
</script>
<style>
.article-container{
  margin-top: 30px;
}
</style>
