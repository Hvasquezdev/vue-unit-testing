<template>
  <div>Nested Route</div>
  <div class="username">
    {{ $route.params.username }}
  </div>
</template>

<script>
export default {
  name: 'NestedRoute',
};
</script>
