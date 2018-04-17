<template>
  <div id="app">
    <p>{{JSON.stringify(dataAttributs)}}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  props: ['dataAttributs'],
  components: {}
}
</script>
