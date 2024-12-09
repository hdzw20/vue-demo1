<template>
    <div>
        <h1>用户详情</h1>
        <p>ID: {{ route.query.id }}</p>
        <p>用户名: {{ route.query.username }}</p>
        <p>邮箱: {{ route.query.email }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style></style>