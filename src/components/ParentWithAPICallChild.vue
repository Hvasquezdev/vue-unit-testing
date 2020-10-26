<template>
  <ComponentWithAsyncCall />
</template>

<script>
import ComponentWithAsyncCall from '@/components/ComponentWithAsyncCall';

export default {
  name: 'ParentWithAPICallChild',

  components: {
    ComponentWithAsyncCall,
  },
};
</script>
