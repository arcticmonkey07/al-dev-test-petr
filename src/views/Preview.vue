<template>
  <div class="main">
    <div class="main_container">
      <div class="preview_person_block">
        <h2 class="preview_header">Персональные данные</h2>
        <span class="preview_name_age" v-for="person in getPerson" :key="person.id">
          {{ person.name }}, {{ person.age }} лет
        </span>
      </div>
      <div class="preview_children_block">
        <h3 class="children_header">Дети</h3>
        <div class="child_container" v-for="child in getChildren" :key="child">
          <span class="child">{{ child.childName }}, {{ child.childAge }} лет</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Preview",
  computed: mapGetters(["getPerson", "getChildren"]),
};
</script>

<style scoped>
.preview_header {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.preview_name_age {
  margin-bottom: 60px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
}

.preview_children_block {
  display: flex;
  flex-direction: column;
}

.children_header {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.child {
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  background: #f1f1f1;
  border-radius: 5px;
  box-sizing: border-box;
}
</style>