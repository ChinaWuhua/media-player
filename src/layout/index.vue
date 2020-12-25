<template>
  <div class="layout-index">
    <div class="header">
      <v-header></v-header>
    </div>
    <div class="content">
      <div class="content-body">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
  import vHeader from '@/layout/header'
  export default {
    name: "layout-index",
    components: {
      vHeader
    },
    data () {
      return {
        
      }
    },
    methods: {
      
    },
    mounted () {
      
    }
  }
</script>

<style scoped>
  .layout-index {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .header {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 50px;
    border-bottom: 1px solid #dfdfdf;
    transition: .3s;
  }
  .tags {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 30px;
    border-top: 1px solid #dfdfdf;
  }
  .content {
    position: absolute;
    left: 0;
    top: 51px;
    right: 0;
    bottom: 0;
    overflow: auto;
    transition: .3s;
  }
  .content-body {
    margin: 20px;
  }
</style>