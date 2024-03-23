<script setup >

  const name = 'Nicolas'
  // const styleColor = "color: blue"; // Tiene que llevar comillas dobles
  // const arrayColores = ['red', 'blue', 'green'];
  // const activo = false;


  // console.log('name', name);

  // const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];

//   const arrayFrutas = [
//   {
//     name: "Manzana",
//     price: "$1.00",
//     description: "Una manzana",
//     icon: "🍎",
//   },
//   {
//     name: "Pera",
//     price: "$2.00",
//     description: "Una pera",
//     icon: "🍐",
//   },
//   {
//     name: "Naranja",
//     price: "$3.00",
//     description: "Una naranja",
//     icon: "🍊",
//   },
// ];

// 

const arrayFrutas = [
  {
    name: "Manzana",
    price: "$1.00",
    description: "Una manzana",
    stock: 0,
  },
  {
    name: "Pera",
    price: "$2.00",
    description: "Una pera",
    stock: 10,
  },
  {
    name: "Naranja",
    price: "$3.00",
    description: "Una naranja",
    stock: 20,
  },
];


</script>

<template >
  <div class="container">
    <h1>Directrices</h1>
    <!-- <h1> Hola {{ name.toUpperCase() }}  </h1> -->
    <!-- <h2 >{{ arrayColores }}</h2> -->
    <!-- v-bind puede ser resumido a simplemente :style -->
    <!-- <h2 :style="`color:${arrayColores[1]}`">Soy azul</h2>  -->
    <!-- <h2 >{{ activo ? 'Estoy activo' : 'Estoy inactivo' }}</h2> -->

    <!-- <p v-if="activo === true">Activo</p>
    <p v-else-if= "activo === false">Inactivo</p>
    <p v-else>No definido</p> -->
    <!-- <h2>{{ arrayFrutas }}</h2> -->
    <ul>

      <!-- Recorrer un arreglo -->
      <!-- <li v-for="(fruta, index) in arrayFrutas" :key="fruta.name">{{ fruta.icon }} - {{ fruta.name }} - {{ fruta.description }} - {{ fruta.price }}</li> -->

      <!-- Recorrer Objecto -->
      <!-- <li v-for="(value, property, index) in objetoFruta" :key="(value)">{{ index }} - {{ property }} : {{ value }}</li> -->

      <!-- Recorrer un arreglo con una validacion, el template en este caso vendria siendo como el fragment de react -->
      <template v-for="(fruta, index) in arrayFrutas" 
        :key="fruta.name" >
        <li v-if="fruta.stock > 0">
          {{ index }} - {{ fruta.name }}: {{ fruta.price }} 
      </li>
    </template>
    </ul>
  </div>
</template>

<style >

  .container {
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: red;
  }
  
</style>
