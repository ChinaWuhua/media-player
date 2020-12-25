<template>
  <div class="header">
    <!-- Amazon -->
    <div class="logo">Media Player</div>
    <div class="menu">
      <!-- <div class="devices">
        <span class="label">显示屏切换:</span>
        <select name="devices" id="devices">
          <option value="test001">大厅显示屏</option>
          <option value="test002">电梯广告屏</option>
          <option value="test003">楼道显示屏</option>
        </select>
      </div> -->
      <v-nav></v-nav>
    </div>
  </div>
</template>
<script>
  import vNav from "./nav"
  export default {
    components: {
      vNav
    },
    data () {
      return {
      }
    },
    mounted () {
      
    },
    methods: {
      
    },
    computed: {
      
    },
  };
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
  }
  .logo {
    color: #409EFF;
    font-size: 20px;
  }
  .menu {
    height: 100%;
    position: relative;
  }
  .devices {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .devices .label {
    font-size: 14px;
    color: #333;
    display: inline-block;
    margin-right: 12px;
  }
</style>