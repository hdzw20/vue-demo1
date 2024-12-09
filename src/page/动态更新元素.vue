<template>
    <div>
        <button @click="show">显示菜单</button>
        <button @click="show">显示姓名</button>
        <ul v-if="showMenu">
            <li v-for="(item, index) in menu" :key="index">{{ item }}</li>
        </ul>
        <ul v-else>
            <li v-for="(item, index) in name" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showMenu = ref(true);
const show =()=>{
    showMenu.value = !showMenu.value;
}
const menu = ref([
    '宫保鸡丁', '鱼香肉丝', '麻辣香锅', '回锅肉', '北京烤鸭',
    '红烧肉', '小龙虾', '酸菜鱼', '辣子鸡', '蒜蓉粉丝蒸虾'
]);

const name = ref([
    '张三', '李四', '王五', '赵六', '孙七',
    '周八', '吴九', '郑十', '冯十一', '陈十二'
]);

</script>