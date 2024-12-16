<template>
    <!-- 学生数据表格 -->
    <a-table
      @change="onTableChange"
      :pagination="pagination"
      :columns="columns"
      :data-source="data"
    >
      <!-- 自定义表头单元格 -->
      <template #headerCell="{ column }">
        <template v-if="column.key === 'title'">
          <span>
            <smile-outlined />
            {{ column.title }}
          </span>
        </template>
      </template>
  
      <!-- 自定义表体单元格 -->
      <template #bodyCell="{ column, record }">
        <!-- 根据列的 key 显示不同的数据 -->
        <template v-if="column.key === 'class'">
          <span>{{ record.class }}</span>
        </template>
        <template v-else-if="column.key === 'gender'">
          <span>{{ record.gender }}</span>
        </template>
        <template v-else-if="column.key === 'id'">
          <span>{{ record.id }}</span>
        </template>
        <template v-else-if="column.key === 'name'">
          <span>{{ record.name }}</span>
        </template>
        <template v-else-if="column.key === 'number'">
          <span>{{ record.number }}</span>
        </template>
        <!-- 操作列，包含编辑和删除按钮 -->
        <template v-else-if="column.key === 'action'">
          <a-space>
            <a-button type="primary" @click="handleEdit(record.id)">编辑</a-button>
            <a-button type="danger" @click="handleDelete(record.id)">删除</a-button>
          </a-space>
        </template>
      </template>
    </a-table>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  import { getStudentList } from '../../../service/student';
  
  // 定义组件的 props
  const props = defineProps({
    searchObj: Object,
  });
  // 定义组件可以触发的事件
  const emit = defineEmits(['delete', 'edit']);
  
  // 表格数据
  const data = ref([]);
  // 分页数据
  const pagination = ref({
    pageSizeOptions: ['10', '20', '30'],
    showSizeChanger: true,
    current: 1,
    pageSize: 10,
    total: 0,
  });
  
  // 表格列配置
  const columns = [
    { title: '班级', dataIndex: 'class', key: 'class' },
    { title: '性别', dataIndex: 'gender', key: 'gender' },
    { title: 'Id', dataIndex: 'id', key: 'id' },
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '学号', dataIndex: 'number', key: 'number' },
    { title: 'Action', dataIndex: 'action', key: 'action' },
  ];
  
  // 获取数据的函数
  const getData = async (searchObj = {}) => {
    const res = await getStudentList({
      pageNumber: pagination.value.current,
      pageSize: pagination.value.pageSize,
      ...searchObj,
    });
    console.log("搜索",searchObj);
    
    data.value = res.data.data.record;
    pagination.value.current = res.data.data.pageNumber;
    pagination.value.total = res.data.data.totalItems;
    pagination.value.pageSize = res.data.data.pageSize;
  };
  
  // 表格分页、排序、筛选变化时触发的函数
  const onTableChange = (value) => {
    pagination.value.current = value.current;
    pagination.value.pageSize = value.pageSize;
    getData();
  };
  
  // 删除按钮点击事件处理函数
  const handleDelete = (value) => {
    emit('delete', value);
  };
  
  // 编辑按钮点击事件处理函数
  const handleEdit = (value) => {
    emit('edit', value);
  };
  
  // 初始获取数据
  getData();
  </script>