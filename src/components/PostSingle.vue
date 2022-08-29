<template>

    <h3>{{post.title}}</h3>
    <p>{{snippet}}</p>

</template>


<script>
import { computed } from 'vue';

    export default{
        props: ['post'],
        setup(props){
            const snippet = computed(() => {
                return props.post.body.substring(0,50) + '.......'
            })

            return {snippet}
        }

       

    }
</script>

<style>

</style>