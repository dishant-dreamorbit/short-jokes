export const state = () => ({
  list: [
    {
      id: 1,
      joke: 'What is the longest sentence that a man knows? I do.',
      author: 'Dishant',
    },
    {
      id: 2,
      joke: 'What do you call a sheep with no legs? A cloud.',
      author: 'Avani',
    },
    {
      id: 3,
      joke: 'Why does a divorce cost so much? Because it is worth it.',
      author: 'Vallabh',
    },
  ],
  counter: 4,
})

export const mutations = {
  add(state, { joke, author }) {
    state.list.push({
      id: state.counter,
      joke,
      author,
    })
    state.counter++
  },
  edit(state, { id, joke, author }) {
    const index = state.list.findIndex((item) => item.id === id)
    state.list[index] = { ...state.list[index], joke, author }
  },
  remove(state, { id }) {
    state.list = state.list.filter((joke) => {
      return joke.id !== id
    })
  },
}
