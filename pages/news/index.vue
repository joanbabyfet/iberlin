<template>
    <div id="innerMainRegion" class="visualNews">
        <div id="pageBanner"><img src="/images/visual/news.jpg" width="489" height="489" /></div>
        <div id="bodyMain">
            <div id="innerBodyMain">
                <div class="mainTitle titleBrand"><img src="/images/visual/pageTitle/news.png" width="200" height="35" /></div>
                <div class="newsList">
                    <ul>
                        <li v-for="item in news?.data.list" :key="item.id">
                            <NuxtLink :to="`/news/${item.id}`">{{ item.name }}</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="pageNumber">
                    <UPagination @click="click" v-model="page" :page-count="10" :total="news?.data.count" />
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

onMounted(() => {
    //console.log('onMounted')
    getNews()
})

//获取新闻列表
const getNews = async () => {
    await nextTick()
    const { data, error } = await useFetch('/v1/example/index', {
        baseURL: config.public.BASE_URL,
        method: 'GET',
        params: {
            params: `{"page":${page.value},"page_size":10}`
        },
    })
    news.value = data.value
}

const click = () => {
    //console.log(page.value)
    getNews()
}
</script>