<template>
    <div class="add-dish">
      <input type="text" v-model="newDish" @keydown.enter="handleAddDish" placeholder="输入菜名" />
      <button @click="handleAddDish">新增菜</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const newDish = ref('');
  const emit = defineEmits(['addDish']);
  
  const handleAddDish = () => {
    if (newDish.value.trim() !== '') {
      emit('addDish', newDish.value.trim());
      newDish.value = ''; // 清空输入框
    } else {
      alert('菜名不能为空');
    }
  };
  </script>
  
  <style>
  </style>