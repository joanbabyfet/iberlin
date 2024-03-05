<template>
    <div id="homeVisual">
        <Swiper v-bind="swiperConfig" @slide-change="slideChange()">
            <SwiperSlide><img src="/images/banner01.jpg"></SwiperSlide>
            <SwiperSlide><img src="/images/banner02.jpg"></SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperConfig = {
    //nuxt.config 己配置全局引入
    modules: [
        SwiperNavigation,
        SwiperEffectCreative
    ],
    //属性
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
};

const slideChange = () => {
    console.log('slideChange');
};
</script>