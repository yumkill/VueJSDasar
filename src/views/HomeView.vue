<template>
  <div class="home">
    <h1>Home</h1>

    <PostList v-if="showPosts" :posts="posts" />

    <button @click="showPosts = !showPosts">Unmounted</button>
    <button @click="posts.pop()">Delete Post</button>

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
        const posts = ref([
            {
                id: 1,
                title: "Artikel Pertama Coding",
                body: "Kisah anak SD Belajar Coding Bikin Machine Learning Golang, pasti bagus dan mengasyikan loh guys pasti ketagihan deh"
            },
            {
                id: 2,
                title: "Artikel Coding Kedua",
                body: "Ketika Bos suruh Machine Learning Pakai Java auto mokad lah ente kadang kadang deh suee banget emang jadi bos untung lu boss gue"
            }
        ]);


        const showPosts = ref(true)


        return { posts,showPosts };
    },
    components: { PostList }
}
</script>
