<script setup>

const goToHome = () => {
  router.push('/')
}


</script>

<template>
  <h2>AboutView</h2>
  <button @click="goToHome">Go to About</button>

</template>