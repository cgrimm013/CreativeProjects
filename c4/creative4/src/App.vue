<template>
<div id="app">
  <app-header/>
  <router-view/>
  <footer class="center1">
    <a href="https://github.com/cgrimm013/CreativeProjects/tree/master/c4/creative4">Github Repo</a>
  </footer>
</div>
</template>

<script>
import AppHeader from './components/AppHeader';
export default {
  name: 'App',
  components: {
    AppHeader
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
.center1{
  text-align: center;
  margin-top: 50px;
}
</style>
