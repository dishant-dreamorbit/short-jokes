<template>
  <form @submit.prevent="OnSubmit">
    <input v-model="text" type="text" placeholder="enter keyword ..." /><input
      type="submit"
      value="Submit"
    />
  </form>
</template>

<script>
export default {
  name: 'SearchJokes',
  data() {
    return {
      text: '',
    }
  },
  methods: {
    OnSubmit() {
      this.$emit('search-text', this.text)
      this.text = ''
    },
  },
  head() {
    return {
      title: 'Search Joke - Short Jokes',
    }
  },
}
</script>
