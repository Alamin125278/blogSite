<script>
import Navbar from "./components/Navbar.vue";
import Tags from "./components/Tags.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Tags,
    Footer,
  },
};
</script>

<template>
  <Navbar />
  <Tags />
  <router-view></router-view>
  <Footer />
</template>
