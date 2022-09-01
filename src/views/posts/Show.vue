<template>

<div v-if="error"> {{error}} </div>
    <div v-if="post">
        <h3>{{post.title}}</h3>
        <p>{{post.body}}</p>
    </div>

</template>


<script>

    import getPost from '@/composable/getPost';

    export default{
        props : ['id'],
        setup(props){
            const {post,error,load} = getPost(props.id)

            load()

            return {post,error}
        }
    }
</script>

<style>

</style>