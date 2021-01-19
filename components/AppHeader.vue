<template>
  <b-navbar type="dark" variant="dark" sticky>
    <b-container fluid>
      <nuxt-link to="/" class="brand fs-1 text-decoration-none"
        >Short Jokes</nuxt-link
      >
      <b-navbar-nav class="gap-5">
        <nuxt-link class="nav-item fs-3 text-decoration-none" to="/jokes"
          >Jokes</nuxt-link
        >
        <nuxt-link class="nav-item fs-3 text-decoration-none" to="/about"
          >About</nuxt-link
        >
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
export default { name: 'AppHeader' }
</script>

<style scoped>
.brand {
  color: white;
  transition: color 0.5s;
}
.nav-item {
  color: darkgray;
  transition: color 0.5s;
}
.nuxt-link-exact-active {
  color: lightgreen;
}
</style>
