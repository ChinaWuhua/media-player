import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/pages'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

//重复点击路由报错 start
const originalPush = VueRouter.prototype.push 
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
//重复点击路由报错 end
export default router