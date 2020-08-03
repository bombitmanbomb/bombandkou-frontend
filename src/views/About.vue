<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ApiList />
  </div>
</template>
<script>
// @ is an alias to /src
import ApiList from "@/components/ApiList.vue";

export default {
  name: "About",
  components: {
    ApiList
  }
};
</script>
