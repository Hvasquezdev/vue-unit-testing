import { createVuexStore } from '@/store';
import { mount } from '@vue/test-utils';
import ComponentWithVuex from '@/components/ComponentWithVuex';

const store = createVuexStore();

describe('ComponentWithVuex', () => {
  it('renders a username using a real Vuex store', () => {
    const wrapper = mount(ComponentWithVuex, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.find('.username').text()).toBe('alice');
  });

  it('renders a username using a mock Vuex store', () => {
    const wrapper = mount(ComponentWithVuex, {
      global: {
        mocks: {
          $store: {
            state: {
              username: 'alice',
            },
          },
        },
      },
    });

    expect(wrapper.find('.username').text()).toBe('alice');
  });
});
