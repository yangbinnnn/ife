<template>
  <div id="app">
    <Admin></Admin>
    <router-view/>
  </div>
</template>


<script>
import Admin from "./components/Admin"
export default {
  name: 'App',
  components: {
    Admin
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
