//rutas para favoritos y carrito

import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from '../views/CatalogView.vue'
import CartView from '../views/CartView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import AdminView from '../views/AdminView.vue'
import CheckoutView from '../views/CheckoutView.vue'

const routes = [
  { path: '/', name: 'catalog', component: CatalogView },
  { path: '/carrito', name: 'cart', component: CartView },
  { path: '/favoritos', name: 'favorites', component: FavoritesView },
  { path: '/admin', name: 'admin', component: AdminView},
  { path: '/checkout', name: 'checkout', component: CheckoutView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})