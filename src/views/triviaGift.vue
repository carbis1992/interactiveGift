<!-- src/views/triviaGift.vue -->
<template>
  <v-carousel :show-arrows="false" hide-delimiters cycle>
    <v-carousel-item v-for="(item, i) in slides" :key="i" :src="item.src" cover>
      <div class="d-flex flex-column fill-height justify-center align-center">
        <h2 class="hiText">{{ typedText }}</h2>
        <v-btn @click="startQuiz">Bienvenido</v-btn>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { questionsArr } from '../data/data.js';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const router = useRouter();
const slides = [
  { src: image1 },
  { src: image2 },
  { src: image3 }
];

const typedText = ref('');
const fullText = "Feliz cumple gordi";

const startQuiz = () => {
  router.push({ name: 'questionView', params: { id: '1' } });
}

const typeWriter = () => {
  let index = 0;
  const intervalId = setInterval(() => {
    typedText.value += fullText[index];
    index++;
    if (index === fullText.length) {
      clearInterval(intervalId);
      setTimeout(() => {
        typedText.value = ''; // Reiniciar el texto
        typeWriter(); // Llamar a typeWriter nuevamente para iniciar otro ciclo
      }, 2000);
    }
  }, 100);
}

onMounted(() => {
  typeWriter();
});

</script>

<style scoped>
.hiText {
  color: #fff;
}
</style>
