import Vue from 'vue'
import VueRouter from 'vue-router'

const home = ()=>import ('../views/home/home');
const profile = ()=>import ('../views/profile/profile');
const category = ()=>import ('../views/category/category');
const shopcartt = ()=>import ('../views/shopcartt/shopcartt');

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home',
    component:home,

  },
  {
    path:'/home',
    component:home,
  },
  {
    path:'/profile',
    component:profile,
  },
  {
    path:'/category',
    component:category,
  },
  {
    path:'/shopcart',
    component:shopcartt,
  }

]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
