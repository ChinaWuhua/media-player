<template>
  <div class="imagePreview">
    <div class="fileChose">
      <span>+</span>
      <input type="file" multiple accept="image/*" ref="image" @change="fileChosed">
    </div>
    <div class="picPreview" v-for="(item, index) in fileList_export">
      <img :src="item.preview">
      <span class="picName">{{item.file.name}}</span>
      <span class="tools" title="点击删除" @click="remove(index)">
        x
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fileList: [],
        polling: null,
        fileList_export: [],
      }
    },
    computed: {
      axistName () {
        let res = this.fileList_export.map(item => item.file.name)
        return res.join(',')
      },
    },
    methods: {
      getFile () {
        return this.fileList_export || []
      },
      remove (index) {
        this.fileList_export.splice(index, 1)
      },
      getData (file, index) {
        let reader = new FileReader() 
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.fileList_export.push({
            file: file,
            preview: reader.result,
          })
        }
      },
      fileChosed () {
        let files = this.$refs.image.files

        this.fileList = files
        // this.fileList_export.length = 0 // 清空已选文件

        files.forEach((item, index) => {
          this.getData(item, index)
        })
        
        this.polling = setInterval(() => {
          if (this.fileList_export.length == this.fileList.length) {
            clearInterval(this.polling)
            this.$emit('filesChange', this.fileList_export)
          }
        }, 100)
      },
      getFiles () {
        return this.fileList_export
      }
    },
  };
</script>

<style scoped>
  .imagePreview {
    width: 100%;
    height: 100%;
  }
  .picPreview {
    width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
    margin-left: 20px;
    display: inline-block;
    vertical-align: top;
    box-shadow: 2px 2px 4px #b2b2b2;
    border-radius: 5px;
    overflow: hidden;
  }
  .picPreview:hover {
    box-shadow: 0 0 6px #666;
  }
  .picPreview img {
    width: 100%;
    height: 100%;
  }
  .fileChose {
    position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
  }
  .fileChose span{ 
    width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
    font-size: 40px;
    color: #dfdfdf;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    border: 1px dashed #dfdfdf;
    border-radius: 5px;
    cursor: pointer;
  }
  .fileChose input {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    cursor: pointer;
  }
  .picName {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 26px;
    line-height: 26px;
    text-align: center;
    font-size: 12px;
    color: rgba(255,255,255,0.8);
    z-index: 2;
    transition: .3s;
    background: rgba(0,0,0,0.5);
  }
  .tools {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 26px;
    background: rgba(255,255,255,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s;
    transform: translateY(-26px);
    color: #333;
    cursor: pointer;
  }
  .picPreview:hover > .tools {
    transform: translateY(0);
  }
</style>