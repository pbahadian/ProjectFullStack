import { defineStore } from 'pinia'

function loadCart() {
  try {
    const raw = localStorage.getItem('jewels_cart')
    return raw ? JSON.parse(raw) : []
  } catch (error) {
    console.log(error)
    return []
  }
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: loadCart(),
  }),

  getters: {
    cartCount(state) {
      return state.cart.reduce((total, item) => total + item.quantity, 0)
    },
    cartTotal(state) {
      return state.cart.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
        0
      )
    },
    isInCart(state) {
      return (productId) => state.cart.some((p) => p.id === productId)
    },
  },

  actions: {
    formatPrice(price) {
      return Number(price).toFixed(2)
    },

    persist() {
      localStorage.setItem('jewels_cart', JSON.stringify(this.cart))
    },

    addToCart(product) {
      const existing = this.cart.find((p) => p.id === product.id)
      if (existing) {
        existing.quantity += 1
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
      this.persist()
    },

    removeFromCart(productId) {
      this.cart = this.cart.filter((p) => p.id !== productId)
      this.persist()
    },

    changeQuantity(productId, quantity) {
      const item = this.cart.find((p) => p.id === productId)
      if (!item) return
      if (quantity <= 0) {
        this.removeFromCart(productId)
        return
      }
      item.quantity = quantity
      this.persist()
    },

    clearCart() {
      this.cart = []
      this.persist()
    },
  },
})