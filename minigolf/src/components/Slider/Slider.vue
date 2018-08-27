<template>
<div>
  <div class="track-container">
<Flickity ref="flickity" :options="flickityOptions">
  
    <img  class="carousel-cell" src="../../assets/bahn1.png">
 
  
  <div class="carousel-cell"></div>
  <div class="carousel-cell"></div>
  <div class="carousel-cell"></div>
  <div class="carousel-cell"></div>
</Flickity>
</div>
<button class="nextButton" @click="next()">Next Player</button>
      </div>
</template>



<style src="./Slider.scss" lang="scss" scoped></style>
<script src="./Slider.js"></script>
