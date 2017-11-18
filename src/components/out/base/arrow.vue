<template>
  <div>arrow</div>
</template>

<script>
  export default {
    mounted () {
      let a = 1 , b = 2
      //1. 一个参数
      let sum1 = x => console.log('箭头函数有一个参数', x = a)
      sum1 () // 1
      //2. 没有参数或多个参数   用圆括号 "()" 代表参数部分
      let sum0 = () => console.log('箭头函数没有参数', a)
      sum0 () // 1
      let sum2 = (x,y) => console.log('箭头函数多个参数', x = a, y = b)
      sum2 () // 1，2
      // 3. 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回
      let sum3 = (x,y) => {
        x = a,
        y = b
        return console.log('箭头函数多于一条语句',x+y)
      }
      sum3 () // 3
      // 4. 直接返回一个对象，需要在对象外面加一个括号，否则会报错
      let sumObj = () => ({'a':1 , 'b': 2})
      sumObj ()

      //  --- 用处 1 简化回调函数
      // 正常函数写法
      let map = [1,2,3].map(function (x) {
        return x * x
      })
      // 箭头函数写法
      let mapArr = [1,2,3].map(x => x * x)
      console.log('箭头函数与回调',map, mapArr)

      // --- ？用处 2 箭头函数可以与变量解构结合使用。
      const fullArr = ({ first, last }) => console.log('箭头函数与解构', first + '' + last)
      // 等同于
      function full(person) {
         return person.first + ' ' + person.last;
      }

      // --- 用处 3 箭头函数与rest 参数结合使用
      const numbersArr = (...nums) => console.log('箭头函数与rest一维', nums)
      numbersArr(1, 2, 3, 4, 5)
      // [1,2,3,4,5]
      const headAndTail = (head, ...tail) => console.log('箭头函数与res二维', [head, tail])
      headAndTail(1, 2, 3, 4, 5)
      // [1,[2,3,4,5]]

      // 注意点： 箭头函数没有它自己的this值，箭头函数内的this值继承自外层代码块的this
      function foo() {
        setTimeout(() => {
          console.log('id:', this.id);   // 继承foo的id 42， 故输出42
        }, 100);
      }
      let id = 21;
      foo.call({ id: 42 });
    }
  }
</script>

<style>
</style>