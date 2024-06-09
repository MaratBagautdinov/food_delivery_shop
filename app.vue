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
  width: 300px;
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

button {
  padding: 10px;
  background: none;
  color: #0a6342;
  border: 2px solid #21c78a;
  border-radius: 5px;
  cursor: pointer;
  transition: .2s
}

button:hover {
  color: #ffffff;
  background: #21c78a;
}
</style>