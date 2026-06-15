<script setup>
defineProps({
  tier: {
    type: Object,
    required: true,
  },
  isFavourite: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["toggle-favourite"]);
</script>

<template>
  <div
    class="card w-100 shadow-sm position-relative"
    :class="{ 'featured-card': tier.featured }"
  >
    <span v-if="tier.featured" class="featured-badge display-font">
      Most popular
    </span>

    <div class="card-body d-flex flex-column">
      <button
        class="favourite-btn"
        :class="{ active: isFavourite }"
        @click="$emit('toggle-favourite')"
        :aria-label="
          isFavourite ? 'Remove from favourites' : 'Add to favourites'
        "
      >
        {{ isFavourite ? "♥" : "♡" }}
      </button>

      <h3 class="display-font card-title">{{ tier.name }}</h3>
      <p class="price-tag display-font">
        R{{ tier.price }}
        <span class="price-unit">/ ticket</span>
      </p>
      <p class="card-text text-muted">{{ tier.description }}</p>

      <ul class="benefit-list flex-grow-1">
        <li v-for="(benefit, index) in tier.benefits" :key="index">
          {{ benefit }}
        </li>
      </ul>

      <button class="btn btn-festival w-100 mt-3">Get notified</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 1.25rem;
  border: 2px solid transparent;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(43, 30, 60, 0.12) !important;
}

.featured-card {
  border-color: var(--festival-orange);
  transform: scale(1.03);
}

.featured-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--festival-orange);
  color: white;
  padding: 0.3rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
}

.price-tag {
  font-size: 2rem;
  color: var(--festival-purple);
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.price-unit {
  font-size: 0.9rem;
  font-family: var(--font-body);
  color: #9b8fa8;
}

.benefit-list {
  list-style: none;
  padding-left: 0;
  margin: 1rem 0;
}

.benefit-list li {
  padding: 0.4rem 0;
  border-bottom: 1px dashed #eee0d8;
  font-size: 0.95rem;
}

.benefit-list li:before {
  content: "🌟 ";
}

.favourite-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.6rem;
  color: var(--festival-pink);
  cursor: pointer;
  line-height: 1;
  transition: transform 0.2s ease;
}

.favourite-btn:hover {
  transform: scale(1.2);
}

.favourite-btn.active {
  color: var(--festival-pink);
  text-shadow: 0 0 8px rgba(255, 77, 141, 0.4);
}
</style>
