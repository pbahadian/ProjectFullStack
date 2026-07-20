<template>
  <div>
    <div class="max-w-6xl mx-auto px-6 md:px-12 pt-8">
      <p class="font-mono text-[11px] tracking-[0.3em] text-[var(--gold)] uppercase">
        Panel interno
      </p>
      <h2 class="font-display text-3xl mt-1">Gestión de piezas</h2>
    </div>

    <CategoryFilter />
    <ProductGrid :admin-mode="true" />
    <ProductForm />
  </div>
</template>

<script>
import CategoryFilter from '../components/CategoryFilter.vue'
import ProductGrid from '../components/ProductGrid.vue'
import ProductForm from '../components/ProductForm.vue'

export default {
  name: 'AdminView',
  components: { CategoryFilter, ProductGrid, ProductForm },
}
</script>