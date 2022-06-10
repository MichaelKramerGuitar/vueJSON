<!--https://www.section.io/engineering-education/building-vuejs-app-with-json-server-and-axios/-->
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

//import axios from "axios";

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
      //const url = "http://localhost:3000/degrees";
      const url = "https://main--kramer-bu-vue-json.netlify.app/degreeInfo.json";
      //const axios = require('axios'); // alternative access to axios functions
      //axios.get(url)
      fetch(url, {
        mode: "cors",
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
          .then((response) => {
            if (response.status == 200) {
              this.degrees = response.data;
              this.show = false;
            } else {
              this.error = "There was a problem fetching the requested data"
            }
          })
          .catch((error) => {
            this.error = error;
          })
    }
  }
}
</script>

<style scoped>
  @import "../styles/style.css";
</style>