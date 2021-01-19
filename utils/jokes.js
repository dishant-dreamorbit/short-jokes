export const filterJokesContainingQuestion = (jokes) => {
  return jokes.filter((joke) => {
    return joke.joke.includes('?')
  })
}
export const seperateQuestionAndAnswer = (joke) => {
  const result = joke.split('?')
  result[0] += '?'
  return result
}
