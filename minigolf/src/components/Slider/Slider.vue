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
<div class="counter-container" >
<!-- <button @click="addHit">Increase hit</button> -->

<div class="increase">
  <div v-for="(item,index) in 7" :key="item" class="increase-button" :id="['clicked' + (index+1)]"
  @click="addHit(index+1)"><p>{{index+1}}</p></div>
  
</div>

<p>{{activeUser.name +' hat '+currentHits}}</p>

</div>
<button class="nextButton" @click="nextPlayer()">Next Player</button>
      </div>
</template>



<style src="./Slider.scss" lang="scss" scoped></style>
<script src="./Slider.js"></script>
