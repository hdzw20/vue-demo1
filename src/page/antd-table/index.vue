<template>
    <a-form :v-model="searchObj" layout="inline"> 
        <a-form-item label="借款人姓名" name="borrower">
            <a-input v-model:value="searchObj.borrower"/>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" @click="onSearch">搜索</a-button>
        </a-form-item>
    </a-form>
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
            <template v-else-if="column.key === 'action'">
                <a-space>
                    <a-button type="primary" @click="handleEdit(record.id)">编辑</a-button>
                    <a-button type="danger" @click="handleDelete(record.id)">删除</a-button>
                </a-space>
            </template>
        </template>
    </a-table>
</template>
<script setup>
import { ref } from 'vue';
import { getLoansList } from '../../service/loans';

const handleDelete = (value) => {
    console.log("删除",value);
};
//搜索表单的数据
const searchObj = ref({});
//分页的数据
const pagination = ref({
    'pageSizeOptions':['10','20','30'],
    showSizeChanger:true,
    current:1,
    pageSize:10,
    total:0,
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
        title: "Action",
        dataIndex: 'action',
        key: 'action',
    }
];

const data = ref([]);
//请求数据
const getData = async () => {
    const res = await getLoansList({
        //添加pageNumber和pageSize
        pageNumber:pagination.value.current,
        pageSize:pagination.value.pageSize,
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
    const {current,pageSize} = value;
    pagination.value.current = current;
    pagination.value.pageSize = pageSize;
    getData();
};

const onSearch = () => {
    pagination.value.current = 1;
    getData();
}
</script>