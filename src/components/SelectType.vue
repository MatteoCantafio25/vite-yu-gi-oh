<script>
export default {
    name: "SelectType",
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
        selectOption: "All",
    }),
    emits: ["submit-option"],

    methods: {
        submitOption() {
            this.$emit('submit-option', this.selectOption);
            console.log("select option", this.selectOption)
        },

        resetOption() {
            this.submitOption();
        }
    }
};
</script>

<template>
    <!-- Select -->
    <select @change="submitOption" v-model="selectOption">
        <!-- Options -->
        <option @change="resetOption" selected>All</option>
        <option v-for="(option, i) in options" :key="i" :value="option">{{ option }}</option>
    </select>
</template>

<style lang="scss" scoped >
select {
    height: 30px;
    width: 100px;
    position: absolute;
    right: 0;
    top: 0;
}
</style>