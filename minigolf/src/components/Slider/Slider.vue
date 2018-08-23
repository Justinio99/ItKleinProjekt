<template>
<div>
  <div class="track-container">
<Flickity ref="flickity" :options="flickityOptions">
  <div class="carousel-cell"></div>
  <img src="https://api.heartbeat.gmbh/image/logo-minigolf-telli-aarau_b49298a1.jpg" class="carousel-cell">
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
