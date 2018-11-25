<template>
  <div class="bg-brown t-white w100pc" id="header">

    <spon class="fl-l">
      Logo
    </spon>
    <spon>
      UnWrapped
    </spon>
    <spon class="fl-r">
      Menu
    </spon>

  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      msg: 'Component Loaded: Header',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  width: 100%;
  height: 40px;
}

.w100pc {
  width: 100%;
}

.t-white {
  color: white;
}

.bg-brown{
  background-color: burlywood;
}


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

.fl-l {
  float: left;
}

.fl-r {
  float: right;
}

.fl-n {
  float: none;
  clear: both;
}

.disi {
  display: inline;
}

#logo {
  height:
}

#logo-container {
  height: 100%;
  background-color: violet;
}

</style>
