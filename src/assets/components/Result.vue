
<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const {correctAnswer,quizQuestionLength} = defineProps(['correctAnswer','quizQuestionLength']);
</script>


<template>
  <div class="result">
    <p>Your Result...</p>
    <h1>
        {{ correctAnswer }} / {{ quizQuestionLength }}
    </h1>
    <RouterLink to="/">Back to Home</RouterLink>
  </div>
</template>

<style scoped>
.result{
    text-align: center;
    padding: 100px 0;
}
p{
    font-size: 20px;
}
h1{
    font-size: 80px;
}

</style>