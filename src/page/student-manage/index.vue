<template>
    <form @submit.prevent>
        <!-- 班级:<input type="text" v-model="searchObj.class" /> -->
        <!-- 学号:<input type="text" v-model="searchObj.number" /> -->
        姓名:<input type="text" v-model="searchObj.name"/>
        <!-- 性别:<input type="text" v-model="searchObj.gender" /> -->
        <!-- id:<input type="text" v-model="searchObj.id" /> -->
        <button @click="search">搜索</button>
        <button @click="reset">重置</button>
    </form>
    
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
//获取数据——》观察数据——》得出表格配置——》通过v-for渲染表格——》定义对象，进行双向绑定——》搜索
import { ref } from 'vue'
import { getStudentList } from '../../service/student.js';

const tableConfig = [
    { title: "班级", dataIndex: "class" },
    { title: "学号", dataIndex: "number" },
    { title: "姓名", dataIndex: "name" },
    { title: "性别", dataIndex: "gender" },
    // { title: "id", dataIndex: "id" },
];
const dataSource = ref([]);
const searchObj = ref({});
const search = async () => {
    const res = await getStudentList(searchObj.value);
    dataSource.value = res.data.data.record;
};
const reset = () => {
  searchObj.value.name = '';
  getData();
};
const getData = async () => {
    const res = await getStudentList();
    dataSource.value = res.data.data.record;
};
getData();
</script>
<style scoped>
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

/* 无数据提示样式 */
.no-data {
  text-align: center;
  margin-top: 20px;
  color: #999;
}
</style>
