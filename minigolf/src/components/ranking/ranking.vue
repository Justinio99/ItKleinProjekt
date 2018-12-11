<template>
  <div class="container">
    <h1>Wähle aus</h1>
    <Podium :Players="userResults"></Podium>
    <p v-show="isLoggedIn">Möchtest du dein Resultat speichern ?</p>
    <div class="row">
      <button @click="resetUser" class="red">schliessen</button>
      <button @click="askForPlayer = true" v-show="isLoggedIn" class="green">speichern</button>
    </div>
    <div class="whichUser" v-if="askForPlayer">
      <p>Welcher Spieler warst du?</p>
      <select v-model="selectedValue" class="dropdown">
        <option disabled value>Please select one</option>
        <option v-for="user in users" :key="user" :value="user.id">{{user.name}}</option>
      </select>
      <button @click="saveToDatabase">speichern</button>
    </div>
  </div>
</template>

<style src="./ranking.scss" lang="scss" scoped></style>
<script src="./ranking.js"></script>