<template>
    <div class="wrapper">
        <div class="item" v-for="(item,index) in props.menu" :key="item">
            {{ item }} <button @click="() =>handleDelete(index)">删除</button>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    menu:{
        type:Array,
        Required:true,
    }

});

const emit = defineEmits(['deleteMenu']);

const handleDelete = (index) => {
    emit('deleteMenu',index);
}
</script>
<style>

</style>