<template>
  <b-card>
    <nuxt-link :to="'jokes/' + id" class="joke-text">
      {{ joke }}
    </nuxt-link>
  </b-card>
</template>

<script>
import { seperateQuestionAndAnswer } from '@/assets/js/util'

export default {
  name: 'Joke',
  props: {
    joke: { type: String, default: '' },
    id: { type: String, default: '' },
  },
  created() {
    const temp = seperateQuestionAndAnswer(this.joke)
    this.joke = temp[0]
  },
}
</script>

<style scoped>
.joke-text:hover {
  color: black;
}
</style>
