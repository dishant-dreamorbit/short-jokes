<template>
  <div>
    <div class="text-center fs-2 page-header">Jokes</div>
    <b-card no-body>
      <b-tabs
        card
        content-class="mt-3"
        justified
        active-nav-item-class="text-success"
      >
        <b-tab title="From the Web" active title-link-class="text-secondary">
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
          <SearchJokes @search-text="SearchText" />
          <div v-if="state.loadingJokes">
            <b-card
              v-for="jokesSkeletonWidth in jokesSkeletonListWidth"
              :key="jokesSkeletonWidth.index"
              class="joke-container"
              ><b-skeleton :width="jokesSkeletonWidth"
            /></b-card>
          </div>
          <Joke
            v-for="joke in jokes"
            :id="joke.id"
            :key="joke.id"
            :joke="joke.joke"
            class="joke-container"
        /></b-tab>
        <b-tab title="Added by us" title-link-class="text-secondary">
          <OwnJokes />
        </b-tab> </b-tabs
    ></b-card>
  </div>
</template>

<script>
import axios from 'axios'
import Joke from '@/components/Joke'
import SearchJokes from '@/components/SearchJokes'
import { filterJokesContainingQuestion } from '@/utils/jokes'
import OwnJokes from '@/components/OwnJokes'
export default {
  components: {
    Joke,
    SearchJokes,
    OwnJokes,
  },
  data() {
    return {
      state: {
        loadingJokes: false,
        responseErrorModal: { isVisible: false, errorMessage: '' },
      },
      jokesSkeletonListWidth: [
        '60%',
        '45%',
        '40%',
        '38%',
        '43%',
        '47%',
        '44%',
        '36%',
        '30%',
        '38%',
      ],
      jokes: [],
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
        'https://icanhazdadjoke.com/search?term=why&limit=30',
        config
      )
      this.jokes = filterJokesContainingQuestion(res.data.results)
      this.state.loadingJokes = false
    } catch (error) {
      this.state.responseErrorModal.isVisible = true
      this.state.responseErrorModal.errorMessage = 'Request Failure'
    }
  },
  methods: {
    async SearchText(text) {
      const config = {
        headers: {
          Accept: 'application/json',
        },
      }
      try {
        this.state.loadingJokes = true
        const res = await axios.get(
          `https://icanhazdadjoke.com/search?term=${text}`,
          config
        )
        this.jokes = filterJokesContainingQuestion(res.data.results)
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
  },
  head() {
    return {
      title: 'Jokes - Short Jokes',
    }
  },
}
</script>

<style scoped>
.joke-container {
  margin: 10px;
  -webkit-margin-collapse: collapse;
}
</style>
