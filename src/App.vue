<template>
  <div class="nav">
    <router-link to="/">Home</router-link> | 
    <router-link to="/about">About</router-link> |
    <router-link :to="{ name : 'Jobs'}">Jobs</router-link>
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>


  <router-view/>
</template>


<script>
  export default {
    methods: {
      back(){
        this.$router.go(-1) // the number of steps we want to go 
      },
      redirect(){
        this.$router.push({
          name:'home' // we chose the route name we want to redirect the user to 
        })
      },
      forward(){
        this.$router.go(1)  // the number of steps we want to go 
      },
    }
  }
</script>
<!-- the request is not generated to theserver but vue takes care of it , and change only the component -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
}

.nav a.router-link-exact-active {  /**this is the styling of the active links  */
  color: white;
  background-color: crimson;
  text-decoration: none;
}
button{
  margin: 0 10px;
  padding: 10px;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;

}
button:hover{
  border: 1px solid black;
}
</style>

<!-- organize your folders :
  if we have just a few pages we stick to the default 


-->