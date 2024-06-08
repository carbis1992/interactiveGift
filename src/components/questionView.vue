<!-- src/components/questionView.vue -->
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
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const emit = defineEmits(['correct', 'incorrect']);

const questionData = questionsArr.find(question => question.id === route.params.id);
const question = ref(questionData.question);
const options = ref(questionData.options);
const correctAnswer = ref(questionData.correctAnswer);
const selectedOption = ref('');

const checkAnswer = () => {
  if (selectedOption.value === correctAnswer.value) {
    const currentId = parseInt(route.params.id, 10);
    const nextId = currentId + 1;
    const nextQuestion = questionsArr.find(question => question.id === nextId.toString());

    if (nextQuestion) {
      router.push({ name: 'questionView', params: { id: nextId.toString() }, replace: true });
    } else {
      alert('¡Has completado todas las preguntas!');
      // Aquí puedes redirigir a otra vista, por ejemplo a una pantalla de fin del cuestionario
      router.push({ name: 'endTrivia', replace: true });
    }
  } else {
    alert('Respuesta incorrecta');
  }
}

watch(() => route.params.id, (newId) => {
  const newQuestionData = questionsArr.find(question => question.id === newId);
  question.value = newQuestionData.question;
  options.value = newQuestionData.options;
  correctAnswer.value = newQuestionData.correctAnswer;
  selectedOption.value = '';
});
</script>

