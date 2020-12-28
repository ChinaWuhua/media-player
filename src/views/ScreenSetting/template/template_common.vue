<template>
  <div>
    <el-row :gutter="20">
      <el-col v-for="(item, index) in dataList" :key="'col-'+index" :span="layout_col">
        <div
          class="inputButton" 
          :class="{'focus': index == focus}" 
          @click="toFocus(item, index)">
          <div>
            <div v-show="!item.type">
              <span class="icon el-icon-folder-add"></span>
              <br />
              <span class="text">点击选择素材</span>
            </div>
            <div class="mediaPreview" v-show="item.type">
              <img v-if="item.type == 'pic'" :src="item.src" alt="预览图">
              <video 
                v-else
                autoplay="autoplay"
                height="100%">
                <source src="http://mp42.china.com.cn/video_tide/video/2019/3/26/20193261553564949777_356.mp4" type="video/mp4">
                浏览器不支持本视频，您可以选择使用其他终端观看。
              </video>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="toolsBox" v-show="focus != -1">
      <el-form ref="form" :inline="true" :model="form" label-width="80px">
        <el-form-item label="选择资源">
          <el-select v-model="form.mediaType">
            <el-option label="图片" value="pic"></el-option>
            <el-option label="视频" value="video"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="confirm">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import template_1_1 from './template_1_1.vue';
export default {
  components: { template_1_1 },
  name: 'template_common',
  props: {
    layout: {
      type: Object,
      default: []
    }
  },
  computed: {
    col_size () {
      return this.layout.col * this.layout.row
    },
    layout_col () {
      return 24 / this.layout.col
    },
    dataList () {
      return this.tableData
    }
  },
  data() {
    return {
      focus: -1,
      form: {
        mediaType: '',
      },
      tableData: [],
    };
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      for (let i=0;i<this.col_size;i++) {
        this.tableData.push({
          name: 'col-' + i,
          type: '',
          src: '',
        })
      }
    },
    confirm () {
      if (!this.form.mediaType) {
        this.$message({
          message: '请选择资源类型',
          type: 'warning'
        })
        return
      }
      let video = 'http://mp42.china.com.cn/video_tide/video/2019/3/26/20193261553564949777_356.mp4'
      let pic =   'http://www.gz.gov.cn/img/0/265/265355/6926422.jpg'
      this.tableData[this.focus].type = this.form.mediaType
      this.tableData[this.focus].src = this.tableData[this.focus].type == 'pic' ? pic : video
    },
    toFocus (item, index) {
      this.focus = index
      this.form.mediaType = ''
    },
    getDataList () {
      return this.tableData
    }
  },
};
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
</style>