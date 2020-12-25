<template>
  <div class="loading">
    loading...
  </div>
</template>
<script>
  export default {
    data () {
      return {
        
      }
    },
    mounted () {

    },
    methods: {
      
    },
    computed: {
      
    },
  };
</script>

<style scoped>
  .loading {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    background: rgba(255,255,255,0.5);
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>