<template>
  <div id="app" class="bg-light pt-5">
    <b-container fluid="sm">

      <FilterInput/>

      <Spinner
        v-if="loading"
      />

      <PostsList
        v-if="filteredPosts.length && !loading"
      />

      <EmptyList
        v-if="!filteredPosts.length && !loading"
      />

    </b-container>
      
  </div>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'
import PostsList from '@/components/PostsList.vue'
import FilterInput from '@/components/FilterInput.vue'
import EmptyList from '@/components/EmptyList.vue'
import Spinner from '@/components/Spinner.vue'

export default {
  name: 'App',
  components: {
    FilterInput,
    PostsList,
    EmptyList,
    Spinner
  },
  computed: mapGetters(["filteredPosts", "loading"]),
  methods: mapActions(["fetchPostsAndAuthors"]),
  async mounted() {
    this.fetchPostsAndAuthors()
  }

}
</script>

<style>
  html, body {
    height: 100%;
  }
  #app {
    min-height: 100%;
  }
</style>