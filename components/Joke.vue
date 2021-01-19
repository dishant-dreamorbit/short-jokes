<template>
  <b-card>
    <nuxt-link :to="'jokes/' + id" class="joke-text">
      {{ jokeQuestion }}
    </nuxt-link>
  </b-card>
</template>

<script>
import { seperateQuestionAndAnswer } from '@/utils/jokes'

export default {
  name: 'Joke',
  props: {
    joke: { type: String, default: '' },
    id: { type: String, default: '' },
  },
  computed: {
    jokeQuestion() {
      return seperateQuestionAndAnswer(this.joke)[0]
    },
  },
}
</script>

<style scoped>
.joke-text:hover {
  color: black;
}
</style>
