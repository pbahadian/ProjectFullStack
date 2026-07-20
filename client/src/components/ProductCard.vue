<template>
  <article class="group relative bg-[var(--card)] border border-[var(--gold)]/15 rounded-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--gold)]/40">
    <div class="aspect-square bg-[var(--bg)] flex items-center justify-center overflow-hidden">
      <img
        v-if="product.image_url"
        :src="product.image_url"
        :alt="product.name"
        class="w-full h-full object-cover"
      />
     
    </div>

    <!--parte de favoritos -->
    <button
      @click="favorites.toggleFavorite(product)"
      class="absolute top-3 left-3 w-8 h-8 rounded-full bg-[var(--bg)]/80 backdrop-blur text-sm flex items-center justify-center transition-colors"
      :class="favorites.isFavorite(product.id) ? 'text-[var(--wine)]' : 'text-[var(--stone)] hover:text-[var(--wine)]'"
      title="Favorito"
    >{{ favorites.isFavorite(product.id) ? '♥' : '♡' }}</button>

    <!-- edit/delete: admin only -->
    <div
      v-if="adminMode"
      class="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      <button
        @click="store.selectProductToEdit(product)"
        class="w-8 h-8 rounded-full bg-[var(--bg)]/80 backdrop-blur text-[var(--gold)] text-sm flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--bg)] transition-colors"
        title="Editar"
      >✏️</button>
      <button
        @click="store.deleteProduct(product.id)"
        class="w-8 h-8 rounded-full bg-[var(--bg)]/80 backdrop-blur text-[var(--wine)] text-sm flex items-center justify-center hover:bg-[var(--wine)] hover:text-[var(--ivory)] transition-colors"
        title="Eliminar"
      >✕</button>
    </div>

    <div class="p-5">
      <div class="flex items-start justify-between gap-3">
        <div>
          <h2 class="font-display text-2xl leading-tight">{{ product.name }}</h2>
          <p class="text-xs uppercase tracking-wider text-[var(--gold)]/70 mt-1">
            {{ store.categoryMap[product.category_id] || 'Sin categoría' }}
          </p>
        </div>

        <div class="price-tag shrink-0 font-body text-sm">
          {{ store.formatPrice(product.price) }}€
        </div>
      </div>

      <p class="text-[var(--stone)] text-sm mt-3 leading-relaxed">
        {{ product.description }}
      </p>

      <div class="flex items-center justify-between mt-4">
        <p class="text-xs flex items-center gap-1.5">
          <span
            class="w-1.5 h-1.5 rounded-full"
            :class="product.stock > 0 ? 'bg-[var(--gold)]' : 'bg-[var(--wine)]'"
          ></span>
          <span class="text-[var(--stone)]">
            {{ product.stock > 0 ? `${product.stock} disponibles` : 'Agotado' }}
          </span>
        </p>

        <button
          v-if="product.stock > 0"
          @click="cart.addToCart(product)"
          class="text-xs px-3 py-1.5 rounded-full border border-[var(--gold)]/30 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg)] transition-colors"
        >
          {{ cart.isInCart(product.id) ? '+ añadir otra' : 'añadir al carrito' }}
        </button>
      </div>
    </div>
  </article>
</template>

<script>
import { useProductsStore } from '../stores/products'
import { useCartStore } from '../stores/cart'
import { useFavoritesStore } from '../stores/favorites'

export default {
  name: 'ProductCard',
  props: {
    product: { type: Object, required: true },
    adminMode: { type: Boolean, default: false },
  },
  data() {
    return {
      store: useProductsStore(),
      cart: useCartStore(),
      favorites: useFavoritesStore(),
    }
  },
}
</script>