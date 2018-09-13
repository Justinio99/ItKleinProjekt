<template>
<div>
  <div class="track-container">
<Flickity ref="flickity" :options="flickityOptions">
  
 
  
  <div class="carousel-cell"></div>
  <div class="carousel-cell"></div>
  <div class="carousel-cell"></div>
  <div class="carousel-cell"></div>
  <div class="carousel-cell"></div>
  <div class="carousel-cell"></div>
</Flickity>
</div>
<div class="counter-container" v-show="showHitInput">
<button @click="addHit">Increase hit</button>
<p>{{activeUser.name +' hat '+currentHits}}</p>
<button @click="removeHit" :disabled="disableDecrease">Decrese hit</button>
</div>
<button class="nextButton" @click="nextPlayer()">Next Player</button>
      </div>
</template>



<style src="./Slider.scss" lang="scss" scoped></style>
<script src="./Slider.js"></script>
