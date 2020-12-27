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
      工具库
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
    };
  },
  mounted() {

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