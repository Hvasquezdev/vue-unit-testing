import { createVuexStore } from '@/store';
import { mount } from '@vue/test-utils';
import ComponentWithGetters from '@/components/ComponentWithGetters';

const store = createVuexStore();

describe('ComponentWithGetters', () => {
  it('renders a fullname using a real Vuex getter', () => {
    const wrapper = mount(ComponentWithGetters, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.find('.fullname').text()).toBe('Alice Doe');
  });

  it('renders a username using the global mounting option', () => {
    const wrapper = mount(ComponentWithGetters, {
      global: {
        mocks: {
          $store: {
            getters: {
              fullname: 'Alice Doe',
            },
          },
        },
      },
    });

    expect(wrapper.find('.fullname').text()).toBe('Alice Doe');
  });
});
