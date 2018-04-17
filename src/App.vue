<template>
  <div id="app">
    <p>{{data-client-id}}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  props: ['data-client-id'],
  components: {}
}
</script>
