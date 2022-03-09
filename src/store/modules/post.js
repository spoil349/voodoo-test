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
        async fetchPostsAndAuthors(ctx) {
            ctx.commit('SWITCH_LOADING', true)
            const allRes = [
                new Promise( resolve => fetch('https://jsonplaceholder.typicode.com/posts').then(data => resolve(data.json()))),
                new Promise( resolve => fetch('https://jsonplaceholder.typicode.com/users').then(data => resolve(data.json())))
            ]

            Promise.all(allRes)
            .then(data => {
                const [posts, authors] = data;

                const postsWithAuthors = posts.map(post => {
                    const author = authors.find(author => author.id === post.userId)
                    return {...post, author}
                })
                
                ctx.commit('UPDATE_POSTS', postsWithAuthors)
                ctx.commit('SWITCH_LOADING', false)
            });
        },
        filterPosts(ctx, string) {
            ctx.commit('SET_SEARCHING_STRING', string)
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