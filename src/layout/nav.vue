<template>
  <div class="nav">
    <div class="nav-list" @mouseover="entryHover" @mouseleave="leaveList">
      <template v-for="(item, index) in navList">
        <div class="nav-item" :class="{'navActive': navActive == index}" :key="index" :data-key="index" @click="listClick(item)">{{item.label}}</div>
      </template>
    </div>
    <div class="nav-child" :class="{'baseShow': baseShow, 'animateShow': animateShow}" @mouseover="hoverChildDom" @mouseleave="leaveChild">
      <div class="nav-child-content">
        <div class="child-block" v-for="(item, index) in childList" :key="index">
          <div class="child-block-title">
            <span>{{ item.title }}</span>
          </div>
          <div class="child-block-detail">
            <span class="child-block-detail-item" v-for="(kind, key) in item.datas" :key="key" @click="entry(kind)">
              {{ kind.label }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        navHover: false,
        baseShow: false,
        animateShow: false,
        animateTimeOut: null,
        leaveTimeout: null,
        hoverChild: false,
        navActive: -1,
        navList: [
          {
            label: '功能捷径',
            routeName: 'screen',
            children: [
              {
                title: '显示屏列表',
                datas: [
                  { 
                    label: '大厅显示屏', 
                    routeName: 'screens', 
                    params: {
                      id: 'home-2-1',
                      screen: '1920*1080',
                    }
                  },
                  { 
                    label: '电梯显示屏', 
                    routeName: 'screens', 
                    params: {
                      id: 'home-2-2',
                      screen: '720p',
                    }
                  },
                  { 
                    label: '楼道显示屏', 
                    routeName: 'screens', 
                    params: {
                      id: 'home-2-3',
                      screen: '350*800',
                    }
                  },
                ]
              },
              {
                title: '资源维护',
                datas: [
                  { 
                    label: '资源上传', 
                    routeName: 'home-1', 
                    params: {
                      id: 'home-1-1'
                    }
                  },
                  { 
                    label: '资源管理', 
                    routeName: 'home-3', 
                    params: {
                      id: 'home-3-2'
                    }
                  },
                ]
              },
            ]
          },
          {
            label: '预览',
            routeName: 'preview', 
          },
        ],
        childList: [],
      }
    },
    methods: {
      listClick (item) {
        switch (item.routeName) {
          case 'preview':
            window.open('http://localhost:8080/#/preview'); break;
        }
      },
      entry (entry) { // 快捷入口
        console.log(entry)
        switch (entry.routeName) {
          case 'screens':
            this.$router.replace({
              path: '/screens',
              query: {id: entry.params.id, label: entry.label, screen: entry.params.screen}
            });
            break;
        }
      },
      hoverChildDom () { // 悬停子菜单
        clearTimeout(this.animateTimeOut)
        clearTimeout(this.leaveTimeout)
        this.hoverChild = true
      },
      leaveChild () { // 离开子菜单
        this.hoverChild = false
        this.leaveTimeout = setTimeout(() => {
          if (this.navHover == false){
            this.navActive = -1
            this.hideChild()
          }
        }, 100)
      },
      leaveList () { // 离开主菜单
        this.navHover = false
        this.leaveTimeout = setTimeout(() => {
          if (this.hoverChild == false) {
            this.navActive = -1
            this.hideChild() 
          }
        }, 100)
      },
      entryHover (nav) { // 菜单悬停入口
        this.navHover = true
        let key = nav.target.dataset.key || -1
        if (key > -1) {
          clearTimeout(this.animateTimeOut)
          clearTimeout(this.leaveTimeout)
          this.dealHover(key)
        }
      },
      dealHover (key) { // 处理菜单悬停
        let child = this.navList[key].children
        this.navActive = key
        if (child) {
          this.childList = child
          this.baseShow = true
          this.animateShow = true
        } else {
          this.hideChild()
        }
      },
      hideChild () { // 隐藏二级菜单
        this.animateShow = false
        this.animateTimeOut = setTimeout(() => {
          this.baseShow = false
          this.childList = []
        }, 300)
      },
    },
  };
</script>

<style scoped>
  .nav {
    height: 100%;
    position: relative;
  }
  .nav-list {
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .nav-item {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    transition: color .3s;
    font-size: 14px;
    color: #333;
  }
  .navActive {
    color: #409EFF;
  }
  .nav-child {
    background: #fff;
    position: absolute;
    right: 0;
    top: -10000px;
    width: 500px;
    transition: transform .3s, opacity .3s;
    transform: translateY(10px);
    opacity: 0;
    z-index: 9;
    border: 1px solid #eee;
    box-shadow: 1px 1px 5px #dedede;
    border-radius: 5px;
  }
  .nav-child-content {
    margin: 20px 20px;
  }
  .baseShow {
    top: 100%;
  }
  .animateShow {
    transform: translateY(0);
    opacity: 1;
  }
  .child-block {
    display: flex;
    justify-content: start;
    align-items: top;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px dashed #e9e9e9;
  }
  .child-block:first-child {
    margin-top: 0;
    padding-top: 0;
    border-top: 0;
  }
  .child-block-title {
    font-size: 12px;
    color: #999;
    width: 70px;
    text-align: left;
    flex-shrink: 0;
  }
  .child-block-title span {
    display: inline-block;
    padding: 2px 5px;
    background: #409EFF;
    color: #fff;
    border-radius: 3px;
  }
  .child-block-detail {
    margin-top: -4px;
  }
  .child-block-detail-item {
    font-size: 12px;
    color: #666;
    display: inline-block;
    cursor: pointer;
    margin-left: 15px;
    margin-top: 6px;
  }
  .child-block-detail-item:hover {
    color: #409EFF;
    text-decoration: underline;
  }
</style>