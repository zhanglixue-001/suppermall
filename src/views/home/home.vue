<template>
    <div id="home">
        <div class="home-navbar"><NavBar><div slot="center">购物街</div></NavBar></div>
        <homeSwipper :banners="banners"></homeSwipper>
    </div>
</template>
<script>
import NavBar from '@/components/common/navigation/NavBar.vue'
import {getHomeMultData} from '@/network/home'
import homeSwipper from './childComponents/homeSwipper.vue'
export default {
    name:'home',
    data(){
        return{
            banners:[],
            recommend:[],
            dKeyword:[],
            keywords:[]
        }
    },
    components:{
        NavBar,
        homeSwipper

    },
    created(){
        //1.请求多个数据
        getHomeMultData().then(data=>{
            this.banners = data.data.banner.list
            this.recommend=data.data.recommend
            this.dKeyword = data.data.dKeyword
            this.keywords =data.data.keywords
        });
    }
}
</script>

<style>
    .home-navbar{
        background-color: var(--color-tint);
        color: var( --color-background);
    }
</style>