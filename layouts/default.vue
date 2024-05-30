<script setup lang="ts">
import type { T_Link } from '~/types';


const menuNavTop: T_Link[] = [
  {
    href: "/",
    label: "Гланая"
  },
  {
    href: "/catalog",
    label: "Меню"
  },
  {
    href: "/profile/orders",
    label: "Заказы"
  },
  {
    href: "/contacts",
    label: "Контакты"
  },
  {
    href: "/profile",
    label: "Профиль"
  },
]

</script>

<template>
  <div>
    <nav>
      <ul>
        <li v-for="link in menuNavTop">
          <NuxtLink :to="link.href">{{ link.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <slot />
  </div>
</template>
