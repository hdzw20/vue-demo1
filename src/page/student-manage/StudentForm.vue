<template>
    <form @submit.prevent>
      姓名:<input type="text" v-model="searchObj.name" />
      <button @click="search">搜索</button>
      <button @click="reset">重置</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const searchObj = ref({ name: '' });
  const emit = defineEmits(['search', 'reset']);
  
  const search = () => {
    emit('search', searchObj.value);
  };
  
  const reset = () => {
    searchObj.value.name = '';
    emit('reset');
  };
  </script>
  
  <style scoped>
  /* 表单样式 */
  form {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  input[type="text"] {
    padding: 5px;
    margin-right: 5px;
  }
  
  button {
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>