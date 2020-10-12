import { mount, shallowMount } from '@vue/test-utils'
import Child from '@/components/Child'

describe('Child.vue', () => {
  it('Mount the child component', () => {
    const wrapper = mount(Child)
    const shallow = shallowMount(Child)

    console.log(wrapper.html())
    console.log(shallow.html())
  })
})