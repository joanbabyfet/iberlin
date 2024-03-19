<template>
    <div class="newsA">
        <img src="/images/titleTxNews.jpg" width="273" height="37" style="margin-bottom:14px;" />
        <img src="/images/homeNewsTitle.jpg" width="201" height="19" />
        <ul>
            <li v-for="item in list" :key="item.id">
                <NuxtLink :to="localePath(`/news/${item.id}`)">{{ sliceWord(item.name, 20) }}</NuxtLink>
            </li>
        </ul>
        <div class="more"><NuxtLink :to="localePath('/news')"><img src="/images/iconNewsMore.gif" alt="more" width="34" height="10" border="0" /></NuxtLink></div>
    </div>
</template>

<script setup>
const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about

//頁面使用組合函数
const { list } = useHomeNews()
</script>