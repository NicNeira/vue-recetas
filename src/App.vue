<script setup>
import Directrices from "./components/Directrices.vue";
import Eventos from "./components/Eventos.vue";

import Reactividad from "./components/Reactividad.vue";
import PropiedadesComputadas from "./components/PropiedadesComputadas.vue";
import RouterExampleOne from "./components/RouterExampleOne.vue";

// Recipe pages
import Topbar from "./components/RecipePages/Topbar.vue";
import SideBar from "./components/RecipePages/Sidebar.vue";
import MainContent from "./components/RecipePages/MainContent.vue";

import router from './router';

console.log('App.vue setup executed');
console.log('router', router);

</script>

<template>
  <div class="bg-slate-950 flex flex-col">
    <!-- <Directrices />  -->
    <!-- <Eventos /> -->
    <!-- <Reactividad /> -->
    <!-- <PropiedadesComputadas /> -->
    <!-- <RouterExampleOne /> -->
    <Topbar />
    <div class="grid grid-cols-3 gap-4">
      <SideBar />
      <div class="col-span-2">
        <MainContent />
      </div>
    </div>
  </div>
</template>

<style></style>
