<script setup>
import { defineProps,defineEmits } from 'vue';

const emit = defineEmits(['selectOption'])
const {question} = defineProps(['question']);


const emitSelectedOption = (isCorrect) => {
   emit('selectOption', isCorrect)
}

</script>
<template>
    <!-- {{ question.options }} -->
    <div class="question-container">
        <h1 class="question">
            {{ question.text }}
        </h1>
    </div>
    <div class="option-container">
        <div v-for="ques in question.options" :key="ques.id" class="option" @click="emitSelectedOption(ques.isCorrect)">
            <p class="option-label">{{ ques.label }}</p>
            <div class="option-value">
                <p>
                    {{ ques.text }}
                </p>
            </div>
        </div>

        
        </div>
</template>

<style scoped>

.question-container{
         margin-top: 20px;
    }
    .question{
        font-size: 40px;
        margin-bottom: 20px;
    }
    .option{
        display: flex;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .option-label{
        background-color: bisque;
        width: 60px;
        height: 40px;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .option-value{
        background-color: rgb(244, 239, 239);
        width: 100%;
        font-size: 30px;
        padding: 0 20px;
    }

</style>