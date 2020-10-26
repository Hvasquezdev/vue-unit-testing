<template>
  <div class="stub"></div>
</template>

<script>
export default {
  name: 'ComponentWithAsyncCall',

  created() {
    this.makeApiCall();
  },

  methods: {
    makeApiCall() {
      console.log('Making api call');
      // fetch('https://jsonplaceholder.typicode.com/posts/1')
      //   .then(() => console.log('Cool'))
      //   .catch((e) => console.log('error:', e));
    },
  },
};
</script>
