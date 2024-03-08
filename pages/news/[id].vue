<template>
    <div id="innerMainRegion" class="visualNews">
        <div id="pageBanner"><img src="/images/visual/news.jpg" width="489" height="489" /></div>
        <div id="bodyMain">
            <div id="innerBodyMain">
                <div class="mainTitle titleBrand"><img src="/images/visual/pageTitle/news.png" width="200" height="35" /></div>
                <div id="mainContents">
                    <h2>{{ info?.data.name }}</h2>
                    <p>{{ info?.data.content }}</p>
                    <div class="files">
                        <ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="mainFooterSide"></div>
    </div>
</template>

<script setup>
//获取配置
const config = useRuntimeConfig()
const route = useRoute()
//console.log(route.params)
const info = ref(null)

onMounted(() => {
    //console.log('onMounted')
    getNewsInfo()
})

//获取新闻详情
const getNewsInfo = async () => {
    await nextTick() //防止刷新页面时获取不到数据
    const { data, error } = await useFetch('/v1/example/show', {
        baseURL: config.public.BASE_URL,
        method: 'GET',
        params: {
            params: `{"id": ${route.params.id}}`
        },
    })
    if (error.value) {
        throw showError({ statusCode: 404, statusMessage: 'Page Not Found' })
        //以下方式不会跳转到错误页 error.vue
        //throw createError({statusCode: 404, statusMessage: "Page not found.", fatal: true})
    }
    info.value = data.value
}
</script>