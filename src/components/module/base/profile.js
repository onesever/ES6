// ------------模块的指定加载---------------
// export 输出三个变量  使用大括号，建立一一对应的关系
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
  v1 as streamV1  // as作为关键字可以重命名
}
