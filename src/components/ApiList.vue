<template>
  <v-container>
    <h2>API Test</h2>
    
    <ul>
    <li v-for="item of apiLinks" :key="item"><a :href="'/api/'+item">{{item}}</li>
    </ul>
  </v-container>
</template>

<script>
export default {
  name: "ApiList",

  data: () => ({
    apiLinks: []
  }),
  methods: {
    setList: function(dat){
      this.apiLinks = dat
    },
    
  },
  created() {
    fetch("/api", { method: "OPTIONS" })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setList(data)
    });
  }
  
};
  
</script>
