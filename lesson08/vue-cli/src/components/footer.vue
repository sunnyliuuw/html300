<template>
  <div id="footer">
    <footer class="bg-success">
      <h3>{{footer}}</h3>
      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">{{copyright}}</div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footer: 'Footer',
      copyright: '© 2019 Copyright'
    }
  }
}
</script>
