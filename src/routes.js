import addBlog from './components/addBlog.vue';
import ShowBlogs from './components/ShowBlogs.vue';
import listBlogs from './components/listBlogs.vue';
import singlePost from './components/singlePost.vue'
export default[
    {path:'/',component:ShowBlogs},
    {path:'/add',component:addBlog},
    {path:'/add/:id',component:singlePost}
      
]