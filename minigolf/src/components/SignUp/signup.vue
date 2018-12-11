<template>
  <div class="container">
    <img class="logo" alt="Social Vue" v-bind:src="picture">

    <h1>Club Member</h1>

    <input v-model="email" type="text" placeholder="Email">
    <input v-model="password" type="password" placeholder="Password">
    <input v-model="firstname" type="text" placeholder="firstname">
    <input v-model="lastname" type="text" placeholder="lastname">
    <div class="isMember">
      <p>Is Club member ? </p>
      <toggle-button class="toggle" v-model="isClubMember" :labels="true"/>
    </div>
      <button @click="signUp">Sing up</button>
  </div>
</template>

<style src="./signup.scss" lang="scss" scoped></style>
<script src="./signup.js"></script>
