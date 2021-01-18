import { mount } from '@vue/test-utils'
import SearchJokesComponent from '@/components/SearchJokes.vue'

test('emits event with payload ', () => {
  const wrapper = mount(SearchJokesComponent)
  const textInput = wrapper.find('[data-testid="keywordInput"]')
  textInput.element.value = 'nut'
  textInput.trigger('input')
  wrapper.trigger('submit')
  const formSubmittedCall = wrapper.emitted('search-text')
  expect(formSubmittedCall).toHaveLength(1)
})
