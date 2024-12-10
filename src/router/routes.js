import LoansMange from "../page/loans-manage/index.vue";
import UserManage from "../page/user-mange/index.vue";
import UserDetail from "../page/user-mange/userDetail.vue";
import UserDetail1 from "../page/user-mange/UserDetail1.vue";
import MenuManage from "../page/menu-manage/index.vue";
import StudentManage from "../page/student-manage/index2.vue"
import Layout from "../components/Layout.vue";
const routes = [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "loan",
                component: LoansMange
            },
            {
                path: "user",
                component: UserManage,
                meta: { title: "用户管理" },
                name: "userManage"
            }
        ]
    },
    {
        path: "/loan",
        component: LoansMange,
        meta: { title: "贷款管理" }
    },
    // {
    //     path: "/user",
    //     component: UserManage,
    //     meta: { title: "用户管理" },
    //     name: "userManage"
    // },
    { 
        path: "/menu", 
        component: MenuManage, 
        name: "menuManage" 
    },
    { 
        path: "/student", 
        component: StudentManage 
    },
    {
        path: "/userDetail",
        name: "userDetail",
        component: UserDetail,
        meta: { title: "用户详情" }
    },
    {
        path: "/userDetail1",
        name: "userDetail1",
        component: UserDetail1,
        meta: { title: "用户详情" }
    }
]
export default routes