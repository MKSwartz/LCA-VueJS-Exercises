<script setup>
defineProps({
  item: Object,
});

defineEmits(["update-quantity", "remove-item"]);
</script>

<template>
  <div
    class="list-group-item d-flex flex-wrap justify-content-between align-items-center p-3 border-bottom border-dark"
  >
    <div class="flex-grow-1" style="min-width: 150px">
      <h6 class="fw-bold mb-1">{{ item.course.title }}</h6>
      <p class="small text-muted mb-1">
        <i class="fas fa-chef-hat me-1"></i>
        {{ item.course.chef }}
      </p>
      <p class="small mb-0">
        <i class="fas fa-tag me-1"></i>
        R{{ item.course.price }} each
      </p>
    </div>

    <div class="d-flex align-items-center gap-3 flex-wrap mt-2 mt-sm-0">
      <div class="d-flex align-items-center border border-dark">
        <button
          class="btn btn-sm border-0 px-2"
          :disabled="item.quantity <= 1"
          @click="$emit('update-quantity', item.quantity - 1)"
        >
          <i class="fas fa-minus"></i>
        </button>
        <span class="px-2 fw-semibold">{{ item.quantity }}</span>
        <button
          class="btn btn-sm border-0 px-2"
          @click="$emit('update-quantity', item.quantity + 1)"
        >
          <i class="fas fa-plus"></i>
        </button>
      </div>

      <div class="text-end" style="min-width: 80px">
        <small class="text-muted d-block text-uppercase">
          <i class="fas fa-calculator me-1"></i>Total
        </small>
        <strong class="fs-5">R{{ item.lineTotal }}</strong>
      </div>

      <button
        class="btn btn-sm border border-danger text-danger px-2"
        @click="$emit('remove-item')"
      >
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.list-group-item {
  background: transparent;
}

.btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>
