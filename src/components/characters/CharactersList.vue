<script>
import { store } from '@/components/data/store.js';
import CharacterCard from './CharacterCard.vue';
export default {
    name: "CharactersList",
    data: () => ({
        store,
    }),
    components: {
        CharacterCard
    },
}
</script>

<template>
    <section id="pokemon-characters" class="my-5">
        <div class="row g-2 row-cols-5">
            <div class="col" v-for="character in store.characters" :key="character.id">
                <CharacterCard :name="character.name" :image="character.imageUrl" :num="character.number"
                    :type1="character.type1" />
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped >
#pokemon-characters {
    background-color: #717579;
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>