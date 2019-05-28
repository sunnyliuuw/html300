<template>
  <div id="app">
    <!-- body background color -->
    <div class="bg-primary">
      <!-- site container color -->
      <div class="container bg-white">
        <!-- header -->
        <app-header>
          <!-- named slot -->
          <h1 slot="heading">Default</h1>
        </app-header>

        <!-- nav bar -->
        <app-nav></app-nav>
        <!-- router view is displaying the main section -->
        <router-view></router-view>
        <!-- footer -->
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
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
  margin-top: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
