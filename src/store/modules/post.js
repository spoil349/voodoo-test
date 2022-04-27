export default {
    state: {
        posts: [],
        authors: [],
        postsWithAuthors: [],
        searchingString: '',
        loading: false,
    },
    mutations: {
        UPDATE_POSTS(state, posts) {
            state.posts = posts
        },
        SET_SEARCHING_STRING(state, string) {
            state.searchingString = string
        },
        SWITCH_LOADING(state, value) {
            state.loading = value
        }
    },
    actions: {
        async fetchPostsAndAuthors({ commit }) {
            commit('SWITCH_LOADING', true)
            const allRes = [
                fetch('https://jsonplaceholder.typicode.com/posts').then(data => data.json()),
                fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json())
            ]

            Promise.all(allRes)
                .then(data => {
                    const [posts, authors] = data;

                    const postsWithAuthors = posts.map(post => {
                        const author = authors.find(author => author.id === post.userId)
                        return {...post, author}
                    })
                    
                    commit('UPDATE_POSTS', postsWithAuthors)
                    commit('SWITCH_LOADING', false)
                });
        },
        filterPosts({ commit }, string) {
            commit('SET_SEARCHING_STRING', string)
        }
    },
    getters: {
        filteredPosts(state) {
            if (!state.searchingString) {
                return state.posts
            }
            return state.posts.filter(post => {
                return post.author.name.includes(state.searchingString)
            })
        },
        loading(state) {
            return state.loading
        }
    }
}