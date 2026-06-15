<script setup>
import SessionCard from "./SessionCard.vue";

defineProps({
  sessions: {
    type: Array,
    required: true,
    default: () => [],
  },
});

defineEmits(["delete"]);
</script>

<template>
  <div class="class-list">
    <div v-if="sessions.length === 0" class="empty-state text-center py-5">
      <i class="bi bi-calendar2-x fs-1" style="color: #9bbf98"></i>
      <h4 class="mt-3 fw-medium" style="color: #4d6e5c">
        No sessions scheduled
      </h4>
      <p class="text-muted">Add the first class using the form above</p>
    </div>
    <div v-else>
      <div
        class="d-flex justify-content-between align-items-center mb-4 flex-wrap"
      >
        <h3 class="fs-4 m-0">
          <i class="bi bi-calendar-week me-2"></i>Scheduled Sessions
        </h3>
        <span
          class="badge bg-success bg-opacity-25 text-dark px-3 py-2 rounded-pill"
        >
          <i class="bi bi-files me-1"></i>Total: {{ sessions.length }} classes
        </span>
      </div>
      <SessionCard
        v-for="session in sessions"
        :key="session.id"
        :session="session"
        @delete="$emit('delete', $event)"
      />
    </div>
  </div>
</template>
