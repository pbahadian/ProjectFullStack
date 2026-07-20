<template>
  <section class="max-w-2xl mx-auto px-6 md:px-12 mt-20">
    <div class="border border-[var(--gold)]/25 rounded-sm p-8 bg-[var(--card)]">
      <p class="font-mono text-[11px] tracking-[0.3em] text-[var(--gold)] uppercase mb-1">
        {{ store.editingId ? 'Editar pieza' : 'Nueva pieza' }}
      </p>
      <h3 class="font-display text-3xl mb-6">
        {{ store.editingId ? `Modificando "${store.newProduct.name}"` : 'Añadir a la colección' }}
      </h3>

      <form @submit.prevent="onSubmit" class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <label class="flex flex-col gap-1.5 md:col-span-2">
          <span class="text-xs uppercase tracking-wider text-[var(--stone)]">Nombre</span>
          <input type="text" required v-model="store.newProduct.name" placeholder="Ej. Snake" class="field" />
        </label>

        <label class="flex flex-col gap-1.5 md:col-span-2">
          <span class="text-xs uppercase tracking-wider text-[var(--stone)]">Descripción</span>
          <input type="text" v-model="store.newProduct.description" placeholder="Pulsera con textura..." class="field" />
        </label>

        <label class="flex flex-col gap-1.5">
          <span class="text-xs uppercase tracking-wider text-[var(--stone)]">Precio (€)</span>
          <input type="number" step="0.01" required v-model="store.newProduct.price" class="field font-mono" />
        </label>

        <label class="flex flex-col gap-1.5">
          <span class="text-xs uppercase tracking-wider text-[var(--stone)]">Stock</span>
          <input type="number" v-model="store.newProduct.stock" class="field font-mono" />
        </label>

        <label class="flex flex-col gap-1.5">
          <span class="text-xs uppercase tracking-wider text-[var(--stone)]">Categoría</span>
          <select required v-model="store.newProduct.category_id" class="field">
            <option value="" disabled>Elegir…</option>
            <option v-for="cat in store.filterTabs.filter(t => t.id !== 'all')" :key="cat.id" :value="cat.id">
              {{ cat.label }}
            </option>
          </select>
        </label>

        <label class="flex flex-col gap-1.5">
          <span class="text-xs uppercase tracking-wider text-[var(--stone)]">URL de imagen</span>
          <input type="text" v-model="store.newProduct.image_url" placeholder="https://…" class="field" />
        </label>

        <div class="md:col-span-2 flex items-center gap-3 mt-2">
          <button type="submit" class="px-6 py-2.5 rounded-full bg-[var(--gold)] text-[var(--bg)] text-sm font-medium tracking-wide hover:brightness-110 transition">
            {{ store.editingId ? 'Guardar cambios' : 'Añadir pieza' }}
          </button>
          <button
            v-if="store.editingId"
            type="button"
            @click="store.resetForm()"
            class="px-6 py-2.5 rounded-full border border-[var(--gold)]/30 text-[var(--stone)] text-sm hover:text-[var(--ivory)] hover:border-[var(--gold)] transition"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { useProductsStore } from '../stores/products'

export default {
  name: 'ProductForm',
  data() {
    return { store: useProductsStore() }
  },
  methods: {
    onSubmit() {
      if (this.store.editingId) {
        this.store.updateProduct()
      } else {
        this.store.addProduct()
      }
    },
  },
}
</script>
