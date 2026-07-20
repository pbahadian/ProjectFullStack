<template>
  <main class="max-w-3xl mx-auto px-6 md:px-12 pt-12 pb-24">
    <h2 class="font-display text-4xl mb-8">Tu carrito</h2>

    <p v-if="cart.cart.length === 0" class="text-[var(--stone)] italic">
      Tu carrito está vacío todavía.
    </p>

    <div v-else class="flex flex-col gap-4">
      <div
        v-for="item in cart.cart"
        :key="item.id"
        class="flex items-center gap-4 bg-[var(--card)] border border-[var(--gold)]/15 rounded-sm p-4"
      >
        <div class="w-16 h-16 bg-[var(--bg)] rounded-sm shrink-0 overflow-hidden flex items-center justify-center">
          <img v-if="item.image_url" :src="item.image_url" :alt="item.name" class="w-full h-full object-cover" />
          <svg v-else class="w-8 h-8 text-[var(--gold)]/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <path d="M6 3h12l3 5-9 13L3 8l3-5Z" stroke-linejoin="round"/>
          </svg>
        </div>

        <div class="flex-1">
          <p class="font-display text-xl">{{ item.name }}</p>
          <p class="text-[var(--stone)] text-sm font-mono">{{ cart.formatPrice ? cart.formatPrice(item.price) : Number(item.price).toFixed(2) }}€</p>
        </div>

        <div class="flex items-center gap-2">
          <button
            @click="cart.changeQuantity(item.id, item.quantity - 1)"
            class="w-7 h-7 rounded-full border border-[var(--gold)]/30 text-[var(--ivory)] hover:border-[var(--gold)]"
          >-</button>
          <span class="font-mono w-6 text-center">{{ item.quantity }}</span>
          <button
            @click="cart.changeQuantity(item.id, item.quantity + 1)"
            class="w-7 h-7 rounded-full border border-[var(--gold)]/30 text-[var(--ivory)] hover:border-[var(--gold)]"
          >+</button>
        </div>

        <button
          @click="cart.removeFromCart(item.id)"
          class="text-[var(--wine)] text-sm ml-2 hover:opacity-70"
          title="Eliminar"
        >✕</button>
      </div>

      <div class="flex items-center justify-between border-t border-[var(--gold)]/20 pt-6 mt-4">
        <span class="text-[var(--stone)] uppercase text-xs tracking-wider">Total</span>
        <span class="font-mono text-2xl text-[var(--gold)]">{{ cart.cartTotal.toFixed(2) }}€</span>
      </div>

      <button
        @click="cart.clearCart()"
        class="self-start mt-2 text-sm text-[var(--stone)] hover:text-[var(--ivory)] underline"
      >
        Vaciar carrito
      </button>

      <RouterLink
        to="/checkout"
        class="mt-4 text-center px-6 py-2.5 rounded-full bg-[var(--gold)] text-[var(--bg)] text-sm font-medium tracking-wide hover:brightness-110 transition"
      >
        Finalizar compra
      </RouterLink>
    </div>
  </main>
</template>

<script>
import { useCartStore } from '../stores/cart'

export default {
  name: 'CartView',
  data() {
    return { cart: useCartStore() }
  },
}
</script>