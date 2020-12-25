<template>
  <div>
    <div class="deviceName">{{ deviceName }}</div>
    <div class="device"> 
      <div class="deviceMsg">
        <template v-for="(item, index) in layoutList">
          <div class="layoutItem" :class="{'active': index == active}" @click="chosedLayout(item, index)">
            {{item.label}}
          </div>
        </template>
      </div>
      <div class="deviceParams">
        <div class="deviceComponent">
          <component :is="effectComponent" ref="deviceConfig"></component>
        </div>
        <div class="saveBtns">
          <el-button type="primary">保存</el-button>
          <el-button type="warning">取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import template_1_1 from './template/template_1_1'
import template_2_2 from './template/template_2_2'
import template_3_3 from './template/template_3_3'
import template_4_4 from './template/template_4_4'
export default {
  components: {
    template_1_1, 
    template_2_2, 
    template_3_3, 
    template_4_4,
  },
  data() {
    return {
      layoutList: [
        {label: '1 x 1', value: '1_1'},
        {label: '2 x 2', value: '2_2'},
        {label: '3 x 3', value: '3_3'},
        {label: '4 x 4', value: '4_4'},
      ],
      active: 0,
    };
  },
  computed: {
    deviceName () {
      return this.$route.query.label
    },
    effectComponent () {
      let o = this.layoutList[this.active]
      return `template_${o.value}`
    },
  },
  mounted() {

  },
  methods: {
    chosedLayout (item, index) {
      this.active = index
    }
  },
};
</script>

<style scoped>
  .device {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: top;
    margin-top: 20px;
  }
  .deviceMsg {
    width: 200px;
    flex-shrink: 1;
  }
  .deviceName {
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }
  .deviceParams {
    flex: 1;
    margin-left: 30px;
  }
  .deviceComponent {
    padding: 12px;
    border: 1px solid #dfdfdf;
    border-radius: 5px;
  }
  .layoutItem {
    border: 1px solid #dfdfdf;
    padding: 8px 0;
    text-align: center;
    font-size: 14px;
    color: #666;
    margin-top: 12px;
    border-radius: 5px;
    cursor: pointer;
  }
  .layoutItem:hover {
    color: #fff;
    background: #409EFF;
    border-color: #409EFF;
  }
  .active {
    color: #409EFF !important;
    border-color: #409EFF !important;
    background: #fff !important;
  }
  .layoutItem:first-child {
    margin: 0;
  }
  .saveBtns {
    margin-top: 20px;
    text-align: right;
  }
</style>
<style>
  /* template component style */
  .deviceComponent .inputButton {
    height: 100px;
    text-align: center;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .deviceComponent .inputButton .text {
    font-size: 14px;
    margin-left: 12px;
  }
  .deviceComponent .inputButton .icon {
    font-size: 30px;
    color: #409EFF;
  }
  .deviceComponent .inputButton:hover {
    background: #409EFF;
    color: #fff;
  }
  .deviceComponent .inputButton:hover  .icon {
    color: #fff !important;
  }
  .deviceComponent .focus {
    background: #409EFF;
    color: #fff;
  }
  .deviceComponent .focus .icon {
    color: #fff;
  }
</style>