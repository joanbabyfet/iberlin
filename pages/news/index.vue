<template>
    <div id="innerMainRegion" class="visualNews">
        <div id="pageBanner"><img src="/images/visual/news.jpg" width="489" height="489" /></div>
        <div id="bodyMain">
            <div id="innerBodyMain">
                <div class="mainTitle titleBrand"><img src="/images/visual/pageTitle/news.png" width="200" height="35" /></div>
                <div class="newsList">
                    <ul>
                        <li v-for="item in list" :key="item.id">
                            <NuxtLink :to="localePath(`/news/${item.id}`)">{{ item.name }}</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="pageNumber">
                    <UPagination @click="click" v-model="currentPage" :page-count="pageSize" :total="total" />
                </div>
            </div>
        </div>
        <div id="mainFooterSide"></div>
    </div>
</template>

<script setup>
const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about

//頁面使用組合函数
const { list, total, currentPage, pageSize, click } = useNews()
</script>