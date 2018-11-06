<template>
<div class="container">

  <h1>Club Member</h1>

    <input v-model="email" type="text" placeholder="Email" /><br>
    <input v-model="password" type="password" placeholder="Password" /><br>
    <input v-model="firstname" type="password" placeholder="firstname" /><br>
    <input v-model="lastname" type="password" placeholder="lastname" /><br>
    <p>Is Club member</p><toggle-button v-model="isClubMember" :labels="true"/><br>

  <button @click="signUp">Create Account</button>
 


</div>
</template>



<style src="./signup.scss" lang="scss" scoped></style>
<script src="./signup.js"></script>
