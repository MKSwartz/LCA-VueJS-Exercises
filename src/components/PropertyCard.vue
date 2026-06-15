<script setup>
defineProps({
  listing: {
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
  <div class="card brut-card w-100 brut-border brut-shadow position-relative">
    <span v-if="!listing.available" class="unavailable-ribbon mono">
      Not available
    </span>

    <div class="position-relative">
      <img
        src="https://placehold.co/600x400"
        :alt="listing.title"
        class="card-img-top brut-img"
      />
      <button
        class="favourite-btn"
        :class="{ active: isFavourite }"
        @click="$emit('toggle-favourite')"
        :aria-label="
          isFavourite ? 'Remove from favourites' : 'Add to favourites'
        "
      >
        {{ isFavourite ? "★" : "☆" }}
      </button>
    </div>

    <div class="card-body d-flex flex-column">
      <span class="type-tag mono mb-2">{{ listing.type }}</span>
      <h3 class="display-font fw-bold card-title" style="font-size: 1.25rem">
        {{ listing.title }}
      </h3>
      <p class="card-text mono mb-2" style="font-size: 0.85rem">
        {{ listing.location }}
      </p>
      <p class="price-tag display-font fw-bold flex-grow-1">
        R{{ listing.price }}
        <span class="price-unit mono">/ night</span>
      </p>

      <button class="btn-brut w-100 mono" :disabled="!listing.available">
        {{ listing.available ? "Contact agent" : "Unavailable" }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.brut-card {
  border-radius: 0;
  background: var(--brut-white);
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
}

.brut-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 11px 11px 0 var(--brut-black) !important;
}

.brut-img {
  height: 180px;
  object-fit: cover;
  border-radius: 0;
  border-bottom: var(--brut-border) solid var(--brut-black);
}

.unavailable-ribbon {
  position: absolute;
  top: 12px;
  left: -8px;
  background: var(--brut-pink);
  color: var(--brut-black);
  border: var(--brut-border) solid var(--brut-black);
  padding: 0.25rem 0.75rem;
  font-weight: 700;
  font-size: 0.75rem;
  z-index: 2;
  transform: rotate(-4deg);
}

.type-tag {
  display: inline-block;
  background: var(--brut-blue);
  color: var(--brut-white);
  border: var(--brut-border) solid var(--brut-black);
  padding: 0.15rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 700;
  width: fit-content;
}

.price-tag {
  font-size: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.price-unit {
  font-size: 0.8rem;
  font-weight: 400;
  color: #555;
}

.favourite-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  background: var(--brut-white);
  border: var(--brut-border) solid var(--brut-black);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: transform 0.15s ease;
}

.favourite-btn:hover {
  transform: scale(1.1);
}

.favourite-btn.active {
  background: var(--brut-yellow);
}
</style>
