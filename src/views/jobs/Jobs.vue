<template>
  <h1>the jobs we have</h1>

  <div v-if="jobs.length">
  <div v-for="job in jobs"  :key="job.id" class="job">
        <router-link :to="{ name: 'JobDetails', params:{ id: job.id}}">
        <h2>the title of the job : {{ job.title  }}</h2>
        </router-link>
  </div>
</div>
<div v-else>
    <p>loading jobs...</p> <!-- until we fetch the data from the .json file -->
</div>
</template>

<script>
export default {
    data(){
        return {
            jobs: []
        }
    },
    mounted(){
        fetch("http://localhost:3000/jobs") // fetching the data 
        .then(res =>res.json())
        .then(data => this.jobs = data)
        .catch(err => console.log(err.message)) 
    }
}
</script>

<style>
    .job h2{
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    .job h2:hover{
        background: #ddd;
    }
    .job a{
        text-decoration: none;
    }
</style>


<!-- 404 page and the redirect -->



<!-- now let's gooo with the composition API after we went with the options API

benifit (mostly used for larger projects but we can do with the options API)
group logic together in a setup function 
creating reusable logic (functions)

-->