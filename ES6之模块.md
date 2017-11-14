###Welcome to use ES6

# 模块功能
模块功能主要由两个命令构成：export和import。</br>
export命令用于规定<b>模块的对外“接口”</b>，import命令用于<b>输入其他模块提供的功能</b>。


## 简单写法

#### 指定加载
// export<br>
对外接口<br>
```JS
// export 指定加载
// ==》注意：1.接口：接口名与变量名相同，且加大括号；2. 重命名：as作为关键字可以重命名
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

// export 输出函数
function v1(x, y) {
  return x * y;
};

export {
  firstName,
  lastName,
  year,
  v1 as streamV1 // 重命名
}
```
// import<br>
输入模块
```JS
// import 指定加载
// ==》注意：1.大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同  ；2. as 重命名
  import {firstName, lastName as surname, year, streamV1} from './profile.js'
```

#### 整体加载（多个）
即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。<br><br>
// export<br>
```JS
// export 整体加载
function area(radius) {
  return Math.PI * radius * radius;
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}
export {area, circumference}
```

//import
```JS
// import 整体加载
import * as circle from './circle.js'
   console.log('整体加载 圆面积：' + circle.area(4));
   console.log('整体加载 圆周长：' + circle.circumference(14));
```

## export deafult（单个）
从前面的例子可以看出，**使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载（整体加载除外）**。但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。

为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，<b>为模块指定默认输出。</b><br>

// export

```JS
// 本质上：export default命令其实只是输出一个叫做default的变量/方法，然后系统允许你为它取任意名字。
// 注意=》一个模块只能有一个默认输出,因此，export default命令只能使用一次。因此 import命令后面才不用加大括号，因为只可能对应一个方法。
// export default也可以用来输出类。
function foo() {
  console.log('foo');
}
export default foo
```
// import
```JS
  // 下面代码的import命令，
  // 可以用任意名称指向export-default.js输出的方法，
  // 这时就不需要知道原模块输出的函数名。
  // 注意=》这时import命令后面，不使用大括号。
  import customName from './export-default';
```

##export 与 import 的复合写法
如果**在一个模块之中，先输入后输出同一个模块**，import语句可以与export语句写在一起。

#### 指定加载中的复合写法

// 第一个文件（源文件）
```JS
function foo() {
  console.log('foo');
}
function bar() {
  console.log('bar')
}
export {foo,bar}
```

// 第二个文件（中转文件）
```JS
// export
export {foo,bar} from './export'
// 等同于
/*import {foo,bar} from './export.js'
export {foo,bar}
*/

// 接口改名
// export {foo,bar as baa} from './export'
```
// 第三个文件（接收文件）
```JS
// import
import {foo,bar} from './import.js'
```
#### 整体加载中的复合写法

// 第一个文件（源文件）
```JS
function foo() {
  console.log('foo');
}
function bar() {
  console.log('bar')
}
export {foo,bar}
```
// 第二个文件（中转文件）
```JS
export * from './export'

```

// 第三个文件（接收文件）
```JS
import * as circle from './import.js'
    circle.foo()
    circle.bar()
```

#### 默认接口中的复合写法（暂无实验成功）
```js
export { default } from 'foo';
// 等同于
/*import {foo} from './export'
export default foo*/
```
