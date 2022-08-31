<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{error}}</div>
    <PostList :posts="posts" />
  </div>
</template>

<script>
// @ is an alias to /src
import { ref} from 'vue';
import PostList from '../components/PostList.vue'

export default {
    name: "Home",
    components: {
      PostList
    },
    setup() {
        const posts = ref([]);
        const error = ref(null)

         const load = async () => {
          try{
            let data = await fetch('http://localhost:3000/posts')
            if (! data.ok){
              throw Error('Tidak ada Data')
            }
            posts.value = await data.json()
          } catch (err){
            error.value = err.message
          }
         } 

         load();

        // const showPosts = ref(true)


        return { posts, error};
    },
    components: { PostList }
}
</script>
