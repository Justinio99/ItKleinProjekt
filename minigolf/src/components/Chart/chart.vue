<template>
 <div id="app">

<div class="select">
  <select v-on:change="log" v-model='selected' data-init="auto" multiple >
    <option disabled selected>Choose your Interval</option>
      <option value="year">Year</option>
      <option value="threeMonths">3 Months</option>
      <option value="oneMonth">1 Month</option>
  </select>
</div>

    <div class="container">
      <div class="Chart__list">
        <div class="Chart">
          <line-example :SelectedInterval="selected"></line-example>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Chart.js"/>
<style src="./Chart.scss"/>