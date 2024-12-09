<template>
    <div>儿子</div>
    <button @click="toFather">传给父亲</button>
</template>
<script setup>
import { defineProps } from 'vue'
const emit = defineEmits(['success'])

function toFather() {
    emit('success', '儿子传给父亲的数据','fsdfds')
}

</script>
<style>

</style>