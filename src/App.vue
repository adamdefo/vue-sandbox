<template>
  <div id="app">
    <nav class="nav nav-main">
      <ul class="nav__list">
        <li class="nav__item"><router-link to="/" class="nav__link">Go to Main</router-link></li>
        <li class="nav__item"><router-link to="/films" class="nav__link">Go to Films</router-link></li>
      </ul>
    </nav>
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

.nav {
  display: block;
  padding: 0;
  margin: 0;
}

.nav__list {
  display: block;
  margin: 0;
  padding: 0;
}

.nav__item {
  position: relative;
  display: inline-block;
  padding: .3em .5em;
  margin: 0 .5em .3em 0;
  white-space: nowrap;
}
</style>
