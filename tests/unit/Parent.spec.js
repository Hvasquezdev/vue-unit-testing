import { mount, shallowMount } from '@vue/test-utils'
import Parent from '@/components/Parent'

describe('Parent.vue', () => {
  it('Mount the parent component', () => {
    const wrapper = mount(Parent)
    const shallow = shallowMount(Parent)

    console.log(wrapper.html())
    console.log(shallow.html())
  })
})