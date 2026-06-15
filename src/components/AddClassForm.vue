<script setup>
import { reactive, ref } from "vue";

const emit = defineEmits(["add-session"]);

const formData = reactive({
  name: "",
  coach: "",
  date: "",
  time: "",
  capacity: "",
});

const touched = reactive({
  name: false,
  coach: false,
  date: false,
  time: false,
  capacity: false,
});

const errors = reactive({
  name: "",
  coach: "",
  date: "",
  time: "",
  capacity: "",
});

const validateField = (field) => {
  const value = formData[field];

  if (field === "name") {
    if (!value.trim()) return "Class name is required";
    if (value.trim().length < 2) return "Minimum 2 characters";
    return "";
  }
  if (field === "coach") {
    if (!value.trim()) return "Coach name required";
    if (value.trim().length < 2) return "Enter a valid name";
    return "";
  }
  if (field === "date") {
    if (!value) return "Date is required";
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(value)) return "Use YYYY-MM-DD format";
    return "";
  }
  if (field === "time") {
    if (!value) return "Time is required";
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(value)) return "Use HH:MM format";
    return "";
  }
  if (field === "capacity") {
    if (value === "" || value === null || value === undefined)
      return "Capacity required";
    const num = Number(value);
    if (isNaN(num)) return "Must be a number";
    if (!Number.isInteger(num) || num < 1) return "Minimum capacity 1";
    if (num > 100) return "Max capacity 100";
    return "";
  }
  return "";
};

const validateAll = () => {
  const fields = ["name", "coach", "date", "time", "capacity"];
  let isValid = true;
  fields.forEach((f) => {
    const err = validateField(f);
    errors[f] = err;
    if (err) isValid = false;
  });
  return isValid;
};

const onInput = (field) => {
  touched[field] = true;
  errors[field] = validateField(field);
};

const handleSubmit = () => {
  Object.keys(touched).forEach((k) => (touched[k] = true));

  if (!validateAll()) return;

  const newSession = {
    id: Date.now() + Math.floor(Math.random() * 10000),
    name: formData.name.trim(),
    coach: formData.coach.trim(),
    date: formData.date,
    time: formData.time,
    capacity: Number(formData.capacity),
  };

  emit("add-session", newSession);

  formData.name = "";
  formData.coach = "";
  formData.date = "";
  formData.time = "";
  formData.capacity = "";

  Object.keys(touched).forEach((k) => {
    touched[k] = false;
    errors[k] = "";
  });
};
</script>

<template>
  <div class="zen-card p-4 mb-5">
    <h3 class="mb-3 fs-3 fw-semibold">
      <i class="bi bi-plus-circle me-2"></i>Add new class session
    </h3>
    <div class="row g-3">
      <div class="col-md-6 col-lg-4">
        <label class="form-label fw-medium small text-secondary"
          >Class name</label
        >
        <input
          type="text"
          class="form-control form-input-zen"
          v-model="formData.name"
          @input="onInput('name')"
          placeholder="e.g., Yoga, Pilates"
        />
        <div v-if="touched.name && errors.name" class="text-danger small mt-1">
          <i class="bi bi-exclamation-triangle-fill me-1"></i>{{ errors.name }}
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <label class="form-label fw-medium small text-secondary">Coach</label>
        <input
          type="text"
          class="form-control form-input-zen"
          v-model="formData.coach"
          @input="onInput('coach')"
          placeholder="Instructor name"
        />
        <div
          v-if="touched.coach && errors.coach"
          class="text-danger small mt-1"
        >
          <i class="bi bi-exclamation-triangle-fill me-1"></i>{{ errors.coach }}
        </div>
      </div>

      <div class="col-md-6 col-lg-3">
        <label class="form-label fw-medium small text-secondary"
          >Date (DD-MM-YYYY)</label
        >
        <input
          type="date"
          class="form-control form-input-zen"
          v-model="formData.date"
          @change="onInput('date')"
        />
        <div v-if="touched.date && errors.date" class="text-danger small mt-1">
          {{ errors.date }}
        </div>
      </div>

      <div class="col-md-6 col-lg-2">
        <label class="form-label fw-medium small text-secondary"
          >Time (HH:MM)</label
        >
        <input
          type="time"
          class="form-control form-input-zen"
          v-model="formData.time"
          @change="onInput('time')"
        />
        <div v-if="touched.time && errors.time" class="text-danger small mt-1">
          {{ errors.time }}
        </div>
      </div>

      <div class="col-md-6 col-lg-3">
        <label class="form-label fw-medium small text-secondary"
          >Max Capacity</label
        >
        <input
          type="number"
          class="form-control form-input-zen"
          v-model.number="formData.capacity"
          @input="onInput('capacity')"
          placeholder="e.g., 15"
          min="1"
          max="100"
        />
        <div
          v-if="touched.capacity && errors.capacity"
          class="text-danger small mt-1"
        >
          {{ errors.capacity }}
        </div>
      </div>

      <div class="col-12 d-flex justify-content-end mt-2">
        <button
          @click="handleSubmit"
          class="btn btn-zen-primary btn-zen px-5 py-2"
        >
          <i class="bi bi-calendar-plus me-2"></i>Schedule class
        </button>
      </div>
    </div>
  </div>
</template>
