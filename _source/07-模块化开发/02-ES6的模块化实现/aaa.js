var name = "小明"
var age = 18

function sum(num1, num2) {
  return num1 + num2;
}

var falg = true
if (falg) {
  console.log(sum(10, 20));
}
//1. 导出方式1
export {
  falg,
  sum
}

//2.导出方式2
/*export var height = 1.88
export var name = "dushenyan"*/

//上面合集的简便写法
var height = 1.88
var name  = "dushenyan"
export {height,name}

//3.导出函数和类
export function mul(num1,num2) {
  return num1 *num2
}

export class Person {
  run(){
    console.log("在奔跑");
  }
}

//4.默认导出
export  default name