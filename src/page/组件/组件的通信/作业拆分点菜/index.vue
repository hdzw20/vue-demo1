<template>
    <div class="wrapper">
        <Add @addMenu="handleAddMenu"/>
        
        <List :menu="menu" @deleteMenu="handleDelete"/>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Add from './add.vue';
import List from './list.vue';

const menu = ref([]);
const handleAddMenu = (value) => {
    menu.value.push(value);
}

const handleDelete = (index) => {
    menu.value.splice(index, 1);
}
</script>
<style>

</style>