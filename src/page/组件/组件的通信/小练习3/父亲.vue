<template>
    <div class="dishes-manager">
      <AddMenu @addDish="addDish" />
      <ShowMenu :dishes="dishes" @removeDish="removeDish" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import AddMenu from './AddMenu.vue';
  import ShowMenu from './ShowMenu.vue';
  
  const newDish = ref('');
  const dishes = ref([]);
  
  const addDish = (dishName) => {
    if (dishName.trim() !== '') {
      dishes.value.push(dishName.trim());
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