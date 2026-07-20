<template>
  <header class="border-b border-[var(--gold)]/20 px-6 md:px-12 py-4 relative">
    <div class="flex items-center justify-between flex-wrap gap-4">

      <!-- logo , nombre  -->
      <RouterLink to="/" class="flex items-center gap-3 shrink-0" @click="mobileMenuOpen = false">
        <img
          :src="logo"
          class="w-12 h-12 rounded-full object-cover border-2 border-[var(--gold)]/40"
        />
        <div class="text-left leading-tight">
          <p class="font-display text-2xl tracking-wide">Paula Bahadian</p>
          <p class="font-mono text-[9px] tracking-[0.25em] text-[var(--gold)] uppercase">
            joyería con memoria
          </p>
        </div>
      </RouterLink>

      <!-- nav: desktop, hidden on small screens -->
      <nav class="hidden md:flex items-center gap-6 text-sm">
        <RouterLink to="/" class="text-[var(--stone)] hover:text-[var(--ivory)] transition-colors" active-class="text-[var(--gold)]">
          Catálogo
        </RouterLink>
        <RouterLink to="/favoritos" class="text-[var(--stone)] hover:text-[var(--ivory)] transition-colors" active-class="text-[var(--gold)]">
          Favoritos {{ favorites.favorites.length ? `(${favorites.favorites.length})` : '' }}
        </RouterLink>
        <RouterLink to="/carrito" class="text-[var(--stone)] hover:text-[var(--ivory)] transition-colors" active-class="text-[var(--gold)]">
          Carrito {{ cart.cartCount ? `(${cart.cartCount})` : '' }}
        </RouterLink>
        <RouterLink to="/admin" class="text-[var(--stone)]/50 hover:text-[var(--gold)] transition-colors text-xs" active-class="text-[var(--gold)]">
          admin
        </RouterLink>
      </nav>

      <!-- hamburger menu en moviles -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 shrink-0"
        aria-label="Abrir menú"
      >
        <span
          class="block w-6 h-[1.5px] bg-[var(--gold)] transition-transform duration-200"
          :class="mobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''"
        ></span>
       <span
          class="block w-6 h-[1.5px] bg-[var(--gold)] transition-transform duration-200"
          :class="mobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''"
        ></span> 
      </button>
    </div>

    <!-- menudropdown -->
    <!-- <nav
      v-if="mobileMenuOpen"
      class="md:hidden flex flex-col gap-4 mt-4 pb-2 text-sm border-t border-[var(--gold)]/10 pt-4"
    >
      <RouterLink to="/" class="text-[var(--stone)] hover:text-[var(--ivory)] transition-colors" active-class="text-[var(--gold)]" @click="mobileMenuOpen = false">
        Catálogo
      </RouterLink>
      <RouterLink to="/favoritos" class="text-[var(--stone)] hover:text-[var(--ivory)] transition-colors" active-class="text-[var(--gold)]" @click="mobileMenuOpen = false">
        Favoritos {{ favorites.favorites.length ? `(${favorites.favorites.length})` : '' }}
      </RouterLink>
      <RouterLink to="/carrito" class="text-[var(--stone)] hover:text-[var(--ivory)] transition-colors" active-class="text-[var(--gold)]" @click="mobileMenuOpen = false">
        Carrito {{ cart.cartCount ? `(${cart.cartCount})` : '' }}
      </RouterLink>
      <RouterLink to="/admin" class="text-[var(--stone)]/50 hover:text-[var(--gold)] transition-colors text-xs" active-class="text-[var(--gold)]" @click="mobileMenuOpen = false">
        admin
      </RouterLink>
    </nav> -->
  </header>
</template>

<script>
import logo from '../assets/logoWeb.jpg'
import { useCartStore } from '../stores/cart'
import { useFavoritesStore } from '../stores/favorites'

export default {
  name: 'AppHeader',
  data() {
    return {
      logo,
      cart: useCartStore(),
      favorites: useFavoritesStore(),
      mobileMenuOpen: false,
    }
  },
}
</script>