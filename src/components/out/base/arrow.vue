<template>
  <div>arrow</div>
</template>

<script>
  export default {
    methods: {
      // es6写法
      sumArr(arr) {
        return arr.reduce((pre, cur) =>pre + cur)
      },
      //es5写法
      sumArr2: function (arr) {
        return arr.reduce(function (pre, cur) {
          return pre + cur
        })
      }
    },
    mounted () {
      let arr = [1,2]
      let sumArr = this.sumArr(arr)
      console.log(sumArr)
      let sumArr2 = this.sumArr2(arr)
      console.log(sumArr2)
    }
  }
</script>

<style>
</style>