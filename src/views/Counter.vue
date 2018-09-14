<template>
  <div id="counter">
    <h1>{{ showCount }}</h1>
    <button @click="addCount(1)">+</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'counter',
  computed: {
    ...mapState(['count']),
    showCount() {
      return `Counter : ${this.count}`;
    },
  },
  methods: mapMutations(['addCount']),
};
</script>

<style scoped>

</style>
