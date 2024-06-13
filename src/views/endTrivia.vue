<!-- src/views/EndQuiz.vue -->
<template>
  <video autoplay muted loop id="myVideo">
      <source :src="video" type="video/mp4">
    </video>
  <div class="d-flex flex-column justify-center align-center mx-auto" style="width: 90%; margin-top: 55%;">
    <v-card variant="outlined" class="card-content">
      <v-card-title class="text-center" style="font-weight: 700;">GANASTE !!!!</v-card-title>
      <v-card-text style="font-size: large;">Este año decidí regalarte un voucher de 200 € para que lo canjees este verano en la escuela de buceo de tu preferencia. 
        Felices 32 mi gordo, siempre es lindo festejar la vida con vos y espero que sea así por mucho tiempo más 🤍 Te amo más de lo que soy capaz de explicar.</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="goHome" icon="mdi-heart"></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import confetti from 'canvas-confetti';
import videoFin from '../assets/videoFin.mp4';

const router = useRouter();
const video = videoFin;

const goHome = () => {
  router.push({ name: 'home' });
}

confetti({
  particleCount: 200,
  spread: 70,
  origin: { y: 0.6 }
});
</script>

<style lang="scss" scoped>
video{
  width: -webkit-fill-available;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  top: 0;
}
.card-content{
  background-color: rgb(95 158 160 / 69%);
  color: #fff;
  border-color: #26A69A;
}
</style>