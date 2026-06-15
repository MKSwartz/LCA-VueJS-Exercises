<script setup>
import CartItem from "./CartItem.vue";
import CartSummary from "./CartSummary.vue";

defineProps({
  cartItems: Array,
});

defineEmits(["update-quantity", "remove-item"]);
</script>

<template>
  <div class="cart-container border border-dark bg-light">
    <div v-if="cartItems.length === 0" class="text-center p-5">
      <span class="display-1 opacity-50 d-block mb-3">🛒</span>
      <p class="mb-1">Your cart is empty</p>
      <p class="text-muted small font-monospace">
        Add some classes to get started!
      </p>
    </div>

    <div v-else>
      <div class="cart-items" style="max-height: 500px; overflow-y: auto">
        <CartItem
          v-for="item in cartItems"
          :key="item.courseId"
          :item="item"
          @update-quantity="$emit('update-quantity', item.courseId, $event)"
          @remove-item="$emit('remove-item', item.courseId)"
        />
      </div>

      <CartSummary :cart-items="cartItems" />
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  min-height: 400px;
}

.cart-items {
  border-bottom: 1px solid var(--ink);
}
</style>
