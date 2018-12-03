<template>
<div class="container">
  <img class="logo" alt="Social Vue" v-bind:src="picture" />

  <h1>Club Member</h1>


    <input v-model="email" type="text" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />

    <a href="#">Forgot password?</a>
   <button  @click="login">login</button><br>
   <button @click="()=> this.$router.push('/signup')">signup</button>



</div>
</template>



<style src="./login.scss" lang="scss" scoped></style>
<script src="./login.js"></script>
