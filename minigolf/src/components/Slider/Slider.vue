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
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
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
      @click="addHit(index+1)">{{index+1}}</div>
    </div>

    <p>{{activeUser.name +' hat '+currentHits}}</p>

  </div>
  <button class="lastButton" @click="previousPlayer()">Last Player</button>
  <button class="nextButton" @click="nextPlayer()">Next Player</button>

</div>
</template>



<style src="./Slider.scss" lang="scss" scoped></style>
<script src="./Slider.js"></script>
<!--<video autoplay class="spot" height="400" width="350" poster="@/assets/mini.jpg" loop controls><source
  src="https://www.youtube.com/watch?v=D4X8CZYiURA" type="video/webm"></video>!-->