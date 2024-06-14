<template>
<div :style="backgroundStyle">
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
</div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import confetti from 'canvas-confetti';
import image2 from '../assets/image2.jpeg';

const router = useRouter();
const foto = image2;

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${foto})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100%',
  position: 'absolute'
}));

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
.content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-top: 76%;
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
