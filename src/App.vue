<script setup>
import { ref, computed, onMounted, watch } from "vue";
import Header from "./components/Header.vue";
import CourseCatalog from "./components/CourseCatalog.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import Footer from "./components/Footer.vue";
import { coursesData } from "./composables/courses.js";

const courses = ref(coursesData);
const cartItems = ref([]);

onMounted(() => {
  const savedCart = localStorage.getItem("cooking-masterclass-cart");
  if (savedCart) {
    cartItems.value = JSON.parse(savedCart);
  }
});

watch(
  cartItems,
  (newCart) => {
    localStorage.setItem("cooking-masterclass-cart", JSON.stringify(newCart));
  },
  { deep: true },
);

const cartCourseIds = computed(() => {
  return cartItems.value.map((item) => item.courseId);
});

const cartTotalItems = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
});

const cartItemsWithDetails = computed(() => {
  return cartItems.value.map((cartItem) => {
    const course = courses.value.find((c) => c.id === cartItem.courseId);
    return {
      ...cartItem,
      course,
      lineTotal: course.price * cartItem.quantity,
    };
  });
});

const addToCart = (courseId) => {
  const course = courses.value.find((c) => c.id === courseId);
  if (!course?.available) return;

  const existingItem = cartItems.value.find(
    (item) => item.courseId === courseId,
  );

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.value.push({ courseId, quantity: 1 });
  }
};

const updateQuantity = (courseId, newQuantity) => {
  if (newQuantity <= 0) {
    removeItem(courseId);
    return;
  }

  const item = cartItems.value.find((item) => item.courseId === courseId);
  if (item) {
    item.quantity = newQuantity;
  }
};

const removeItem = (courseId) => {
  cartItems.value = cartItems.value.filter(
    (item) => item.courseId !== courseId,
  );
};
</script>

<template>
  <div class="app container-fluid px-4">
    <Header :cart-item-count="cartTotalItems" />

    <div class="row mt-5 g-4">
      <div class="col-lg-8">
        <div class="section-header mb-4">
          <h2 class="fw-bold">✦ Cooking Classes ✦</h2>
          <p class="text-muted small font-monospace">
            Where will your culinary curiousity take you?
          </p>
        </div>
        <CourseCatalog
          :courses="courses"
          :cart-course-ids="cartCourseIds"
          @add-to-cart="addToCart"
        />
      </div>

      <div class="col-lg-4">
        <div class="section-header mb-4">
          <h2 class="fw-bold">✦ Your Cart ✦</h2>
          <p class="text-muted small font-monospace">
            {{ cartTotalItems }} item(s) selected
          </p>
        </div>
        <ShoppingCart
          :cart-items="cartItemsWithDetails"
          @update-quantity="updateQuantity"
          @remove-item="removeItem"
        />
      </div>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.app {
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.section-header h2 {
  font-size: 1.3rem;
  letter-spacing: -0.3px;
  margin-bottom: 0.25rem;
}

@media (max-width: 768px) {
  .section-header h2 {
    font-size: 1.2rem;
  }
}
</style>
