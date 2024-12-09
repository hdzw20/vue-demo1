<template>
    <table>
      <thead>
        <tr>
          <th v-for="item in tableConfig" :key="item.dataIndex">{{ item.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataSource" :key="index">
          <td v-for="tableConfigItem in tableConfig" :key="tableConfigItem.dataIndex">
            {{ item[tableConfigItem.dataIndex] }}
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="dataSource.length === 0" class="no-data">没有数据</div>
  </template>
  
  <script setup>
  const props = defineProps({
    tableConfig: Array,
    dataSource: Array
  });
  </script>
  
  <style>
  /* 表格样式 */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  tr:hover {
    background-color: #ddd;
  }
  
  /* 无数据提示样式 */
  .no-data {
    text-align: center;
    margin-top: 20px;
    color: #999;
  }
  </style>