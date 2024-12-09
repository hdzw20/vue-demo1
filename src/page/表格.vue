<template>
  <table>
    <thead>
      <tr>
        <th>登录账号</th>
        <th>人员姓名</th>
        <th>手机号</th>
        <th>角色</th>
        <th>用户状态</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in dataArray" :key="index">
        <td>{{ item.account }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item['phone'] }}</td>
        <td>{{ item.role }}</td>
        <td>{{ item['status'] }}</td>
        <td>
          <a>修改</a>
          <a>重置密码</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref } from 'vue';

const dataArray = ref([
  { account: 'YZ0001', name: '系统管理员', phone: '18000000000', role: '系统管理员', status: '启用' },
  { account: 'YZ0002', name: '用户2', phone: '18011111111', role: '记录员', status: '启用' },
  { account: 'YZ0003', name: '用户3', phone: '18022222222', role: '畜牧管理员', status: '禁用' },
  { account: 'YZ0004', name: '用户4', phone: '18033333333', role: '系统管理员', status: '启用' },
  { account: 'YZ0005', name: '用户5', phone: '18044444444', role: '记录员', status: '禁用' },
  { account: 'YZ0006', name: '用户6', phone: '18055555555', role: '畜牧管理员', status: '启用' },
  { account: 'YZ0007', name: '用户7', phone: '18066666666', role: '系统管理员', status: '禁用' },
  { account: 'YZ0008', name: '用户8', phone: '18077777777', role: '记录员', status: '启用' },
  { account: 'YZ0009', name: '用户9', phone: '18088888888', role: '畜牧管理员', status: '禁用' },
  { account: 'YZ0010', name: '用户10', phone: '18099999999', role: '系统管理员', status: '启用' }
]);
</script>
<style>
  a {
    margin-right: 10px;
  }
</style>