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
      layout: {col: 3, row: 3}
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