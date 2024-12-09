<template>
    <div v-if="route.params.id">用户详情</div>
    <form>
        用户名:<input type="text" v-model="searchObj.username" />
        邮箱:<input type="text" v-model="searchObj.email" />
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
                <td><button @click="goDetail(item)">查看详情</button></td>
                <td><button @click="goDetail1(item.id)">查看详情1</button></td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
//获取数据——》观察数据——》得出表格配置——》通过v-for渲染表格——》定义对象，进行双向绑定——》搜索
import { ref } from 'vue'
import { getUserList } from '../../service/user.js';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const tableConfig = [
    { title: "id", dataIndex: "id" },
    { title: "用户名", dataIndex: "username" },
    { title: "邮箱", dataIndex: "email" },
];
const dataSource = ref([]);
const searchObj = ref({});
const search = async () => {
    const res = await getUserList(searchObj.value);
    dataSource.value = res.data.data.record;
};
const getData = async () => {
    const res = await getUserList();
    dataSource.value = res.data.data.record;
};
getData();
const goDetail = (query) => {
    router.push({ name: "userDetail", query });
};
const goDetail1 = (id) => {
    router.push({ name: "userDetail1", query:{ id } });
}
</script>
<style></style>