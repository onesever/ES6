<template>
  <div>如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起。</div>
</template>

<script>
  // 指定加载
  //import {foo,baa} from './import.js'

  // 整体加载
  //import * as circle from './import.js'

  // 默认加载
  import abc from './import.js'
  export default {
    mounted(){
      console.log(abc)
    }
  }
</script>

<style>
</style>