//1.导入的{}中定义的变量
import {falg,sum} from "./aaa.js";

if (falg) {
  console.log("我是一个天才");
}

//2.直接导入export定义的变量
import {name,height} from "./aaa.js";

console.log(name, height);

//3.导入export的function和class
import {mul,Person} from "./aaa.js"

console.log(mul(2 , 13));
const budai = new Person();
budai.run();

//4.导入export default中的内容
import myadd from "./aaa.js"
console.log(myadd);

//5.统一全部导入
import * as aaa from "./aaa.js"

console.log(aaa.name);