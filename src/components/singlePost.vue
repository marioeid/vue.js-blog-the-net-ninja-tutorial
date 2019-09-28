<template>
    <div id="single-blog" class="container">

         <div class="card">


             <div class="card-body">
                             <h1 v-rainbow="" class="text-uppercase card-title">{{post.title}}</h1>

        <article>{{post.body}}</article>
             </div>
         </div>
     
    </div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            post:{}
        }
    },
    created()
    {
        this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id).then(
            function(data){
                console.log(data);
                this.post=data.body;

            }
        )
    }
}
</script>
<style>
body{
    margin:0;
    font-family:'Nunito SemiBold' !important;
    background: url('../images/wp3110705-black-and-white-anime-wallpapers.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 0.9; 


}

#single-blog{
margin-top: 20px;
margin-bottom: 20px;
height: 100vh;
width: 100;
}
</style>
