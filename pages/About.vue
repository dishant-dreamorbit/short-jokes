<template>
  <div class="text-center container">
    <div class="fs-2 header">About</div>
    <p class="fs-6">
      This application is made to have some familiarity with Vue.js and Nuxt.js
      along with adding some fun with jokes.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'About - Short Jokes',
    }
  },
}
</script>

<style scoped>
.container {
  margin-top: 200px;
}
</style>
