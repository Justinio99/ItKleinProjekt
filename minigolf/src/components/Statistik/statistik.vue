<template>
  <div class="container">
    <h1>Zeitspanne auswählen</h1>
    <select class="dropdown" v-on:change="handler" v-model="selected" data-init="auto">
      <option disabled selected>Choose your Interval</option>
      <option value="oneMonth">letzter Monat</option>
      <option value="threeMonths">letzte 3 Monate</option>
      <option value="year">Jahr</option>
    </select>
      <statistik-chart class="chart" :data="chartObj" :Time="selected"></statistik-chart>
  </div>
</template>



<style src="./statistik.scss" lang="scss" scoped></style>
<script src="./statistik.js"></script>
