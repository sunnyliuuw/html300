<template>
  <div id="main">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
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
