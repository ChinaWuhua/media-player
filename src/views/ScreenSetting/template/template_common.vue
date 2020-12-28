<template>
  <div>
    <el-row :gutter="20">
      <template>
        <el-col v-for="(item, index) in col_size" :key="'col-'+index" :span="layout_col">
          <div class="inputButton" :class="{'focus': index == focus}" @click="toFocus(item, index)">
            <div>
              <span class="icon el-icon-folder-add"></span>
              <br />
              <span class="text">点击选择素材</span>
            </div>
          </div>
        </el-col>
      </template>
    </el-row>
    <div class="toolsBox" v-show="focus != -1">
      <el-form ref="form" :inline="true" :model="form" label-width="80px">
        <el-form-item label="选择图片">
          <el-select v-model="form.text">
            <el-option label="图片一" value="11"></el-option>
            <el-option label="视频" value="22"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'template_common',
  props: {
    layout: {
      type: Object,
      default: {}
    }
  },
  computed: {
    col_size () {
      return this.layout.col * this.layout.row
    },
    layout_col () {
      return 24 / this.layout.col
    },
  },
  data() {
    return {
      focus: -1,
      form: {
        text: '',
      },
    };
  },
  mounted() {
    console.log('mounted')
  },
  methods: {
    toFocus (item, index) {
      this.focus = index
    },
  },
};
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
</style>