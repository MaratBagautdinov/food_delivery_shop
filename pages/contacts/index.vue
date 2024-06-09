<script setup lang="ts">

</script>

<template>
  <div class="section">
    <div class="section-body max-width">
      <h1>Контакты</h1>
      <div class="contact-body">
        <WidgetsMap />
        <EntitiesContactFull />
      </div>
    </div>
  </div>
</template>
<style>
.contact-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
</style>