<script setup>
import { ref } from "vue";
import "./assets/main.css";
import Header from "./components/Header.vue";
import CourseCards from "./components/CourseCards.vue";
import Footer from "./components/Footer.vue";

const courses = ref([
  {
    id: 1,
    title: "Thai Wok Mastery",
    chef: "Ethan Winters",
    price: 650,
    level: "Intermediate",
    available: true,
  },
  {
    id: 2,
    title: "Spices of India",
    chef: "Grace Ashcroft",
    price: 820,
    level: "Beginner",
    available: true,
  },
  {
    id: 3,
    title: "Japanese Izakaya Favorites",
    chef: "Chef Leon S. Kennedy",
    price: 1200,
    level: "Advanced",
    available: false,
  },
  {
    id: 4,
    title: "Moroccan Tagine Traditions",
    chef: "Chef Zeno",
    price: 460,
    level: "Beginner",
    available: true,
  },
  {
    id: 5,
    title: "Mexican Street Food",
    chef: "Carlos Oliviera",
    price: 1050,
    level: "Intermediate",
    available: false,
  },
]);

const wishlist = ref([]);

const toggleWishlist = (courseId) => {
  if (wishlist.value.includes(courseId)) {
    wishlist.value = wishlist.value.filter((id) => id !== courseId);
  } else {
    wishlist.value.push(courseId);
  }
};
</script>

<template>
  <div>
    <Header :wishlistCount="wishlist.length" />
    <CourseCards
      :courses="courses"
      :wishlist="wishlist"
      @toggle-wishlist="toggleWishlist"
    />
    <Footer />
  </div>
</template>
