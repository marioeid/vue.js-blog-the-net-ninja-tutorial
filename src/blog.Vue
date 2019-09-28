<template>
<div class="card"><div class="container">
  

    <app-header></app-header> 
 <router-view></router-view>
 
   

</div>
</div>

</template>

<script>
import addBlog from './components/addBlog.vue';
import ShowBlogs from './components/ShowBlogs.vue';
import listBlogs from './components/listBlogs.vue';
import header from './components/header.vue';
export default {
  components:{
    'addBlog':addBlog,
    'ShowBlogs':ShowBlogs,
    'listBlogs':listBlogs,
    'app-header':header
  },
  data () {
    return {
    }
  }
}
</script>

<style>
body{
    margin:0;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px black; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background:black; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:rgb(50,50,50); 
}

</style>
