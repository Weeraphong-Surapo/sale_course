<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer,

  }
}

</script>
<template>
  <main class="main" id="top">
    <NavBar />
    <RouterView />
    <Footer />
  </main>
</template>

