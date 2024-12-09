<template>
    <router-link :to="{ path: '/loan'}">跳转到贷款管理</router-link>
    <router-link :to="{ name: 'userManage'}">跳转到用户管理</router-link>
    <form>
        菜名:<input type="text" v-model="searchObj.name" />
        价格:<input type="text" v-model="searchObj.price" />
        id:<input type="text" v-model="searchObj.id"/>
    </form>
    <button @click="search">搜索</button>
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
</template>
<script setup>
//获取数据——》观察数据——》得出表格配置——》通过v-for渲染表格——》定义对象，进行双向绑定——》搜索
import { ref } from 'vue'
import { getMenuList } from '../../service/menu.js';

const tableConfig = [
    { title: "菜名", dataIndex: "name" },
    { title: "价格", dataIndex: "price" },
    { title: "id", dataIndex: "id" },
];
const dataSource = ref([]);
const searchObj = ref({});
const search = async () => {
    const res = await getMenuList(searchObj.value);
    dataSource.value = res.data.data.record;
}
// const getData = async () => {
//     const res = await getMenuList();
//     dataSource.value = res.data.data.record;
// };
// getData();
search();
</script>
<style></style>
