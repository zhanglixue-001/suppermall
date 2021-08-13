<template>
  <div id="app">
    <router-view></router-view>
      <TabBar>
          <TabBarItem path="/home">
             <img slot="item-picture" src="@/assets/images/tabbar/home.svg" alt="">
              <img slot="item-picture-active" src="@/assets/images/tabbar/home_active.svg" alt="">
             <span slot="item-text">首页</span>
          </TabBarItem>
          <TabBarItem path="/category">
              <img slot="item-picture" src="@/assets/images/tabbar/category.svg" alt="">
              <img slot="item-picture-active" src="@/assets/images/tabbar/category_active.svg" alt="">
              <span slot="item-text">分类</span>
          </TabBarItem>
          <TabBarItem path="/shopcart">
            <img slot="item-picture" src="@/assets/images/tabbar/shopcat.svg" alt="">
            <img slot="item-picture-active" src="@/assets/images/tabbar/shopcat_active.svg" alt="">
            <span slot="item-text">购物车</span>
          </TabBarItem>
          <TabBarItem path="/profile">
            <img slot="item-picture" src="@/assets/images/tabbar/profile.svg" alt="">
            <img slot="item-picture-active" src="@/assets/images/tabbar/profile_active.svg" alt="">
             <span slot="item-text">我的</span>
          </TabBarItem>
         
      </TabBar>
  </div>
</template>

<script>
import TabBar from './components/common/tabbar/TabBar';
import TabBarItem from './components/common/tabbar/TabBarItem.vue'
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import "~@/assets/css/base.css";

</style>
