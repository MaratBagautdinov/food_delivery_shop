<script setup lang="ts">
import { useUserStore } from './store';


useUserStore().setUser(Number(localStorage.getItem('user_id') ?? ""))
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 10px;
  background: none;
  border: 1px solid #00000067;
  border-radius: 3px;
}

input[type="submit"] {
  cursor: pointer;
}

.buttons {
  display: flex;
  gap: 10px;
}

button,
label:has(input[type="radio"]) {
  padding: 10px;
  background: none;
  color: #0a6342;
  border: 2px solid #21c78a;
  border-radius: 5px;
  cursor: pointer;
  transition: .2s
}

button:hover,
label:has(input[type="radio"]:checked) {
  color: #ffffff;
  background: #21c78a;
}

label:has(input[type="radio"]:not(:checked)):hover {
  background: #b9ffe5;
}

input[type="radio"] {
  display: none;
}

input:disabled,
button:disabled {
  opacity: .5;
  border: 2px solid #00000067;
}

h2 {
  margin-top: 20px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  max-width: 100%;
}

.flex {
  gap: 20px;
  display: flex;
}

h1 {
  margin-top: 0
}
</style>