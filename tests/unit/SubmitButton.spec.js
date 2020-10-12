import { mount } from '@vue/test-utils'
import SubmitButton from '@/components/SubmitButton.vue'

const msg = 'submit'
const Factory = (props) => {
  return mount(SubmitButton, {
    props: {
      msg,
      ...props
    }
  })
}

describe('SubmitButton.vue', () => {
  describe('does not have admin privileges', () => {
    it('renders a message', () => {
      const wrapper = Factory()
  
      expect(wrapper.find('span').text()).toBe('Not Authorized')
      expect(wrapper.find('button').text()).toBe('submit')
    })
  })

  describe('does not have admin privileges', () => {
    it('renders a message', () => {
      const wrapper = Factory({ isAdmin: true })
  
      expect(wrapper.find('span').text()).toBe('Admin Privileges')
      expect(wrapper.find('button').text()).toBe('submit')
    })
  })
})