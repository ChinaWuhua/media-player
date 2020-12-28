<template>
  <div>
    <templateCommon :layout="layout" ref="deviceConfig"></templateCommon>
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
    getDataList () {
      return this.$refs.deviceConfig.getDataList()
    }
  },
};
</script>

<style scoped>
  
</style>