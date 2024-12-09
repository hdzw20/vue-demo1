<template>
  <div>
    <h1>计数器应用</h1>
    <input @input="(e) => (num=e.target.value)" :value="num" type="text" />
    <div>
        <input type="text" v-model="num" />
    </div>
    <p>当前计数：{{ num }}</p>
    <button @click="add">增加</button>
    <button :disabled="num === 0" @click="decrease">减少</button>
    <div class="name" v-for="(item,index) in arr" :key="item">
        <div>item:{{ item }}</div>
        <div>index:{{ index }}</div>
    </div>
    <div>--------------------</div>
    <div class="name" v-for="(item,index) in arr1" :key="item.id">
        <div>id:{{ item.id }}</div>
        <div>名字:{{ item.name }}</div>
        <button v-show="false">提醒</button>
    </div>
    <div>--------------------</div>
    <div class="name" v-for="(value,key) in obj" :key="key">
        <div>item:{{ value }}</div>
        <div>key:{{ key }}</div>
    </div>
    <div>--------------------</div>
    <div v-html="`<h1>我是h1</h1>`"></div>
    <div>{{ htmlString }}</div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const htmlString = ref('<h2>我是h2</h2>');
const num = ref(0);
const disabled = ref(true);
const arr = ref([1, 2, 3, 4, 5]);
const arr1 = ref([
  { id: 1,name: '张三', age: 18 },
  { id: 2,name: '李四', age: 19 },
  { id: 3,name: '王五', age: 20 },
]);
const obj = ref({ 
    name: '小明', 
    age: 18 
});
const add = () => {
  num.value++;
//   disabled.value = false;
};
const decrease = () => {
  num.value--;
  if (num.value === 0) {
    disabled.value = true;
  }
};
</script>
<style>

</style>
