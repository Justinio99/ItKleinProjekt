<template>
<div class="container">
     <!-- <button class="startButton" @click="startGame">Lets go</button> -->
     <Button textName="Spiel"></Button>
     <div class="players">
    <input class="addPlayer" type="text" :placeholder="`Spieler ${player.id}`" v-for="(player, index) in players" :key="player.id" v-model="players[index].name">
    </div>
    <button @click="addPlayer">
        Spieler hinzufügen
    </button>
   
</div>
</template>



<style src="./Start.scss" lang="scss" scoped></style>
<script src="./Start.js"></script>


