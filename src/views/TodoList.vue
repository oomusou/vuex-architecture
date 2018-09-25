<template>
  <div id="todolist">
    <input type="text" v-model="input">
    <button @click="addTodo">Add</button>
    <ul>
      <li v-for="(item, index) in todos" @click="finishItem(index)" :key="index">
        {{ item.title }}, {{ item.completed }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

const addTodo = function() {
  this.addItem(this.input);
  this.input = '';
};

const data = () => ({
  input: '',
});

const computed = mapState('todolist', {
  todos: state => state.todos,
});

const methods = {
  ...mapMutations('todolist', ['finishItem', 'addItem']),
  ...mapActions('todolist', ['getTodos']),
  addTodo,
};

const mounted = function() {
  this.getTodos();
};

export default {
  name: 'todolist',
  data,
  computed,
  methods,
  mounted,
};
</script>

<style scoped>

</style>
