<template>
    <div class="wrapper">
        <input type="text" placeholder="请输入菜品名称" v-model="menu">
        <button @click="handleCreate">新增菜</button>
    </div>
</template>
<script setup>
import { defineEmits,ref} from 'vue'

const menu = ref('')
const emit = defineEmits(['addMenu'])

const handleCreate = () => {
    emit('addMenu',menu.value)
    menu.value = ''
}
</script>
<style>

</style>