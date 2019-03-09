<template>
  <div class="container">
    <h2 style="width: 80%">Herzlich willkommen auf der Minigolfanlage Waldau</h2>
    <h1>spieler erfassen</h1>
    <input
      e="width: 181px"
      class="addPlayer"
      type="text"
      :placeholder="`Spieler ${player.id}`"
      v-for="(player, index) in players"
      :key="player.id"
      v-model="players[index].name"
    >
    <div class="row" @click="addPlayer">
      <div class="plus">
        <span>+</span>
      </div>
      <p>Spieler hinzufügen</p>
    </div>
    <button @click="startGame">Spiel starten</button>
    <h2 style="width: 58%;">Wir wünschen „Gut Loch“</h2>
  </div>
</template>


<style src="./Start.scss" lang="scss" scoped></style>
<script src="./Start.js"></script>


