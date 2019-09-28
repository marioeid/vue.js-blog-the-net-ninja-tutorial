<template>
 <div class="container" id="AddBlog">
 <div class="row justify-content-center">
   <div class="col-lg-6">
     <div class="card" v-if="!submitted">
        <form id="AddBlogForm">
  <div class="form-group">
    <label for="exampleInputEmail1">Post Title</label>
    <input v-model.lazy="post.title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title">
  </div>
  <div class="form-group">
  <label for="exampleFormControlTextarea2">Post content</label>
  <textarea v-model.lazy="post.content" class="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
</div>
 <div class="form-group" id="check-boxes">
   <label for="">Question</label>
   <input type="checkbox" value="Question"  v-model="post.categories">
   <label for="">answer</label>
   <input type="checkbox" value="answer" id="" v-model="post.categories">
   <label for="">opnion</label>
   <input type="checkbox" value="opnion" id="" v-model="post.categories">
   <label for="">advice</label>
   <input type="checkbox" value="advice" id="" v-model="post.categories">
 </div>
  <label>Author:</label>
  <div class="form-group" id="select">
  <select class="custom-select" v-model="post.author">
  <option v-for="author in authors" class="color-it">{{author}}</option>
</select>
  </div>

   
  <button v-on:click.prevent="postit" type="submit" class="btn btn-dark text-white font-weight-bold">Submit</button>
</form>
     </div>
     
    <div v-if="submitted" class="btn btn-success">
      THanks for adding your post
    </div>
     <div class="card" id="preview">
       
     <div class="card-body">
    <h5 class="card-title text-muted">preview your post before submit</h5>
       <h3 class="post-title" v-rainbow="">{{post.title}}</h3>
       <p class="post-content">{{post.content}}</p>
       <ul >
         <li v-for="category in post.categories" class="btn text-white" v-rainbowBack="">{{category}}</li>
       </ul>
       <p class="post-meta">{{post.author}}</p>
       <p class="post-meta">Posted by Start Bootstrap on October 31, 2017 · <span class="reading-time" title="Estimated read time">4 mins  read </span>
            
          </p>
    </div>
    
     </div>
   </div>
 </div>
 </div>

</template>

<script>

export default {
  data () {
    return {
           post:{
             title:"",
             content:"",
             categories:[],

           },
           authors:['naruto','madara','osoy'],
           submitted:false,
    }
  },
  methods:{
    postit:function()
    {
       const token='8d98b60b1eb56e420d132f5ba73225831123d993';
      this.$http.post('https://vue-blog-4684e.firebaseio.com/posts.json?access_token=${token}',this.post).then(function(data){
        console.log(data);
        this.submitted=1;
      });
    }
  },directives:{
      'rainbow':{
         bind(el,binding,vnode){
el.style.color="#"+Math.random().toString().slice(2,8);
}

      },
      'rainbowBack':{
         bind(el,binding,vnode){
el.style.backgroundColor="#"+Math.random().toString().slice(2,8);
}

      }
  }
}
</script>

<style>
.red{
  background-color: #920907;
}
body{
  
  background: url('../images/908671.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity:0.9; 
height: 100vh;
    


}
#AddBlog{
font-weight: 600;
 }
 #AddBlog .card{
      border: 1px solid #ddd;

 }
#AddBlog .post-title{
      font-weight: 800;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

}
#check-boxes{
margin-right: 10px;
}
#AddBlog .post-content{
      font-family: nunito,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol,noto color emoji;
      font-weight: 400;

}
#AddBlog .post-meta {
    font-size: 16px;

    margin-top: 0;
    color: #868e96;
}
#AddBlog .card{
margin:20px;
}
#AddBlog{
  margin: 20px;
}
#AddBlogForm{
margin:20px;

}
#AddBlog ul{
padding:0;
margin:  0;
}
#AddBlog li{
  margin-right: 10px;
  margin-bottom: 10px;
}
.post-title:focus{
    border-bottom: 1px solid #1A1A1A;
    border-radius:60px;

}
#select{
 
  margin-bottom:10px;
}
input[type=text] {
  border: none;
  border-bottom: 2px solid black;
  
}

input[type=text]:focus {
  outline: none !important;
}
input[type=checkbox]:focus {
  outline: none !important;
}
textarea{
 border: 10px solid black;
 border-radius: 5px;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none; 
} 
.form-control{
    border: 1px solid #000000;
   border-radius:20px;

}   
.form-control:focus {
    border: 1px solid #000000;
    box-shadow: none;
    }
  .custom-select{
    border: 1px solid #000000;
    box-shadow: none;
    font-weight: 800;
  }
  
  .custom-select:focus{
    border: 1px solid #000000;
    box-shadow: none;
  }
  .custom-select option{
    font-weight: 800;
   color: white;
   background: black;
  }
  

  select:hover{
    color: white;
    background-color: #000000;
    border:1px solid #000000;
}
.color-it{

}
.color-it:hover{
  color: black;
  background: white;
}
 option::selection{
color: blue;
 }
  
  
</style>
