import { mount } from '@vue/test-utils';
import App from '@/App';
import NestedRoute from '@/views/NestedRoute';
import { createVueRouter } from '@/router';

describe('App', () => {
  describe('NestRoute', () => {
    it('renders a child view via routing', async () => {
      const router = createVueRouter();

      router.push('/nested-route');
      await router.isReady();

      const wrapper = mount(App, {
        global: {
          plugins: [router],
        },
      });

      expect(wrapper.findComponent(NestedRoute).exists()).toBe(true);
    });
  });

  describe('NestedRoute Content', () => {
    it('renders a username from query string', () => {
      const username = 'Alice';
      const wrapper = mount(NestedRoute, {
        global: {
          mocks: {
            $route: {
              params: { username },
            },
          },
        },
      });

      expect(wrapper.find('.username').text()).toBe(username);
    });
  });
});
