<template>
  <div class="block">
    <el-carousel height="150px">
      <el-carousel-item v-for="item in banners" :key="item">
        <img :src="item.image" alt="">
      </el-carousel-item>
    </el-carousel> 
  </div>
</template>
<script>
export default {
    name:'swipper',
    props:{
      banners:{
        type:Array,
        default:[]
      }
    }
}
</script>

<style>
  img{
      width: 320px;
      height: 150px;
  }
</style>