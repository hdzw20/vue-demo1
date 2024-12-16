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
//内部逻辑
//1.需要父组件传入编辑数据（editData,因为子组件不能直接修改父组件数据，
// 所以通过通过watchEffect监听editData的变化，将editData赋值给内部的addObj）
//2.需要父组件传入是否打开的标志
//3.点击取消的时候，emit出去，让父组件关闭modal框，并清除传入的editObj，并清除子组件内部的校验情况
//4.点击确定的时候，通过是否有id判断是新增还是编辑，然后调用对应的接口，成功后提示用户
//emit成功事件，让父组件刷新列表，并让父组件消除传入的editObj
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