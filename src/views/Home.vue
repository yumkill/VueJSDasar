<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import PostList from '../components/PostList.vue'
import getPosts from '../composable/getPosts';
import Loading from '@/components/Loading.vue';

export default {
    name: "Home",
    components: {
      PostList,
      Loading,
    },
    setup() {

        const {posts,error,load} = getPosts();

         load();


        return { posts, error};
    },
    components: { PostList, Loading }
}
</script>
