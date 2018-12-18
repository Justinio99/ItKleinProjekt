<template>
<div>

   <div v-if="Players.length >= 3" class="container">
     <div class="podium">
     <div class="place2">
       <b class="title2">{{Players[1].name}}</b>
       <p class="rank">2</p>
     </div>
     <div class="place1">
       <b class="title1">{{Players[0].name}}</b>
       <p class="rank">1</p>
     </div>
     <div class="place3">
       <b class="title3">{{Players[2].name}}</b>
       <p class="rank">3</p>
     </div>
     </div>
     <div class="pesche">
     <div class="all-results">
       <div v-for="(player,index) in Players" :key="index">
         <p>{{index+1}}. {{player.name}}: {{player.result}} schläge</p>
       </div>
     </div>
     </div>
   </div>
   
   <div v-if="Players.length ==2">
     <p><b>{{Players[0].name}}</b> ist auf dem hat das Spiel gewonnen mit <b>{{Players[0].result}} </b>schlägen</p>
     <p><b>{{Players[1].name}}</b> ist auf dem zweiten Platz mit <b>{{Players[1].result}}</b> schlägen</p>
   </div>
    <div v-if="Players.length ==1">
     <p>Du hattest {{Players[0].result}} schläge in dieser Runde</p>
   </div>

   </div>
</template>


<script src="./Podium.js"></script>
<style src="./Podium.scss" lang="scss"></style>
