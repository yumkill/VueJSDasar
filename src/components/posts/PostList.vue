<template>

<!-- Post preview-->
<div v-for="post in posts" :key="post.id">
        <div class="post-preview">
        <PostSingle :post="post" />
    </div>
    <hr class="my-4" /> 
</div>   
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import PostSingle from './PostSingle.vue';

export default {
    props: ["posts"],
    setup(props) {
        onMounted(()=> console.log('component mounted'))
        onUnmounted(()=>console.log('component nya unmounted'))
        onUpdated(()=> console.log('component updated'))
    },
    components: { PostSingle }

}

</script>

<style>

</style>