import { shallowMount } from '@vue/test-utils';
import ParentWithAPICallChild from '@/components/ParentWithAPICallChild.vue';
import ComponentWithAsyncCall from '@/components/ComponentWithAsyncCall.vue';

describe('ParentWithAPICallChild.vue', () => {
  it('renders with mount and does initialize API call', () => {
    const wrapper = shallowMount(ParentWithAPICallChild);

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true);
  });
});
