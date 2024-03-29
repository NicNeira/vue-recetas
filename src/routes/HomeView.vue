<script setup>

    const goToAbout = () => {
      router.push('/about')
    }

</script>

<template>
  <h2>HomeView</h2>
  <p>En Homeeeeeeeeeee</p>
  <button @click="goToAbout">Go to About</button>
</template>