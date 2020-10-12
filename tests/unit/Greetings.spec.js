import { mount } from '@vue/test-utils'
import Greetings from '@/components/Greetings'

const Factory = (values = {}) => {
  return mount(Greetings, {
    data() {
      return {
        ...values
      }
    }
  })
}

describe('Greetings.vue', () => {
  it('Renders a greeting', () => {
    const wrapper = Factory()
    expect(wrapper.text()).toMatch('Vue and TDD')
  })
})