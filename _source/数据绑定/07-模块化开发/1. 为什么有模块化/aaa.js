var moduleA = (function () {//匿名函数
  //导出对象
  var obj={}
  var name = "小明"
  var age = 18

  function sum(num1, num2) {
    return num1 + num2;
  }

  var falg = true
  if (falg) {
    console.log(sum(10, 20));
  }

  obj.falg =falg;
  obj.sum = sum;
  return obj
})()