<template>
  <div id="app">
    <input type="text" @input="filterPosts">
    <div v-for="post in filteredPosts" :key="post.id">
      <h1>{{post.title}}</h1>
      <p>
        {{post.body}}
      </p>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
  },
  computed: mapGetters(["allPosts", "filteredPosts"]),
  methods: {
    ...mapActions(["fetchPosts", "filterString"]),
    ...mapMutations(["filterString"]),
    filterPosts(event) {
      this.filterString(event.target.value)
    }
  },
  async mounted() {
    this.fetchPosts(10)
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
