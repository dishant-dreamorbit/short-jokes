<template>
  <div>{{ joke }}</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      joke: '',
    }
  },
  async created() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
    try {
      const res = await axios.get(
        `https://icanhazdadjoke.com/j/${this.$route.params.id}`,
        config
      )
      this.joke = res.data.joke
    } catch (error) {
      console.log(error)
    }
  },
  head() {
    return {
      title: 'Jokes - Short Jokes',
    }
  },
}
</script>
