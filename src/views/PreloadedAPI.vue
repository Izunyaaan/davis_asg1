<template>
  <div>
    <v-file-input accept="text/csv" @change="atest"></v-file-input>
  </div>
</template>

<script>
export default {
  data: () => ({
    test: null,
  }),
  created() {
    fetch("https://corona.lmao.ninja/v2/historical/Brunei?lastdays=30")
      .then((response) => response.json())
      .then((data) => console.log(JSON.stringify(data)));
  },
  methods: {
    atest: (e) => {
      const reader = new FileReader();
      reader.onload = (a) => console.log(a.target.result.split(/\r?\n/));

      reader.readAsText(e);
    },
  },
};
</script>

<style>
</style>
