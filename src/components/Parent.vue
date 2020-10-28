<template>
  <div>
    <span v-show="showSpan">
      Parent component
    </span>

    <child />
  </div>
</template>

<script>
import Child from '@/components/Child';

export default {
  name: 'Parent',

  components: {
    Child,
  },

  data() {
    return {
      showSpan: false,
    };
  },
};
</script>

<style></style>
