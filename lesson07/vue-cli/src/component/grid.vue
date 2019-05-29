<template>
  <div id="grid">
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
          <!-- responsive grid system container -->
          <div class="container">
            <!-- row one -->
            <div class="row">
              <!-- phone 12 tablet 12 laptop 8 desktop 8 -->
              <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 bg-info">phone12 tablet12 desktop8</div>
              <!-- phone 12 tablet 12 laptop 4 desktop 4 -->
              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 bg-dark">phone12 tablet12 desktop8</div>
            </div>
            <!-- row two -->
            <div class="row">
              <!-- phone 12 tablet 6 laoptop 4 desktop 4 -->
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">.col-xs-6 .col-sm-4</div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">.col-xs-6 .col-sm-4</div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">.col-xs-6 .col-sm-4</div>
            </div>
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
      copyright: '© 2019 Copyright'
    }
  }
}
</script>

<style>
#grid {
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
