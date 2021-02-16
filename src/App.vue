<template>
  <div id="app">
    <cube/>
  </div>
</template>

<script>
import Cube from './components/Geometry.vue'
export default {
    name: 'App',
    components: {
        Cube
    }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
