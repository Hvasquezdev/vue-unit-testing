import { mount } from '@vue/test-utils';
import Bilingual from '@/components/Bilingual';
import translations from '@/translations.js';

const locale = 'ja';

describe('Bilingual', () => {
  it('renders successfully', () => {
    const wrapper = mount(Bilingual, {
      global: {
        mocks: {
          $t: (msg) => translations[locale][msg],
        },
      },
    });

    expect(wrapper.find('.hello').text()).toBe('こんにちは、世界！');
  });
});
