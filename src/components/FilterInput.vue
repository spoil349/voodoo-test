<template>
  
    <b-row class="justify-content-center mb-5">
        <b-col class="col-12 col-md-6">
            <b-input-group size="sm" class="mb-2">
            <b-input-group-prepend is-text>
                <b-icon-search bg-white></b-icon-search>
            </b-input-group-prepend>
            <b-form-input type="search" placeholder="Filter by author..."
                class="form-control"
                v-model="searchingString"
                @input="filter"
            ></b-form-input>
            </b-input-group>
        </b-col>
    </b-row>

</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'FilterInput',
  data: function () {
    return {
      searchingString: ''
    }
  },
  methods: {
    ...mapActions(["filterPosts"]),
    filter() {
      this.filterPosts(this.searchingString)
    }
    
  },

}
</script>

<style>
  .input-group-prepend .input-group-text {
    background-color: white;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
</style>