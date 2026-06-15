<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import SearchSortBar from "./components/SearchSortBar.vue";
import PropertyGrid from "./components/PropertyGrid.vue";
import { properties } from "./data/properties.js";

const searchQuery = ref("");
const sortOrder = ref("default");

const propertyCount = properties.length;
</script>

<template>
  <div>
    <Header :total="propertyCount" />
    <main class="container py-5">
      <h2 class="display-font fw-bold section-title">Find your stay</h2>
      <p class="section-subtitle">
        // search and sort live listings in Cape Town
      </p>

      <SearchSortBar v-model:search="searchQuery" v-model:sort="sortOrder" />

      <PropertyGrid
        :listings="properties"
        :search="searchQuery"
        :sort="sortOrder"
      />
    </main>
    <footer
      class="brut-border border-start-0 border-end-0 border-bottom-0 text-center py-4 mono"
    >
      <p class="mb-0">HOMES &amp; BEYOND — COPYRIGHT RESERVED</p>
    </footer>
  </div>
</template>
