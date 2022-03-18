<template>
  <div
    style="
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 3;
    "
    class="background d-flex justify-start flex-column text-center"
    v-if="isLoading"
  >
    <p class="text-h1 pa-3">Loading</p>
    <v-spacer
      ><v-progress-circular
        indeterminate
        size="75"
        class="pa-3"
      ></v-progress-circular
    ></v-spacer>
  </div>
</template>

<script>
export default {
  props: ["isLoading"],
};
</script>

<style>
</style>