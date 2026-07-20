<template>
  <main class="max-w-6xl mx-auto px-6 md:px-12 pt-10">
    <p v-if="store.loading" class="text-center text-[var(--stone)] font-mono text-sm py-16">
      cargando la colección…
    </p>

     <p v-else-if="store.filteredProducts.length === 0" class="text-center text-[var(--stone)] italic py-16">
      No hay piezas en esta categoría todavía.
    </p> 

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProductCard
        v-for="product in store.filteredProducts"
        :key="product.id"
        :product="product"
        :admin-mode="adminMode"
      />
    </div>
  </main>
</template>

<script>
import { useProductsStore } from '../stores/products'
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductGrid',
  components: { ProductCard },
  props: {
    adminMode: { type: Boolean, default: false},
  },
  data() {
    return { 
      store: useProductsStore() }
  },
}
</script>
