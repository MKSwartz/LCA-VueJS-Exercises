<script setup>
import { computed } from "vue";

const props = defineProps({
  cartItems: Array,
});

const subtotal = computed(() => {
  return props.cartItems.reduce((sum, item) => sum + item.lineTotal, 0);
});

const grandTotal = computed(() => {
  return subtotal.value.toFixed(2);
});
</script>

<template>
  <div class="cart-summary p-3 bg-white border-top border-dark">
    <div class="d-flex justify-content-between mb-2">
      <span><i class="fas fa-receipt me-2"></i>Subtotal</span>
      <strong>R{{ subtotal }}</strong>
    </div>
    <hr class="my-2" />
    <div class="d-flex justify-content-between mb-3">
      <span class="fw-bold fs-5">
        <i class="fas fa-total me-2"></i>Grand Total
      </span>
      <span class="fw-bold fs-5">R{{ grandTotal }}</span>
    </div>
    <button class="btn btn-dark w-100" disabled>Proceed to Checkout</button>
  </div>
</template>

<style scoped>
.cart-summary {
  background: var(--paper);
}
</style>
