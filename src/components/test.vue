<template>
  <div class="hello" @click="test">
    这里是测试
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    test: function (){
      axios.post
    }
  }
}
</script>
<!-- http://192.168.1.17/index.php?s=Api/User/roll_in -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
