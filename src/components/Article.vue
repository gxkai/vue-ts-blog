<template>
  <router-view class="markdown-body entry-content"/>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Article extends Vue {
  constructor () {
    super()
  }

  mounted () { }
}
</script>
