<script setup>
import Header from "./components/Header.vue";
import TicketGrid from "./components/TicketGrid.vue";
</script>

<template>
  <div>
    <Header />
    <main class="container py-5">
      <h2 class="display-font section-title">Ticket Tiers</h2>
      <p class="section-subtitle">
        Pick the experience that fits your festival vibe
      </p>
      <TicketGrid />
    </main>
    <footer class="text-center py-4">
      <p class="mb-0">Cape Town Food Fest &middot; All rights reserved</p>
    </footer>
  </div>
</template>

<style scoped>
footer p {
  color: #9b8fa8;
}
</style>
