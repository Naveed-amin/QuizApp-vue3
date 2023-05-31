<script setup>

import  { defineProps } from 'vue';
const {questtionStatus,questuionBar} = defineProps(['questtionStatus','questuionBar']);
// const {questuionBar} = defineProps(['questuionBar']);



</script>

<template>
  <header>
    <h4>Question {{questtionStatus}}</h4>
    <div class="bar">
      <div class="completion" :style="{width:questuionBar}"></div>
    </div>
</header>
</template>



<style scoped>
header {
  margin-top: 20px;
}
header h4 {
  font-size: 30px;
}
.bar {
  width: 300px;
  height: 20px;
  border: 3px solid bisque;
}
.completion {
  height: 100%;
  width: 20%;
  background-color: bisque;
}
</style>