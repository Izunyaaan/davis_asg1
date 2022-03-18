<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!-- Avatar -->
      <div class="text-center ma-3">
        <v-avatar size="60%">
          <img
            src="https://i.pinimg.com/originals/a5/d7/c4/a5d7c4d626d7aa643912f2d24f8cc8c1.png"
            alt="Picture of Rimuru Tempest"
          />
        </v-avatar>
        <h1>Faiz 'Izunyan' Sufrikhan</h1>
      </div>
      <v-divider></v-divider>
      <!-- Navigation -->
      <v-list>
        <v-list-item
          v-for="(link, index) in links"
          :key="index"
          :to="link.route"
        >
          <v-list-item-icon
            ><v-icon>{{ link.icon }}</v-icon></v-list-item-icon
          >
          <v-list-item-title>{{ link.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        {{ this.$route.name }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Theme Changer -->
      <theme-toggle />
    </v-app-bar>

    <v-main>
      <!-- Dynamic Components -->
      <router-view class="pa-3"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import ThemeToggle from "./components/ThemeToggle.vue";
export default {
  components: {
    ThemeToggle,
  },
  mounted: () => {
    document.title = "Faiz DAVIS Asg 1";
  },
  data: () => ({
    drawer: null,
    links: [
      { name: "Loaded from CSV", icon: "mdi-file-delimited", route: "/" },
      { name: "Loaded from API", icon: "mdi-cloud-download", route: "/api" },
      { name: "Load a CSV", icon: "mdi-upload", route: "/loadCSV" },
    ],
  }),
  methods: {},
};
</script>