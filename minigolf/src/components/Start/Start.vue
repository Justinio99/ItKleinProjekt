<template>
<div class="container">
    <input type="text" :placeholder="`Spieler ${player.id}`" v-for="(player, index) in players" :key="player.id" v-model="players[index].name">
    <button @click="addPlayer">
        Spieler hinzufügen
    </button>
    <button @click="startGame">Lets go</button>
</div>
</template>



<style src="./Start.scss" lang="scss" scoped></style>
<script src="./Start.js"></script>
