<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Recommdation from './components/Recommdation'

export default {
  name: 'App',
  components:{
    HelloWorld,
    Recommdation
  }
}
</script>

<style>

</style>
