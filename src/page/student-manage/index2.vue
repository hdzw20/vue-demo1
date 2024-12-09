<template>
    <StudentForm @search="handleSearch" @reset="handleReset" />
    <StudentTable :tableConfig="tableConfig" :dataSource="dataSource" />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { getStudentList } from '../../service/student.js';
  import StudentForm from './StudentForm.vue';
  import StudentTable from './StudentTable.vue';
  
  const tableConfig = [
    { title: "班级", dataIndex: "class" },
    { title: "学号", dataIndex: "number" },
    { title: "姓名", dataIndex: "name" },
    { title: "性别", dataIndex: "gender" },
  ];
  const dataSource = ref([]);
  const searchObj = ref({});
  
  const handleSearch = async (searchObj) => {
    const res = await getStudentList(searchObj);
    dataSource.value = res.data.data.record;
  };
  
  const handleReset = () => {
    searchObj.value.name = '';
    getData();
  };
  
  const getData = async () => {
    const res = await getStudentList();
    dataSource.value = res.data.data.record;
  };
  
  getData();
  </script>