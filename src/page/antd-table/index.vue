<template>
    <AddEdit 
    @cancel="cancel" 
    :isOpen="isOpen" 
    :edit-data="addObj"
     @success="onSuccess" />
    <a-form :v-model="searchObj" layout="inline">
        <a-form-item label="借款人姓名" name="borrower">
            <a-input v-model:value="searchObj.borrower" />
        </a-form-item>
        <a-form-item>
            <a-button type="primary" @click="onSearch">搜索</a-button>
        </a-form-item>
    </a-form>
    <a-button type="primary" @click="handleOpen">添加借款人</a-button>
    <a-table @change="onTableChange" :pagination="pagination" :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
            <template v-if="column.key === 'title'">
                <span>

                    <smile-outlined />
                    {{ column.title }}
                </span>
            </template>
        </template>

        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'borrower'">
                <a>
                    {{ record.borrower }}
                </a>
            </template>
            <template v-else-if="column.key === 'amount'">
                <span>
                    {{ record.amount }}
                </span>
            </template>
            <template v-else-if="column.dataIndex === 'method'">
                <a-space>
                    <a-button type="primary" @click="handleEdit(record)">编辑</a-button>
                    <a-button type="danger" @click="handleDelete(record.id)">删除</a-button>
                </a-space>
            </template>
        </template>
    </a-table>
    <a-form ref="formRef" @finish="handleAdd"  :model="addObj">
        <a-form-item :rules="[
            { required: true, message: '请输入借款人姓名' },
            { max: 5, message: '借款人最多输入5个字符' }
        ]" name="borrower" label="借款人姓名">
            <a-input v-model:value="addObj.borrower"></a-input>
        </a-form-item>
        <a-form-item :rules="[
            { required: true, message: '请输入借款金额' },
            { len: 3, message: '借款金额必须输入三位数' }
        ]" name="amount" label="借款金额">
            <a-input v-model:value="addObj.amount"></a-input>
        </a-form-item>
        <a-form-item>
            <!-- <a-button @click="handleAdd">提交</a-button> -->
            <a-button html-type="submit">提交</a-button>
            <a-button @click="handleAdd2">提交2</a-button>
            <a-button @click="handleReset">重置</a-button>
        </a-form-item>
    </a-form>
</template>
<script setup>
import { ref } from 'vue';
import { getLoansList, createLoan, updateLoan } from '../../service/loans';
import { message } from 'ant-design-vue';
import AddEdit from './components/addEdit.vue';
const handleDelete = (value) => {
    console.log("删除", value);
};

const isOpen = ref(false);
const handleOpen = () => {
    isOpen.value = true;
}

//搜索表单的数据
const searchObj = ref({});

//分页的数据
const pagination = ref({
    'pageSizeOptions': ['10', '20', '30'],
    showSizeChanger: true,
    current: 1,
    pageSize: 10,
    total: 0,
});
const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '借款人',
        dataIndex: 'borrower',
        key: 'borrower',
    },
    {
        title: '借款金额',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: "操作",
        dataIndex: 'method',
        key: 'method',
    }
];

const data = ref([]);
//请求数据
const getData = async () => {
    const res = await getLoansList({
        //添加pageNumber和pageSize
        pageNumber: pagination.value.current,
        pageSize: pagination.value.pageSize,
        //解构是为了更方便
        //添加搜索条件
        ...searchObj.value,
    });
    console.log(res);
    //渲染表格数据
    data.value = res.data.data.record;
    //渲染分页数据
    pagination.value.current = res.data.data.pageNumber;
    pagination.value.total = res.data.data.totalItems;
    pagination.value.pageSize = res.data.data.pageSize;
};
getData();
//点击页码时触发的方法
const onTableChange = (value) => {
    console.log(value);
    const { current, pageSize } = value;
    pagination.value.current = current;
    pagination.value.pageSize = pageSize;
    getData();
};

const onSearch = () => {
    pagination.value.current = 1;
    getData();
};

//新增逻辑
const formRef = ref(null);
const addObj = ref({});
const handleAdd = async (value) => {
    // await createLoan(addObj.value);
    await createLoan(value);
};
const handleAdd2 = async () => {
    //对数据进行校验
    await formRef.value.validateFields();

    const isEdit = !!addObj.value.id;

    if(addObj.value.id) {
        //调用编辑接口
        await updateLoan(addObj.value);
        message.success("编辑成功");
    } else {
        //调用新增接口
        //校验成功后请求后端接口(新增)
        await createLoan(addObj.value);
        message.success("新增成功");
    }
    
    //1.提示用户2.刷新表单
    
    //刷新列表
    getData();
    // message.error("新增失败");
    //清除数据
    formRef.value.resetFields();
};
const handleReset = () => {
    
    formRef.value.resetFields();
    addObj.value = {};
};

//编辑逻辑
//1.点击编辑按钮
//2.填充数据
//3.修改数据并提交
//4.提示用户成功
//5.刷新列表
//6.清除数据
const handleEdit = (value) => {
    addObj.value = {...value};
    isOpen.value = true;
};
const cancel = () => {
    isOpen.value = false;
    addObj.value = {};
};
const onSuccess = () => {
    getData();
    isOpen.value = false;
}
</script>