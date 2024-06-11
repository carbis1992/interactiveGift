<!-- src/views/EndQuiz.vue -->
<template>
  <div class="d-flex flex-column fill-height justify-center align-center">
    <h2>GANASTE!!!!!</h2>
    <p>Este año decidí regalarte un voucher de 200 € para que lo canjees este verano en la escuela de buceo de tu preferencia. 
Felices 32 mi gordo, siempre es lindo festejar la vida con vos y espero que sea así por mucho tiempo más 🤍 Te amo más de lo que soy capaz de explicar.</p>
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
