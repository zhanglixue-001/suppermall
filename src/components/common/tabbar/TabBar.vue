<template>
      <div class = "tab-bar">
        <slot></slot>
      </div>
 
</template>

<script>
import TabBarItem from './TabBarItem.vue'
export default {
  name: 'TabBar',
  components: {
    TabBarItem
  }
}
</script>

<style>
.tab-bar{
  	display:flex;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
.tab-bar-item{
  flex:1;
  height: 49px;
  text-align: center;
}
</style>
