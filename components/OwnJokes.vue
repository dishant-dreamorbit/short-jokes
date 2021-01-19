<template>
  <div>
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
        <b-button variant="outline-secondary" @click="onEditJoke(data.index)">
          Edit
        </b-button>
        <b-button @click="onDeleteJoke(data.item.id)"> Delete </b-button>
      </template>
      <template #cell()="data">
        <i>{{ data.value }}</i>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'OwnJokes',
  data() {
    return {
      state: {
        newOwnJoke: '',
        newOwnJokeAuthor: '',
        editId: 0,
      },
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
  methods: {
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
}
</script>

<style scoped>
.cancel-btn {
  width: 49%;
}
.add-edit-btn {
  width: 49%;
  float: right;
}
</style>
