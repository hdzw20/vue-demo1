<template>
    <!-- 搜索表单组件 -->
    <StudentSearchForm @search="handleSearch" />
    <!-- 学生数据表格组件 -->
    <StudentTable :searchObj="searchObj" @delete="handleDelete" @edit="handleEdit" />
</template>

<script setup>
import { ref } from 'vue';
import StudentSearchForm from './StudentForm.vue';
import StudentTable from './StudentTable.vue';

// 搜索表单的数据对象
const searchObj = ref({});

// 搜索事件处理函数
const handleSearch = async (searchData) => {
    searchObj.value = searchData;
};

// 删除事件处理函数
const handleDelete = (id) => {
    console.log('Delete:', id);
    // 实现删除逻辑
};

// 编辑事件处理函数
const handleEdit = (id) => {
    console.log('Edit:', id);
    // 实现编辑逻辑
};

</script>