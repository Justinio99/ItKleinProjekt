
  <template>
  <div>
    <p>Bitte wählen sie eine Zeitspanne aus:</p>
    <select v-on:change="handler" v-model="selected" data-init="auto">
      <option disabled selected>Choose your Interval</option>
      <option value="oneMonth">letzter Monat</option>
      <option value="threeMonths">letzte 3 Monate</option>
      <option value="year">Jahr</option>
    </select>
    <div class="chart-container">
      <statistik-chart :data="chartObj" :Time="selected"></statistik-chart>
    </div>
  </div>
</template>



<style src="./statistik.scss" lang="scss" scoped></style>
<script src="./statistik.js"></script>
