<template>
    <div id="innerMainRegion" class="visualNews">
        <div id="pageBanner"><img src="/images/visual/news.jpg" width="489" height="489" /></div>
        <div id="bodyMain">
            <div id="innerBodyMain">
                <div class="mainTitle titleBrand"><img src="/images/visual/pageTitle/news.png" width="200" height="35" /></div>
                <div class="newsList">
                    <ul>
                        <li v-for="item in news?.data.list" :key="item.id">
                            <NuxtLink :to="localePath(`/news/${item.id}`)">{{ item.name }}</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="pageNumber">
                    <UPagination @click="click" v-model="page" :page-count="10" :total="count" />
                </div>
            </div>
        </div>
        <div id="mainFooterSide"></div>
    </div>
</template>

<script setup>
//获取配置
const config = useRuntimeConfig()
const page = ref(1)
const news = ref(null)
const count = ref(0)
const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about

onMounted(() => {
    //console.log('onMounted')
    getNews()
})

//获取新闻列表
const getNews = async () => {
    await nextTick() //防止刷新页面时获取不到数据
    const { data, error } = await useFetch('/v1/example/index', {
        baseURL: config.public.BASE_URL,
        method: 'GET',
        params: {
            params: `{"page":${page.value},"page_size":10}`
        },
    })
    if (error.value) {
        throw showError({ statusCode: 404, statusMessage: 'Page Not Found' })
        //以下方式不会跳转到错误页 error.vue
        //throw createError({statusCode: 404, statusMessage: "Page not found.", fatal: true})
    }
    news.value = data.value
    count.value = data.value.data.count
}

const click = () => {
    //console.log(page.value)
    getNews()
}
</script>