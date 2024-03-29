<script setup>

</script>

<template >
  <div class="flex  flex-col">

    <header class="flex items-center h-14 gap-4 border-b px-6">
    <a class="flex items-center gap-2 font-semibold text-white" href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5"
        data-darkreader-inline-stroke=""
        style="--darkreader-inline-stroke: currentColor;"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
      </svg>
      Recipe Docs
    </a>
    <form class="ml-auto flex-1">
      <input
        class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full md:w-[300px] lg:w-[400px]"
        placeholder="Search recipes..."
        type="search"
      />
    </form>
    <div class="flex items-center text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6"
        data-darkreader-inline-stroke=""
        style="--darkreader-inline-stroke: currentColor;"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </div>
  </header>
</div>
</template>

<style >
  
</style>