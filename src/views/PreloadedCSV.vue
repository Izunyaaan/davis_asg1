<template>
  <div class="d-flex flex-wrap">
    <LoadingScreen :isLoading="isLoading" />
    <h1>Charts of Salary vs Working Experience</h1>

    <!-- Controls -->
    <v-card outlined tile elevation="5" width="33%" min-width="350px">
      <v-card-title>Controls</v-card-title>
      <v-card-text>controls go here</v-card-text>
    </v-card>

    <!-- Table -->
    <v-card outlined tile elevation="5" width="33%" min-width="350px">
      <v-card-title>Table</v-card-title>
      <Plotly :data="graphData.table.data" :display-mode-bar="false"></Plotly>
    </v-card>

    <!-- Scatter -->
    <v-card outlined tile elevation="5" width="33%" min-width="350px">
      <v-card-title>Scatter</v-card-title>
      <!-- <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly> -->
    </v-card>

    <!-- Bar -->
    <v-card outlined tile elevation="5" width="33%" min-width="350px">
      <v-card-title>Histogram</v-card-title>
      <!-- <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly> -->
    </v-card>

    <!-- Pie -->
    <v-card outlined tile elevation="5" width="33%" min-width="350px">
      <v-card-title>Pie</v-card-title>
      <!-- <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly> -->
    </v-card>

    <!-- Line -->
    <v-card outlined tile elevation="5" width="33%" min-width="350px">
      <v-card-title>Line</v-card-title>
      <!-- <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly> -->
    </v-card>
  </div>
</template>

<script>
import { Plotly } from "vue-plotly";
import LoadingScreen from "../components/LoadingScreen.vue";

export default {
  components: {
    Plotly,
    LoadingScreen,
  },
  created() {
    this.loadCSVData(
      "https://raw.githubusercontent.com/Izunyaaan/davis_asg1/main/src/assets/Salary.csv"
    ).then((data) => {
      this.parseIntoTable(data);
      this.isLoading = false;
    });
  },
  data: () => ({
    isLoading: true,
    graphData: {
      table: {
        data: [
          {
            type: "table",
            header: {
              values: [],
              align: "center",
              fill: { color: "grey" },
              font: { color: "white" },
            },
            cells: {
              values: [],
              align: "center",
            },
          },
        ],
      },
      scatter: {
        data: [
          {
            x: [],
            y: [],
            type: "scatter",
            mode: "markers",
          },
        ],
        layout: {
          autosize: true,
          xaxis: {
            title: {
              text: "",
            },
          },
          yaxis: {
            title: {
              text: "",
            },
          },
        },
      },
    },
  }),
  methods: {
    loadCSVData(url) {
      // Simple GET request
      const requestOptions = {
        method: "GET",
      };
      return fetch(url, requestOptions).then((response) => response.text());
    },

    parseIntoTable(data) {
      let dataArr = data.split(/\r?\n/);
      dataArr.forEach((item, index) => {
        if (index === 0) {
          //split row
          let rowArr = item.split(",");
          //populate header
          this.graphData.table.data[0].header.values = rowArr;
          for (let i = 0; i < rowArr.length; i++) {
            this.graphData.table.data[0].cells.values.push([]);
          }
        } else {
          //populate cells
          let rowArr = item.split(",");
          rowArr.forEach((rowItem, rowIndex) => {
            this.graphData.table.data[0].cells.values[rowIndex].push(rowItem);
          });
        }
      });
    },
    parseIntoScatter(data) {
      console.log(data);
    },
  },
};
</script>
