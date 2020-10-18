import { mount } from '@vue/test-utils';
import Emitter from '@/components/Emitter';

describe('Emitter', () => {
  describe('Mounting emitter', () => {
    it('emits an event with two arguments', () => {
      const wrapper = mount(Emitter);

      wrapper.vm.emitEvent();

      expect(wrapper.emitted()['my-event'][0]).toEqual(['name', 'password']);
    });
  });

  describe('Without mounting the emitter', () => {
    it('emits an event without mounting the emitter', () => {
      const events = {};
      const $emit = (event, ...args) => {
        events[event] = [...args];
      };

      Emitter.methods.emitEvent.call({ $emit });

      expect(events['my-event']).toEqual(['name', 'password']);
    });
  });
});
