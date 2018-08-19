<template>
  <div id="app">
    <h1>Vue route</h1>
    <img src="./assets/logo.png">
    <p>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    </p>
    <router-view></router-view>
    <Upload/>
  </div>
</template>

<script>
import Upload from "./components/Upload"
export default {
    name: 'App',
    components: {
        Upload,
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
