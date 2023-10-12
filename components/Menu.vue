<script setup></script>

<template>
  <div
    class="position-absolute bg-stone-800 border-4 border-emerald-500 h-4/6 w-1/5 z-3 top-8 right-8"
  >
    <div class="d-flex flex-col align-self-center align-items-center h-100">
      <h1 class="text-4xl text-stone-500 p-3">Menu</h1>
      <div class="d-flex flex-row gap-2 w-10/12 mt-4 text-white">
        <button
          type="button"
          class="bg-stone-800 border-3 border-emerald-500 w-1/2 hover:bg-emerald-500"
        >
          <i class="bi bi-moon-fill"></i>
        </button>
        <button
          type="button"
          class="bg-stone-800 border-3 border-emerald-500 w-1/2 hover:bg-emerald-500"
        >
          <i class="bi bi-brightness-high-fill"></i>
        </button>
      </div>

      <div
        class="bg-stone-800 border-4 border-emerald-500 p-4 h-1/4 w-10/12 mt-10"
      >
        <div
          class="grid grid-cols-4 h-full w-30 gap-2 text-emerald-500 justify-items-center justify-self-center"
        >
          <div class="bg-red-500 box"></div>
          <div class="bg-orange-500 box"></div>
          <div class="bg-amber-500 box"></div>
          <div class="bg-yellow-500 box"></div>
          <div class="bg-lime-500 box"></div>
          <div class="bg-green-500 box"></div>
          <div class="bg-emerald-500 box"></div>
          <div class="bg-teal-500 box"></div>
          <div class="bg-cyan-500 box"></div>
          <div class="bg-sky-500 box"></div>
          <div class="bg-blue-500 box"></div>
          <div class="bg-indigo-500 box"></div>
          <div class="bg-violet-500 box"></div>

          <div class="bg-purple-500 box"></div>
          <div class="bg-fuchsia-500 box"></div>
          <div class="bg-pink-500 box"></div>
        </div>
      </div>
      <div
        class="bg-emerald-500 border-4 border-emerald-500 p-4 h- w-10/12 mt-10"
      >
        <div class="grid grid-cols-5 h-full w-30 gap-2 text-emerald-500">
          <div class="bg-red-500 bg-"></div>
          <div class="bg-orange-500"></div>
          <div class="bg-amber-500"></div>
          <div class="bg-yellow-500"></div>
          <div class="bg-lime-500"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  height: 25px;
  width: 25px;
}
</style>
