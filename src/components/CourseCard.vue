<script setup>
defineProps(["course", "isSaved"]);
defineEmits(["toggle-wishlist"]);
</script>

<template>
  <div class="course-card" :class="{ 'sold-out': !course.available }">
    <div class="card-img">
      <div class="handcrafted-badge craft-badge">✦ handcrafted class ✦</div>
    </div>

    <div class="card-info">
      <h3 class="course-title">{{ course.title }}</h3>
      <div class="chef-line">
        <span class="chef-icon">⎯</span> {{ course.chef }}
      </div>

      <div class="price-row">
        <span>R{{ course.price }}</span
        ><span class="session"> / class</span>
      </div>

      <div class="meta-row">
        <span class="level-tag badge-craft">{{ course.level }}</span>
        <div
          class="availability-badge"
          :class="course.available ? 'status-available' : 'status-soldout'"
        >
          {{ course.available ? "✓ available" : "✗ sold out" }}
        </div>
      </div>

      <button
        class="save-button"
        :class="{ saved: isSaved }"
        :disabled="!course.available"
        @click="$emit('toggle-wishlist', course.id)"
      >
        <span class="heart">{{ isSaved ? "♥" : "♡" }}</span>
        {{ isSaved ? "saved to wishlist" : "save to wishlist" }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.course-card {
  background: var(--paper);
  border: 2px solid var(--ink);
  box-shadow: var(--shadow-sm);
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
}

.course-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-hover);
}

.card-img {
  background: var(--clay);
  border-bottom: 2px solid var(--ink);
  padding: var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 120px;
}

.card-info {
  padding: var(--spacing-lg);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.course-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--ink);
  margin: 0;
  line-height: 1.2;
}

.chef-line {
  font-size: 0.85rem;
  color: var(--ink-light);
  font-family: var(--font-mono);
}

.price-row {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0.25rem 0;
}

.meta-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-sm);
}

.session {
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--ink-light);
}

.availability-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0.2rem 0.6rem;
  border: 1px solid;
  background: transparent;
}

.save-button {
  background: transparent;
  border: 2px solid var(--ink);
  padding: 0.7rem 1rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.15s ease;
  margin-top: var(--spacing-sm);
  width: 100%;
  color: var(--ink);
}

.save-button:hover:not(:disabled) {
  background: var(--ink);
  color: var(--paper);
}

.save-button.saved {
  background: var(--ink);
  color: var(--paper);
}

.save-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.heart {
  font-size: 1rem;
  margin-right: 6px;
}

.course-card.sold-out {
  opacity: 0.85;
}

.course-card.sold-out .card-img {
  background: var(--clay-dark);
}

@media (max-width: 700px) {
  .course-title {
    font-size: 1.2rem;
  }
  .price-row {
    font-size: 1.5rem;
  }
  .meta-row {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
