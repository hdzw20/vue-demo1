<template>
    <a-modal 
    :open="props.isOpen" 
    @cancel="cancel" 
    :title="props.editData.id ?'新增':'编辑'" 
    @ok="handleAdd2"
    >
    <a-form ref="formRef" @finish="handleAdd" :model="addObj">
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
        <!-- <a-form-item>
            <a-button @click="handleAdd">提交</a-button>
            <a-button html-type="submit">提交</a-button>
            <a-button @click="handleAdd2">提交2</a-button>
            <a-button @click="handleReset">重置</a-button>
        </a-form-item> -->
        {{  addObj.value }}
        <div>传入的数据:{{ props.editData }}</div>
    </a-form>
</a-modal>
</template>

<script setup>
import { ref,defineProps, watchEffect} from 'vue';
import { getLoansList, createLoan, updateLoan } from '../../../service/loans';
import { message } from 'ant-design-vue';

const props = defineProps({
    editData: {
        type: Object,
    },
    isOpen: {
        type: Boolean,
        required: true,
    }
});
const formRef = ref(null);
const emit = defineEmits(['success','cancel']);

const cancel = () => {
    emit('cancel');
    formRef.value.resetFields();
}
//新增逻辑

const addObj = ref(props.editData?{...props.editData}:{});
const handleAdd = async (value) => {
    // await createLoan(addObj.value);
    await createLoan(value);
};
const handleAdd2 = async () => {
    //对数据进行校验
    await formRef.value.validateFields();

    const isEdit = !!addObj.value.id;

    if (addObj.value.id) {
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
    emit('success');
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
    addObj.value = { ...value };
};
//每当props.editData发生变化时，更新addObj的值
watchEffect(()=>{
    addObj.value = {...props.editData};
})
</script>

<style></style>