<template>
  <div id="nav">
    <!-- nav bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="nav">
        <li class="nav-item bg-primary">
          <router-link to="/" class="nav-link text-white">Home</router-link>
        </li>
        <li class="nav-item bg-success">
          <router-link to="/image" class="nav-link text-white">Image</router-link>
        </li>
        <li class="nav-item bg-danger">
          <router-link to="/accordion" class="nav-link text-white">Accordion</router-link>
        </li>
        <li class="nav-item bg-warning">
          <router-link to="/grid" class="nav-link text-white">Grid</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
