<template>
  <div id="image">
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
          <!-- use for loop to list all responsive images with rounded corner-->
          <b-container class="p-4 bg-dark" v-for="img in images">
            <!-- one way bind for src value and alt value -->
            <b-img fluid mx-auto d-block rounded v-bind:src="img.asset" v-bind:alt="alt"></b-img>
          </b-container>
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
      //array of object for images
      images: [
        {asset: "./src/assets/IMG_6251.JPG", alt: "Image 1"},
        {asset: "./src/assets/IMG_6251.JPG", alt: "Image 2"},
        {asset: "./src/assets/IMG_6251.JPG", alt: "Image 3"}
      ]
    }
  }
}
</script>

<style>
#image {
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
