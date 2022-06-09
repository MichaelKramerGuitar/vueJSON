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
        <li>first: {{ degree.firstName }}</li>
        <li>last: {{ degree.lastName }}</li>
        <li>student ID: {{ degree.studentID }}</li>
        <li>program: {{ degree.program }}</li>
        <li>degree type: {{ degree.type }}</li>
        <li>conferred: {{ degree.conferred }}</li>
      </ul>
    </div>
    <div v-if="error">{{ error }}</div>
  </body>
</template>

<script>

import axios from "axios";

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
      const url = "http://localhost:3000/degrees";
      //const axios = require('axios'); // alternative access to axios functions
      axios.get(url)
          .then((response) => {
            if (response.status == 200) {
              this.degrees = response.data;
              this.show = false;
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