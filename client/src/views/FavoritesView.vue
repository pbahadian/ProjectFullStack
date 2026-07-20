
Favoritesview · VUE
<template>
  <main class="max-w-6xl mx-auto px-6 md:px-12 pt-12 pb-24">
    <h2 class="font-display text-4xl mb-8">Tus favoritos</h2>
 
    <p v-if="favourites.favourites.length === 0" class="text-[var(--stone)] italic">
      Todavía no has guardado ninguna pieza.
    </p>
 
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProductCard v-for="product in favourites.favourites" :key="product.id" :product="product" />
    </div>
  </main>
</template>
 
<script>
import { useFavoritesStore } from '../stores/favorites'
import ProductCard from '../components/ProductCard.vue'
 
export default {
  name: 'FavoritesView',
  components: { ProductCard },
  data() {
    return { favorites: useFavoritesStore() }
  },
}
</script>
 




