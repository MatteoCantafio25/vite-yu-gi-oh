<script>
export default {
    name: "CharacterCard",
    props: {
        name: String,
        image: String,
        num: Number,
        type1: String
    }
};
</script>

<template>
    <div class="character-card text-center p-2"
        :class="{ 'bg-grass': type1 === 'Grass' }, { 'bg-fire': type1 === 'Fire' }, { 'bg-water': type1 === 'Water' }">
        <img :src="image" :alt="name" class="img-fluid rounded-circle mb-2">
        <p class="mb-1">{{ num }}</p>
        <strong class="mb-2">{{ name }}</strong>
        <p class="mb-2">{{ type1 }}</p>
    </div>
</template>

<style lang="scss" scoped >
@use '@/assets/scss/_vars.scss' as *;


.character-card {
    background-color: $background-grass;
    border-radius: 25px;
    margin: 10px;

    img {
        height: 160px;
        width: 160px;
    }
}

.bg-grass {
    background-color: $background-grass;
}

.bg-fire {
    background-color: $background-fire;
}

.bg-water {
    background-color: $background-water;
}
</style>