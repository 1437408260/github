<template>
  <div id="app">
      <HelloWorld />
    <Recommdation/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Recommdation from './components/Recommdation'
import Order from './components.Order'
export default {
  name: 'App',
  components:{
    HelloWorld,
    Recommdation,
    Order
  }
}
</script>

<style>

</style>
