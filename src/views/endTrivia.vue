<!-- src/views/EndQuiz.vue -->
<template>
  <div class="d-flex flex-column fill-height justify-center align-center">
    <h2>¡Has completado el cuestionario!</h2>
    <v-btn @click="goHome">Volver al inicio</v-btn>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push({ name: 'home' }); // Redirige a la página de inicio o la ruta que prefieras
}
</script>
