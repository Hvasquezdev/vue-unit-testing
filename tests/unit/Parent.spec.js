import { mount } from '@vue/test-utils';
import '@testing-library/jest-dom';
import Parent from '@/components/Parent';
// import Child from '@/components/Child';

describe('Parent.vue', () => {
  it('Mount the parent component', () => {
    const wrapper = mount(Parent);
    expect(wrapper.findComponent({ name: 'Child' }).exists()).toBe(true);
  });
});
