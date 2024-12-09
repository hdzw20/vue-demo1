<template>

    <Head />
    <div class="wrapper">
        <div class="left">
            <Menu />
        </div>
        <div class="right">
            <Body />
        </div>
    </div>
</template>
<script setup>
import Head from "./头部.vue"
import Body from "./身体.vue"
import Menu from "./菜单.vue"
</script>
<style>
.wrapper {
    display: flex;
    flex-direction: row;
}

.left {
    width: 200px;
    flex: none;
}

.right {
    float: 1;
}
</style>