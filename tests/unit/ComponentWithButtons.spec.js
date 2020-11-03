import { createStore } from 'vuex';
import { mount } from '@vue/test-utils';
import ComponentWithButtons from '@/components/ComponentWithButtons';

const mutations = {
  testMutation: jest.fn(),
};

const store = createStore({
  mutations,
});

store.dispatch = jest.fn();

describe('ComponentWithButtons', () => {
  it('commit a mutation when a button is clicked', async () => {
    const wrapper = mount(ComponentWithButtons, {
      global: {
        plugins: [store],
      },
    });

    wrapper.find('.commit').trigger('click');
    await wrapper.vm.$nextTick();

    expect(mutations.testMutation).toHaveBeenCalledWith(
      {},
      { msg: 'Test Commit' }
    );
  });

  it('dispatch and action when button is clicked', async () => {
    const wrapper = mount(ComponentWithButtons, {
      global: {
        plugins: [store],
      },
    });

    wrapper.find('.dispatch').trigger('click');
    await wrapper.vm.$nextTick();

    expect(store.dispatch).toHaveBeenCalledWith('testAction', {
      msg: 'Test Dispatch',
    });
  });

  it('dispatch a namespaced action when button is clicked', async () => {
    const wrapper = mount(ComponentWithButtons, {
      global: {
        plugins: [store],
      },
    });

    wrapper.find('.namespaced-dispatch').trigger('click');
    await wrapper.vm.$nextTick();

    expect(store.dispatch).toHaveBeenCalledWith(
      'namespaced/very/deeply/testAction',
      {
        msg: 'Test Namespaced Dispatch',
      }
    );
  });
});
