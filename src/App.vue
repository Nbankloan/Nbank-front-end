<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">
#app {
  background: url("./static/imgs/page_bg.png");
  background-size: 100% 100%;
  height: 100vh;
  select {
    appearance: none;
    border: 0;
    outline: 0;
    font: inherit;
    /* Personalize */
    height: 3em;
    padding: 0 4em 0 1em;
    background: #291D36;
    color: #fff;
    border-radius: 0.25em;
    cursor: pointer;
    /* <option> colors */
    option {
      background: #291D36;
      color: #fff;
    }

    /* Remove focus outline */
    &:focus {
      outline: none;
    }

    /* Remove IE arrow */
    &::-ms-expand {
      display: none;
    }
  }
  .operate-btn{
    width: 450px;
    height: 60px;
    margin: 30px auto;
    user-select: none;
    cursor: pointer;
    font-size: 20px;
    background: linear-gradient(90deg, #B4599F 0%, #B4008C 100%);
    border-radius: 10px;
    text-align: center;
    border: none;
    color: #fff;
    line-height: 60px;
    &:active{
      transform: translate(2px, 3px);
    }
  }
}
</style>
