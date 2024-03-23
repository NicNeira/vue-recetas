<script setup>
import { ref, computed } from "vue";
import { OhVueIcon } from "oh-vue-icons"; // Notar que se utiliza importación nombrada

const name = "Vue 3";

// Refs
// Se usan para almacenar valores que pueden cambiar
let counter = ref(0);
let numberArray = ref([]);

const increment = () => {
  counter.value++;
};

const decrement = () => {
  counter.value--;
};

const reset = () => {
  counter.value = 0;
};

const add = () => {
  numberArray.value.push(counter.value);
};

// Propiedades computadas
// Se pueden usar para hacer calculos o para hacer clases de css dinamicas
const classCounter = computed(() => {
  return counter.value > 0
    ? "positive"
    : counter.value < 0
    ? "negative"
    : "neutro";
});

const classBoolean = computed(() => {
  return numberArray.value.includes(counter.value);
});

const classBgAddButton = computed(() => {
  return classBoolean.value ? "bg-slate-700" : "bg-teal-600";
});
</script>

<template>
  <div class="container">
    <h1>{{ name }}</h1>
    <!-- Con :class se puede hacer la clase de css dinamica -->
    <h2 class="text-6xl" :class="classCounter">{{ counter }}</h2>
    <div class="buttons">
      <!-- En Vue, el símbolo "@" se utiliza para escuchar eventos en los elementos del DOM. En el código que has proporcionado, el símbolo "@" se utiliza para vincular el evento "click" a los botones.-->
      <button class="bg-green-500 text-white rounded-xl" @click="increment">
        <OhVueIcon name="bi-music-player" />
        Incrementar
      </button>
      <button class="bg-red-600 text-white rounded-xl" @click="decrement">
        <OhVueIcon name="bi-music-player" />
        Disminuir
      </button>
      <button class="bg-yellow-400 text-white rounded-xl" @click="reset">
        <OhVueIcon name="fc-globe" />
        Resetear
      </button>
      <button
        class="text-white rounded-xl"
        :class="classBgAddButton"
        :disabled="classBoolean"
        @click="add"
      >
        <OhVueIcon name="fc-globe" />
        Agregar
      </button>

      <ul>
        <template v-for="(number, index) in numberArray" :key="index">
          <li v-if="numberArray.length > 0" class="text-white">
            {{ number }}
          </li>
        </template>
      </ul>
    </div>

    <div></div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centra contenido verticalmente */
  align-items: center; /* Centra contenido horizontalmente */
  height: 100vh; /* O la altura que desees */
}

h1 {
  color: red;
}

button {
  padding: 10px;
  margin: 10px;
  width: 100px;
}

.positive {
  color: green;
}

.negative {
  color: red;
}

.neutro {
  color: gray;
}
</style>

/** * This component is located at
/E:/Desarrollo/Cursos/curso-vue/src/components/PropiedadesComputadas.vue. * * In
Vue, the "@" symbol is used to listen to events on DOM elements. In the provided
code, the "@" symbol is used to bind the "click" event to the buttons. * * Other
events that can be listened to using "@" in Vue include: * - "input": Listens to
the input event on form elements. * - "change": Listens to the change event on
form elements. * - "submit": Listens to the submit event on form elements. * -
"keydown": Listens to the keydown event on elements. * - "keyup": Listens to the
keyup event on elements. * - "mouseover": Listens to the mouseover event on
elements. * - "mouseleave": Listens to the mouseleave event on elements. * -
"focus": Listens to the focus event on elements. * - "blur": Listens to the blur
event on elements. * * These are just a few examples, and there are many more
events that can be listened to using "@" in Vue. */
