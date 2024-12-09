<template>
    <form @submit.prevent="searchUsers">
        用户名:<input type="text" v-model="search.username" placeholder="请输入用户名" />
        邮箱:<input type="text" v-model="search.email" placeholder="请输入邮箱" />
        <button type="submit">搜索</button>
        <button @click="create2">新增</button>
    </form>
    <div v-for="item in userList" :key="item.id">
        <div>用户名:{{ item.username }}</div>
        <div>邮箱:{{ item.email }}</div>
        <div>Id:{{ item.id }}</div>
    </div>

</template>
<script setup>
import { getUserList,createUser,getUserDetail } from '../../service/user.js'
import { ref } from 'vue';

// axios({
//     url: "/users",
//     data:{
//         name: "小明"
//     },
//     params:{
//         age: 19
//     },
//     method: "post",
//     baseURL: "http://study.zmyfrank.com:18010/api"
// }).then(res=>{
//     console.log(res);
// });
// 1. 通过创建axios实例的方式，来请求http://study.zmyfrank.com:18010/api下的两个接口，api/users和api/users/:id
// 2. 先拿到api/users接口请求出来的列表中的第一项的id
// 3. 再将这个id添加到api/users/:id的url中去请求  用第二步的id，替换掉掉:id

// const axiosInstance = axios.create({
//     baseURL: "http://study.zmyfrank.com:18010/api",
//     timeout: 5000,
// });

// const getId  = () => axiosInstance({
//     url: "/users",
//     params:{},
//     method: "get",
// }).then(res=>{
//     console.log(res);
//     return res.data.data.record[0].id;
// });

// const getUserInfo = (id) => axiosInstance({
//     url: `/users/${id}`,
//     params:{},
//     method: "get",
// }).then(res=>{
//     console.log(res);
// });

// getId().then((id) => {
//     getUserInfo(id);
// })
//获取到api/users的数据，并用v-for指令把数据打印到页面上
const userList = ref([]);
// const getData = () => {
//     return request({
//         url: "/users",
//         params: {},
//         method: "get",
//     }).then(res => {
//         userList.value = res.data.data.record;
//     });
// }
// //使用post方法， 调用api/users添加数据,必填的字段有 username、email
// request({
//     url: "/users",
//     data:{
//         username: "xxx",
//         email: "123123123123@qq.com"
//     },
//     method: "post",
// }).then(res=>{
//     if(res.data.code === 200){
//         return getData();
//     }
// });
const getData = () => {
    getUserList().then(res => {
        userList.value = res.data.data.record;
    });
};

async function getData2() {
    try {
        const res = await getUserList();
        userList.value = res.data.data.record;
    } catch (err) {
        console.log(err);
    }
}
getData2();

const search = ref({ username: '', email: '' });

const searchUsers = async () => {
    const params = {
    username: search.value.username,
    email: search.value.email
  };
  const res = await getUserList(params);
    userList.value = res.data.data.record;
}

async function create() {
    await createUser({
        username: "xxx",
        email: "123123123123@qq.com"
    });
    const res = await getUserList();
    userList.value = res.data.data.record;
}

const create2 = async () => {
    await createUser({
        username: search.value.username,
        email: search.value.email
    });
    const res = await getUserList();
    userList.value = res.data.data.record;

}
// create2();
const getUserInfo = async (id) => {
    const res = await getUserDetail(id);
    console.log(res);
}
</script>
<style>

</style>