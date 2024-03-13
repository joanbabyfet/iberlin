<template>
    <div id="innerIndMain">
        <HomeBanner></HomeBanner>
        <HomeNews></HomeNews>
        <div id="idxMainSide"></div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'home'
})
//打印当前环境
const config = useRuntimeConfig()
console.log(config.public.NUXT_ENV)
</script>
