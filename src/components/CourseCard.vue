<script setup>
defineProps({
  course: Object,
  isInCart: Boolean,
});

defineEmits(["add-to-cart"]);
</script>

<template>
  <div
    class="card h-100"
    :class="{ 'sold-out-card opacity-50': !course.available }"
  >
    <div
      class="card-header bg-light border-dark d-flex justify-content-between align-items-center"
    >
      <div class="artisan-label text-muted small">
        <i class="fas fa-star-of-life me-1"></i> Handcrafted Class
      </div>
      <span class="tag">{{ course.level }}</span>
    </div>

    <div class="card-body d-flex flex-column">
      <h5 class="card-title fw-bold">{{ course.title }}</h5>
      <div class="card-text mb-2">
        <i class="fas fa-chef-hat me-1"></i>
        <span class="text-muted small">{{ course.chef }}</span>
      </div>

      <div class="mt-2 mb-3">
        <span class="display-6 fw-bold">R{{ course.price }}</span>
        <span class="text-muted small"> / class</span>
      </div>

      <div v-if="!course.available" class="mb-3">
        <span
          class="badge bg-transparent border border-danger text-danger px-3 py-2"
        >
          Sold Out
        </span>
      </div>

      <button
        class="btn mt-auto"
        :class="isInCart ? 'btn-success' : 'btn-outline-dark'"
        :disabled="!course.available || isInCart"
        @click="$emit('add-to-cart')"
      >
        <i v-if="isInCart" class="fas fa-check-circle me-1"></i>
        <i v-else-if="!course.available" class="fas fa-ban me-1"></i>
        <i v-else class="fas fa-cart-plus me-1"></i>
        <span v-if="isInCart">In Cart</span>
        <span v-else-if="!course.available">Sold Out</span>
        <span v-else>Add to Cart</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.card-header {
  border-bottom: 2px solid var(--ink);
}

.card-title {
  font-size: 1.2rem;
}

.tag {
  background: var(--ink);
  color: var(--paper);
  padding: 0.2rem 0.6rem;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
}

.artisan-label {
  font-size: 0.65rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.btn {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 0;
}
</style>
