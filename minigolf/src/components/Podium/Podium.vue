<template>
<div>

   <div v-if="players.length >= 3" class="container">
     <div class="place2">
       <p class="title2">{{players[0].name}}</p>
       <p class="rank">2</p>
     </div>
     <div class="place1">
       <p class="title1">{{players[0].name}}</p>
       <p class="rank">1</p>
     </div>
     <div class="place3">
       <p class="title3">{{players[0].name}}</p>
       <p class="rank">3</p>
     </div>
     <div class="all-results">
       <div v-for="(player,index) in players" :key="index">
         <p>{{index+1}}. {{player.name}}: {{player.result}} schläge</p>
       </div>
     </div>
   </div>
   
   <div v-if="players.length >=2">
     <p>{{players[0].name}} ist auf dem hat das Spiel gewonnen mit {{players[0].result}} schlägen</p>
     <p>{{players[1].name}} ist auf dem zweiten Platz mit {{players[1].result}} schlägen</p>
   </div>
    <div v-if="players.length >=1">
     <p>Du hattest {{players[0].result}} schläge in dieser Runde</p>
   </div>

   </div>
</template>


<script src="./Podium.js"></script>
<style src="./Podium.scss" lang="scss"></style>
