<template>
  <div></div>
</template>

<script>
export default {
  name: 'Emitter',

  methods: {
    emitEvent() {
      this.$emit('my-event', 'name', 'password');
    },
  },
};
</script>

<style></style>
