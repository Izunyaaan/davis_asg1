<template>
  <div class="d-flex flex-wrap">
    <div
      style="
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
      "
      class="background d-flex justify-center"
      v-show="isLoading"
    >
      <p class="text-h1 pa-3">Loading</p>
      <v-progress-circular
        indeterminate
        size="75"
        class="pa-3"
      ></v-progress-circular>
    </div>
    <v-card outlined tile elevation="5" width="33%" min-width="350px">
      <v-card-title>{{ this.test }}</v-card-title>
      <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
    </v-card>
    <v-card outlined tile elevation="5" width="33%" min-width="350px">
      <v-card-title>{{ this.test }}</v-card-title>
      <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
    </v-card>
    <v-card outlined tile elevation="5" width="33%" min-width="350px">
      <v-card-title>{{ this.test }}</v-card-title>
      <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
    </v-card>
    <v-card outlined tile elevation="5" width="33%" min-width="350px">
      <v-card-title>{{ this.test }}</v-card-title>
      <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
    </v-card>
    <v-card outlined tile elevation="5" width="33%" min-width="350px">
      <v-card-title>{{ this.test }}</v-card-title>
      <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
    </v-card>
    <v-card outlined tile elevation="5" width="33%" min-width="350px">
      <v-card-title>{{ this.test }}</v-card-title>
      <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
    </v-card>
  </div>
</template>

<script>
import { Plotly } from "vue-plotly";

export default {
  components: {
    Plotly,
  },
  created() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "GET",
    };
    fetch(
      "https://corona.lmao.ninja/v2/historical/Brunei?lastdays=30",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
  data: () => ({
    isLoading: true,
    data: [
      {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: "scatter",
      },
    ],
    layout: {
      title: "My graph",
      autosize: true,
    },
  }),
};
</script>
