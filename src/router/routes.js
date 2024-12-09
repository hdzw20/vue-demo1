import LoansMange from "../page/loans-manage/index.vue";
import UserManage from "../page/user-mange/index.vue";
import MenuManage from "../page/menu-manage/index.vue";
import StudentManage from "../page/student-manage/index2.vue"
routes: [
    { path: "/",redirect: "/menu" },
    { path: "/loan",component: LoansMange , meta: { title: "贷款管理"}},
    { path: "/user",component: UserManage , meta: { title: "用户管理"}},
    { path: "/menu",component: MenuManage, name: "menuManage"},
    { path: "/student",component: StudentManage },
]
export default routes