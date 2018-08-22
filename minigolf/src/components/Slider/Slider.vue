<template>
<div>
 <swiper :options="swiperOption">
        <swiper-slide class="slider-item">Bahn 1</swiper-slide>
        <swiper-slide class="slider-item">Bahn 2</swiper-slide>
        <swiper-slide class="slider-item">Bahn 3</swiper-slide>
      
       <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      </div>
</template>



<style src="./Slider.scss" lang="scss" scoped></style>
<script src="./Slider.js"></script>
