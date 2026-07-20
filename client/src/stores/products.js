//catalogo de productos y filtro por categoria

import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    loading: true,
    activeCategory: 'all',
    categoryMap: {
      1: 'Pulseras',
      2: 'Pendientes',
      3: 'Collares',
      4: 'Anillos',
    },
    newProduct: {
      name: '',
      description: '',
      price: '',
      stock: '',
      category_id: '',
      image_url: '',
    },
    editingId: null,
  }),

  getters: {
    filterTabs(state) {
      return [
        { id: 'all', label: 'Todas' },
        ...Object.entries(state.categoryMap).map(([id, label]) => ({
          id: Number(id),
          label,
        })),
      ]
    },
    filteredProducts(state) {
      if (state.activeCategory === 'all') return state.products
      return state.products.filter((p) => p.category_id === state.activeCategory)
    },
  },

  actions: {
    formatPrice(price) {
      return Number(price).toFixed(2)
    },

    async getProducts() {
      this.loading = true
      try {
        const response = await fetch('http://localhost:3888/api/products')
        this.products = await response.json()
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },

    async deleteProduct(id) {
      try {
        await fetch(`http://localhost:3888/api/products/${id}`, {
          method: 'DELETE',
          headers: { 'Content-type': 'application/json' },
        })
      } catch (error) {
        console.log(error)
      } finally {
        this.getProducts()
      }
    },

    async addProduct() {
      try {
        await fetch('http://localhost:3888/api/products', {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(this.newProduct),
        })
      } catch (error) {
        console.log(error)
      } finally {
        this.resetForm()
        this.getProducts()
      }
    },

    async updateProduct() {
      try {
        await fetch(`http://localhost:3888/api/products/${this.editingId}`, {
          method: 'PUT',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(this.newProduct),
        })
      } catch (error) {
        console.log(error)
      } finally {
        this.resetForm()
        this.getProducts()
      }
    },

    selectProductToEdit(product) {
      this.newProduct = {
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        category_id: product.category_id,
        image_url: product.image_url || '',
      }
      this.editingId = product.id
    },

    resetForm() {
      this.newProduct = {
        name: '',
        description: '',
        price: '',
        stock: '',
        category_id: '',
        image_url: '',
      }
      this.editingId = null
    },
  },
})