<script setup>
defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <header
    class="brut-border border-top-0 border-start-0 border-end-0 py-4 px-3"
  >
    <div
      class="container d-flex flex-wrap justify-content-between align-items-center gap-3"
    >
      <h1 class="display-font fw-bold mb-0" style="font-size: 2.25rem">
        Homes <span style="color: var(--brut-pink)">&amp;</span> Beyond
      </h1>
      <div
        class="brut-border brut-shadow-sm px-3 py-2 mono fw-bold"
        style="background: var(--brut-yellow)"
      >
        {{ total }} LISTINGS
      </div>
    </div>
  </header>
</template>
