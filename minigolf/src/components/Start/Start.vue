<template>
<<<<<<< HEAD
<div class="container">
     <button @click="startGame">Lets go</button>
     <div class="players">
    <input class="addPlayer" type="text" :placeholder="`Spieler ${player.id}`" v-for="(player, index) in players" :key="player.id" v-model="players[index].name">
    </div>
=======
<div class="addPlayer-container">
    <input type="text" :placeholder="`Spieler ${player.id}`" v-for="(player, index) in players" :key="player.id" v-model="players[index].name">
>>>>>>> 60a930176bcd5aed326e292083ee5f7f2cf863b4
    <button @click="addPlayer">
        Spieler hinzufügen
    </button>
   
</div>
</template>



<style src="./Start.scss" lang="scss" scoped></style>
<script src="./Start.js"></script>


