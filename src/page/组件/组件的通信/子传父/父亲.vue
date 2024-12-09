<template>
    <Child @success="getMessage" />
</template>
<script setup>
import { ref } from 'vue'
import Child from './儿子.vue'
const getMessage = (value,xxx) => {
    console.log(value,xxx);
}
// const age = ref(33)
</script>
<style>

</style>