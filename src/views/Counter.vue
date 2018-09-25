<template>
  <div id="counter">
    <h1>{{ showCount }}</h1>
    <button @click="addCount(1)">+</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

const mapStates = () =>
  mapState('counter', {
    count: state => state.count,
  });

const showCount = function() {
  return `Counter : ${this.count}`;
};

const computed = {
  ...mapStates(),
  showCount,
};

const methods = {
  ...mapMutations('counter', ['addCount']),
};

export default {
  name: 'counter',
  computed,
  methods,
};
</script>

<style scoped>

</style>
