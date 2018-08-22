<template>
<div class="container">
  <img class="logo" alt="Social Vue" v-bind:src="picture" />

  <h1>Club Member</h1>

  <form>
    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />

    <a href="#">Forgot password?</a>
    <input type="submit" value="Sign In" />
  </form>

</div>
</template>



<style src="./login.scss" lang="scss" scoped></style>
<script src="./login.js"></script>
