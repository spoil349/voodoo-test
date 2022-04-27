<template>
    <b-row
        cols="1"
        cols-md="2"
        cols-lg="3"
        class="gy-4 gx-4 pb-5"
    >
        <b-col
            align-self="start"
            v-for="post in filteredPosts"
            :key="post.id"
        >
            <Post
                :post="post"
            />
        </b-col>
    </b-row>
</template>

<script>

import { mapGetters } from 'vuex'
import Post from './Post.vue'

export default {
  name: 'App',
  components: {
    Post
  },
  computed: mapGetters(["filteredPosts"]),
  methods: {},
}
</script>