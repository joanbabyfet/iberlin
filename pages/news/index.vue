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
                <el-pagination
                    v-model:current-page="currentPage"
                    v-model:page-size="pageSize"
                    :total="total"
                    :page-sizes="[10, 20, 30, 40]"
                    layout="total, sizes, prev, pager, next, jumper"
                    @current-change="handleCurrentChange"
                    @size-change="handleSizeChange"
                    >
                </el-pagination>
            </div>
        </div>
        <div id="mainFooterSide"></div>
    </div>
</template>

<script setup>
const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about

//頁面使用組合函数
const { list, total, currentPage, pageSize, handleCurrentChange, handleSizeChange } = useNews()
</script>