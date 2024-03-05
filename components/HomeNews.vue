<template>
    <div class="newsA">
        <img src="/images/titleTxNews.jpg" width="273" height="37" style="margin-bottom:14px;" />
        <img src="/images/homeNewsTitle.jpg" width="201" height="19" />
        <ul>
            <li v-for="item in news?.data.list" :key="item.id">
                <NuxtLink :to="`/news/${item.id}`">{{ item.name }}</NuxtLink>
            </li>
        </ul>
        <div class="more"><NuxtLink to="/news"><img src="/images/iconNewsMore.gif" alt="more" width="34" height="10" border="0" /></NuxtLink></div>
    </div>
</template>

<script setup>
//获取配置
const config = useRuntimeConfig()
const news = ref(null)

onMounted(() => {
    //console.log('onMounted')
    getNews()
})

//获取首页新闻列表
const getNews = async () => {
    await nextTick() //防止刷新页面时获取不到数据
    const { data, error } = await useFetch('/v1/example/index', {
        baseURL: config.public.BASE_URL,
        method: 'GET',
        params: {
            params: `{"page":1,"page_size":5}`
        },
    })
    if (error.value) {
        throw showError({ statusCode: 404, statusMessage: 'Page Not Found' })  
    }
    if(!data.value) {
        console.log('error')
    }
    else if(data.value.code === 0) {
        console.log(data.value.msg)
        news.value = data.value
    }
    else {
        console.log(data.value.msg)
    }
}
</script>