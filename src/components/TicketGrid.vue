<script setup>
import { ref } from "vue";
import TicketCard from "./TicketCard.vue";

const tiers = ref([
  {
    id: "bronze",
    name: "Bronze",
    price: 250,
    description: "A great way to dip your toes into the festival experience.",
    benefits: [
      "General entry for one day",
      "Access to all food stalls",
      "Live music on the main stage",
    ],
    featured: false,
  },
  {
    id: "silver",
    name: "Silver",
    price: 450,
    description: "More access, more perks, more flavour to explore.",
    benefits: [
      "Weekend entry (both days)",
      "Fast-track entry lane",
      "One free welcome drink",
      "Access to chef demo tent",
    ],
    featured: true,
  },
  {
    id: "gold",
    name: "Gold",
    price: 750,
    description: "The full festival experience, VIP style.",
    benefits: [
      "Weekend entry with VIP lounge access",
      "Reserved seating at main stage",
      "Three free drinks and a tasting platter",
      "Meet-and-greet with featured chefs",
    ],
    featured: false,
  },
]);

const favourites = ref(new Set());

function toggleFavourite(id) {
  if (favourites.value.has(id)) {
    favourites.value.delete(id);
  } else {
    favourites.value.add(id);
  }
  favourites.value = new Set(favourites.value);
}
</script>

<template>
  <div class="row g-4 justify-content-center">
    <div
      v-for="tier in tiers"
      :key="tier.id"
      class="col-12 col-md-6 col-lg-4 d-flex"
    >
      <TicketCard
        :tier="tier"
        :is-favourite="favourites.has(tier.id)"
        @toggle-favourite="toggleFavourite(tier.id)"
      />
    </div>
  </div>
</template>

<style scoped></style>
