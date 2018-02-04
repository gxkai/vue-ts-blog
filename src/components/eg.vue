<template>
  <Blog />
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Blog from '@/articles/blog.md'

@Component({
  components: {
    Blog
  }
})
export class FeatureComponent extends Vue {}
</script>
