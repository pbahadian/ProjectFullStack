<template>
  <div class="min-h-screen bg-[var(--bg)] text-[var(--ivory)] font-body pb-24">
    <Navbar />
    <RouterView/>
    <font-awesome-icon :icon="['fas', 'user']" />

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

import { useProductsStore } from './stores/products'

export default {
  name: 'App',
  components: { Navbar },
  data() {
    return { store: useProductsStore() }
  },
  mounted() {
    this.store.getProducts()
  },
}
</script>
