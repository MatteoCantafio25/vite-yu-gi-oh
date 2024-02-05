<script>
import axios from 'axios';
import { store } from '@/components/data/store.js';
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: "Vite yu-gi-oh",
  components: { AppMain, AppHeader },
  created() {
    axios.get(endpoint).then(res => {
      store.characters = res.data.docs;
    })
  },
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './assets/scss/style.scss';

#app {
  height: 100vh;
}
</style>
