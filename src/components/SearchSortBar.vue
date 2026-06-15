<script setup>
defineProps({
  search: {
    type: String,
    required: true
  },
  sort: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:search', 'update:sort'])

function setSort(order) {
  emit('update:sort', order)
}
</script>

<template>
  <div class="row g-3 mb-4 align-items-center">
    <div class="col-12 col-md-6">
      <input
        type="text"
        class="form-control brut-input"
        placeholder="SEARCH BY TITLE OR LOCATION..."
        :value="search"
        @input="$emit('update:search', $event.target.value)"
      />
    </div>
    <div class="col-12 col-md-6 d-flex flex-wrap gap-2">
      <button
        class="btn-brut-outline mono"
        :class="{ active: sort === 'low' }"
        @click="setSort(sort === 'low' ? 'default' : 'low')"
      >
        Price: Low to high
      </button>
      <button
        class="btn-brut-outline mono"
        :class="{ active: sort === 'high' }"
        @click="setSort(sort === 'high' ? 'default' : 'high')"
      >
        Price: High to low
      </button>
    </div>
  </div>
</template>