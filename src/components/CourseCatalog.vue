<script setup>
import CourseCard from "./CourseCard.vue";

defineProps({
  courses: Array,
  cartCourseIds: Array,
});

defineEmits(["add-to-cart"]);
</script>

<template>
  <div class="row g-4">
    <div v-for="course in courses" :key="course.id" class="col-md-6 col-xl-4">
      <CourseCard
        :course="course"
        :is-in-cart="cartCourseIds.includes(course.id)"
        @add-to-cart="$emit('add-to-cart', course.id)"
      />
    </div>
  </div>
</template>
