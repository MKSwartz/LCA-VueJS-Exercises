<script setup>
import AddClassForm from "./components/AddClassForm.vue";
import ClassList from "./components/ClassList.vue";
import { useSessions } from "./composables/useSessions.js";

const { sessions, addSession, deleteSession, totalSessions } = useSessions();
</script>

<template>
  <div class="container py-4 py-md-5">
    <header class="text-center mb-5">
      <div
        class="d-flex align-items-center justify-content-center gap-3 mb-2 flex-wrap"
      >
        <h1 class="display-5 fw-bold" style="color: #2a5f47">
          FlexZone <span style="font-weight: 300">Fitness</span>
        </h1>
      </div>
      <p class="lead text-secondary">Schedule Manager</p>
    </header>

    <AddClassForm @add-session="addSession" />

    <div class="zen-card p-4">
      <ClassList :sessions="sessions" @delete="deleteSession" />
      <div
        class="border-top mt-4 pt-3 d-flex justify-content-between align-items-center flex-wrap"
      >
        <div class="d-flex align-items-center gap-2">
          <i class="bi bi-calendar-check fs-5 text-success"></i>
          <span class="fw-medium"
            >Active sessions: <strong>{{ totalSessions }}</strong></span
          >
        </div>
      </div>
    </div>

    <footer class="text-center mt-4 footer-note">
      FlexZone Fitness - Empowering coaches & mindful movement
    </footer>
  </div>
</template>
