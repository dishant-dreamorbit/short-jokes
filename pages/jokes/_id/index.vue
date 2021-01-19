<template>
  <div class="container">
    <b-modal
      :visible="state.responseErrorModal.isVisible"
      ok-only
      hide-header
      no-close-on-backdrop
      no-close-on-esc
      ><template v-slot:modal-footer="{ ok }">
        <b-button @click="closeModal(ok)">OK</b-button> </template
      ><b-alert variant="danger" :show="true">{{
        state.responseErrorModal.errorMessage
      }}</b-alert></b-modal
    >
    <div class="container">
      <div v-if="state.loadingJokes" data-testid="loadingJokes">
        <b-skeleton />
      </div>
      <div class="text-center fs-6 joke-text">{{ joke[0] }}</div>
      <div class="text-center fs-3">{{ joke[1] }}</div>
      <img
        height="200px"
        width="200px"
        src="~/assets/images/laugh.png"
        class="mx-auto d-block laugh"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { seperateQuestionAndAnswer } from '@/utils/jokes'

export default {
  data() {
    return {
      state: {
        loadingJokes: false,
        responseErrorModal: { isVisible: false, errorMessage: '' },
      },
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
      this.state.loadingJokes = true
      const res = await axios.get(
        `https://icanhazdadjoke.com/j/${this.$route.params.id}`,
        config
      )
      this.joke = seperateQuestionAndAnswer(res.data.joke)
      this.state.loadingJokes = false
    } catch (error) {
      this.state.responseErrorModal.isVisible = true
      this.state.responseErrorModal.errorMessage = 'Request Failure'
    }
  },
  closeModal(ok) {
    this.state.responseErrorModal.isVisible = false
    this.state.responseErrorModal.errorMessage = ''
    ok()
  },

  head() {
    return {
      title: 'Jokes - Short Jokes',
    }
  },
}
</script>

<style scoped>
.container {
  margin-top: 100px;
}
.laugh {
  margin-top: 50px;
}
</style>
