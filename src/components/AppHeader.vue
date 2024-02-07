<script>
import SelectType from './SelectType.vue';
export default {
    name: "AppHeader",
    data: () => ({
        options: [
            "Bug",
            "Dark",
            "Dragon",
            "Electric",
            "Fairy",
            "Fighting",
            "Fire",
            "Flying",
            "Ghost",
            "Grass",
            "Ground",
            "Ice",
            "Normal",
            "Poison",
            "Psychic",
            "Rock",
            "Steel",
            "Water"
        ],
    }),
    components: {
        SelectType,
    },

    emits: ["select-type"],

    methods: {
        submitOption(option) {
            this.$emit('select-type', option)
        }
    },


};
</script>

<template>
    <!-- Header -->
    <header class="my-4">
        <!-- Left side Header -->
        <div class="left">
            <div class="blue-circle rounded-circle large bg-blue"></div>
        </div>
        <!-- Right side Header -->
        <div class="right d-flex gap-3">
            <div class="red-circle rounded-circle small bg-red"></div>
            <div class="yellow-circle rounded-circle small bg-yellow"></div>
            <div class="greem-circle rounded-circle small bg-green"></div>
        </div>
        <!-- Select Component -->
        <SelectType default-label="All" :options="options" @submit-option="submitOption" />
    </header>
</template>

<style lang="scss" scoped >
header {
    max-width: 1300px;
    margin: 0 auto;
    position: relative;

    .right {
        position: absolute;
        top: 0;
        left: 100px;
    }

    .small {
        height: 50px;
        width: 50px;
        border: 2px solid white;
    }
}

.large {
    height: 90px;
    width: 90px;
    border: 2px solid white;
}

.bg-red {
    background-color: #FF3E3E;
}

.bg-blue {
    background-color: #3B3BFF;
}

.bg-yellow {
    background-color: #FFFF37;
}

.bg-green {
    background-color: #52A952;
}
</style>