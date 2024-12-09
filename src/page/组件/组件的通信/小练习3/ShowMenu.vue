<template>
    <div class="dishes-list">
      <ul>
        <li v-for="(dish, index) in dishes" :key="index">
          {{ dish }}
          <button @click="removeDish(index)">删除</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    dishes: Array
  });
  const emit = defineEmits(['removeDish']);
  
  const removeDish = (index) => {
    emit('removeDish', index);
  };
  </script>
  
  <style>
  </style>