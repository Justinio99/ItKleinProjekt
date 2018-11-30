<template>
<div class="container">
 <select v-on:change="log" v-model='selected' data-init="auto" multiple >
    <option disabled selected>Choose your Interval</option>
      <option value="year">Year</option>
      <option value="threeMonths">3 Months</option>
      <option value="oneMonth">1 Month</option>
  </select>
<line-chart></line-chart>

</div>
</template>



<style src="./chart.scss" lang="scss" scoped></style>
<script src="./chart.js"></script>
