<template>
    <div id="home">
        <div class="home-navbar"><NavBar><div slot="center">购物街</div></NavBar></div>
    </div>
</template>
<script>
import NavBar from '@/components/common/navigation/NavBar.vue'
export default {
    name:'home',
    components:{
        NavBar
    }
}
</script>

<style>
    .home-navbar{
        background-color: var(--color-tint);
        color: var( --color-background);
    }
</style>