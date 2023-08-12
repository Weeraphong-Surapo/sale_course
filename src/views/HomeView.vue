<template>
  <div class="home">
    <Banner />
      <section id="product">
      <div class="container">
        <h3>คอร์สออนไลน์</h3>
        <div class="row mb-4">
          <Product/>
        </div>
      </div>
    </section>
    <GetEmail />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue';
import GetEmail from '@/components/GetEmail.vue'
import Product from '@/components/Product.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    GetEmail,
    Product
  }
}
</script>
