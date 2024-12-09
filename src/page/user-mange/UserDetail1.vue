<template>
        <div>详情1</div>
        <div v-for="(value,key) in detail" :key="key">
            {{key}}:{{value}}
        </div>
</template>
    
<script setup>
import { useRoute } from 'vue-router';
import { getUserDetail } from '../../service/user';
import { ref } from 'vue';

const route = useRoute();
const detail = ref({});
const getDetailData = async () => {
    const res = await getUserDetail(route.query.id);
    detail.value = res.data;
    
}
getDetailData();

</script>
    
<style>
    
</style>