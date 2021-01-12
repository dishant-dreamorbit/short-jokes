<template>
  <header>
    <h1>Short Jokes</h1>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
    </ul>
    <ul>
      <li><nuxt-link to="/jokes">Jokes</nuxt-link></li>
    </ul>
    <ul>
      <li><nuxt-link to="/about">About</nuxt-link></li>
    </ul>
  </header>
</template>

<script>
export default { name: 'AppHeader' }
</script>
