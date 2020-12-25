<template>
  <div class="deviceList">
    welcome media player content
  </div>
</template>

<script>
import imagePreview from '@/components/imagePreview'
export default {
  components:{
    imagePreview
  },
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {
    getFileList () {
      console.log(this.$refs.pic.getFiles())
    }
  },
};
</script>

<style scoped>
  .deviceList {
    
  }
</style>