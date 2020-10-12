<template>
  <div>
    {{ greetings }}
  </div>
</template>

<script>
export default {
  name: 'Greetings',

  data() {
    return {
      greetings: 'Vue and TDD'
    }
  }
}
</script>

<style>
</style>
