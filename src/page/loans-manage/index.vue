<template>
    <form>
        借款人:<input type="text" v-model="searchObj.borrower" />
        金额:<input type="text" v-model="searchObj.amount" />
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
import { getLoansList } from '../../service/loans.js';
import { useRoute } from 'vue-router';
const tableConfig = [
    { title: "借款人", dataIndex: "borrower" },
    { title: "金额", dataIndex: "amount" },
    { title: "id", dataIndex: "id" },
];

const route = useRoute();
const dataSource = ref([]);
const searchObj = ref({});

const search = async () => {
    const res = await getLoansList(searchObj.value);
    dataSource.value = res.data.data.record;
}
const getData = async () => {
    const res = await getLoansList();
    dataSource.value = res.data.data.record;
};
getData();
</script>
<style></style>