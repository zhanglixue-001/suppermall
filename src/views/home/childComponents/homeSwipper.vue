<template>
    <Swipper :banners="banners"></Swipper>
</template>
<script>
import Swipper from '@/components/common/swipper/Swipper.vue'
export default {
    name:'homeSwipper',
    props:{
         banners:{
            type:Array,
            default:[]
         }
    },
    components:{
        Swipper
    }
    
}
</script>