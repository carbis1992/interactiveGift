<template>
  <div class="video-wrapper">
    <video autoplay muted loop id="myVideo">
      <source :src="video" type="video/mp4">
    </video>
  </div>
  <div class="content-wrapper d-flex flex-column justify-center align-center">
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
.video-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-top: 55%;
  margin-left: 5%;
  position: relative;
  z-index: 1;
  text-align: center;
}

.card-content {
  background-color: rgb(95 158 160 / 69%);
  color: #fff;
  border-color: #26A69A;
}
</style>
