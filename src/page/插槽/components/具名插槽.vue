<template>
    <div>这是一个button</div>
    <button>
        <slot name="body" :data="props.data" :data2="props.data"></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    data:{
        type: Object,
        Required: true,
    },
});
</script>

<style>

</style>