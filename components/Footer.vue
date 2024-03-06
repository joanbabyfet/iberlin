<template>
    <div id="footerIdx">
        <div id="innerFooter">
            <div class="nav">
                <NuxtLink :to="localePath('/about')">{{ $t('nav.about') }}</NuxtLink><span class="side">&nbsp;</span>
                <NuxtLink :to="localePath('/news')">{{ $t('nav.news') }}</NuxtLink><span class="side">&nbsp;</span>
                <NuxtLink :to="localePath('/application')">{{ $t('nav.application') }}</NuxtLink><span class="side">&nbsp;</span>
                <NuxtLink :to="localePath('/products')">{{ $t('nav.products') }}</NuxtLink><span class="side">&nbsp;</span>
                <NuxtLink :to="localePath('/contact')">{{ $t('nav.contact') }}</NuxtLink>
            </div>
            <div class="copyright">Copyright ©2012 iBerlin Technology Co., Ltd. All other marks are the property of their respective owners.</div>
        </div>
    </div>
</template>

<script setup>
const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about
</script>