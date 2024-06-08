<!-- Question.vue -->
<template>
  <div>
    <h2>{{ question }}</h2>
    <div class="d-flex flex-column fill-height justify-center align-center">
        <div v-for="(option, index) in options" :key="index" class="pt-5 pb-5">
        <input type="radio" :id="`option_${index}`" :value="option" v-model="selectedOption">
        <label :for="`option_${index}`">{{ option }}</label>
        </div>
        <v-btn @click="checkAnswer">Enviar</v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { questionsArr } from '../data/data.js';
import { useRoute } from 'vue-router';

const route = useRoute();
const questionData = questionsArr.find((question) => question.id === route.params.id);
const question = ref(questionData.question);
const options = ref(questionData.options);
const correctAnswer = ref(questionData.correctAnswer);
const selectedOption = ref('');

const checkAnswer = () => {
  if (selectedOption.value === correctAnswer.value) {
    // Respuesta correcta, propagar evento al componente padre
    alert('Es correcto');
    // $emit('correct');
  } else {
    // Respuesta incorrecta, propagar evento al componente padre
    // $emit('incorrect');
    alert('Es incorrecto');
  }
}
console.log('ID', route.params.id)
    console.log('questionsArr', questionsArr)
    console.log('questionData', questionData)
watch(() => route.params.id, (newId, oldId) => {
  console.log('ID', route.params.id)
    console.log('questionsArr', questionsArr)
})
</script>
