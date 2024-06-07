<script setup lang="ts">

</script>

<template>
  <div class="site-wrapper">
    <WidgetsHeader />
    <main class="sections-wrapper">
      <slot />
    </main>
    <WidgetsFooter />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

.max-width {
  max-width: 1400px;
  width: 100%;
}

.section,
section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.sections-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  box-sizing: border-box;
}

.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 50px;
}

ul {
  list-style: none;
}

a {
  color: #000;
  text-decoration: none;
}

h3 {
  text-transform: uppercase
}
</style>