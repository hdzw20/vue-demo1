import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
  } from "vue-router";
  
import routes from "./routes";
//创建路由
const router = createRouter({
    //使用history模式
    history:createWebHistory(),
    //定义具体的路由和组件
    routes, 
});

export default router;