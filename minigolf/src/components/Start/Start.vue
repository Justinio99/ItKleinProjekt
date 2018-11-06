<template>
<div class="container">

     <div class="players">
    <input style="width: 181px" class="addPlayer" type="text" :placeholder="`Spieler ${player.id}`" v-for="(player, index) in players" :key="player.id" v-model="players[index].name">
    </div>
    <button @click="addPlayer" class="btn-addPlayer" style="font-size: 12px">
        Spieler hinzufügen
    </button>
   <button data-hover="Lets Go !" @click="startGame"><div>Start</div></button>
</div>
</template>


<style src="./Start.scss" lang="scss" scoped></style>
<script src="./Start.js"></script>


