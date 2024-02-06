<script>
import { ColorMap } from '@/components/data/index.js';
export default {
    name: "CharacterCard",
    props: {
        name: String,
        image: String,
        num: Number,
        type1: String
    },

    computed: {
        bgColor() {
            return ColorMap[this.type1];
        }
    }
};
</script>

<template>
    <!-- Card -->
    <div class="character-card text-center p-2" :style="`background-color: ${bgColor}`">
        <!-- Image -->
        <img :src="image" :alt="name" class="img-fluid rounded-circle mb-2">
        <!-- Number -->
        <p class="mb-1">{{ num }}</p>
        <!-- Name -->
        <strong class="mb-2">{{ name }}</strong>
        <!-- Type -->
        <p class="mb-2">{{ type1 }}</p>
    </div>
</template>

<style lang="scss" scoped >
.character-card {
    border-radius: 25px;
    margin: 10px;

    img {
        height: 160px;
        width: 160px;
    }
}
</style>