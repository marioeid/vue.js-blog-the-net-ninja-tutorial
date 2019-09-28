import Vue from 'vue';
import App from './blog.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import { RSA_NO_PADDING } from 'constants';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

//global filters 

Vue.filter('snippet',function(value){
return value.slice(0,100)+'...';
});
//global Custom directive 
Vue.directive('theme',{
  bind(el,binding,vnode){
    // you should pass the wide string in single notation to be string 
   if (binding.value=='blue')
   {
     // you should use camel case here not - 
     el.style.color="blue";
   }
   else if (binding.value=='black')
   {
     el.style.color="black";
   }
   if (binding.arg=='background')
   {
     el.style.background="white";
     el.style.marginBottom="10px";
   }
  }
  });
  Vue.directive('rainbow',{
      bind(el,binding,vnode){
el.style.color="#"+Math.random().toString().slice(2,8);


  }
}
  );
  
// installed vue resource using npm so you can use it in post and get requests 
Vue.use(VueResource);
Vue.use(VueRouter);
const router=new VueRouter({
 routes:Routes,
 mode:'history',
});

new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
})
