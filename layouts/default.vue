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
}

body {
  margin: 0;
  padding: 0;
}

.sections-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
}

.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 50px;
}
</style>