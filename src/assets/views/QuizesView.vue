<script setup>
import q from '../../../src/data/quizes.json';
import {ref,watch} from 'vue'
import Card from '../components/Card.vue'


const quizes = ref(q);
let search = ref("");

watch(search,() => {
  quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()));
} )

</script>

<template>

    <header>
      <h1>Quizes</h1>
      <input type="text" v-model="search" placeholder="Search...">
    </header>
    <div class="option-container">
     
      <Card v-for="quiz in quizes" :key="quiz.id"  :quiz="quiz"/>
    </div>

</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

header h1 {
  font-size: 30px;
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}
.option-container{
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}



</style>