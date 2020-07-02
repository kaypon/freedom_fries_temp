<template>
  <img class="NuxtLogo" src="/sheeple.jpg" alt="Sheeple" height="360" />
  <!-- <img class="NuxtLogo" src="/fries.png" alt="Delicious Fries" height="360" /> -->
</template>
<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
  margin-bottom: 30px;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
