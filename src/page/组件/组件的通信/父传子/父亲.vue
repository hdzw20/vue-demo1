<template>
    <Child name="小周" :age="20" />
</template>
<script setup>
import { ref } from 'vue'
import Child from './儿子.vue'

const age = ref(33)
</script>
<style>

</style>