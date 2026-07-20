<template>
  <div v-if="character">

    <h1>{{ product.name }}</h1>

    <p>description: {{ product.description }}</p>

    <p>Price: {{ product.price }}</p>


  </div>
</template>

<script>
export default {

  data() {
    return {
      product: null
    }
  },

  async mounted() {

    const id = this.$route.params.id

    const response = await fetch(
      `https://swapi.py4e.com/api/people/${id}/`
    )

    this.product = await response.json()
  }
}
</script>
