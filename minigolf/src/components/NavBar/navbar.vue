<template>
<div class="nav-bar">
<ul>
  <li  v-show="!getLoggedIn" @click="showLogin"><a class="active">Login</a></li>
  <li v-show="getLoggedIn" @click="logout"><a class="active">Logout</a></li>
   <li v-show="getLoggedIn" @click="redirect"><a class="active">Statistik</a></li>
    <li v-if="gameIsPlaying" @click="currentGame"><a class="active">Aktuelles Spiel</a></li>
  <li @click="showHome"><a class="active">Home</a></li>
</ul>

</div>
</template>



<style src="./navbar.scss" lang="scss" scoped></style>
<script src="./navbar.js"></script>
