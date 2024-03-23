<script setup>


// metodo - methods
let validation = true
const text = 'Boton uno'

const handleClick1 = (menssage) => {
  console.log('Me has clickeado');
}

// const handleClick2 = () => {
//   console.log('Me has activado2');
//   validation = true
//   console.log('validation', validation);
// }



</script>

<template >
  <div>
    <h1>Eventos</h1>
    <button v-on:click="handleClick1('Btn 1 clickeado')">{{ text }}</button>
    <!-- <button v-else @click="handleClick2">Activame2</button> -->
  </div>
</template>

<style >
  
</style>