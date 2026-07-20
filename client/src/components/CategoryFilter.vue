<template>
  <nav class="flex flex-wrap justify-center gap-2 px-6 pt-8">
    <button
      v-for="tab in store.filterTabs"
      :key="tab.id"
      @click="store.activeCategory = tab.id"
      class="px-4 py-1.5 rounded-full text-sm font-body transition-colors duration-200 border"
      :class="store.activeCategory === tab.id
        ? 'bg-[var(--gold)] text-[var(--bg)] border-[var(--gold)]'
        : 'border-[var(--gold)]/30 text-[var(--stone)] hover:border-[var(--gold)] hover:text-[var(--ivory)]'"
    >
      {{ tab.label }}
    </button>
  </nav>
</template>

<script>
import { useProductsStore } from '../stores/products'

export default {
  name: 'CategoryFilter',
  data() {
    return { store: useProductsStore() }
  },
}
</script>
