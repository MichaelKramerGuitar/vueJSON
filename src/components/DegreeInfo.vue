<template>
  <body>
    <div>
      <h1>Education Info</h1>
      <button v-if="show" @click="getDegrees()">Show</button>
    </div>
    <div v-for="degree in degrees" :key="degree.id" class="schools">
      <h2>{{ degree.school }}</h2>
      <ul>
        <li>first: <strong>{{ degree.firstName }}</strong></li>
        <li>last: <strong>{{ degree.lastName }}</strong></li>
        <li>student ID: <strong>{{ degree.studentID }}</strong></li>
        <li>program: <strong>{{ degree.program }}</strong></li>
        <li>degree type: <strong>{{ degree.type }}</strong></li>
        <li>conferred: <strong>{{ degree.conferred }}</strong></li>
      </ul>
    </div>
    <div v-if="error">{{ error }}</div>
  </body>
</template>

<script>

export default {
  name: "DegreeInfo",
  data() {
    return {
      show: true,
      degrees: [],
      error: ""
    };
  },
  methods: {

    async getDegrees() {
      //const url = "/api/degrees"; // serverless function approach - 500 err in production, works in dev
      const url = "./degreeInfo.json"; // simple approach works in dev
      fetch(url, {
        mode: "no-cors",
        method: "GET",
        headers: {
          'Access-Control-Allow-Origin': 'https://kramer-bu-vue-json.netlify.app/',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            this.degrees = data.degrees;
            this.show = false;
          })
          .catch(err => {
            this.error = err
          })
    }
  }
}
</script>

<style scoped>
  @import "../styles/style.css";
</style>