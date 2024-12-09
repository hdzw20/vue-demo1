<template>
    <div>儿子</div>
    <!-- {{ props.name }}{{ props.age }} -->
</template>
<script setup>
import { defineProps } from 'vue'
//1.使用数组来定义
//name 必传 string类型的数据
//age 不必传 number类型的数据 默认值18

// const props = defineProps(['name','age'])

const props = defineProps({
    name: {
        required: true,
        type: String
    },
    age: {
        required: false,
        type: Number,
        default: 18
    }
})
const a = () => {
  console.log(props.name,props.age)
}

</script>
<style>

</style>