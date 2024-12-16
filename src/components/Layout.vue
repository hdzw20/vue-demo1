<template>
    <div class="header">
        头部固定
    </div>
    <div class="body">
        <div class="body_left">
            
            <ul>
                <li>
                    <router-link :to="{path:'/menu'}">
                        菜单管理
                    </router-link>
                </li>
                <li>
                    <router-link :to="{path:'/user'}">
                        用户管理
                    </router-link>
                </li>
                <li>
                    <router-link :to="{path:'/loan'}">
                        贷款管理
                    </router-link>
                </li>
                <li>
                    <router-link :to="{path:'/student'}">
                        学生管理
                    </router-link>
                </li>
                <li>
                    <router-link :to="{path:'/antdForm'}">
                        antdForm
                    </router-link>
                </li>
                <li>
                    <router-link :to="{path:'/antdTable'}">
                        antdTable
                        </router-link>
                </li>
            </ul>

        </div>
        <div class="body_right">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style scoped>
.header {
    height: 80px;
    line-height: 80px;
    background-color: rgb(7, 154, 251);
    display: flex;
    flex:0;
    flex-direction: column;
}

.body {
    display: flex;
    flex:0;
    flex-direction: row;

}

.body_left {
    height: 2000px;
    width: 130px;
    background-color: rgb(214, 217, 220);
    overflow: auto;
}

.body_right {
    flex:1;
    overflow: auto;
}
</style>