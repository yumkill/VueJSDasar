<template>

<router-link :to=" { name: 'ShowPost', params: {id :post.id} } ">
    <h2 class="post-title">
        {{post.title}}
    </h2>
    <h3 class="post-subtitle">
        {{snippet}}
    </h3>
</router-link>

<span 
    v-for="tag in post.tags" :key="tag"
    class="post-meta"
>
    <router-link :to="{name: 'Tag', params : {tag:tag}}">
        #{{tag}}
    </router-link>
    
</span>

</template>


<script>
import { computed } from 'vue';

    export default{
        props: ['post'],
        setup(props){
            const snippet = computed(() => {
                return props.post.body.substring(0,50) + '....'
            })

            return {snippet}
        }

       

    }
</script>

<style>

</style>