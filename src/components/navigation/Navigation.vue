<template>
  {{ title }}
  <nav class="nav nav-main">
    <ul class="nav__list">
      <li class="nav__item"><router-link to="/" class="nav__link">Go to Main</router-link></li>
      <li class="nav__item"><router-link to="/films" class="nav__link">Go to Films</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      'title': 'Title'
    }
  }
}
</script>

<style scoped>
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
