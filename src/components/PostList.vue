<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <PostSingle :post="post" />
        </div>
    </div>
</template>

<script>
import PostSingle from './PostSingle.vue';

export default {
    props: ["posts"],
    setup(props) {
        console.log(props.posts);
    },
    components: { PostSingle }
}

</script>

<style>

</style>