<template>
  <div class="container">
    <div class="full">
      <h1 class="title">Freedom Fries</h1>
      <h2 class="subtitle">A company focused on America, Freedom and the New Way to Navigate the News</h2>
      <img class="squirrel" src="/squirrel.png" alt="squirrel" />
      <h2 class="subtitle">Stay tuned for more...</h2>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.container {
  animation: 1s appear;
  margin: 0 auto;
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.full {
  width: 100%;
}

.title {
  margin-left: 5px;
  margin-right: 5px;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 120px;
  color: #33658a;
  letter-spacing: 1px;

  @media (max-width: 630px) {
    letter-spacing: 0.5px;
    font-size: 80px;
  }
}

.subtitle {
  margin-left: 15px;
  margin-right: 15px;
  font-weight: 300;
  font-size: 30px;
  color: #33658a;
  word-spacing: 5px;
  padding-bottom: 15px;
  @media screen and (max-width: 630px){
    font-size:20px;
    word-spacing: 2px;
  }
  @media screen and (max-width: 410px) {
    font-size: 15px;
    word-spacing: 1px;
  }
}

.squirrel {
  height: 50vh;
  margin: auto;
  margin-bottom: 30px;
  @media (max-width: 630px){
    height:30vh;
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
