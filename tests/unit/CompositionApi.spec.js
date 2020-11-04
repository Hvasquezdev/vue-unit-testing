import { mount } from '@vue/test-utils';
import CompositionApi from '@/components/CompositionApi';

describe('CompositionApi', () => {
  it('renders a message', () => {
    const wrapper = mount(CompositionApi, {
      props: {
        message: 'Testing the composition API',
      },
    });

    expect(wrapper.find('.message').text()).toBe('TESTING THE COMPOSITION API');
  });
});

describe('CompositionApi Events', () => {
  it('increments a count when button is clicked', async () => {
    const wrapper = mount(CompositionApi, {
      props: {
        message: '',
      },
    });

    await wrapper.find('button').trigger('click');

    expect(wrapper.find('.count').text()).toBe('Count: 1');
  });
});
