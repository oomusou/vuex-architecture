<template>
  <div id="todo">
    <input type="text" v-model="input"><button @click="addItem">Add</button>
    <ul>
      <li v-for="(item, index) in todos" @click="finishItem(index)" :key="index">
        {{ item.title }}, {{ item.completed }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import store from '../store';

export default {
  name: 'todo',
  data: () => ({ input: '' }),
  computed: mapState(['todos']),
  methods: {
    ...mapMutations(['finishItem']),
    ...mapActions(['fetchTodos']),
    addItem() {
      store.commit('addItem', this.input);
      this.input = '';
    },
  },
  mounted() {
    this.fetchTodos();
  },
};
</script>

<style scoped>

</style>
