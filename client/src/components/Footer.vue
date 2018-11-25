<template>
  <div class="bg-brown t-white w100pc" id="footer">

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
  name: 'Footer',
  data() {
    return {
      msg: 'Component Loaded: Footer',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  width: 100%;
  height: 40px;
  bottom: 0px;
}

.w100pc {
  width: 100%;
}

.bg-brown{
  background-color: burlywood;
}

.t-white{
  color: #000000;
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
