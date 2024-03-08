<template>
    <div id="footerIdx">
        <div id="innerFooter">
            <div class="nav">
                <NuxtLink :to="localePath('/about')" activeClass="current">{{ $t('nav.about') }}</NuxtLink><span class="side">&nbsp;</span>
                <NuxtLink :to="localePath('/news')" activeClass="current">{{ $t('nav.news') }}</NuxtLink><span class="side">&nbsp;</span>
                <NuxtLink :to="localePath('/application')" activeClass="current">{{ $t('nav.application') }}</NuxtLink><span class="side">&nbsp;</span>
                <NuxtLink :to="localePath('/products')" activeClass="current">{{ $t('nav.products') }}</NuxtLink><span class="side">&nbsp;</span>
                <NuxtLink :to="localePath('/contact')" activeClass="current">{{ $t('nav.contact') }}</NuxtLink>
            </div>
            <div class="copyright">Copyright ©2012 iBerlin Technology Co., Ltd. All other marks are the property of their respective owners.</div>
        </div>
    </div>
</template>

<script setup>
const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about
</script>