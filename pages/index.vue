<template>
  <div class="container">
    <div class="full">
      <h1 class="title">Freedom Fries</h1>
      <h2 class="subtitle">A company focused on America, Freedom and everything Know-It-All Elitists hate.</h2>
      <img class="sheeple" src="/sheeple.jpg" alt="Sheeple" />
      <h2 class="subtitle">Stay tuned for more...</h2>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.full {
  width: 100%;
}

.title {
  animation: 1s appear;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 120px;
  color: #33658a;
  letter-spacing: 1px;

  @media screen and (max-width: 410px) {
    letter-spacing: 0px;
    font-size: 4em;
  }
}

.subtitle {
  animation: 1s appear;
  font-weight: 300;
  font-size: 30px;
  color: #33658a;
  word-spacing: 5px;
  padding-bottom: 15px;
  @media screen and (max-width: 410px) {
    font-size: 15px;
    word-spacing: 1px;
  }
}

.sheeple {
  width: 50%;
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
