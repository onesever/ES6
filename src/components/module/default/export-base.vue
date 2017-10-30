<template>
  <div>
    <button @click=test>点击引入ExportDeafult</button>
  </div>
</template>

<script>
  // 下面代码的import命令，
  // 可以用任意名称指向export-default.js输出的方法，
  // 这时就不需要知道原模块输出的函数名。
  // 需要注意的是，这时import命令后面，不使用大括号。
  import customName from './export-default';
  export default {
    methods:{
      test(){
        customName()
      }
    }
  }
</script>

<style>
</style>