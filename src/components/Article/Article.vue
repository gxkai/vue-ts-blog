<template>
  <div class="article-container">
    <router-view class="blog-post"/>
    <nav>
      <ul class="pager">
        <li><a href="#">Previous</a></li>
        <li><a href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Article extends Vue {
  mounted () { }
}
</script>
<style>
.article-container{
  margin-top: 30px;
}
</style>
