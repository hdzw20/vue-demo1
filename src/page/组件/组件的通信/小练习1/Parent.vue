<template>
    <div>
      <input v-model="message" @input="passToChild">
      <Child :msg="message" @child-msg="showMessage"></Child>
    </div>
  </template>
  
  <script>
  import Child from './Child.vue';
  
  export default {
    components: {
      Child
    },
    data() {
      return {
        message: ''
      }
    },
    methods: {
      passToChild() {
        this.$emit('child-msg', this.message);
      },
      showMessage(msg) {
        this.messageFromChild = msg;
      }
    }
  }
  </script>