<template>
<div>
    <router-link :to=" { name: 'ShowPost', params: {id :post.id} } ">
        <h3>{{post.title}}</h3>  
    </router-link>
        <p>{{snippet}}</p>
</div>

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