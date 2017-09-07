<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html {
  font-size: 10px;
}

body {
  font: 135%/1.5 'Arial', Helvetica, sans-serif;
}

a {
  border-bottom: 1px solid rgba(34,102,170,.3);
  color: #069;
  text-decoration: none;
}

a:hover {
  border-color: rgba(249,89,58,.3);
  color: #f9593a;
}
</style>
