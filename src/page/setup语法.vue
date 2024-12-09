<template>
    <div>
    <button @click="changeName">换</button>
    <div>{{ name }}</div>
    <a :href="url">点我</a>
    </div>
</template>
<script setup>

import { ref } from 'vue';

    const name = ref("张三");
    const url = ref("https://www.baidu.com");
    const changeName = () => {
        if (name.value == "张三") {
            name.value = "李四";
        } else {
            name.value = "张三";
        }
        url.value = "https://qq.com";
    }
</script>
<style>

</style>