<template>
  <div class="deviceList">
    <div v-show="screenData" class="mediaBox">
      <template>
        <div 
          class="mediaItem" 
          v-for="(item, index) in r_data" 
          :key="'col-'+index"
          :style="style">
          <div class="mediaDetail">
            <template v-if="item.type == 'video'">
              <video 
                autoplay="autoplay"
                height="100%">
                <source src="http://mp42.china.com.cn/video_tide/video/2019/3/26/20193261553564949777_356.mp4" type="video/mp4">
                浏览器不支持本视频，您可以选择使用其他终端观看。
              </video>
            </template>
            <img v-else-if="item.type == 'pic'" src="http://www.gz.gov.cn/img/0/265/265355/6926422.jpg" alt="测试图片">
          </div>
        </div>
      </template>
    </div>
    <div class="empty" v-show="!screenData">暂无展示数据</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keepFreash: null,
      heartSpeed: 1000*5,
      screenData: null,
      tableData: {},
    };
  },
  computed: {
    style () {
      return {
        width: (100 / this.screenData.col).toFixed(3) + '%',
        height: (100 / this.screenData.row).toFixed(3) + '%',
      }
    },
    col_size () {
      if (!this.screenData) return 0;
      return this.screenData.col * this.screenData.row;
    },
    r_data () {
      return this.tableData
    }
  },
  mounted() {
    this.keepFreashHandle();
  },
  methods: {
    keepFreashHandle () {
      this.keepFreash = setInterval(() =>{
        this.getRefreashData();
      }, this.heartSpeed);
    },
    getRefreashData () {
      let refreash = localStorage.getItem("refreash") || false; // 暂用浏览器缓存记录数据更新状态
      if (refreash == 'true') {
        localStorage.setItem("refreash", 'false')
        let data = JSON.parse(localStorage.getItem("screenData"))
        this.screenData = data.screenData
        this.tableData = data.tableData
      }
    },
  },
};
</script>

<style scoped>
  .deviceList {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .empty {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    font-size: 16px;
  }
  .mediaBox {
    position: relative;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
  .mediaItem {
    flex-shrink: 1;
    height: 100%;
    position: relative;
    background: #000;
  }
  .mediaDetail {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
</style>