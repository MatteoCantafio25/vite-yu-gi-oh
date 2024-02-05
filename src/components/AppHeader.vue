<script>
export default {
    name: "AppHeader",
};
</script>

<template>
    <header class="my-4">
        <div class="left">
            <div class="blue-circle rounded-circle large bg-blue"></div>
        </div>
        <div class="right d-flex gap-3">
            <div class="red-circle rounded-circle small bg-red"></div>
            <div class="yellow-circle rounded-circle small bg-yellow"></div>
            <div class="greem-circle rounded-circle small bg-green"></div>
        </div>
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