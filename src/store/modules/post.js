export default {
    state: {
        posts: [],
        searchingString: ''
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        filterString(state, string) {
            state.searchingString = string
        }
    },
    actions: {
        async fetchPosts(ctx, limit = 3) {
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
            )

            const posts = await res.json()
            ctx.commit('updatePosts', posts)
        },
        filter(ctx, string) {
            ctx.commit('filterString', string)
        }
    },
    getters: {
        allPosts(state) {
            return state.posts
        },
        filteredPosts(state) {
            if (!state.searchingString) {
                return state.posts
            }
            return state.posts.filter(post => {
                return post.title.includes(state.searchingString)
            })
        }
    }
}