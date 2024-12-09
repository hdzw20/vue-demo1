<template>
    <form @submit.prevent="submitForm">
      用户名:<input type="text" v-model="formData.username" placeholder="请输入用户名" />
      邮箱:<input type="text" v-model="formData.email" placeholder="请输入邮箱" />
      <button type="submit">{{ isEditing ? '编辑' : '新增' }}</button>
    </form>
    <div>
      <input type="text" v-model="search.username" placeholder="请输入用户名" />
      <input type="text" v-model="search.email" placeholder="请输入邮箱" />
      <button @click="searchUsers">搜索</button>
    </div>
    <div v-for="item in userList" :key="item.id">
      <div>用户名:{{ item.username }}</div>
      <div>邮箱:{{ item.email }}</div>
      <div>Id:{{ item.id }}</div>
      <button @click="editUser(item)">编辑</button>
      <button @click="deleteUser2(item.id)">删除</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { getUserList, createUser, updateUser, deleteUser } from '../../service/user.js';
  
  const userList = ref([]);
  const search = ref({ username: '', email: '' });
  const formData = ref({ username: '', email: '' });
  const isEditing = ref(false);
  const editingUserId = ref(null);
  
  const getData = async () => {
    try {
      const res = await getUserList();
      userList.value = res.data.data.record;
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };
  
  const searchUsers = async () => {
    const params = {
      username: search.value.username,
      email: search.value.email
    };
    try {
      const res = await getUserList(params);
      userList.value = res.data.data.record;
    } catch (err) {
      console.error('Error searching users:', err);
    }
  };
  
  const submitForm = async () => {
    try {
      if (isEditing.value) {
        await updateUser(editingUserId.value, formData.value);
      } else {
        await createUser(formData.value);
      }
      await getData();
      resetForm();
    } catch (err) {
      console.error('错误:', err);
    }
  };
  
  const editUser = (user) => {
    formData.value = { username: user.username, email: user.email };
    editingUserId.value = user.id;
    isEditing.value = true;
  };
  
  const deleteUser2 = async (id) => {
    try {
      await deleteUser(id);
      await getData();
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };
  
  const resetForm = () => {
    formData.value = { username: '', email: '' };
    isEditing.value = false;
    editingUserId.value = null;
  };
  
  getData();
  </script>
  
  <style>

  </style>