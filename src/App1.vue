<template>
    <div>
        <div>这是我的第一个页面组件</div>
        <div @click="alertFn">{{ a }}</div>
        <div @click="clickName">我的名字：{{ name }}</div>
        <div @click="clickJob">我的工作：{{ job }}</div>
        <div @click="cb">{{ cm }}</div>
        <!-- <router-view/> -->
    </div>
</template>
<script>
//   import Test from "../components/test.vue";

export default {
    data() {
        return {
            cm: "宫保鸡丁",
            a: 1,
            name: "小明",
            job: "前端工程师",
        };
    },
    methods: {
        cb() {
            if (this.cm == "宫保鸡丁") {
                this.cm = "鱼香肉丝";
            } else {
                this.cm = "宫保鸡丁"
            }
            
        },
        alertFn() {
            this.a = this.a + 1;
        },
        clickName() {
            this.name = "小黄";
        },
        clickJob() {
            this.clickName();
            this.job = "后端开发";
        },
    },
    // components: { Test },
};
</script>