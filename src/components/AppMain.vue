<script>
import CharactersList from './characters/CharactersList.vue';
export default {
    name: "AppMain",
    components: { CharactersList },
};
</script>

<template>
    <!-- Container -->
    <main class="container pokedex-base">
        <!-- Characters List Component -->
        <CharactersList />
    </main>
</template>

<style lang="scss" scoped >
.pokedex-base {
    height: 680px;
    width: 80%;
    background-color: #DEDEDE;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>