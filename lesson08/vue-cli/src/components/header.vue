<template>
  <div id="header">
    <header class="bg-success">
      <!-- named slot with default value -->
      <slot name="heading">Here is a default slot</slot>
      <h1>{{header}}</h1>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      header: 'Header'
    }
  }
}
</script>
