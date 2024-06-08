<template>
    <v-carousel :show-arrows="false" hide-delimiters cycle>
    <v-carousel-item
      v-for="(item,i) in slides"
      :key="i"
      :src="item.src"
      cover
    >
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
  // Redirigir al usuario a la primera pregunta del cuestionario
  router.push({ path: '/question/1', replace: true });
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
      }, 2000); // Tiempo de espera antes de iniciar el próximo ciclo (en milisegundos)
    }
  }, 100); // Intervalo de tiempo entre cada letra (en milisegundos)
}

onMounted(() => {
  typeWriter(); // Iniciar el efecto de máquina de escribir cuando el componente se monta
});
</script>


<style lang="scss" scoped>
    .hiText{
        color: #fff;
    }
</style>