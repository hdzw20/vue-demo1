<template>
    <div>
      {{ msg }}
      <button @click="sendMsgToParent">Send Message</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['msg'],
    methods: {
      sendMsgToParent() {
        this.$emit('child-msg', 'Hello from Child!');
      }
    }
  }
  </script>