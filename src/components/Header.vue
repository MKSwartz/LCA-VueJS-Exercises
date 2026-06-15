<script setup>
defineProps({
  cartItemCount: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <header
    class="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 border-bottom border-dark"
  >
    <div class="logo-area">
      <h1 class="display-6 fw-bold">Cooking Masterclass</h1>
    </div>
    <div
      class="cart-widget bg-light border border-dark p-2 px-3 d-flex align-items-center gap-2"
    >
      <i class="fas fa-shopping-cart"></i>
      <span class="fw-semibold">Cart</span>
      <span class="bg-dark text-white px-2 py-1 ms-1">{{ cartItemCount }}</span>
    </div>
  </header>
</template>

<style scoped>
.logo-area h1 {
  font-size: 1.6rem;
  letter-spacing: -0.5px;
}

.cart-widget {
  font-weight: 500;
}

@media (max-width: 768px) {
  .logo-area h1 {
    font-size: 1.3rem;
  }
}
</style>
