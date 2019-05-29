<template>
  <div id="accordion">
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
          <!-- accordion parent, use for loop to list all objects-->
          <div id="accordion-card" v-for="card in accordion_card">
            <!-- card -->
            <b-card no-body class="mb-1">
              <!-- card header -->
              <b-card-header header-tag="header" class="p-1">
                <!-- use v-bind for attributes and {{}} for text -->
                <b-button block href="#" v-b-toggle.v-bind:id="card.id">{{card.title}}</b-button>
              </b-card-header>
              <!-- visible for the first default object -->
              <b-collapse v-bind:id="card.id" visible accordion="my-accordion" data-parent="#accordion-card">
                <!-- card content body -->
                <b-card-body>
                  <b-card-text>{{card.text}}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
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
      copyright: '© 2019 Copyright',
      //array of accordion objects
      accordion_card: [
        {id: 'accordion-1', title: 'Accordion 1', text: 'Accordion_text_1'},
        {id: 'accordion-2', title: 'Accordion 2', text: 'Accordion_text_2'},
        {id: 'accordion-3', title: 'Accordion 3', text: 'Accordion_text_3'}
      ]
    }
  }
}
</script>

<style>
#accordion {
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
