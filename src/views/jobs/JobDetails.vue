<template>
    

    <div v-if="job">
        <h1>Job details page</h1>
        <p>the job title: {{ job.title }}</p>
        <p>the job id is: {{ id }}</p>
        <p>the job detail: {{ job.details }}</p>
    </div>
    <div v-else>
        <p>Laoding job details</p>
    </div>
<!-- conditonally showing data using the v if -->
</template>

<script>
export default {
    props : [ 'id' ],
    data(){
        return {
            job:null,
        }
    },
    mounted(){
        fetch("http://localhost:3000/jobs/") // fetching the data 
        .then(res =>res.json()) // i'm having a probelm with the fetching , it seems that the link with the index is not found, so we fetch the data and we set the job record to be the data on the index id - 1 , and problem solved !! 
        .then(data => this.job = data[this.id - 1])
        .catch(err => console.log(err.message)) 
        console.log(this.job)
    }
}
</script>

<style>

</style>