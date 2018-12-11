<template>
<div>
  <div class="track-container">
    <Flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell"><iframe v-show="showVideo" width="247.5" height="450" src="https://www.youtube.com/embed/jiQ5CGZbXfc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="carousel-cell"><iframe v-show="showVideo" width="247.5" height="450" src="https://www.youtube.com/embed/qq7YH0ExIic" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="carousel-cell"><iframe v-show="showVideo" width="247.5" height="450" src="https://www.youtube.com/embed/5lgEQwx-_iw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="carousel-cell"><iframe v-show="showVideo" width="247.5" height="450" src="https://www.youtube.com/embed/rKUwYjLk-ls" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="carousel-cell"><iframe v-show="showVideo" width="247.5" height="450" src="https://www.youtube.com/embed/lLEzRYh-dVY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="carousel-cell"><iframe v-show="showVideo" width="247.5" height="450" src="https://www.youtube.com/embed/MQ7kxKIRX_8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="carousel-cell"><iframe v-show="showVideo" width="247.5" height="450" src="https://www.youtube.com/embed/tKX8cH3v3nA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="carousel-cell"><iframe v-show="showVideo" width="247.5" height="450" src="https://www.youtube.com/embed/OEifzchsPeM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="carousel-cell"><iframe v-show="showVideo" width="247.5" height="450" src="https://www.youtube.com/embed/Iuv58hIpyw8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="carousel-cell"><iframe v-show="showVideo" width="247.5" height="450" src="https://www.youtube.com/embed/8Y0okLtfP3g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="carousel-cell"><iframe v-show="showVideo" width="247.5" height="450" src="https://www.youtube.com/embed/5uy1asZvu_0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="carousel-cell"><iframe v-show="showVideo" width="247.5" height="450" src="https://www.youtube.com/embed/BE5oxJMiBj8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="carousel-cell"><iframe v-show="showVideo" width="247.5" height="450" src="https://www.youtube.com/embed/DPebiFKciRQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="carousel-cell"><iframe v-show="showVideo" width="247.5" height="450" src="https://www.youtube.com/embed/mju8AkNplnY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="carousel-cell"><iframe v-show="showVideo" width="247.5" height="450" src="https://www.youtube.com/embed/LtmXHGjNXMM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="carousel-cell"><iframe v-show="showVideo" width="247.5" height="450" src="https://www.youtube.com/embed/RUKkGaUfWoY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="carousel-cell"><iframe v-show="showVideo" width="247.5" height="450" src="https://www.youtube.com/embed/1DlmWa67miE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="carousel-cell"><iframe v-show="showVideo" width="247.5" height="450" src="https://www.youtube.com/embed/CenDfj10tEo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </Flickity>
  </div>
  <div class="counter-container" >
<!-- <button @click="addHit">Increase hit</button> -->
<div class="show-video-container">
  <button @click="toggleVieo" >Show Video</button>
</div>
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