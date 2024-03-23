<script setup>

import { ref } from "vue";

const name = "Vue 3";

let counter = ref(0);

const increment = () => {
  counter.value++;
};

const decrement = () => {
  counter.value--;
};

const reset = () => {
  counter.value = 0;
};


</script>

<template >
  <div class='container'>
    <h1> {{name}} </h1>
    <!-- Con :class se puede hacer la clase de css dinamica -->
    <h2 :class="counter > 0 ? 'positive' : counter < 0 ? 'negative' : 'neutro'"> {{ counter }} </h2>
    <div class='buttons'>
      <button @click="increment">Incrementar</button>
      <button @click="decrement">Disminuir</button>
      <button @click="reset">Resetear</button>
    </div>

  </div>
</template>

<style >
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
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