<template>
    <a-table :columns="columns" :data-source="data">
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
                    {{ record.amount }}
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
// const columns = [
//     {
//         name: 'Name',
//         dataIndex: 'name',
//         key: 'name',
//     },
//     {
//         title: 'Age',
//         dataIndex: 'age',
//         key: 'age',
//     },
//     {
//         title: 'Address',
//         dataIndex: 'address',
//         key: 'address',
//     },
//     {
//         title: 'Tags',
//         key: 'tags',
//         dataIndex: 'tags',
//     },
//     {
//         title: 'Action',
//         key: 'action',
//     },
// ];
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
// const data = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['loser'],
//     },
//     {
//         key: '3',
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sidney No. 1 Lake Park',
//         tags: ['cool', 'teacher'],
//     },
// ];
const data = ref([]);
const getData = async () => {
    const res = await getLoansList();
    console.log(res);
    data.value = res.data.data.record;
};
getData();

</script>