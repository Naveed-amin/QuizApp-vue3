<script setup>
import Question from '../components/Question.vue'
import QuizHeader from '../components/QuizHeader.vue'
import Result from '../components/Result.vue'

import { useRoute } from 'vue-router';
import { ref,watch,computed } from 'vue';
import quizes from '../../data/quizes.json';


const route = useRoute();

const quizId = parseInt(route.params.id);
const quiz = quizes.find(q => q.id == quizId);
const currentQuestionIndex = ref(0);
const correctAnswer = ref(0);
const showResults = ref(false);

// const questtionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`);

// watch( () => currentQuestionIndex.value, () => {
//     questtionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
   
// })

const questtionStatus = computed( () => {
    return `${currentQuestionIndex.value}/${quiz.questions.length}`;
});
const questuionBar = computed(()=> {
    return `${currentQuestionIndex.value/quiz.questions.length * 100}%`
}) ;

const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
        correctAnswer.value++;
    }
    if(quiz.questions.length - 1 === currentQuestionIndex.value){
        showResults.value = true;
    }
    currentQuestionIndex.value++;
}





</script>

<template>
    <div>
        <QuizHeader  :questtionStatus="questtionStatus" :questuionBar="questuionBar"/>
    </div>

    <div>
        <Question v-if="!showResults"  :question="quiz.questions[currentQuestionIndex]" @selectOption="onOptionSelected"/>
        <Result v-else :correctAnswer="correctAnswer" :quizQuestionLength="quiz.questions.length"/>
    </div>
    <button @click="currentQuestionIndex++">Next Question</button>
  <div>
  </div>
    
</template>

<style scoped>
    header{
        margin-top: 20px;
    }
    header h4 {
        font-size: 30px;
    }
    .bar{
        width: 300px;
        height: 20px;
        border: 3px solid bisque;
    }
    .completion {
        height: 100%;
        width: 0%;
        background-color: bisque;
    }
    
</style>