<template>
<div class="container">

<Podium :Players="userResults"></Podium>

<button @click="resetUser">Close</button>
<button @click="askForPlayer = true" v-show="isLoggedIn">Abspeichern</button>
<div class="whichUser" v-if="askForPlayer">
    <p>Welcher Spieler warst du?</p>
     <select v-model="selectedValue">
         <option disabled value="">Please select one</option>
         <option v-for="user in users" :key="user" :value="user.id" >{{user.name}}</option>
     </select>
     <button @click="saveToDatabase">Save</button>
</div>
</div>
</template>



<style src="./ranking.scss" lang="scss" scoped></style>
<script src="./ranking.js"></script>