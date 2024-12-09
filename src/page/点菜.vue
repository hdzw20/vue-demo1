<template>
    <div class="dishes-manager">
      <input type="text" v-model="newDish" @keydown.enter="addDish" placeholder="输入菜名" />
      <button @click="addDish">新增菜</button>
      <ul>
        <li v-for="(dish, index) in dishes" :key="index">
          {{ dish }}
          <button @click="removeDish(index)">删除</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const newDish = ref('');
  const dishes = ref([]);
  
  const addDish = () => {
    if (newDish.value.trim() !== '') {
      dishes.value.push(newDish.value.trim());
      newDish.value = ''; // 清空输入框
    } else {
      alert('菜名不能为空');
    }
  };
  
  const removeDish = (index) => {
    dishes.value.splice(index, 1);
  };
  </script>
  
  <style>
  </style>