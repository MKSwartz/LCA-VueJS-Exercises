<script setup>
import CourseCard from "./CourseCard.vue";

defineProps(["courses", "wishlist"]);
defineEmits(["toggle-wishlist"]);
</script>

<template>
  <div class="courses-grid">
    <CourseCard
      v-for="course in courses"
      :key="course.id"
      :course="course"
      :is-saved="wishlist.includes(course.id)"
      @toggle-wishlist="$emit('toggle-wishlist', course.id)"
    />
  </div>
</template>

<style scoped>
.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin: var(--spacing-xl) 0;
}

@media (max-width: 700px) {
  .courses-grid {
    gap: var(--spacing-lg);
  }
}
</style>
