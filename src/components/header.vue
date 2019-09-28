<template>
<div class="container">

<!-- st navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-white">
  <a class="navbar-brand" href="#">
  <span class="text-danger">M</span><span class="text-primary">y</span><span class="text-success">B</span><span class="text-dark">L</span><span class="text-info">o</span><span class="text-warning">G</span>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
            <router-link class="nav-link btn btn-success text-white" to="/">show posts</router-link>
            <!-- <a class="nav-link btn btn-success text-white" href="/">show posts</a> -->

      </li>
      <li class="nav-item">
         <!-- <a class="nav-link btn btn-success text-white" href="/add">add post</a> -->
         <router-link class="nav-link btn btn-danger text-white" to="/add">add post</router-link>
         
      </li>
      
    </ul>
  </div>
</nav>
<!-- en navbar -->
</div>
      
</template>

<script>
export default {
 
}
</script>

<style scoped>
.navbar-brand{
  font-size: 35px;
  font-weight: bold;
}
.nav-item{
margin-left:10px;
}

</style>
