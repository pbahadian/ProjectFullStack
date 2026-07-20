//vista de catálogo

<template>
  <div>
    <CategoryFilter />
    <ProductGrid />
    
  </div>
</template>

<script>
import CategoryFilter from '../components/CategoryFilter.vue'
import ProductGrid from '../components/ProductGrid.vue'

export default {
  name: 'CatalogView',
  components: { CategoryFilter, ProductGrid},
}
</script>