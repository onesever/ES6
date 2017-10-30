<template>
  <div>
    #前提要知道所要变量名的模块加载的两种方式
  </div>
</template>

<script>
  // #前提要知道所要变量名的模块加载的两种方式
  // import 指定加载 ； 大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同   / as 重命名
  import {firstName, lastName as surname, year, streamV1} from './profile.js'
  // import 整体加载
  import * as circle from './circle.js'
  export default {
    mounted () {
      // 打印引入模块的变量
      // 注意事项： import export 编译阶段执行的，在代码运行之前；
      console.log('指定加载', firstName, surname, year, streamV1)
      console.log('整体加载 圆面积：' + circle.area(4));
      console.log('整体加载 圆周长：' + circle.circumference(14));
    }
  }
</script>

<style>
</style>