<template>
  <div id="main">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      button: 'Click Me!',
      jumbotron_title: 'Jumbotron',
      jumbotron_body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      Tooltip: 'Click to explore',
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
