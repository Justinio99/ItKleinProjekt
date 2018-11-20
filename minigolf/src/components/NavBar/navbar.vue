<template>
<div class="nav-bar">
<ul>
  <li @click="showLogin"><a class="active">Login</a></li>
  <li @click="logout"><a class="active">Logout</a></li>
  <li @click="showHome"><a class="active">Home</a></li>
</ul>

</div>
</template>



<style src="./navbar.scss" lang="scss" scoped></style>
<script src="./navbar.js"></script>
