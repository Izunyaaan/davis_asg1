<template>
  <div>
    <div v-show="parsedCSVFile">
      <h1 width="">Generate some charts</h1>
      <div class="d-flex flex-wrap">
        <LoadingScreen :isLoading="isLoading" />

        <!-- Controls -->
        <v-card
          outlined
          tile
          elevation="5"
          width="30%"
          min-width="350px"
          class="ma-1"
        >
          <v-card-title>Controls</v-card-title>
          <v-card outlined tile elevation="3">
            <v-card-subtitle> Display Charts </v-card-subtitle>
            <v-card-actions class="d-flex align-start">
              <v-checkbox
                v-for="(chart, index) in renderChart"
                :key="index"
                v-model="chart.visible"
                :label="chart.chart"
                class="ma-0"
              ></v-checkbox>
            </v-card-actions>
          </v-card>
          <v-card outlined tile elevation="3">
            <v-card-title> Select Class </v-card-title>
            <v-card-actions class="d-flex align-start">
              <v-select
                :items="labels"
                item-text="name"
                v-model="selectedClass"
                @change="redrawCharts2"
              ></v-select>
            </v-card-actions>
          </v-card>
          <v-card outlined tile elevation="3">
            <v-card-title> Select Axis </v-card-title>
            <v-card-actions class="d-flex align-start">
              X:<v-select
                :items="labels"
                v-model="selectedX"
                @change="redrawCharts2"
              ></v-select>
              Y:<v-select
                :items="labels"
                v-model="selectedY"
                @change="redrawCharts2"
              ></v-select>
            </v-card-actions>
          </v-card>
        </v-card>

        <!-- Table -->
        <v-card
          outlined
          tile
          elevation="5"
          width="30%"
          min-width="350px"
          style="overflow: auto"
          v-show="renderChart[0].visible"
          class="ma-1"
        >
          <v-card-title>Table</v-card-title>
          <div id="table"></div>
        </v-card>

        <!-- Scatter -->
        <v-card
          outlined
          tile
          elevation="5"
          width="30%"
          min-width="350px"
          style="overflow: auto"
          v-show="renderChart[1].visible"
          class="ma-1"
        >
          <v-card-title>Scatter</v-card-title>
          <div id="scatter" style="width: 100%"></div>
        </v-card>

        <!-- Bar -->
        <v-card
          outlined
          tile
          elevation="5"
          width="30%"
          min-width="350px"
          style="overflow: auto"
          v-show="renderChart[2].visible"
          class="ma-1"
        >
          <v-card-title>Histogram</v-card-title>
          <div id="bar" style="width: 100%"></div>
        </v-card>

        <!-- Pie -->
        <v-card
          outlined
          tile
          elevation="5"
          width="30%"
          min-width="350px"
          style="overflow: auto"
          v-show="renderChart[3].visible"
          class="ma-1"
        >
          <v-card-title>Pie</v-card-title>
          <div id="pie" style="width: 100%"></div>
        </v-card>

        <!-- Line -->
        <v-card
          outlined
          tile
          elevation="5"
          width="30%"
          min-width="350px"
          style="overflow: auto"
          v-show="renderChart[4].visible"
          class="ma-1"
        >
          <v-card-title>Line</v-card-title>
          <div id="line" style="width: 100%"></div>
        </v-card>
      </div>
    </div>
    <div v-show="!parsedCSVFile">
      <v-file-input
        accept="text/csv"
        @change="parseInput"
        label="Choose a file..."
      ></v-file-input>
    </div>
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
    dataFile: null,
    renderChart: [
      { chart: "Table", visible: true },
      { chart: "Scatter", visible: true },
      { chart: "Bar", visible: true },
      { chart: "Pie", visible: true },
      { chart: "Line", visible: true },
    ],
    labels: [],
    selectedClass: "",
    selectedX: "",
    selectedY: "",
    parsedCSVFile: "",
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
        layout: {
          autosize: false,
        },
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
      bar: {
        data: [],
        layout: {
          autosize: true,
          xaxis: {
            title: {
              text: "Class",
            },
          },
          yaxis: {
            title: {
              text: "Dimensions",
            },
          },
        },
      },
      pie: {
        data: [
          {
            values: [],
            labels: [],
            type: "pie",
          },
        ],
        layout: {
          autosize: true,
        },
      },
      line: {
        data: [],
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
    parseInput(input) {
      const reader = new FileReader();
      this.isLoading = true;
      reader.readAsText(input);
      reader.onload = (a) => {
        this.parsedCSVFile = a.target.result;
        this.parseIntoTable(this.parsedCSVFile);
        this.redrawCharts(this.parsedCSVFile);
        setTimeout(() => this.redrawCharts2(), 500);
      };
    },
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
            this.labels.push(rowArr[i]);
          }
          this.selectedX = rowArr[1];
          this.selectedY = rowArr[2];
          this.selectedClass = rowArr[rowArr.length - 1];
        } else if (index < dataArr.length - 1) {
          //populate cells
          let rowArr = item.split(",");
          rowArr.forEach((rowItem, rowIndex) => {
            this.graphData.table.data[0].cells.values[rowIndex].push(rowItem);
          });
        }
      });
    },
    parseIntoScatter(data) {
      let dataArr = data.split(/\r?\n/);
      let headers = dataArr[0].split(",");
      let labelIndex, xIndex, yIndex;
      let labels = [];
      let chartData = [];
      headers.forEach((item, index) => {
        if (item == this.selectedClass) {
          labelIndex = index;
        }
        if (item == this.selectedX) {
          xIndex = index;
          this.graphData.scatter.layout.xaxis.title.text = item;
        }
        if (item == this.selectedY) {
          yIndex = index;
          this.graphData.scatter.layout.yaxis.title.text = item;
        }
      });
      for (let i = 1; i < dataArr.length - 1; i++) {
        let rowArr = dataArr[i].split(",");
        if (!labels.includes(rowArr[labelIndex])) {
          labels.push(rowArr[labelIndex]);
          chartData.push({
            name: rowArr[labelIndex],
            x: [],
            y: [],
            mode: "markers",
            type: "scatter",
          });
        }
      }
      for (let i = 1; i < dataArr.length - 1; i++) {
        let rowArr = dataArr[i].split(",");
        chartData[labels.indexOf(rowArr[labelIndex])].x.push(rowArr[xIndex]);
        chartData[labels.indexOf(rowArr[labelIndex])].y.push(rowArr[yIndex]);
      }
      this.graphData.scatter.data = chartData;
    },
    parseIntoBar(data) {
      let dataArr = data.split(/\r?\n/);
      let headers = dataArr[0].split(",");
      let labelIndex, xIndex, yIndex;
      let labels = [];
      let chartData = [];
      headers.forEach((item, index) => {
        if (item == this.selectedClass) {
          labelIndex = index;
        }
        if (item == this.selectedX) {
          xIndex = index;
          this.graphData.bar.layout.xaxis.title.text = item;
        }
        if (item == this.selectedY) {
          yIndex = index;
          this.graphData.bar.layout.yaxis.title.text = item;
        }
      });
      for (let i = 1; i < dataArr.length - 1; i++) {
        let rowArr = dataArr[i].split(",");
        if (!labels.includes(rowArr[labelIndex])) {
          labels.push(rowArr[labelIndex]);
          chartData.push({
            name: rowArr[labelIndex],
            x: [],
            y: [],
            type: "bar",
          });
        }
      }
      for (let i = 1; i < dataArr.length - 1; i++) {
        let rowArr = dataArr[i].split(",");
        chartData[labels.indexOf(rowArr[labelIndex])].x.push(rowArr[xIndex]);
        chartData[labels.indexOf(rowArr[labelIndex])].y.push(rowArr[yIndex]);
      }
      this.graphData.bar.data = chartData;
    },
    parseIntoPie(data) {
      let dataArr = data.split(/\r?\n/);
      let headers = dataArr[0].split(",");
      let labelIndex;
      let labels = [];
      let labelCount = [];
      headers.forEach((item, index) => {
        if (item == this.selectedClass) {
          labelIndex = index;
        }
      });
      for (let i = 1; i < dataArr.length - 1; i++) {
        let rowArr = dataArr[i].split(",");
        if (labels.includes(rowArr[labelIndex])) {
          let rowIndex = labels.indexOf(rowArr[labelIndex]);
          labelCount[rowIndex] += 1;
        } else {
          labels.push(rowArr[labelIndex]);
          labelCount.push(1);
        }
      }
      this.graphData.pie.data[0].values = labelCount;
      this.graphData.pie.data[0].labels = labels;
    },
    parseIntoLine(data) {
      let dataArr = data.split(/\r?\n/);
      let headers = dataArr[0].split(",");
      let labelIndex, xIndex, yIndex;
      let labels = [];
      let chartData = [];
      headers.forEach((item, index) => {
        if (item == this.selectedClass) {
          labelIndex = index;
        }
        if (item == this.selectedX) {
          xIndex = index;
          this.graphData.line.layout.xaxis.title.text = item;
        }
        if (item == this.selectedY) {
          yIndex = index;
          this.graphData.line.layout.yaxis.title.text = item;
        }
      });
      for (let i = 1; i < dataArr.length - 1; i++) {
        let rowArr = dataArr[i].split(",");
        if (!labels.includes(rowArr[labelIndex])) {
          labels.push(rowArr[labelIndex]);
          chartData.push({
            name: rowArr[labelIndex],
            x: [],
            y: [],
            type: "scatter",
          });
        }
      }
      for (let i = 1; i < dataArr.length - 1; i++) {
        let rowArr = dataArr[i].split(",");
        chartData[labels.indexOf(rowArr[labelIndex])].x.push(rowArr[xIndex]);
        chartData[labels.indexOf(rowArr[labelIndex])].y.push(rowArr[yIndex]);
      }
      this.graphData.line.data = chartData;
    },
    redrawCharts(data) {
      //Redraw logic goes here
      this.isLoading = true;
      //this.parseIntoTable(data);
      this.parseIntoPie(data);
      this.parseIntoScatter(data);
      this.parseIntoLine(data);
      this.parseIntoBar(data);
      this.plotCharts();
      this.isLoading = false;
    },
    redrawCharts2() {
      //Redraw logic goes here
      this.isLoading = true;
      //this.parseIntoTable(data);
      this.parseIntoPie(this.parsedCSVFile);
      this.parseIntoScatter(this.parsedCSVFile);
      this.parseIntoLine(this.parsedCSVFile);
      this.parseIntoBar(this.parsedCSVFile);
      this.plotCharts();
      this.isLoading = false;
    },
    plotCharts() {
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
