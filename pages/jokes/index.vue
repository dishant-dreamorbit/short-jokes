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
          <b-form ref="jokeForm" @submit.prevent="OnSubmit">
            <b-input-group prepend="Joke">
              <b-form-input
                v-model="state.newOwnJoke"
                data-testid="JokeInput"
                type="text"
                placeholder="enter joke ..."
                required
              /> </b-input-group
            ><b-input-group prepend="Author" class="mt-3">
              <b-form-input
                v-model="state.newOwnJokeAuthor"
                data-testid="AuthorInput"
                type="text"
                placeholder="enter author ..."
                required
              /> </b-input-group
            ><b-button
              v-show="state.editId > 0"
              class="cancel-btn mt-3"
              variant="outline-secondary"
              @click="onCancelEdit"
            >
              Cancel</b-button
            ><b-button
              type="submit"
              :class="[state.editId > 0 ? 'add-edit-btn' : 'w-100', 'mt-3']"
            >
              {{ state.editId > 0 ? 'Edit' : 'Add' }} joke with id
              {{ state.editId > 0 ? state.editId : jokeId }}</b-button
            >
          </b-form>
          <b-table
            ref="OwnJokesTable"
            striped
            hover
            :items="ownJokes"
            class="mt-5"
            :fields="fields"
          >
            <template #cell(action)="data">
              <b-button
                variant="outline-secondary"
                @click="onEditJoke(data.index)"
              >
                Edit
              </b-button>
              <b-button @click="onDeleteJoke(data.item.id)"> Delete </b-button>
            </template>
            <template #cell()="data">
              <i>{{ data.value }}</i>
            </template>
          </b-table>
        </b-tab>
      </b-tabs></b-card
    >
  </div>
</template>

<script>
import axios from 'axios'
import Joke from '@/components/Joke'
import SearchJokes from '@/components/SearchJokes'
import { filterJokesContainingQuestion } from '@/utils/jokes'
export default {
  components: {
    Joke,
    SearchJokes,
  },
  data() {
    return {
      state: {
        loadingJokes: false,
        responseErrorModal: { isVisible: false, errorMessage: '' },
        newOwnJoke: '',
        newOwnJokeAuthor: '',
        editId: 0,
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
      fields: [
        'id',
        'joke',
        {
          key: 'author',
          sortable: true,
        },
        'action',
      ],
    }
  },
  computed: {
    ownJokes() {
      return this.$store.state.jokes.list
    },
    jokeId() {
      return this.$store.state.jokes.counter
    },
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
    OnSubmit() {
      if (this.state.editId > 0) {
        this.$store.commit('jokes/edit', {
          id: this.state.editId,
          joke: this.state.newOwnJoke,
          author: this.state.newOwnJokeAuthor,
        })
        this.$refs.OwnJokesTable.refresh()
        this.state.editId = 0
      } else {
        this.$store.commit('jokes/add', {
          joke: this.state.newOwnJoke,
          author: this.state.newOwnJokeAuthor,
        })
      }
      this.$refs.jokeForm.reset()
    },
    onDeleteJoke(id) {
      this.$store.commit('jokes/remove', {
        id,
      })
    },
    onEditJoke(index) {
      this.state.editId = this.ownJokes[index].id
      this.state.newOwnJoke = this.ownJokes[index].joke
      this.state.newOwnJokeAuthor = this.ownJokes[index].author
    },
    onCancelEdit() {
      this.state.editId = 0
      this.$refs.jokeForm.reset()
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
.cancel-btn {
  width: 49%;
}
.add-edit-btn {
  width: 49%;
  float: right;
}
</style>
