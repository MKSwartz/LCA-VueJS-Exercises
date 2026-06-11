<script setup>
defineProps({
  wishlistCount: Number,
});
</script>

<template>
  <header>
    <div class="brand">
      <h1>Cooking Masterclass</h1>
    </div>
    <div class="wishlist-view">
      Wishlisted
      <span class="wishlist-counter">{{ wishlistCount }}</span>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg) 0 var(--spacing-md);
  border-bottom: 2px solid var(--ink);
  margin-bottom: var(--spacing-xl);
}

.wishlist-view {
  background: var(--clay);
  padding: var(--spacing-sm) var(--spacing-lg);
  border: 1px solid var(--ink);
  font-weight: 500;
}

.wishlist-counter {
  background: var(--ink);
  color: var(--paper);
  padding: 0 8px;
  margin-left: 8px;
}

@media (max-width: 700px) {
  header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-md);
  }
}
</style>
