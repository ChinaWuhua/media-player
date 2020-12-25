<template>
  <div>
    <templateCommon :layout="layout"></templateCommon>
  </div>
</template>

<script>
import templateCommon from './template_common'
export default {
  components: {
    templateCommon
  },
  data() {
    return {
      layout: {col: 1, row: 1}
    };
  },
  mounted() {

  },
  methods: {
    
  },
};
</script>

<style scoped>
  
</style>