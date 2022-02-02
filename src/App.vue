<template>
  <div class="container">
    <Header />
    <div class="app">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
* {
  font-family: "Montserrat", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  color: #111111;
}

div {
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
}

.app {
  flex: 1 0 auto;
  max-width: 1366px;
}

.main {
  display: flex;
  justify-content: center;
}

.main_container {
  width: 616px;
}
</style>
