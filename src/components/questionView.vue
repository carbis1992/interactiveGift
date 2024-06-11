<template>
  <div :style="backgroundStyle" class="wrapper-trivia" v-if="routeId !== '9'">
    <div v-if="!showModal" class="text-center justify-center d-flex flex-column">
      <h2 class="qTitle pt-10">{{ question }}</h2>
      <v-card class="options-wrapper" variant="plain">
        <v-card-text class="d-flex text-center justify-space-around flex-column card-text">
          <div v-for="(option, index) in options" :key="index">
            <v-btn @click="checkAnswer(option)" color="teal-lighten-4">{{ option }}</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </div>
    <div v-if="showModal" class="modal mx-auto">
      <v-card color="red-lighten-1">
        <v-card-text>
          Incorrecto
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Ok" @click="showModal = false"></v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
  <div class="text-center justify-center d-flex flex-column my-auto openQ" v-else>
    <!-- <v-card variant="tonal" color="blue-grey-darken-4"> -->
    <div class="form-wrapper">
      <h2 class="pa-5">{{ questionData.intro }}</h2>
      <h2 class="pa-5">{{ questionData.question }}</h2>
      <!-- </v-card> -->
      <v-textarea label="Escribe aquí" variant="outlined" color="cyan" class="pa-5" rows="2" v-model="answer"></v-textarea>
      <v-btn class="lastQ mb-7" @click="send()">Enviar</v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import { questionsArr } from '../data/data.js';
import { useRoute, useRouter } from 'vue-router';
import foto1 from '../assets/foto1.jpeg';
import foto2 from '../assets/foto2.jpeg';
import foto3 from '../assets/foto3.jpeg';
import foto4 from '../assets/foto4.jpeg';
import foto5 from '../assets/foto5.jpeg';
import foto6 from '../assets/foto6.jpeg';
import foto7 from '../assets/foto7.jpeg';
import foto8 from '../assets/foto8.jpeg';
import foto9 from '../assets/foto9.jpeg';

const fotos = [foto1, foto2, foto3, foto5, foto6, foto7, foto8, foto9];
const router = useRouter();
const route = useRoute();
const emit = defineEmits(['correct', 'incorrect']);

const routeId = ref(route.params.id);

const questionData = ref(questionsArr.find(question => question.id === route.params.id));
const question = ref(questionData.value.question);
const options = ref(questionData.value.options);
const correctAnswer = ref(questionData.value.correctAnswer);
const selectedOption = ref('');
const showModal = ref(false);
const next = ref(false);
const answer = ref('');
const backgroundImage = ref('');

const setRandomBackground = () => {
  const randomIndex = Math.floor(Math.random() * fotos.length);
  backgroundImage.value = fotos[randomIndex];
}

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${backgroundImage.value})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
}));

onMounted(() => {
  setRandomBackground();
});

const send = () => {
  if (answer.value.includes('buceo')) {
    router.push({ name: 'endTrivia', replace: true });
  } else {
    alert('incorrecto!');
  }
}

const checkAnswer = (option) => {
  if (option === correctAnswer.value) {
    const currentId = parseInt(route.params.id, 10);
    const nextId = currentId + 1;
    const nextQuestion = questionsArr.find(question => question.id === nextId.toString());
    showModal.value = false;

    if (nextQuestion) {
      router.push({ name: 'questionView', params: { id: nextId.toString() }, replace: true });
    } else {
      router.push({ name: 'endTrivia', replace: true });
    }
  } else {
    showModal.value = true;
  }
}

watch(() => route.params.id, (newId) => {
  routeId.value = newId;
  questionData.value = questionsArr.find(question => question.id === newId);
  question.value = questionData.value.question;
  options.value = questionData.value.options;
  correctAnswer.value = questionData.value.correctAnswer;
  selectedOption.value = '';
  setRandomBackground();
});

// setRandomBackground();
</script>

<style lang="scss" scoped>
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}

.video-wrapper {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.content {
  position: fixed;
  bottom: 50%;
  color: #f1f1f1;
  width: 100%;
}

.options-wrapper {
  width: 100%;
  height: 30vh;
}

.card-text {
  font-size: 0.875rem;
  height: 100%;
  align-items: center;
}

.modal {
  width: 80%;
}

.openQ {
  background-image: url('../assets/foto4.jpeg');
  color: white;
  z-index: 1000;
  position: absolute;
  background-size: cover;
  background-position: center;
  h2 {
    font-size: large;
  }
}

.lastQ {
  width: fit-content;
  align-self: center;
}

.wrapper-trivia{
  height: 100vh;
}

.form-wrapper{
  // width: 95%;
  background-color: rgb(95 158 160 / 69%);
  margin-right: auto;
  margin-left: auto;
}
.qTitle{
  font-weight: bold;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}
</style>
