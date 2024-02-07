<script>
export default {
    name: "SelectType",
    emits: ["submit-option"],
    data: () => ({
        selectedOption: "All",
    }),
    methods: {
        submitOption() {
            this.$emit('submit-option', this.selectedOption);
            console.log("select option", this.selectedOption)
        },

        resetOption() {
            this.submitOption();
        }
    },
    props: {
        defaultLabel: String,
        options: Array
    }
};
</script>

<template>
    <!-- Select -->
    <select @change="submitOption" v-model="selectedOption">
        <!-- Options -->
        <option @change="resetOption" selected>{{ defaultLabel }}</option>
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