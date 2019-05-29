<template>
  <div id="app">
    <!-- body background color -->
    <div class="bg-primary">
      <!-- site container color -->
      <div class="container bg-white">
        <header class="bg-success">
          <h1>{{header}}</h1>
        </header>
        <!-- nav bar -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <ul class="nav">
            <li class="nav-item bg-primary">
              <a class="nav-link text-white" href="./index.html">Home</a>
            </li>
            <li class="nav-item bg-success">
              <a class="nav-link text-white" href="./image.html">Image</a>
            </li>
            <li class="nav-item bg-danger">
              <a class="nav-link text-white" href="./accordion.html">Accordion</a>
            </li>
            <li class="nav-item bg-warning">
              <a class="nav-link text-white" href="./grid.html">GridSystem</a>
            </li>
          </ul>
        </nav>
        <!-- main -->
        <main>
          <!-- Jumbotron, if button is not clicked show the jumbotron-->
          <div class="jumbotron" v-if="counter==0">
            <h1>{{jumbotron_title}}</h1>
            <p>{{jumbotron_body}}</p>
            <!-- button and tooltip -->
            <button v-on:click = "clicked" type="button" class="btn btn-secondary" data-toggle="tooltip" v-bind:title="Tooltip">
              {{button}}
            </button>
          </div>
          <!-- If the button is clicked, say hello world-->
          <div v-else>
            <h1>Hello World</h1>
          </div>
        </main>
        <!-- footer -->
        <footer class="bg-success">
          <h3>{{footer}}</h3>
          <!-- Copyright -->
          <div class="footer-copyright text-center py-3">{{copyright}}</div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      header: 'Header',
      footer: 'Footer',
      button: 'Click Me!',
      jumbotron_title: 'Jumbotron',
      jumbotron_body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      Tooltip: 'Click to explore',
      copyright: '© 2019 Copyright',
      counter: 0  //initial counter value
    }
  },
    //update counter value
    methods: {
      clicked: function() {
        this.counter++;
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
