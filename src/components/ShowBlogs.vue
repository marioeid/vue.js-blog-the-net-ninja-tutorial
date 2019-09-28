<template>
<div class="container" id="show-blogs" v-theme:background="'black'">
<h2 class="text-center">All posts</h2>
<div class="search text-center">
    <label >search</label>
 <input type="text" v-model="search" placeholder="search blogs">

</div>
<div class="row">
    <div class="post card col-lg-6" v-for="post in filteredPosts">
    <div class="card-body">
        <router-link v-bind:to="'/add/'+post.id"><h3 class="post-title" v-rainbow="">{{post.title|to-uppercase}}</h3></router-link>
        <article class="post-content">{{post.body|snippet}}</article>

    </div>
</div>
</div>

     



</div>
</template>

<script>
import searhMixin from '../mixins/searchMixin';
import searchMixin from '../mixins/searchMixin';
export default {
 
  data () {
    return {
        posts:[],
        search:''
    }
  },
  methods:{
    
  },
  created()
  {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
          console.log(data);
          this.posts=data.body.slice(0,10);
      });
  },computed:{
      
  }
  // register filters locally
  ,filters:{
      'to-uppercase': function(value){
          return value.toUpperCase();
      }
  },directives:{
      'rainbow':{
         bind(el,binding,vnode){
el.style.color="#"+Math.random().toString().slice(2,8);
}

      }
  },mixins:[searchMixin]
}
</script>

<style>
body{
    margin:0;
    font-family:'Nunito SemiBold' !important;
    background: url('../images/149304.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 0.9; 

}
#show-blogs{

}
#show-blogs .post{

padding-top: 10px;
padding-bottom: 10px;
}
#show-blogs .post-meta {
    font-size: 16px;

    margin-top: 0;
    color: #868e96;
}
#show-blogs  .post-title{
      font-weight: 800;
      font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      margin-bottom: 20px;
}
#show-blogs .post-content{
      font-family: nunito,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol,noto color emoji;
      font-weight: 400;

}
#show-blogs .search
{
    margin-bottom: 10px;
}
input[type=text] {
  border: none;
  border-bottom: 2px solid black;
  
}
input[type=text]:focus {
  outline: none;
}


</style>
