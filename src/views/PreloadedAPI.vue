<template>
  <div>
    <h1>COVID-19 In Brunei</h1>
    <h2>For the past 30 Days</h2>
    <LoadingScreen :isLoading="isLoading" />
    <v-container fluid class="d-flex flex-wrap">
      <v-card min-width="350px" width="30%" style="overflow: auto" class="ma-1">
        <v-card-title>Table Of Cases For Past 30 Days</v-card-title>
        <div id="table" />
      </v-card>
      <v-card min-width="350px" width="30%" style="overflow: auto" class="ma-1">
        <v-card-title
          >Average Cases, Deaths and Recoveries for Past 30 Days</v-card-title
        >
        <div id="pie" style="width: 100%" />
      </v-card>
      <v-card min-width="350px" width="30%" style="overflow: auto" class="ma-1">
        <v-card-title>Line Chart of Cases For Past 30 Days</v-card-title>
        <div id="line" style="width: 100%" />
      </v-card>
      <v-card min-width="350px" width="30%" style="overflow: auto" class="ma-1">
        <v-card-title>Histogram of Cases for Past 30 Days</v-card-title>
        <div id="bar" style="width: 100%" />
      </v-card>
      <v-card min-width="350px" width="30%" style="overflow: auto" class="ma-1">
        <v-card-title>Scatter Chart of Cases for Past 30 Days</v-card-title>
        <div id="scatter" style="width: 100%" />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Plotly from "plotly.js-dist-min";
import LoadingScreen from "../components/LoadingScreen.vue";

export default {
  components: {
    LoadingScreen,
  },
  data: () => ({
    isLoading: true,
    graphData: {
      table: {
        data: [
          {
            type: "table",
            header: {
              values: [
                ["<b>Date</b>"],
                ["<b>Cases</b>"],
                ["<b>Deaths</b>"],
                ["<b>Recovered</b>"],
              ],
              align: "center",
              fill: { color: "aqua" },
            },
            cells: {
              values: [],
            },
          },
        ],
        layout: {
          autosize: false,
        },
      },
      pie: {
        data: [
          {
            values: [],
            labels: ["Cases", "Deaths", "Recovered"],
            type: "pie",
          },
        ],
        layout: {},
      },
      line: {
        data: [],
        layout: {},
      },
      scatter: {
        data: [],
        layout: {},
      },
      bar: {
        data: [],
        layout: {},
      },
    },
  }),
  created() {
    fetch("https://corona.lmao.ninja/v2/historical/Brunei?lastdays=30")
      .then((response) => response.json())
      .then((data) => {
        this.isLoading = true;
        this.renderTable(data);
        this.renderPie(data);
        this.renderLine(data);
        this.renderBar(data);
        this.renderScatter(data);
        this.drawCharts();
        this.isLoading = false;
      });
  },
  methods: {
    renderTable(data) {
      const dates = Object.keys(data.timeline.cases);
      const cases = Object.values(data.timeline.cases);
      const deaths = Object.values(data.timeline.deaths);
      const recovers = Object.values(data.timeline.recovered);
      this.graphData.table.data[0].cells.values.push(dates);
      this.graphData.table.data[0].cells.values.push(cases);
      this.graphData.table.data[0].cells.values.push(deaths);
      this.graphData.table.data[0].cells.values.push(recovers);
    },
    renderPie(data) {
      const avgCases = Math.ceil(
        Object.values(data.timeline.cases).reduce((a, b) => a + b, 0) / 30
      );
      this.graphData.pie.data[0].values.push(avgCases);
      const avgDeaths = Math.ceil(
        Object.values(data.timeline.deaths).reduce((a, b) => a + b, 0) / 30
      );
      this.graphData.pie.data[0].values.push(avgDeaths);
      const avgRecoveries = Math.ceil(
        Object.values(data.timeline.recovered).reduce((a, b) => a + b, 0) / 30
      );
      this.graphData.pie.data[0].values.push(avgRecoveries);
    },
    renderScatter(data) {
      const dates = Object.keys(data.timeline.cases);
      const cases = Object.values(data.timeline.cases);
      const deaths = Object.values(data.timeline.deaths);
      const recovers = Object.values(data.timeline.recovered);
      this.graphData.scatter.data[0] = {
        x: dates,
        y: cases,
        type: "scatter",
        mode: "markers",
        name: "Cases",
      };
      this.graphData.scatter.data[1] = {
        x: dates,
        y: deaths,
        type: "scatter",
        mode: "markers",
        name: "Deaths",
      };
      this.graphData.scatter.data[2] = {
        x: dates,
        y: recovers,
        type: "scatter",
        mode: "markers",
        name: "Recoveries",
      };
    },
    renderLine(data) {
      const dates = Object.keys(data.timeline.cases);
      const cases = Object.values(data.timeline.cases);
      const deaths = Object.values(data.timeline.deaths);
      const recovers = Object.values(data.timeline.recovered);
      this.graphData.line.data[0] = {
        x: dates,
        y: cases,
        type: "scatter",
        name: "Cases",
      };
      this.graphData.line.data[1] = {
        x: dates,
        y: deaths,
        type: "scatter",
        name: "Deaths",
      };
      this.graphData.line.data[2] = {
        x: dates,
        y: recovers,
        type: "scatter",
        name: "Recoveries",
      };
    },
    renderBar(data) {
      const dates = Object.keys(data.timeline.cases);
      const cases = Object.values(data.timeline.cases);
      const deaths = Object.values(data.timeline.deaths);
      const recovers = Object.values(data.timeline.recovered);
      this.graphData.bar.data[0] = {
        x: dates,
        y: cases,
        type: "bar",
        name: "Cases",
      };
      this.graphData.bar.data[1] = {
        x: dates,
        y: deaths,
        type: "bar",
        name: "Deaths",
      };
      this.graphData.bar.data[2] = {
        x: dates,
        y: recovers,
        type: "bar",
        name: "Recoveries",
      };
    },
    drawCharts() {
      Plotly.newPlot(
        "table",
        this.graphData.table.data,
        this.graphData.table.layout
      );
      Plotly.newPlot("pie", this.graphData.pie.data, this.graphData.pie.layout);
      Plotly.newPlot(
        "scatter",
        this.graphData.scatter.data,
        this.graphData.scatter.layout
      );
      Plotly.newPlot(
        "line",
        this.graphData.line.data,
        this.graphData.line.layout
      );
      Plotly.newPlot("bar", this.graphData.bar.data, this.graphData.bar.layout);
    },
  },
};
</script>

<style>
</style>
