import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: []
  }),
  getters: {
    isFavorite: (state) => (id) => {
      return state.favorites.some(f => f.id === id)
    }
  },
  actions: {
    toggleFavorite(product) {
      const index = this.favorites.findIndex(f => f.id === product.id)
      if (index === -1) {
        this.favorites.push(product)
      } else {
        this.favorites.splice(index, 1)
      }
    }
  }
})