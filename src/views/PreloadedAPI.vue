<template>
  <div>
    <v-file-input accept="text/csv" @change="atest"></v-file-input>
  </div>
</template>

<script>
export default {
  mounted: () => {
    document.title = "Test";
  },
  data: () => ({
    test: null,
  }),
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
