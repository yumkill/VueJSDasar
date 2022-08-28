<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <div v-for="(name,index) in resultSearch" :key="index">
      {{name}}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { computed } from '@vue/reactivity';
import { ref } from 'vue';

export default {
  name: 'Home',

  setup(){

    const search = ref('')

    const names = ref([
      'Muhammad Ihsan',
      'Mona Nabila',
      'Neno Balqis',
      'Ayana Shahab',
      'Chelsea Islan',
      'Siti Fatimah',
      'Indri Damayanti',
      'Dian Humairah',
      'Nabilah Azzahra',
      'Steve Mckanziel',
      'Tasya Anastasya',
      'Jessica Munandar',
    ])

    const resultSearch = computed( ()=>{
      return names.value.filter((name) => name.includes(search.value))
    })


    return {names,search,resultSearch}
  
  
  
  },

  

}
</script>
