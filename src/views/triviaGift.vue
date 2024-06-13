<!-- src/views/triviaGift.vue -->
<template>
  <v-carousel :show-arrows="false" hide-delimiters cycle id="banner">
    <v-carousel-item v-for="(item, i) in slides" :key="i" :src="item.src" cover>
      <div class="d-flex flex-column fill-height">
        <p class="hiText pa-5"> ¡Bienvenido a tu cumpleaños N32 y a mi regalo N12! <br> Como no podía ser de otra manera, este año viene con trivia.. Así que atento porque si no adivinas no hay regalo.</p>
        <v-btn @click="startQuiz" class="btn-start" variant="elevated">Empecemos</v-btn>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { questionsArr } from '../data/data.js';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';

const router = useRouter();
const slides = [
  { src: image1 },
  { src: image2 },
  { src: image3 },
];

const fullText = "Feliz cumple gordi";

const startQuiz = () => {
  router.push({ name: 'questionView', params: { id: '1' } });
}

</script>

<style scoped>
.hiText {
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  text-align: -webkit-center;
}
::v-deep.v-window{
  height: 100vh !important;
}

.btn-start{
  position: absolute;
  bottom: 30px;
  align-self: center;
  background-color: rgb(95 158 160 / 69%);
  color: #fff;
}
</style>
