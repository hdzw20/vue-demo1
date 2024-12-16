<template>
    <!-- 搜索表单 -->
    <a-form :model="searchObj" layout="inline" @submit.prevent="onSearch">
      <!-- 学生姓名输入项 -->
      <a-form-item label="学生姓名" name="name">
        <a-input v-model:value="searchObj.name" />
      </a-form-item>
      <!-- 搜索按钮 -->
      <a-form-item>
        <a-button type="primary" html-type="submit">搜索</a-button>
      </a-form-item>
    </a-form>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  // 搜索表单的数据对象
  const searchObj = ref({ name: '' });
  // 定义组件可以触发的事件
  const emit = defineEmits(['search']);
  
  // 搜索按钮点击事件处理函数
  const onSearch = () => {
    emit('search', searchObj.value);
  };
  </script>