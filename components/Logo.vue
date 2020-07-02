<template>
  <img class="NuxtLogo" src="/sheeple.jpg" alt="Sheeple" />
  <!-- <img class="NuxtLogo" src="/fries.png" alt="Delicious Fries" height="360" /> -->
</template>
<style lang="scss">
.NuxtLogo {
  height:360px;
  animation: 1s appear;
  margin: auto;
  margin-bottom: 30px;

  @media screen and (max-width:410px){	
    height:auto;
    width:250px;
  }
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
