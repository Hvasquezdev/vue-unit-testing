<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="username" data-username>
      <input type="submit">
    </form>

    <div 
      class="message" 
      v-if="submitted"
    >
      Thank you for your submission, {{ username }}.
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormSubmitter',

  data () {
    return {
      username: '',
      submitted: false
    }
  },

  methods: {
    handleSubmit () {
      return this.$http.get("/api/v1/register", { username: this.username })
        .then(() => {
          this.submitted = true
        })
        .catch((e) => {
          throw Error("Something went wrong", e)
        })
    }
  }
}
</script>