<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
 
</template>
<script>
  export default {
      name:'tarbar'
  }
</script>

<style>
  /* 在style中引用需要加@ */
   @import "../../assets/css/base.css";

  #tab-bar {
    display: flex;
    background: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    /* x轴，y轴，模糊程度，颜色 */
    box-shadow: 0px -3px 1px rgb(175, 171, 171);
  }

</style>
