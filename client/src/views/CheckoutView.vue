<template>
  <main class="max-w-2xl mx-auto px-6 md:px-12 pt-12 pb-24">
    <h2 class="font-display text-4xl mb-2">Finalizar compra</h2>
    <p class="text-[var(--stone)] text-sm mb-8">Esto es una simulación, no se realizará ningún cargo real.</p>

    <!-- empty cart guard -->
    <div v-if="cart.cart.length === 0" class="text-center py-16">
      <p class="text-[var(--stone)] italic mb-4">Tu carrito está vacío.</p>
      <RouterLink to="/" class="text-[var(--gold)] underline text-sm">Volver al catálogo</RouterLink>
    </div>

    <div v-else-if="!confirmed">
      <!-- order summary -->
      <div class="border border-[var(--gold)]/20 rounded-sm p-6 bg-[var(--card)] mb-8">
        <p class="font-mono text-[11px] tracking-[0.3em] text-[var(--gold)] uppercase mb-4">Resumen del pedido</p>
        <div v-for="item in cart.cart" :key="item.id" class="flex justify-between text-sm py-2 border-b border-[var(--gold)]/10 last:border-0">
          <span>{{ item.name }} <span class="text-[var(--stone)]">x{{ item.quantity }}</span></span>
          <span class="font-mono">{{ (item.price * item.quantity).toFixed(2) }}€</span>
        </div>
        <div class="flex justify-between items-center pt-4 mt-2">
          <span class="text-[var(--stone)] uppercase text-xs tracking-wider">Total</span>
          <span class="font-mono text-xl text-[var(--gold)]">{{ cart.cartTotal.toFixed(2) }}€</span>
        </div>
      </div>

      <!-- fake shipping + payment form -->
      <form @submit.prevent="submitOrder" class="border border-[var(--gold)]/20 rounded-sm p-6 bg-[var(--card)] flex flex-col gap-5">
        <p class="font-mono text-[11px] tracking-[0.3em] text-[var(--gold)] uppercase">Datos de envío y pago</p>

        <label class="flex flex-col gap-1.5">
          <span class="text-xs uppercase tracking-wider text-[var(--stone)]">Nombre completo</span>
          <input type="text" required v-model="form.fullName" class="field" />
        </label>

        <label class="flex flex-col gap-1.5">
          <span class="text-xs uppercase tracking-wider text-[var(--stone)]">Dirección de envío</span>
          <input type="text" required v-model="form.address" class="field" />
        </label>

        <div class="grid grid-cols-2 gap-4">
          <label class="flex flex-col gap-1.5">
            <span class="text-xs uppercase tracking-wider text-[var(--stone)]">Ciudad</span>
            <input type="text" required v-model="form.city" class="field" />
          </label>
          <label class="flex flex-col gap-1.5">
            <span class="text-xs uppercase tracking-wider text-[var(--stone)]">Código postal</span>
            <input type="text" required v-model="form.postalCode" class="field" />
          </label>
        </div>

        <label class="flex flex-col gap-1.5">
          <span class="text-xs uppercase tracking-wider text-[var(--stone)]">Número de tarjeta (simulado)</span>
          <input type="text" required maxlength="19" placeholder="4242 4242 4242 4242" v-model="form.cardNumber" class="field font-mono" />
        </label>

        <div class="grid grid-cols-2 gap-4">
          <label class="flex flex-col gap-1.5">
            <span class="text-xs uppercase tracking-wider text-[var(--stone)]">Caducidad</span>
            <input type="text" required placeholder="MM/AA" v-model="form.expiry" class="field font-mono" />
          </label>
          <label class="flex flex-col gap-1.5">
            <span class="text-xs uppercase tracking-wider text-[var(--stone)]">CVC</span>
            <input type="text" required maxlength="3" placeholder="123" v-model="form.cvc" class="field font-mono" />
          </label>
        </div>

        <button
          type="submit"
          class="mt-2 px-6 py-2.5 rounded-full bg-[var(--gold)] text-[var(--bg)] text-sm font-medium tracking-wide hover:brightness-110 transition"
        >
          Pagar {{ cart.cartTotal.toFixed(2) }}€
        </button>
      </form>
    </div>

    <!-- confirmation -->
    <div v-else class="text-center py-16">
      <p class="text-4xl mb-4">✓</p>
      <h3 class="font-display text-3xl mb-2">Pedido confirmado</h3>
      <p class="text-[var(--stone)] text-sm mb-6">
        Gracias, {{ form.fullName }}. Esto es una simulación — no se ha procesado ningún pago real.
      </p>
      <RouterLink to="/" class="text-[var(--gold)] underline text-sm">Volver al catálogo</RouterLink>
    </div>
  </main>
</template>

<script>
import { useCartStore } from '../stores/cart'

export default {
  name: 'CheckoutView',
  data() {
    return {
      cart: useCartStore(),
      confirmed: false,
      form: {
        fullName: '',
        address: '',
        city: '',
        postalCode: '',
        cardNumber: '',
        expiry: '',
        cvc: '',
      },
    }
  },
  methods: {
    submitOrder() {
      this.confirmed = true
      this.cart.clearCart()
    },
  },
}
</script>