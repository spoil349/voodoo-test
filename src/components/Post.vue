<template>
   <div class="bg-white p-5 rounded text-left">
        <h4 class="text-info text-left mb-2">{{post.title}}</h4>
        <p class="mb2">
            {{post.body}}
        </p>
        <span class="text-muted">{{post.author.name}}</span>
    </div>
</template>

<script>

export default {
  name: 'Post',
  props: {
    post:  {
        type: Object,
        default: false,
    },
  },
  components: {
  },
  methods: {}
}
</script>