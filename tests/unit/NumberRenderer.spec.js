import { mount } from '@vue/test-utils';
import NumberRenderer from '@/components/NumberRenderer';

describe('NumberRenderer.vue', () => {
  describe('even numbers', () => {
    it('renders even numbers', () => {
      const wrapper = mount(NumberRenderer, {
        props: {
          even: true,
        },
      });

      expect(wrapper.text()).toBe('2, 4, 6, 8');
    });
  });

  describe('odd numbers', () => {
    it('renders odd numbers', () => {
      const localThis = {
        even: false,
      };

      expect(NumberRenderer.computed.numbers.call(localThis)).toBe('1, 3, 5, 7, 9');
      // expect(NumberRenderer.computed.numbers.call({ even: false })).toBe('1, 3, 5, 7, 9');
    });
  });
});
