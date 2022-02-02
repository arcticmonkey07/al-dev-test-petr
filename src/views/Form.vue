<template>
  <div class="main">
    <form class="main_container" @submit.prevent="submit">
      <div class="personal_block">
        <h2 class="personal_header">Персональные данные</h2>
        <input
          type="text"
          name="name"
          class="personal_input"
          placeholder="Имя"
          v-model="name"
        />
        <input
          type="text"
          name="age"
          class="personal_input"
          placeholder="Возраст"
          v-model="age"
        />
      </div>
      <div class="children_block">
        <div class="children_header_wrapper">
          <h2 class="children_header">Дети (макс. 5)</h2>
          <button
            class="children_button"
            @click.prevent="addChildInput"
            v-if="getChildren.length <= 4"
          >
            Добавить ребенка
          </button>
        </div>
        <div
          class="children_inputs_block"
          v-for="(child, index) in getChildren"
          :key="child"
        >
          <input
            type="text"
            class="children_input"
            placeholder="Имя"
            name="childName"
            v-model="child.childName"
          />
          <input
            type="text"
            class="children_input"
            placeholder="Возраст"
            name="childAge"
            v-model="child.childAge"
          />
          <button
            class="children_del_button"
            @click.prevent="delChildInput(index)"
          >
            Удалить
          </button>
        </div>
      </div>
      <button type="submit" class="save_button">Сохранить</button>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Form",
  data() {
    return {
      name: "",
      age: "",
      childName: "",
      childAge: "",
      childInputs: 0,
    };
  },
  computed: mapGetters(["getChildren"]),
  methods: {
    ...mapMutations(["createPerson", "createChildren", "delChildren"]),
    submit() {
      this.createPerson({
        id: Date.now(),
        name: this.name,
        age: this.age,
      });
      this.name = this.age = "";
    },
    addChildInput() {
      this.createChildren({
        childName: this.childName,
        childAge: this.childAge,
      });
    },
    delChildInput(index) {
      this.delChildren(index);
    },
  },
};
</script>

<style scoped>
.personal_block {
  margin-bottom: 40px;
}

.personal_header {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
}

.personal_input {
  width: 100%;
  height: 56px;
  margin-bottom: 10px;
  padding: 6px 16px;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #111111;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  box-sizing: border-box;
}

.personal_input:focus::placeholder {
  position: relative;
  top: -18px;
}

.personal_input::placeholder {
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: rgba(17, 17, 17, 0.48);
}

.children_block {
  margin-bottom: 30px;
}

.children_header_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
}

.children_button {
  position: relative;
  padding: 10px 20px 10px 42px;
  width: 204px;
  height: 44px;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #01a7fd;
  border: 2px solid #01a7fd;
  box-sizing: border-box;
  border-radius: 100px;
  background-color: transparent;
  cursor: pointer;
}

.children_button:before {
  content: "+";
  position: absolute;
  top: 50%;
  left: 19px;
  font-weight: 500;
  font-size: 32px;
  line-height: 24px;
  color: #01a7fd;
  transform: translateY(-50%);
}

.children_inputs_block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.children_input {
  width: 260px;
  height: 56px;
  margin-bottom: 10px;
  padding: 6px 16px;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #111111;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  box-sizing: border-box;
}

.children_input:focus::placeholder {
  position: relative;
  top: -18px;
}

.children_input::placeholder {
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: rgba(17, 17, 17, 0.48);
}

.children_del_button {
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #01a7fd;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.children_del_button:hover {
  opacity: 0.6;
}

.save_button {
  margin-bottom: 20px;
  padding: 10px 20px;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  background: #01a7fd;
  border-radius: 100px;
  border: none;
  cursor: pointer;
}

.save_button:hover {
  opacity: 0.9;
}
</style>