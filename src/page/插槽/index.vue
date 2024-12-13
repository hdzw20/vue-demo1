<template>
        <div>父组件</div>
        <Slot>这是外部传入的组件</Slot>
        <NamedSlot :data="{id:2, name: '小明',age:22,job:'前端'}">
            <template v-slot:body="data">
                <div>{{ data.data }}</div>
                <button @click="()=>handleDelete(data.data)">删除</button>
            </template>
        </NamedSlot>
</template>
    
<script setup>
    import Slot from './components/不具名插槽.vue'
    import NamedSlot from './components/具名插槽.vue'

    const handleDelete = (value) => {
        console.log(value);
        console.log("删除",value.id)
    }
</script>
    
<style>
    
</style>