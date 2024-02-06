<script>
import axios from 'axios';
import { store } from '@/components/data/store.js';
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: "Vite yu-gi-oh",
  components: { AppMain, AppHeader },

  methods: {

    fetchCharacters(endpoint) {
      axios.get(endpoint).then(res => {
        store.characters = res.data.docs;
      })
    },

    selectType(option) {
      if (option === "All") {
        this.fetchCharacters(endpoint);
      } else {
        const selectEndpoint = `${endpoint}?eq[type1]=${option}`
        this.fetchCharacters(selectEndpoint);
        console.log(selectEndpoint)
      }
    }
  },

  created() {
    this.fetchCharacters(endpoint);
  },
}
</script>

<template>
  <!-- Header Component -->
  <AppHeader @select-type="selectType" />
  <!-- Main Component -->
  <AppMain />
</template>

<style lang="scss">
@use './assets/scss/style.scss';

#app {
  height: 100vh;
}
</style>
