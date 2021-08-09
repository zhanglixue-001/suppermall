<template>
    <div class="tab-bar-item" @click=itemClick>
      <div v-if="!idActivuted"> <slot  name="item-icon"></slot></div>
      <div v-else><slot  name="item-icon-activte"></slot></div>
      <div :style="activiteStyle"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
    name:'tabbaritem',
    props:{
      link:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    computed:{
        idActivuted(){
            // console.log(this.$route.path);
            return this.$route.path.indexOf(this.link)!==-1;
        },
        activiteStyle(){
            return this.idActivuted ? {color:this.activeColor}:{}
        }
    },
    methods:{
      itemClick(){
          // console.log("点击了");
          this.$router.push(this.link).catch(err=>{
            // console.log(err);
          });
      }
    }
}
</script>

<style>
  .tab-bar-item {
      flex: 1;
      text-align: center;
      height: 49px;
  }
  .tab-bar-item img {
    height: 24px;
    width: 24px;
  }
</style>