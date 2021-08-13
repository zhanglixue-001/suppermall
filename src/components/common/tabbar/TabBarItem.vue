<template>
   <div class = "tab-bar-item" @click="itemClick">
      <div v-if="isActive"><slot name="item-picture-active"></slot></div>
      <div v-else><slot name="item-picture"></slot></div>
      <div :class="{active:isActive}"><slot name="item-text"></slot></div>     
   </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data(){
    return{
      // isActive:false
    }
  },
  props:{
    path:String
  },
  components: {
    
  },
  computed:{
      isActive(){
         return this.$route.path.indexOf(this.path)!==-1;
      }
  },
  methods:{
    itemClick(){
      this.isActive=true;
      this.$router.replace(this.path);
    }
  }
}
</script>

<style>
.tab-bar-item{
  flex:1;
  height: 49px;
  text-align: center;
}
.tab-bar-item img{
  width:24px;
  height: 24px;
  margin-top:3px ;
}

.active{
  color: #da4890
  ;
}
</style>