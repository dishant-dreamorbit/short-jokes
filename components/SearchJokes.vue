<template>
  <form @submit.prevent="OnSubmit">
    <b-input-group prepend="Keyword">
      <b-form-input
        v-model="text"
        data-testid="keywordInput"
        type="text"
        placeholder="enter keyword ..."
      />
      <b-input-group-append>
        <b-button :pressed="false" variant="outline-secondary" type="submit">
          <b-icon icon="search"></b-icon>
        </b-button>
      </b-input-group-append>
    </b-input-group>
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
