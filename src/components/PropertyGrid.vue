<script setup>
import { computed, ref } from 'vue'
import PropertyCard from './PropertyCard.vue'

const props = defineProps({
  listings: {
    type: Array,
    required: true
  },
  search: {
    type: String,
    default: ''
  },
  sort: {
    type: String,
    default: 'default'
  }
})

const favourites = ref(new Set())

function toggleFavourite(id) {
  if (favourites.value.has(id)) {
    favourites.value.delete(id)
  } else {
    favourites.value.add(id)
  }
  favourites.value = new Set(favourites.value)
}

const filteredListings = computed(() => {
  let result = props.listings

  if (props.search.trim() !== '') {
    const query = props.search.toLowerCase()
    result = result.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query)
    )
  }

  if (props.sort === 'low') {
    result = [...result].sort((a, b) => a.price - b.price)
  } else if (props.sort === 'high') {
    result = [...result].sort((a, b) => b.price - a.price)
  }

  return result
})
</script>

<template>
  <div>
    <p v-if="filteredListings.length === 0" class="mono">
      // NO LISTINGS MATCH YOUR SEARCH
    </p>

    <div class="row g-4">
      <div
        v-for="listing in filteredListings"
        :key="listing.id"
        class="col-12 col-sm-6 col-lg-4 d-flex"
      >
        <PropertyCard
          :listing="listing"
          :is-favourite="favourites.has(listing.id)"
          @toggle-favourite="toggleFavourite(listing.id)"
        />
      </div>
    </div>
  </div>
</template>