import { mount } from '@vue/test-utils'
import JokeComponent from '@/pages/Jokes/_id/index.vue'

describe('SkeletonVisibility', () => {
  test('if joke is not fetched, skeleton should be visible', () => {
    const wrapper = mount(JokeComponent)
    wrapper.setData({ loadingJokes: true })
    expect(wrapper.find('[data-testid="loadingJokes"]').isVisible()).toBe(true)
  })
  test('if joke is fetched, skeleton should not exist', async () => {
    const wrapper = mount(JokeComponent)
    wrapper.setData({ state: { loadingJokes: false } })
    await wrapper.vm.$nextTick
    expect(wrapper.find('[data-testid="loadingJokes"]').exists()).toBe(false)
  })
})
