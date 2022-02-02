<template>
  <div class="header">
    <div class="header_container">
      <router-link to="/" class="logo"></router-link>
      <div class="nav">
        <router-link to="/" class="nav_link">Форма</router-link>
        <router-link to="/preview" class="nav_link">Превью</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<style scoped>
.header {
  margin-bottom: 30px;
  padding: 0 50px;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
}

.header_container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1366px;
  min-height: 76px;
  margin: 0 auto;
}

.logo {
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 93px;
  height: 29px;
  transform: translateY(-50%);
  background-image: url('../assets/logo.svg');
}

.nav {
  display: flex;
  align-items: center;
}

.nav_link {
  margin-right: 24px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: rgba(17, 17, 17, 0.48);
  text-decoration: none;
  cursor: pointer;
}

.nav_link:hover {
  font-weight: 600;
}
</style>
