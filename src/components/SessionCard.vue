<script setup>
defineProps({
  session: {
    type: Object,
    required: true,
    validator: (s) =>
      s.id &&
      s.name &&
      s.coach &&
      s.date &&
      s.time &&
      typeof s.capacity === "number",
  },
});

defineEmits(["delete"]);
</script>

<template>
  <div
    class="session-item p-3 p-md-4 mb-3 d-flex flex-wrap align-items-center justify-content-between gap-3"
  >
    <div class="d-flex flex-wrap align-items-center gap-3 flex-grow-1">
      <div
        class="bg-success bg-opacity-10 rounded-circle p-2 d-flex align-items-center justify-content-center"
        style="width: 48px; height: 48px"
      >
        <i class="bi bi-person-walking fs-4" style="color: #5d8b6f"></i>
      </div>
      <div>
        <h5 class="mb-1 fw-semibold">{{ session.name }}</h5>
        <div class="d-flex flex-wrap gap-2 align-items-center">
          <span class="badge-soft"
            ><i class="bi bi-person-badge me-1"></i>{{ session.coach }}</span
          >
          <span class="badge-soft"
            ><i class="bi bi-calendar-heart me-1"></i>{{ session.date }}</span
          >
          <span class="badge-soft"
            ><i class="bi bi-clock me-1"></i>{{ session.time }}</span
          >
          <span class="badge-soft"
            ><i class="bi bi-people me-1"></i>Capacity:
            {{ session.capacity }}</span
          >
        </div>
      </div>
    </div>
    <button
      @click="$emit('delete', session.id)"
      class="btn btn-zen-danger btn-zen px-4 py-2 d-flex align-items-center gap-2"
    >
      <i class="bi bi-trash3"></i> <span>Cancel</span>
    </button>
  </div>
</template>
