# 邂逅 React 开发（放在后面是重点）

> 我个人一直喜欢使用邂逅这个词，我希望每个人在和一个新技术接触的时候，都是一场美丽的邂逅。
>
> 而 React 本身绝对是优雅和美丽的，所以从这里开始，我们和 React 来一场美丽的邂逅吧！

## 一. 认识 React

### 1.1. React 是什么？

React 是什么呢？相信每个做前端的人对它都或多或少有一些印象。

这里我们来看一下官方对它的解释：用于构建用户界面的 JavaScript 库。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuv8T0XGhQAv6Dp33VWkX6ZsHCV89Z8DibK0m1sicq69pah3rsIqMzOBVUqRlPDMmibAu9mgch5QX3B4g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

我们知道对于前端来说，主要的任务就是构建用于界面，而构建用于界面离不开三个技术：

- HTML：构建页面的结构
- CSS：构建页面的样式
- JavaScript：页面动态内容和交互

那么使用最原生的 HTML、CSS、JavaScript 可以构建完整的用户界面吗？当然可以，但是会存在很多问题

- 比如操作 DOM 兼容性的问题；
- 比如过多兼容性代码的冗余问题；
- 比如代码组织和规范的问题；

所以，一直以来前端开发人员都在需求可以让自己开发更方便的 JavaScript 库：

- 在过去的很长时间内，jQuery 是被使用最多的 JavaScript 库；
- 在过去的一份调查中显示，全球前 10,000 个访问最高的网站中，有 65%使用了 jQuery，是当时最受欢迎的 JavaScript 库；
- 但是越来越多的公司开始慢慢不再使用 jQuery，包括程序员使用最多的 GitHub；

现在前端领域最为流行的是三大框架：

- Vue
- React
- Angular

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuv8T0XGhQAv6Dp33VWkX6ZsbkB0xICJbmEibMnwzXjZyF3ASwZiaAYn4DHJTnD2eBA67BqibkoHR8QIg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

​

而 Angular 在国内并不是特别受欢迎，尤其是 Angular 目前的版本对 TypeScript 还有要求的情况下。

Vue 和 React 是国内最为流行的两个框架，而他们都是帮助我们来构建用户界面的 JavaScript 库。

- 关于它们的对比，我会另外再写一篇文章

### 1.2. React 的起源

React 是 2013 年，Facebook 开源的 JavaScript 框架，那么当时为什么 Facebook 要推出这样一款框架呢？

这个源于一个需求，所产生的 bug：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuv8T0XGhQAv6Dp33VWkX6Zs7CLvbibh02ayVcKgVrWOOVV6Drt00GOic8KD3rwxKYIxPdtrA9F2iaJicg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

该功能上线之后，总是出现 bug：

- 三个消息的数字在发生变化时，过多的操作很容易产生 bug；

bug 是否可以修复呢？当然可以修复，但是 Facebook 的工程师并不满足于此；

他们开始思考为什么会产生这样的问题；

- 在传统的开发模式中，我们过多的去操作界面的细节；（前端、iOS、Android）

- - 比如说需要掌握和使用大量 DOM 的 API，当然我们可以通过 jQuery 来简化和适配一些 API 的使用；

- 另外关于数据（状态），往往会分散到各个地方，不方便管理和维护；

他们就去思考，是否有一种新的模式来解决上面的问题：

- 1.以组件的方式去划分一个个功能模块
- 2.组件内以 jsx 来描述 UI 的样子，以 state 来存储组件内的状态
- 3.当应用的状态发生改变时，通过 setState 来修改状态，状态发生变化时，UI 会自动发生更新

### 1.3. React 的特点和优势

#### 1.3.1. React 的特点

声明式编程：

- 声明式编程是目前整个大前端开发的模式：Vue、React、Flutter、SwiftUI；
- 它允许我们只需要维护自己的状态，当状态改变时，React 可以根据最新的状态去渲染我们的 UI 界面；

![声明式编程](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuv8T0XGhQAv6Dp33VWkX6Zsx4UXdjKhrNDgicnKtPogSQW1sWndlbUDe6aHfIX6FPc6Y1wKiasu4JMA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

组件化开发：

- 组件化开发页面目前前端的流行趋势，我们会讲复杂的界面拆分成一个个小的组件；
- 如何合理的进行组件的划分和设计也是后面我会讲到的一个重点；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuv8T0XGhQAv6Dp33VWkX6ZsqNp9Ay903Ju56ib9VHDxmpvSE3Vb8NeB57micoCbjrFTvzm8eeDo15vQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

多平台适配：

- 2013 年，React 发布之初主要是开发 Web 页面；
- 2015 年，Facebook 推出了 ReactNative，用于开发移动端跨平台；（虽然目前 Flutter 非常火爆，但是还是有很多公司在使用 ReactNative）；
- 2017 年，Facebook 推出 ReactVR，用于开发虚拟现实 Web 应用程序；（随着 5G 的普及，VR 也会是一个火爆的应用场景）；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuv8T0XGhQAv6Dp33VWkX6ZsQ8MeT4JibovAXWianmU2Q0JdBWZ07sYpAXGsIicPGbfyTJ4VgUweVtgog/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

#### 1.3.2. React 的优势

React 由 Facebook 来更新和维护，它是大量优秀程序员的思想结晶：

- React 的流行不仅仅局限于普通开发工程师对它的认可，大量流行的其他框架借鉴 React 的思想；

Vue.js 框架设计之初，有很多的灵感来自 Angular 和 React。

- 包括 Vue3 很多新的特性，也是借鉴和学习了 React
- 比如 React Hooks 是开创性的新功能（也是我们课程的重点）
- Vue Function Based API 学习了 React Hooks 的思想

Flutter 的很多灵感都来自 React，来自官网的一段话：（SwiftUI 呢）

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuv8T0XGhQAv6Dp33VWkX6ZsFH0d65IYpibjv4FBLtp0d0paWxVlMaH5PibTKicbao2vQIHeGDvuVxUXQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

​ 来自 Flutter 官网

- 事实上 Flutter 中的 Widget – Element – RenderObject，对应的就是 JSX – 虚拟 DOM – 真实 DOM

所以 React 可以说是前端的先驱者，它总是会引领整个前端的潮流。

### 1.4. React 的现状

另外在 HackerRank 中，2020 年有一份调用，你更想要学习的 framework（框架）：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuv8T0XGhQAv6Dp33VWkX6ZsOEnSJ5JQPN38hGOia67MUCvhN760arlTIBo498aZicJOSefI8Q5HYG8Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)哪一个是你最想要学习的框架

国内外很多知名网站使用 React 开发：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuv8T0XGhQAv6Dp33VWkX6ZsbMEMADmdhMNTKEg9ZGPyFYjuQCfPr0rrrvjjbyZ0GqEMS7HJ5fUsUQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)image-20200608115008557

目前国内在大型公司使用 React 的较多：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuv8T0XGhQAv6Dp33VWkX6ZsmVj0gNQia5e9AsFRK9QNzYVGexbXibtohWwQ7V3nugXPHLiblpybQRS7A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

## 二. Hello React

### 2.1. 原生案例实现

为了演练 React，我们可以提出一个小的需求：

- 在界面显示一个文本：Hello World
- 点击下方的一个按钮，点击后文本改变为 Hello React
- 在界面显示一个文本：Hello World
- 点击下方的一个按钮，点击后文本改变为 Hello React

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuv8T0XGhQAv6Dp33VWkX6ZsaEfbSic6Y3lOUG1rIIZzP5H5FibMPLFHwENChndo3JE7V2xx4pDx8fXg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)案例效果

但是，我们使用 React 实现之前，先使用原生代码来实现，这样更加方便大家对比 React 和原生：

- 当然，你也可以使用 jQuery 和 Vue 来实现，对它们分别进行对比学习

原生实现代码如下：

```html
<body>
  <div class="app">
    <h2 class="title">Hello World</h2>
    <button class="change-btn">改变文本</button>
  </div>

  <script>
    // 1.获取dom节点
    const titleEl = document.getElementsByClassName("title")[0];

    // 2.获取数据
    let message = "Hello World";

    // 3.将数据显示到titleEl中
    titleEl.innerHTML = message;

    // 4.改变按钮内容
    const btnEl = document.getElementsByClassName("change-btn")[0];
    btnEl.addEventListener("click", (e) => {
      message = "Hello React";
      titleEl.innerHTML = message;
    });
  </script>
</body>
```

### 2.2. React 开发依赖

开发 React 必须依赖三个库：

- react：包含 react 所必须的核心代码
- react-dom：react 渲染在不同平台所需要的核心代码
- babel：将 jsx 转换成 React 代码的工具

第一次接触 React 会被它繁琐的依赖搞蒙，对于 Vue 来说，我们只是依赖一个 vue.js 文件即可，但是 react 居然要依赖三个库。

其实呢，这三个库是各司其职的，目的就是让每一个库只单纯做自己的事情：

- 在 React 的 0.14 版本之前是没有 react-dom 这个概念的，所有功能都包含在 react 里。

- 为什么要进行拆分呢？原因就是 react-native。

- react 包中包含了 react 和 react-native 所共同拥有的核心代码。

- react-dom 针对 web 和 native 所完成的事情不同：

- - web 端：react-dom 会讲 jsx 最终渲染成真实的 DOM，显示在浏览器中
  - native 端：react-dom 会讲 jsx 最终渲染成原生的控件（比如 Android 中的 Button，iOS 中的 UIButton）。

babel 是什么呢？

- **Babel** ，又名 **Babel.js**。
- 是目前前端使用非常广泛的编辑器、转移器。
- 比如当下很多浏览器并不支持 ES6 的语法，但是确实 ES6 的语法非常的简洁和方便，我们**开发时**希望使用它。
- 那么编写源码时我们就可以使用 ES6 来编写，之后通过 Babel 工具，将 ES6 转成大多数浏览器都支持的 ES5 的语法。

React 和 Babel 的关系：

- 默认情况下开发 React 其实可以不使用 babel。
- 但是前提是我们自己使用 `React.createElement` 来编写源代码，它编写的代码非常的繁琐和可读性差。
- 那么我们就可以直接编写 jsx（JavaScript XML）的语法，并且让 babel 帮助我们转换成 React.createElement。
- 后续还会讲到；

所以，我们在编写 React 代码时，这三个依赖都是必不可少的。

那么，如何添加这三个依赖：

- 方式一：直接 CDN 引入

- - react 依赖：https://unpkg.com/react@16/umd/react.development.js
  - react-dom 依赖：https://unpkg.com/react-dom@16/umd/react-dom.development.js
  - babel 依赖：https://unpkg.com/babel-standalone@6/babel.min.js

- 方式二：下载后，添加本地依赖

- 方式三：通过 npm 管理（后续脚手架再使用）

暂时我们直接通过 CDN 引入，来演练下面的示例程序：

- 这里有一个 crossorigin 的属性，这个属性的目的是为了拿到跨域脚本的错误信息

```jsx
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

### 2.3. Hello World

下面我们通过一个 Hello World 的案例来看下如何使用 React 开发。

需求非常简单：通过 React，在界面上显示一个 Hello World

- 注意：这里我们编写 React 的 script 代码中，必须添加 `type="text/babel"`，作用是可以让 babel 解析 jsx 的语法

```jsx
  <div id="app"></div>

  <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

  <script type="text/babel">
    // 通过ReactDom对象来渲染内容
    ReactDOM.render(<h2>Hello World</h2>, document.getElementById("app"));
  </script>
```

代码解析：

- 依赖不需要多讲，开发 React 代码必须添加三个依赖；

- ReactDOM.render 函数：

- - 这里我们已经提前定义一个 id 为 app 的 div
  - 这里我们传入了一个 h2 元素，后面我们就会使用 React 组件
  - 参数一：传递要渲染的内容，这个内容可以是 HTML 元素，也可以是 React 的组件
  - 参数二：将渲染的内容，挂载到哪一个 HTML 元素上

显示效果：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuv8T0XGhQAv6Dp33VWkX6ZsN2Z5LzZUg9XibyreYMR1Nh4BglAFL6moNeSEOVQNLjfz32AL1xeKib0Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)Hello World

但是目前我们渲染的内容是定义死的，能否将其抽取到一个变量中呢？

- 当然可以，我们可以通过{}语法来引入外部的变量或者表达式

```jsx
// 将数据定义到变量中
let message = "Hello World";

// 通过ReactDom对象来渲染内容
ReactDOM.render(<h2>{message}</h2>, document.getElementById("app"));
```

### 2.4. Hello React

按照我们最初的案例，我们已经实现了 Hello World，但是我们希望点击一个按钮后，修改为 Hello React

#### 2.4.1. 错误的方式

下面的代码是我们正常的执行逻辑，但是会报错：

- 原因是默认情况下 `ReactDOM.render` 会覆盖挂载到的 app 原生中的所有内容；
- 所以在执行完 `ReactDOM.render` 之后，就不存在 button 原生了；

```react
<body>

  <div id="app">
    <button class="change-btn">改变文本</button>
  </div>

  <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

  <script type="text/babel">
    // 将数据定义到变量中
    let message = "Hello World";

    // 通过ReactDom对象来渲染内容
    ReactDOM.render(<h2>{message}</h2>, document.getElementById("app"));

    // 获取btn
    const btnEl = document.getElementsByClassName("change-btn")[0];
    btnEl.addEventListener("click", (e) => {
      console.log(e);
    })
  </script>
</body>
```

#### 2.4.2. 正确的方式

虽然可以实现，但是整个代码的流畅过于繁琐

```react
<body>

  <div id="app">
  </div>

  <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

  <script type="text/babel">
    // 将数据定义到变量中
    let message = "Hello World";

    // 通过ReactDom对象来渲染内容
    render();

    // 定义一个执行的函数
    function btnClick() {
      message = "Hello React";
      render();
    }

    function render() {
      ReactDOM.render((
        <div>
          <h2>{message}</h2>
          <button onClick={btnClick}>改变文本</button>
        </div>
      ), document.getElementById("app"));
    }
  </script>
</body>
```

#### 2.4.3. 组件的方式

整个逻辑其实可以看做一个整体，那么我们就可以将其封装成一个组件：

- 我们说过 `ReactDOM.render` 第一参数是一个 HTML 原生或者一个组件；
- 所以我们可以先将之前的业务逻辑封装到一个组件中，然后传入到 `ReactDOM.render` 函数中的第一个参数；

在 React 中，如何封装一个组件呢？

- 这里我们暂时使用类的方式封装组件：

- - render 当中返回的 jsx 内容，就是之后 React 会帮助我们渲染的内容
  - 1.定义一个类，继承自 React.Component
  - 2.实现当前组件的 render 函数

具体的代码如下：

```react
class App extends React.Component {
  render() {
    return (<h2>Hello World</h2>)
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
```

如果我们的 Hello World 是依赖变量的，并且会根据按钮的点击而改变呢？这里涉及到几个核心点

1.数据在哪里定义

- 在组件中的数据，我们可以分成两类：

- - 参与界面更新的数据：当数据变量时，需要更新组件渲染的内容
  - 不参与界面更新的数据：当数据变量时，不需要更新将组建渲染的内容

- 参与界面更新的数据我们也可以称之为是参与数据流，这个数据是定义在当前对象的 state 中

- - 我们可以通过在构造函数中 `this.state = {定义的数据}`

- 当我们的数据发生变化时，我们可以调用 `this.setState` 来更新数据，并且通知 React 进行 update 操作

- - 在进行 update 操作时，就会重新调用 render 函数，并且使用最新的数据，来渲染界面

    2.事件绑定中的 this

- 在类中直接定义一个函数，并且将这个函数绑定到 html 原生的 onClick 事件上，当前这个函数的 this 指向的是谁呢？

- 默认情况下是 undefined

- - 很奇怪，居然是 undefined；
  - 因为在正常的 DOM 操作中，监听点击，监听函数中的 this 其实是节点对象（比如说是 button 对象）；
  - 这次因为 React 并不是直接渲染成真实的 DOM，我们所编写的 button 只是一个语法糖，它的本质 React 的 Element 对象；
  - 那么在这里发生监听的时候，react 给我们的函数绑定的 this，默认情况下就是一个 undefined；

- 我们在绑定的函数中，可能想要使用当前对象，比如执行 `this.setState` 函数，就必须拿到当前对象的 this

- - 我们就需要在传入函数时，给这个函数直接绑定 this
  - 类似于下面的写法：`<button onClick={this.changeText.bind(this)}>改变文本</button>`

我们一起来看一下代码是如何实现的：

```react
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World"
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.changeText.bind(this)}>改变文本</button>
     </div>
    )
  }

  changeText() {
    this.setState({
      message: "Hello React"
    })
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
```

# 核心 JSX 语法一

## 一. ES6 的 class

> 虽然目前 React 开发模式中更加流行 hooks，但是依然有很多的项目依然是使用类组件（包括 AntDesign 库中）；
>
> 但是有很多的同学对 ES6 中的类不太熟悉，所以这里我还是补充一下；

### 1.1. 类的定义

在 ES6 之前，我们通过 function 来定义类，但是这种模式一直被很多从其他编程语言（比如 Java、C++、OC 等等）转到 JavaScript 的人所不适应。

原因是，大多数面向对象的语言，都是使用 class 关键字来定义类的。

而 JavaScript 也从 ES6 开始引入了 class 关键字，用于定义一个类。

ES6 之前定义一个 Person 类：

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.running = function () {
  console.log(this.name + this.age + "running");
};

var p = new Person("why", 18);
p.running();
```

转换成 ES6 中的类如何定义呢？

- 类中有一个 constructor 构造方法，当我们通过 new 关键字调用时，就会默认执行这个构造方法

- - 构造方法中可以给当前对象添加属性

- 类中也可以定义其他方法，这些方法会被放到 Person 类的 prototype 上

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  running() {
    console.log(this.name + this.age + "running");
  }
}

const p = new Person("why", 18);
p.running();
```

另外，属性也可以直接定义在类中：

- height 和 address 是直接定义在类中

```js
class Person {
  height = 1.88;
  address = "北京市";

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  studying() {
    console.log(this.name + this.age + "studying");
  }
}
```

### 1.2. 类的继承

继承是面向对象的一大特性，可以减少我们重复代码的编写，方便公共内容的抽取（也是很多面向对象语言中，多态的前提）。

ES6 中增加了 extends 关键字来作为类的继承。

我们先写两个类没有继承的情况下，它们存在的重复代码：

- Person 类和 Student 类

```jsx
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  running() {
    console.log(this.name, this.age, "running");
  }
}

class Student {
  constructor(name, age, sno, score) {
    this.name = name;
    this.age = age;
    this.sno = sno;
    this.score = score;
  }

  running() {
    console.log(this.name, this.age, "running");
  }

  studying() {
    console.log(this.name, this.age, this.sno, this.score, "studing");
  }
}
```

我们可以使用继承来简化代码：

- 注意：在 constructor 中，子类必须通过 super 来调用父类的构造方法，对父类进行初始化，否则会报错。

```jsx
class Student1 extends Person {
  constructor(name, age, sno, score) {
    super(name, age);
    this.sno = sno;
    this.score = score;
  }

  studying() {
    console.log(this.name, this.age, this.sno, this.score, "studing");
  }
}

const stu1 = new Student1("why", 18, 110, 100);
stu1.studying();
```

## 二. 案例练习

### 2.1. 列表展示

真实开发中，我们的数据通常会从服务器获取，比较常见的是获取一个列表数据，保存到一个数组中进行展示

- 比如现在有一个电影列表，我们如何通过 React 进行展示呢？

我们还是通过一个组件来完成：

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: ["星际穿越", "大话西游", "盗梦空间", "少年派"],
    };
  }

  render() {
    // var movieLis = [];
    // for (var i in this.state.movies) {
    //   movieLis.push((<li>{this.state.movies[i]}</li>));
    // }

    return (
      <div>
        <h2>电影列表</h2>
        <ul>
          {this.state.movies.map((item, index) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
```

### 2.2. 计数器案例

电影列表的案例中并没有交互，我们再来实现一个计数器的案例：

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={this.increment.bind(this)}>+1</button>
        <button onClick={this.decrement.bind(this)}>-1</button>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
```

## 三. JSX 语法解析

### 3.1. 认识 JSX 的语法

我们先来看一段代码：

- 这段 element 变量的声明右侧赋值的标签语法是什么呢？

- - 它不是一段字符串（因为没有使用引号包裹），它看起来是一段 HTML 原生，但是我们能在 js 中直接给一个变量赋值 html 吗？
  - 其实是不可以的，如果我们将 `type="text/babel"` 去除掉，那么就会出现语法错误；
  - 它到底是什么呢？其实它是一段 jsx 的语法；

```html
<script type="text/babel">
  const element = <h2>Hello World</h2>;
  ReactDOM.render(element, document.getElementById("app"));
</script>
```

JSX 是什么？

- JSX 是一种 JavaScript 的语法扩展（eXtension），也在很多地方称之为 JavaScript XML，因为看起就是一段 XML 语法；
- 它用于描述我们的 UI 界面，并且其完全可以和 JavaScript 融合在一起使用；
- 它不同于 Vue 中的模块语法，你不需要专门学习模块语法中的一些指令（比如 v-for、v-if、v-else、v-bind）；

为什么 React 选择了 JSX？

- React 认为渲染逻辑本质上与其他 UI 逻辑存在内在耦合

- - 比如 UI 需要绑定事件（button、a 原生等等）；
  - 比如 UI 中需要展示数据状态，在某些状态发生改变时，又需要改变 UI；

- 他们之间是密不可分，所以 React 没有将标记分离到不同的文件中，而是将它们组合到了一起，这个地方就是组件（Component）；

- - 当然，后面我们还是会继续学习更多组件相关的东西；

- 在这里，我们只需要知道，JSX 其实是嵌入到 JavaScript 中的一种结构语法；

JSX 的书写规范：

- JSX 的顶层**只能有一个根元素**，所以我们很多时候会在外层包裹一个 div 原生（或者使用后面我们学习的 Fragment）；

- 为了方便阅读，我们通常在 jsx 的外层包裹一个小括号()，这样可以方便阅读，并且 jsx 可以进行换行书写；

- JSX 中的标签可以是单标签，也可以是双标签；

- - 注意：如果是单标签，必须以/>结尾；

JSX 的本质，我们后面再来讨论；

### 3.2. JSX 嵌入表达式

如果我们 jsx 中的内容是动态的，我们可以通过表达式来获取：

- 书写规则：{表达式}
- 大括号内可以是变量、字符串、数组、函数调用等任意 js 表达式；

#### 3.2.1. jsx 中的注释

jsx 是嵌入到 JavaScript 中的一种语法，所以在编写注释时，需要通过 JSX 的语法来编写：

```html
<div>
  {/* 我是一段注释 */}
  <h2>Hello World</h2>
</div>
```

#### 3.2.2. JSX 嵌入变量

- 情况一：当变量是 Number、String、Array 类型时，可以直接显示

- 情况二：当变量是 null、undefined、Boolean 类型时，内容为空；

- - 如果希望可以显示 null、undefined、Boolean，那么需要转成字符串；
  - 转换的方式有很多，比如 toString 方法、和空字符串拼接，String(变量)等方式；

- 情况三：对象类型不能作为子元素（not valid as a React child）

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "why",
      age: 18,
      hobbies: ["篮球", "唱跳", "rap"],

      test1: null,
      test2: undefined,
      flag: false,

      friend: {
        name: "kobe",
        age: 40
      }
    }
  }

  render() {
    return (
      <div>
        {/* 我是一段注释 */}
        <h2>Hello World</h2>
      </div>

      <div>
        {/* 1.可以直接显示 */}
        <h2>{this.state.name}</h2>
        <h2>{this.state.age}</h2>
        <h2>{this.state.hobbies}</h2>


        {/* 2.不显示 */}
        <h2>{this.state.test1}</h2>
        <h2>{this.state.test1 + ""}</h2>
        <h2>{this.state.test2}</h2>
        <h2>{this.state.test2 + ""}</h2>
        <h2>{this.state.flag}</h2>
        <h2>{this.state.flag + ""}</h2>

        {/* 3.不显示 */}
        <h2>123{this.state.friend}</h2>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
```

**补充：为什么 null、undefined、Boolean 在 JSX 中要显示为空内容呢？**

原因是在开发中，我们会进行很多的判断；

- 在判断结果为 false 时，不显示一个内容；
- 在判断结果为 true 时，显示一个内容；

这个时候，我们可以编写如下代码：

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
    };
  }

  render() {
    return (
      <div>
        {this.state.flag ? <h2>我是标题</h2> : null}
        {this.state.flag && <h2>我是标题</h2>}
      </div>
    );
  }
}
```

#### 3.3.3. JSX 嵌入表达式

JSX 中，也可以是一个表达式。

这里我们演练三个，其他的大家在开发中灵活运用：

- 运算表达式
- 三元运算符
- 执行一个函数

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "kobe",
      lastName: "bryant",
      age: 20,
    };
  }

  render() {
    return (
      <div>
        {/* 运算表达式 */}
        <h2>{this.state.firstName + " " + this.state.lastName}</h2>
        {/* 三元运算符 */}
        <h2>{this.state.age >= 18 ? "成年人" : "未成年人"}</h2>
        {/* 执行一个函数 */}
        <h2>{this.sayHello("kobe")}</h2>
      </div>
    );
  }

  sayHello(name) {
    return "Hello " + name;
  }
}
```

#### 3.3.4. jsx 绑定属性

很多时候，描述的 HTML 原生会有一些属性，而我们希望这些属性也是动态的：

- 比如元素都会有 title 属性

- 比如 img 元素会有 src 属性

- 比如 a 元素会有 href 属性

- 比如元素可能需要绑定 class

- - 注意：绑定 class 比较特殊，因为 class 在 js 中是一个关键字，所以 jsx 中不允许直接写 class
  - 写法：使用 className 替代

- 比如原生使用内联样式 style

- - style 后面跟的是一个对象类型，对象中是样式的属性名和属性值；
  - 注意：这里会讲属性名转成驼峰标识，而不是连接符-；

我们来演示一下属性的绑定：

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "你好啊",
      imgUrl:
        "https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
      link: "https://www.baidu.com",
      active: false,
    };
  }

  render() {
    return (
      <div>
        <h2 title={this.state.title}>Hello World</h2>
        <img src={this.state.imgUrl} alt="" />
        <a href={this.state.link} target="_blank">
          百度一下
        </a>
        <div className={"message " + (this.state.active ? "active" : "")}>
          你好啊
        </div>
        <div
          className={["message", this.state.active ? "active" : ""].join(" ")}
        >
          你好啊
        </div>
        <div
          style={{ fontSize: "30px", color: "red", backgroundColor: "blue" }}
        >
          我是文本
        </div>
      </div>
    );
  }
}
```

### 3.3. jsx 事件监听

#### 3.3.1. 和原生绑定区别

如果原生 DOM 原生有一个监听事件，我们可以如何操作呢？

- 方式一：获取 DOM 原生，添加监听事件；
- 方式二：在 HTML 原生中，直接绑定 onclick；

我们这里演练一下方式二：

- `btnClick()`这样写的原因是 onclick 绑定的后面是跟上 JavaScript 代码；

```html
<button onclick="btnClick()">点我一下</button>
<script>
  function btnClick() {
    console.log("按钮发生了点击");
  }
</script>
```

在 React 中是如何操作呢？

我们来实现一下 React 中的事件监听，这里主要有两点不同

- React 事件的命名采用小驼峰式（camelCase），而不是纯小写；
- 我们需要通过{}传入一个事件处理函数，这个函数会在事件发生时被执行；

```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.btnClick}>点我一下(React)</button>
      </div>
    );
  }

  btnClick() {
    console.log("React按钮点击了一下");
  }
}
```

#### 3.3.2. this 绑定问题

在事件执行后，我们可能需要获取当前类的对象中相关的属性：

- 比如我们这里打印：`this.state.message`

- - 但是这里会报错：`Cannot read property 'state' of undefined`
  - 原因是 this 在这里是 undefined

- 如果我们这里直接打印 this，也会发现它是一个 undefined

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "你好啊,李银河",
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.btnClick}>点我一下(React)</button>
      </div>
    );
  }

  btnClick() {
    console.log(this);
    console.log(this.state.message);
  }
}
```

为什么是 undefined 呢？

- 原因是`btnClick`函数并不是我们主动调用的，而且当 button 发生改变时，React 内部调用了`btnClick`函数；
- 而它内部调用时，并不知道要如何绑定正确的 this；

**如何解决 this 的问题呢？**

**方案一：bind 给 btnClick 显示绑定 this**

在传入函数时，我们可以主动绑定 this：

- 这里我们主动将 btnClick 中的 this 通过 bind 来进行绑定（显示绑定）
- 那么之后 React 内部调用 btnClick 函数时，就会有一个 this，并且是我们绑定的 this；

```jsx
<button onClick={this.btnClick.bind(this)}>点我一下(React)</button>
```

但是呢，如果我有两个函数都需要用到 btnClick 的绑定：

- 我们发现 `bind(this)` 需要书写两遍；

```jsx
<button onClick={this.btnClick.bind(this)}>点我一下(React)</button>
<button onClick={this.btnClick.bind(this)}>也点我一下(React)</button>
```

这个我们可以通过在构造方法中直接给 this.btnClick 绑定 this 来解决：

- 注意查看 `constructor` 中我们的操作：`this.btnClick = this.btnClick.bind(this);`

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "你好啊,李银河",
    };

    this.btnClick = this.btnClick.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.btnClick}>点我一下(React)</button>
        <button onClick={this.btnClick}>也点我一下(React)</button>
      </div>
    );
  }

  btnClick() {
    console.log(this);
    console.log(this.state.message);
  }
}
```

**方案二：使用 ES6 class fields 语法**

你会发现我这里将 btnClick 的定义变成了一种赋值语句：

- 这是 ES6 中给类定义属性的方法，称之为 class fields 语法；
- 因为这里我们赋值时，使用了箭头函数，所以在当前函数中的 this 会去上一个**作用域**中查找；
- 而上一个作用域中的 this 就是当前的对象；

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "你好啊,李银河",
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.btnClick}>点我一下(React)</button>
        <button onClick={this.btnClick}>也点我一下(React)</button>
      </div>
    );
  }

  btnClick = () => {
    console.log(this);
    console.log(this.state.message);
  };
}
```

**方案三：事件监听时传入箭头函数（推荐）**

因为 `onClick` 中要求我们传入一个函数，那么我们可以直接定义一个箭头函数传入：

- 传入的箭头函数的函数体是我们需要执行的代码，我们直接执行 `this.btnClick()`；
- `this.btnClick()`中通过 this 来指定会进行隐式绑定，最终 this 也是正确的；

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "你好啊,李银河",
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.btnClick()}>点我一下(React)</button>
        <button onClick={() => this.btnClick()}>也点我一下(React)</button>
      </div>
    );
  }

  btnClick() {
    console.log(this);
    console.log(this.state.message);
  }
}
```

#### 3.3.3. 事件参数传递

在执行事件函数时，有可能我们需要获取一些参数信息：比如 event 对象、其他参数

情况一：获取 event 对象

- 很多时候我们需要拿到 event 对象来做一些事情（比如阻止默认行为）
- 假如我们用不到 this，那么直接传入函数就可以获取到 event 对象；

```react
class App extends React.Component {
  constructor(props) {

  render() {
    return (
      <div>
        <a href="http://www.baidu.com" onClick={this.btnClick}>点我一下</a>
      </div>
    )
  }

  btnClick(e) {
    e.preventDefault();
    console.log(e);
  }
}
```

情况二：获取更多参数

- 有更多参数时，我们最好的方式就是传入一个箭头函数，主动执行的事件函数，并且传入相关的其他参数；

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      names: ["衣服", "鞋子", "裤子"],
    };
  }

  render() {
    return (
      <div>
        <a href="http://www.baidu.com" onClick={this.aClick}>
          点我一下
        </a>

        {this.state.names.map((item, index) => {
          return (
            <a href="#" onClick={(e) => this.aClick(e, item, index)}>
              {item}
            </a>
          );
        })}
      </div>
    );
  }

  aClick(e, item, index) {
    e.preventDefault();
    console.log(item, index);
    console.log(e);
  }
}
```

# 核心 JSX 语法二

## 一. 条件渲染

某些情况下，界面的内容会根据不同的情况显示不同的内容，或者决定是否渲染某部分内容：

- 在 vue 中，我们会通过指令来控制：比如 v-if、v-show；
- 在 React 中，所有的条件判断都和普通的 JavaScript 代码一致；

常见的条件渲染的方式有哪些呢？

### 1.1. 条件判断语句

一种方式是当逻辑较多时，通过条件判断：

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }

  render() {
    let titleJsx = null;
    if (this.state.isLogin) {
      titleJsx = <h2>欢迎回来~</h2>;
    } else {
      titleJsx = <h2>请先登录~</h2>;
    }

    return <div>{titleJsx}</div>;
  }
}
```

当然，我们也可以将其封装到一个独立的函数中：

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }

  render() {
    return <div>{this.getTitleJsx()}</div>;
  }

  getTitleJsx() {
    let titleJsx = null;
    if (this.state.isLogin) {
      titleJsx = <h2>欢迎回来~</h2>;
    } else {
      titleJsx = <h2>请先登录~</h2>;
    }
    return titleJsx;
  }
}
```

### 1.2. 三元运算符

另外一种实现条件渲染的方法就是三元运算符：`condition ? true : false;`

三元运算符适用于没有太多逻辑的代码：只是根据不同的条件直接返回不同的结果

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.isLogin ? "欢迎回来~" : "请先登录~"}</h2>
        <button onClick={(e) => this.loginBtnClick()}>
          {this.state.isLogin ? "退出" : "登录"}
        </button>
      </div>
    );
  }

  loginBtnClick() {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  }
}
```

### 1.3. 与运算符&&

在某些情况下，我们会遇到这样的场景：

- 如果条件成立，渲染某一个组件；
- 如果条件不成立，什么内容也不渲染；

如果我们使用三元运算符，是如何做呢？

```jsx
{
  this.state.isLogin ? <h2>{this.state.username}</h2> : null;
}
```

其实我们可以通过`逻辑与&&`来简化操作：

```jsx
{
  this.state.isLogin && <h2>{this.state.username}</h2>;
}
```

### 1.4. v-show 效果

针对一个 HTML 原生，渲染和不渲染之间，如果切换的非常频繁，那么会相对比较损耗性能：

- 在开发中，其实我们可以通过 display 的属性来控制它的显示和隐藏；
- 在控制方式在 vue 中有一个专门的指令：v-show；
- React 没有指令，但是 React 会更加灵活（灵活带来的代价就是需要自己去实现）；

我来看一下如何实现：

```jsx
  render() {
    const { isLogin, username } = this.state;
    const nameDisplay = isLogin ? "block": "none";

    return (
      <div>
        <h2 style={{display: nameDisplay}}>{username}</h2>
        <button onClick={e => this.loginBtnClick()}>{isLogin ? "退出": "登录"}</button>
      </div>
    )
  }
```

## 二. jsx 列表渲染

### 2.1. 列表渲染

真实开发中我们会从服务器请求到大量的数据，数据会以列表的形式存储：

- 比如歌曲、歌手、排行榜列表的数据；
- 比如商品、购物车、评论列表的数据；
- 比如好友消息、动态、联系人列表的数据；

在 React 中并没有像 Vue 模块语法中的 v-for 指令，而且需要我们通过 JavaScript 代码的方式组织数据，转成 JSX：

- 很多从 Vue 转型到 React 的同学非常不习惯，认为 Vue 的方式更加的简洁明了；
- 但是 React 中的 JSX 正是因为和 JavaScript 无缝的衔接，让它可以更加的灵活；
- 另外我经常会提到 React 是真正可以提高我们编写代码能力的一种方式；

如何展示列表呢？

- 在 React 中，展示列表最多的方式就是使用数组的 map 高阶函数；

数组的 map 函数语法如下：

- callback：生成新数组元素的函数，使用三个参数：

- - `currentValue`

    `callback` 数组中正在处理的当前元素。

  - `index`可选

    `callback` 数组中正在处理的当前元素的索引。

  - `array`可选

    `map` 方法调用的数组。

- `thisArg`可选：执行 `callback` 函数时值被用作`this`。

```js
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array
}[, thisArg])
```

我们来演练一下之前的案例：

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        "盗梦空间",
        "大话西游",
        "流浪地球",
        "少年派",
        "食神",
        "美人鱼",
        "海王",
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>电影列表</h2>
        <ul>
          {this.state.movies.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
```

### 2.2. 数组处理

很多时候我们在展示一个数组中的数据之前，需要先对它进行一些处理：

- 比如过滤掉一些内容：filter 函数
- 比如截取数组中的一部分内容：slice 函数

比如我当前有一个数组中存放了一系列的数字：[10, 30, 120, 453, 55, 78, 111, 222]

案例需求：获取所有大于 50 的数字，并且展示前 3 个数组

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [10, 30, 120, 453, 55, 78, 111, 222],
    };
  }

  render() {
    return (
      <div>
        <h2>数字列表</h2>
        <ul>
          {this.state.numbers
            .filter((item) => item >= 50)
            .slice(0, 3)
            .map((item) => {
              return <li>{item}</li>;
            })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
```

### 2.3. 列表的 key

我们会发现在前面的代码中只要展示列表都会报一个警告：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuucCPnW0chLZrf2O6SIP4UoOVBjPwM0eKrv8OLKGf9uY7iaeWialU39tNcMYSh37SsJEpCeicDWTQAqA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)列表展示警告

这个警告是告诉我们需要在列表展示的 jsx 中添加一个 key。

至于如何添加一个 key，为什么要添加一个 key，这个我们放到后面讲解 setState 时再来讨论；

## 三.JSX 原理解析

### 3.1. JSX 转换本质

实际上，jsx 仅仅只是 `React.createElement(component, props, ...children)` 函数的语法糖。

- 所有的 jsx 最终都会被转换成`React.createElement`的函数调用。

React.createElement 在源码的什么位置呢？

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuucCPnW0chLZrf2O6SIP4Uoibcs6eGhUg6icsoeibzHNb4OXIHYj5icTvyDdPFrzTB62EQ7JgMiblXFG3Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)React.createElement 源码

createElement 需要传递三个参数：

- 参数一：type

- - 当前 ReactElement 的类型；
  - 如果是标签元素，那么就使用字符串表示 “div”；
  - 如果是组件元素，那么就直接使用组件的名称；

- 参数二：config

- - 所有 jsx 中的属性都在 config 中以对象的属性和值的形式存储

- 参数三：children

- - 存放在标签中的内容，以 children 数组的方式进行存储；
  - 当然，如果是多个元素呢？React 内部有对它们进行处理，处理的源码在下方

对 children 进行的处理：

- 从第二个参数开始，将其他所有的参数，放到 props 对象的 children 中

```jsx
const childrenLength = arguments.length - 2;
if (childrenLength === 1) {
  props.children = children;
} else if (childrenLength > 1) {
  const childArray = Array(childrenLength);
  for (let i = 0; i < childrenLength; i++) {
    childArray[i] = arguments[i + 2];
  }
  if (__DEV__) {
    if (Object.freeze) {
      Object.freeze(childArray);
    }
  }
  props.children = childArray;
}
```

真实的转换过程到底长什么样子呢？我们可以从多个角度来查看。

#### 3.1.1. Babel 官网查看

我们知道默认 jsx 是通过 babel 帮我们进行语法转换的，所以我们之前写的 jsx 代码都需要依赖 babel。

- 可以在 babel 的官网中快速查看转换的过程：https://babeljs.io/repl/#?presets=react

在这里我们编写一些 jsx 代码，来查看运行后的结果：

```jsx
<div className="app">
  <div className="header">
    <h1 title="标题">我是网站标题</h1>
  </div>
  <div className="content">
    <h2>我是h2元素</h2>
    <button onClick={(e) => console.log("+1")}>+1</button>
    <button onClick={(e) => console.log("+1")}>-1</button>
  </div>
  <div className="footer">
    <p>我是网站的尾部</p>
  </div>
</div>
```

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuucCPnW0chLZrf2O6SIP4UoPiaJS2Ko5hqlq1EMqPOYWPXIibq2C8mZibKKvxRo6IZDx95a8Tsm9q1Gw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)babel 转换

#### 3.1.2. 编写 createElement

还有一种办法是我们自己来编写 React.createElement 代码：

```jsx
class App extends React.Component {
  constructor(props) {
  render() {
    /*#__PURE__*/
    const result = React.createElement("div", {
      className: "app"
    }, /*#__PURE__*/React.createElement("div", {
      className: "header"
    }, /*#__PURE__*/React.createElement("h1", {
      title: "\u6807\u9898"
    }, "\u6211\u662F\u7F51\u7AD9\u6807\u9898")), /*#__PURE__*/React.createElement("div", {
      className: "content"
    }, /*#__PURE__*/React.createElement("h2", null, "\u6211\u662Fh2\u5143\u7D20"), /*#__PURE__*/React.createElement("button", {
      onClick: e => console.log("+1")
    }, "+1"), /*#__PURE__*/React.createElement("button", {
      onClick: e => console.log("+1")
    }, "-1")), /*#__PURE__*/React.createElement("div", {
      className: "footer"
    }, /*#__PURE__*/React.createElement("p", null, "\u6211\u662F\u7F51\u7AD9\u7684\u5C3E\u90E8")));
    return result;
  }
}

ReactDOM.render(React.createElement(App, null) , document.getElementById("app"));
```

上面的整个代码，我们就没有通过 jsx 来书写了，界面依然是可以正常的渲染。

另外，在这样的情况下，你还需要 babel 相关的内容吗？不需要了

- 所以，`type="text/babel"`可以被我们删除掉了；
- 所以，`<script src="../react/babel.min.js"></script>`可以被我们删除掉了；

### 3.2. 虚拟 DOM

#### 3.2.1. 虚拟 DOM 的创建过程

我们通过 `React.createElement` 最终创建出来一个 ReactElement 对象：

```js
return ReactElement(
  type,
  key,
  ref,
  self,
  source,
  ReactCurrentOwner.current,
  props
);
```

这个 ReactElement 对象是什么作用呢？React 为什么要创建它呢？

- 原因是 React 利用 ReactElement 对象组成了一个 JavaScript 的对象树；
- JavaScript 的对象树就是大名鼎鼎的虚拟 DOM（Virtual DOM）；

如何查看 ReactElement 的树结构呢？

- 我们可以将之前的 jsx 返回结果进行打印；
- 注意下面代码中我打 jsx 的打印；

```jsx
render() {
  const jsx = (
    <div className="app">
      <div className="header">
        <h1 title="标题">我是网站标题</h1>
      </div>
      <div className="content">
        <h2>我是h2元素</h2>
        <button onClick={e => console.log("+1")}>+1</button>
        <button onClick={e => console.log("+1")}>-1</button>
      </div>
      <div className="footer">
        <p>我是网站的尾部</p>
      </div>
    </div>
  )
  console.log(jsx);
  return jsx;
}
```

打印结果，在浏览器中查看：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuucCPnW0chLZrf2O6SIP4UoZxehW42hHmd8LiahFelezZEIQ4k2HAicY3icIDTsV3WwHic2EAict4ibJcBQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)ReactElement 对象结构

而 ReactElement 最终形成的树结构就是 Virtual DOM；

整体的转换过程如下：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuucCPnW0chLZrf2O6SIP4UoqHIh9cOibrhx0SWzVl28T4W4ib9VepmrN5WqqLfGeicu3BLqSQ7vBHB8A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)jsx 转换流程

#### 3.2.2. 为什么采用虚拟 DOM

为什么要采用虚拟 DOM，而不是直接修改真实的 DOM 呢？

- 很难跟踪状态发生的改变：原有的开发模式，我们很难跟踪到状态发生的改变，不方便针对我们应用程序进行调试；
- 操作真实 DOM 性能较低：传统的开发模式会进行频繁的 DOM 操作，而这一的做法性能非常的低；

**DOM 操作性能非常低：**

首先，document.createElement 本身创建出来的就是一个非常复杂的对象；

- https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement

其次，DOM 操作会引起浏览器的回流和重绘，所以在开发中应该避免频繁的 DOM 操作；

**这里我们举一个例子：**

比如我们有一组数组需要渲染：[0, 1, 2, 3, 4]，我们会怎么做呢？

```html
<ul>
  <li>0</li>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
```

后来，我们又增加了 5 条数据：[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

```js
for (var i = 5; i < 10; i++) {
  var li = document.createElement("li");
  li.innerHTML = arr[i];
  ul.appendChild(li);
}
```

上面这段代码的性能怎么样呢？非常低效

- 因为我们通过 `document.createElement` 创建元素，再通过 `ul.appendChild(li)` 渲染到 DOM 上，进行了多次 DOM 操作；
- 对于批量操作的，最好的办法不是一次次修改 DOM，而是对批量的操作进行合并；（比如可以通过 DocumentFragment 进行合并）；

**虚拟 DOM 帮助我们从命令式编程转到了声明式编程的模式**

React 官方的说法：Virtual DOM 是一种编程理念。

在这个理念中，UI 以一种理想化或者说虚拟化的方式保存在内存中，并且它是一个相对简单的 JavaScript 对象，我们可以通过 ReactDOM.render 让 `虚拟DOM` 和 `真实DOM`同步起来，这个过程中叫做协调（Reconciliation）；

这种编程的方式赋予了 React 声明式的 API：你只需要告诉 React 希望让 UI 是什么状态，React 来确保 DOM 和这些状态是匹配的。

你不需要直接进行 DOM 操作，只可以从手动更改 DOM、属性操作、事件处理中解放出来；

**关于虚拟 DOM 的一些其他内容，在后续的学习中还会再次讲到；**

# 阶段案例练习

## 一. 书籍购物车说明

### 1.1. 案例介绍

现在我们来做一个相对综合一点的练习：书籍购物车；

案例效果如下：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXut490MwgO1rHibr3icOwGe6OYfnR0oRicCbKn3v8o4c0aIiaic0Hp7WcBwrC9ibYic94k2RqrfYa6iaT29wmA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)案例效果

案例说明：

- 1.在界面上以表格的形式，显示一些书籍的数据；
- 2.在底部显示书籍的总价格；
- 3.点击+或者-可以增加或减少书籍数量（如果为 1，那么不能继续-）；
- 4.点击移除按钮，可以将书籍移除（当所有的书籍移除完毕时，显示：购物车为空~）；

### 1.2. 项目的搭建

这里，我们使用 React 将默认的数据先展示出来：

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <style>
    table {
      border: 1px solid #e9e9e9;
      border-collapse: collapse;
    }

    td, th {
      border: 1px solid #e9e9e9;
      padding: 8px 16px;
    }

    th {
      background-color: #f7f7f7;
      color: #5c6b77;
    }

    .counter {
      margin: 0 5px;
    }
  </style>
</head>
<body>

  <div id="app"></div>

  <script src="../react/react.development.js"></script>
  <script src="../react/react-dom.development.js"></script>
  <script src="../react/babel.min.js"></script>

  <script type="text/babel">
    class App extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          books: [
            {
              id: 1,
              name: '《算法导论》',
              date: '2006-9',
              price: 85.00,
              count: 1
            },
            {
              id: 2,
              name: '《UNIX编程艺术》',
              date: '2006-2',
              price: 59.00,
              count: 1
            },
            {
              id: 3,
              name: '《编程珠玑》',
              date: '2008-10',
              price: 39.00,
              count: 1
            },
            {
              id: 4,
              name: '《代码大全》',
              date: '2006-3',
              price: 128.00,
              count: 1
            },
          ]
        }
      }

      render() {
        const { books } = this.state;

        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>书籍名称</th>
                  <th>出版日期</th>
                  <th>价格</th>
                  <th>购买数量</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {
                  books.map((item, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                        <td>{"¥" + item.price}</td>
                        <td>
                          <button>-</button>
                          <span className="counter">{item.count}</span>
                          <button>+</button>
                        </td>
                        <td><button>移除</button></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        )
      }
    }

    ReactDOM.render(<App/>, document.getElementById("app"));
  </script>

</body>
</html>
```

## 二. 书籍购物车功能

### 1.1. 价格的显示

我们可以封装一个工具函数，用于格式化价格：

```js
function formatPrice(price) {
  if (typeof price !== "number") {
    price = Number(price) || 0;
  }
  return "¥" + price.toFixed(2);
}
```

对之前显示的价格进行格式化：

```html
<td>{formatPrice(item.price)}</td>
```

封装一个 App 中的方法，用于获取商品总价格显示的内容：

```js
getTotalPrice() {
  let totalPrice = 0;
  for (let book of this.state.books) {
    totalPrice += book.count * book.price
  }
  return "总价格：" + formatPrice(totalPrice);
}
```

使用一个 h2 元素显示总价格：

```html
<h2>{this.getTotalPrice()}</h2>
```

### 1.2. 数量的变化

封装一个方法，用于改变书籍的数量：

- 注意：在 React 中，要保证数据的不可变性；
- 所以，我们是先复制一份 books，对其进行修改，再通过 setState 更新到最新的状态；

```jsx
changeItem(index, counter) {
  const books = [...this.state.books];
  this.setState({
    books: books.map((item, indey) => {
      if (indey == index) {
        item.count += counter;
      }
      return item;
    })
  })
}
```

修改 jsx 对应位置的代码：

```html
<td>
  <button disabled={item.count <= 1} onClick={e => this.changeItem(index, -1)}>-</button>
  <span className="counter">{item.count}</span>
  <button onClick={e => this.changeItem(index, 1)}>+</button>
</td>
```

### 1.3. 移除的操作

封装一个方法，用于移除对应的书籍：

```jsx
removeItem(index) {
  const books = [...this.state.books];
  this.setState({
    books: books.filter((item, indey) => index !== indey)
  })
}
```

修改对应的移除 jsx 代码：

```jsx
<td>
  <button onClick={(e) => this.removeItem(index)}>移除</button>
</td>
```

如果所有的书籍移除完毕，那么要显示购物车为空：

- 封装两个方法，一个用于获取显示购物车的 jsx 代码（后期会封装成一个组件），一个用于获取显示购物车为空的 jsx 代码（后期也可以封装为一个组件）

```jsx
renderBooks() {
  const { books } = this.state;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>书籍名称</th>
            <th>出版日期</th>
            <th>价格</th>
            <th>购买数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{formatPrice(item.price)}</td>
                  <td>
                    <button>-</button>
                    <span className="counter">{item.count}</span>
                    <button>+</button>
                  </td>
                  <td><button onClick={e => this.removeItem(index)}>移除</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <h2>
        {this.getTotalPrice()}
      </h2>
    </div>
  )
}

renderEmpty() {
  return <h2>购物车为空~</h2>
}
```

重新编写 render 方法代码：

```jsx
render() {
  const { books } = this.state;
  return books.length ? this.renderBooks() : this.renderEmpty();
}
```

# React 脚手架

## 一. 认识脚手架

### 1.1. 前端工程的复杂化

如果我们只是开发几个小的 demo 程序，那么永远不需要考虑一些复杂的问题：

- 比如目录结构如何组织划分；
- 比如如何管理文件之间的相互依赖；
- 比如如何管理第三方模块的依赖；
- 比如项目发布前如何压缩、打包项目；
- 等等...

现代的前端项目已经越来越复杂了：

- 不会再是在 HTML 中引入几个 css 文件，引入几个编写的 js 文件或者第三方的 js 文件这么简单；
- 比如 css 可能是使用 less、sass 等预处理器进行编写，我们需要将它们转成普通的 css 才能被浏览器解析；
- 比如 JavaScript 代码不再只是编写在几个文件中，而是通过模块化的方式，被组成在**成百上千**个文件中，我们需要通过模块化的技术来管理它们之间的相互依赖；
- 比如项目需要依赖很多的第三方库，如何更好的管理它们（比如管理它们的依赖、版本升级等）；

为了解决上面这些问题，我们需要再去学习一些工具：

- 比如 babel、webpack、gulp。配置它们转换规则、打包依赖、热更新等等一些的内容；
- 你会发现，你还没有开始做项目，你就面临一系列的工程化问题；

**脚手架的出现，就是帮助我们解决这一系列问题的；**

### 1.2. 脚手架是什么呢？

传统的脚手架指的是建筑学的一种结构：在搭建楼房、建筑物时，临时搭建出来的一个框架；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvHM8XhtYMaP62K8RWiaG6AIKKF8BcKMQKqlgJ8QYQIzJzv1I0HD5mTMpmqWwwFndllubBXJdviceHw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)脚手架

编程中提到的脚手架（Scaffold），其实是一种工具，帮我们可以快速生成项目的工程化结构；

- 每个项目作出完成的效果不同，但是它们的基本工程化结构是相似的；
- 既然相似，就没有必要每次都从零开始搭建，完全可以使用一些工具，帮助我们生产基本的工程化模板；
- 不同的项目，在这个模板的基础之上进行项目开发或者进行一些配置的简单修改即可；
- 这样也可以间接保证项目的基本机构一致性，方便后期的维护；

总结：**脚手架让项目从搭建到开发，再到部署，整个流程变得快速和便捷；**

对于现在比较流行的三大框架都有属于自己的脚手架：

- Vue 的脚手架：vue-cli
- Angular 的脚手架：angular-cli
- React 的脚手架：create-react-app

它们的作用都是帮助我们生成一个通用的目录结构，并且已经将我们所需的工程环境配置好。

使用这些脚手架需要依赖什么呢？

- 目前这些脚手架都是使用 node 编写的，并且都是基于 webpack 的；
- 所以我们必须在自己的电脑上安装 node 环境；

这里我们主要是学习 React，所以我们还是以 React 的脚手架工具：create-react-app 作为讲解；

## 二. create-react-app

### 2.1. 安装相关的依赖

#### 2.1.1. 安装 node

React 脚手架本身需要依赖 node，所以我们需要安装 node 环境：

- 无论是 windows 还是 Mac OS，都可以通过 node 官网直接下载；
- 官网地址：https://nodejs.org/en/download/
- 注意：这里推荐大家下载 LTS（_Long-term support_ ）版本，是长期支持版本，会比较稳定；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvHM8XhtYMaP62K8RWiaG6AIxhxhmTr1lUBWlfLq0mfEicAC66scdGHkGapAapQenHv2zicicxPA0YfCw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)nodejs 下载

下载后，双击安装即可：

- 1.安装过程中，会自动配置环境变量；
- 2.安装时，会同时帮助我们安装 npm 管理工具；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvHM8XhtYMaP62K8RWiaG6AIYm442XUFCicQGd2mcKIUgz47kXicERSqX1jKySsmUx8BHicbOKQFl1ia4A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)检测安装的版本

#### 2.1.2. 包管理工具

**什么是 npm？**

- 全称 Node Package Manager，即“node 包管理器”；
- 作用肯定是帮助我们管理一下依赖的工具包（比如 react、react-dom、axios、babel、webpack 等等）；
- 作者开发的目的就是为了解决“模块管理很糟糕”的问题；

**另外，还有一个大名鼎鼎的 node 包管理工具 yarn：**

- Yarn 是由 Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具；
- Yarn 是为了弥补 npm 的一些缺陷而出现的；
- 早期的 npm 存在很多的缺陷，比如安装依赖速度很慢、版本依赖混乱等等一系列的问题；
- 虽然从 npm5 版本开始，进行了很多的升级和改进，但是依然很多人喜欢使用 yarn；
- React 脚手架默认也是使用 yarn；

安装 yarn：

```
npm install -g yarn
```

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvHM8XhtYMaP62K8RWiaG6AI0SlVWoROIkVHwcyyEWz5FxAjaympAUbV8qCw4ou7ElqKXG3fEm5SVA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)检测 yarn 安装的版本

**yarn 和 npm 的命令对比**

| Npm                                     | Yarn                          |
| :-------------------------------------- | :---------------------------- |
| npm install                             | yarn install                  |
| npm install [package]                   | yarn add [package]            |
| npm install --save [package]            | yarn add [package]            |
| npm install --save-dev [package]        | yarn add [package] [--dev/-D] |
| npm rebuild                             | yarn install --force          |
| npm uninstall [package]                 | yarn remove [package]         |
| npm uninstall --save [package]          | yarn remove [package]         |
| npm uninstall --save-dev [package]      | yarn remove [package]         |
| npm uninstall --save-optional [package] | yarn remove [package]         |
| npm cache clean                         | yarn cache clean              |
| rm -rf node_modules && npm install      | yarn upgrade                  |

**cnpm 的使用**

在国内，某些情况使用 npm 和 yarn 可能无法正常安装一个库，这个时候我们可以选择使用 cnpm

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

#### 2.1.3. 安装脚手架

最后一个需要安装的是创建 React 项目的脚手架：

```
npm install -g create-react-app
```

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvHM8XhtYMaP62K8RWiaG6AIEkFibdMZu6NVyckHsKMgdwcVreFqm6VDfic3LrzicDzzDicKqicdd5wqE6w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)检查 React 脚手架

### 2.2. 创建 React 项目

#### 2.2.1. 创建 React 项目

现在，我们就可以通过脚手架来创建 React 项目了。

创建 React 项目的命令如下：

- 注意：项目名称不能包含大写字母

```
create-react-app 项目名称
```

另外还有更多创建项目的方式，可以参考 GitHub 的 readme

- https://github.com/facebook/create-react-app；
- 上面的创建方式，默认使用的 yarn 来管理整个项目包相关的依赖的；
- 如果希望使用 npm，也可以在参数后面加上 --use-npm；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvHM8XhtYMaP62K8RWiaG6AIiayTTPtCWuXfHeJzucTcS1JF73uVlLvEicJ6SbsRCic6e7r2UNZVuRN9w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)image-20200615115822464

创建完成后，进入对应的目录，就可以将项目跑起来：

```
cd 01-test-react
yarn start
```

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvHM8XhtYMaP62K8RWiaG6AIOIsSFCX1YWicJNtIlPpuAmPk5pOb8Fo5B63CXkWoUpUDtzOCYadLjiaQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)项目效果

#### 2.2.2. 目录结构分析

我们可以通过 VSCode 打开项目：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvHM8XhtYMaP62K8RWiaG6AIEibOoQZ2ohBfD4snZFsicRdCgDOkLG9JpJ592xnCknaTxIdbE0ajNy7g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)项目目录结构

目录结构分析：

```
test-react
├─ README.md // readme说明文档
├─ package.json // 对整个应用程序的描述：包括应用名称、版本号、一些依赖包、以及项目的启动、打包等等（node管理项目必备文件）
├─ public
│    ├─ favicon.ico // 应用程序顶部的icon图标
│    ├─ index.html // 应用的index.html入口文件
│    ├─ logo192.png // 被在manifest.json中使用
│    ├─ logo512.png // 被在manifest.json中使用
│    ├─ manifest.json // 和Web app配置相关
│    └─ robots.txt // 指定搜索引擎可以或者无法爬取哪些文件
├─ src
│    ├─ App.css // App组件相关的样式
│    ├─ App.js // App组件的代码文件
│    ├─ App.test.js // App组件的测试代码文件
│    ├─ index.css // 全局的样式文件
│    ├─ index.js // 整个应用程序的入口文件
│    ├─ logo.svg // 刚才启动项目，所看到的React图标
│    ├─ serviceWorker.js // 默认帮助我们写好的注册PWA相关的代码
│    └─ setupTests.js // 测试初始化文件
└─ yarn.lock
```

整个目录结构都非常好理解，只是有一个 PWA 相关的概念：

- PWA 全称 Progressive Web App，即渐进式 WEB 应用；
- 一个 PWA 应用首先是一个网页, 可以通过 Web 技术编写出一个网页应用. 随后添加上 App Manifest 和 Service Worker 来实现 PWA 的安装和离线等功能；
- 这种 Web 存在的形式，我们也称之为是 Web App；

PWA 解决了哪些问题呢？

- 可以添加至主屏幕，点击主屏幕图标可以实现启动动画以及隐藏地址栏；
- 实现离线缓存功能，即使用户手机没有网络，依然可以使用一些离线功能；
- 实现了消息推送；
- 等等一系列类似于 Native App 相关的功能；

更多 PWA 相关的知识，可以自行去学习更多；

#### 2.2.3. webpack 配置

我们说过 React 的脚手架是基于 Webpack 来配置的：

- _webpack_ 是一个现代 JavaScript 应用程序的*静态模块打包器(module bundler)*；
- 当 webpack 处理应用程序时，它会递归地构建一个*依赖关系图(dependency graph)*，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 _bundle_；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvHM8XhtYMaP62K8RWiaG6AInmKwldCjq7GHtMq4aS8r8icfSuOKibfYMjDnP8icqPYDFoQheBdQYYnMw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)webpack

在这里我们暂时不展开来讲 webpack，因为里面的内容是非常多的（后续会有专门讲 webpack 的专题）；

但是，很奇怪：我们并没有在目录结构中看到任何 webpack 相关的内容？

- 原因是 React 脚手架讲 webpack 相关的配置隐藏起来了（其实从 Vue CLI3 开始，也是进行了隐藏）；

如果我们希望看到 webpack 的配置信息，应该怎么来做呢？

- 我们可以执行一个 package.json 文件中的一个脚本：`"eject": "react-scripts eject"`
- 这个操作是不可逆的，所以在执行过程中会给与我们提示；

```
yarn eject
```

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvHM8XhtYMaP62K8RWiaG6AI0JM1trSibvD4tv98wmSStaic3346WCrQHy4sicAeMnrxgPeWIeW59b0gQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)执行脚本

查看和学习 webpack 相关的配置信息：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvHM8XhtYMaP62K8RWiaG6AIJC1r8RxS7oRtqlXjA126fZZFIMibJZ1SFic28BicicISicUoAKwqv8nYcUA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)webpack 相关配置

### 2.3. 从零编写项目

#### 2.3.1. 文件的删减

通过脚手架创建完项目，很多同学还是会感觉目录结构过于复杂，所以我打算从零带着大家来编写代码。

我们先将不需要的文件统统删掉：

- 1.将 src 下的所有文件都删除
- 2.将 public 文件下出列 favicon.ico 和 index.html 之外的文件都删除掉

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvHM8XhtYMaP62K8RWiaG6AItRDKhOtAP1H2XEm6k2ylH09kj1lM25ohMjbo7CicYqUGwK4cD62SYmQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)删除后的目录结构

修改 index.html 文件：

- 我们需要删除选中的内容；
- 这两行内容是我们之前引入的一个图标和 manifest 文件

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvHM8XhtYMaP62K8RWiaG6AICm05TjbPd7hzM5Vg9vlk0hQP7VbN6HmSvvQFWWhQ7QyuKKTwpbHuicA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)删除选中的两行内容

#### 2.3.2. 开始编写代码

在 src 目录下，创建一个 index.js 文件，因为这是 webpack 打包的入口。

在 index.js 中开始编写 React 代码：

- 我们会发现和写的代码是逻辑是一致的；
- 只是在模块化开发中，我们需要手动的来导入 React、ReactDOM，因为它们都是在我们安装的模块中；

```jsx
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h2>Hello React</h2>, document.getElementById("root"));
```

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvHM8XhtYMaP62K8RWiaG6AI0hrxfPsyIMnC4KpVLN2J9qxhjHEib7ibj4xRluibYaZI9j5aE9IbXicLibA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)展示效果

如果我们不希望直接在 `ReactDOM.render` 中编写过多的代码，就可以单独抽取一个组件 App.js：

```jsx
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return <h2>Hello App</h2>;
  }
}
```

在 index.js 中引入 App，并且使用它：

```jsx
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvHM8XhtYMaP62K8RWiaG6AIXEgXxvggGsWRTo6zGaXXOQCf4BRFmT1D59JD3EcBBTzKoJqDMxencw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)展示效果

# 组件化开发(一)

> 现在可以说整个的大前端开发都是组件化的天下，无论从三大框架（Vue、React、Angular），还是跨平台方案的 Flutter，甚至是移动端都在转向组件化开发。
>
> 所以，学习组件化最重要的是它的思想，每个框架或者平台可能实现方法不同，但是思想都是一样的。

## 一. 认识组件化开发

### 1.1. 什么是组件化？

人面对复杂问题的处理方式：

- 任何一个人处理信息的逻辑能力都是有限的
- 所以，当面对一个非常复杂的问题时，我们不太可能一次性搞定一大堆的内容。
- 但是，我们人有一种天生的能力，就是将问题进行拆解。
- 如果将一个复杂的问题，拆分成很多个可以处理的小问题，再将其放在整体当中，你会发现大的问题也会迎刃而解。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuuicicEwkkD7zFNvR1BYib9OYbF2Wt0ASLxlEyqHAxZTv4zYiaBhVoVuyXib3NDfBgqut0leia6eJaNiaW2Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)image-20200617095345471

组件化也是类似的思想：

- 如果我们将一个页面中所有的处理逻辑全部放在一起，处理起来就会变得非常复杂，而且不利于后续的管理以及扩展。
- 但如果，我们讲一个页面拆分成一个个小的功能块，每个功能块完成属于自己这部分独立的功能，那么之后整个页面的管理和维护就变得非常容易了。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuuicicEwkkD7zFNvR1BYib9OYb8XuXdpX7EpdTx0jfqBzEKQ1xgw3jTEvE5PBUrrKGibejy8pX1VLBZeg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)组件化的拆分

我们需要通过组件化的思想来思考整个应用程序：

- 我们将一个完整的页面分成很多个组件；
- 每个组件都用于实现页面的一个功能块；
- 而每一个组件又可以进行细分；
- 而组件本身又可以在多个地方进行复用；

### 1.2. React 的组件化

组件化是 React 的核心思想，也是我们后续课程的重点，前面我们封装的 App 本身就是一个组件：

- 组件化提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构造我们的应用。
- 任何的应用都会被抽象成一颗组件树。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuuicicEwkkD7zFNvR1BYib9OYbia1dkicyWUajP6OSvYEvghiaCD8Vy1ibkZG2dWmF6oJKkUp6dX8kRXw8hw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)组件化开发

组件化思想的应用：

- 有了组件化的思想，我们在之后的开发中就要充分的利用它。
- 尽可能的将页面拆分成一个个小的、可复用的组件。
- 这样让我们的代码更加方便组织和管理，并且扩展性也更强。

React 的组件相对于 Vue 更加的灵活和多样，按照不同的方式可以分成很多类组件：

- 根据组件的定义方式，可以分为：函数组件(Functional Component )和类组件(Class Component)；
- 根据组件内部是否有状态需要维护，可以分成：无状态组件(Stateless Component )和有状态组件(Stateful Component)；
- 根据组件的不同职责，可以分成：展示型组件(Presentational Component)和容器型组件(Container Component)；

这些概念有很多重叠，但是他们最主要是关注数据逻辑和 UI 展示的分离：

- 函数组件、无状态组件、展示型组件主要关注 UI 的展示；
- 类组件、有状态组件、容器型组件主要关注数据逻辑；

当然还有很多组件的其他概念：比如异步组件、高阶组件等，我们后续再学习。

## 二. 创建 React 组件

### 2.1. 创建类组件

类组件的定义有如下要求：

- 类组件需要继承自 `React.Component`
- 类组件必须实现`render`函数

在 ES6 之前，可以通过`create-react-class` 模块来定义类组件，但是目前官网建议我们使用 ES6 的 class 类定义。

使用 class 定义一个组件：

- constructor 是可选的，我们通常在 constructor 中初始化一些数据；
- this.state 中维护的就是我们组件内部的数据；
- `render()` 方法是 class 组件中唯一必须实现的方法；

```jsx
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return <h2>Hello App</h2>;
  }
}
```

当 `render` 被调用时，它会检查 `this.props` 和 `this.state` 的变化并返回以下类型之一：

- **React 元素**：

- - 通常通过 JSX 创建。
  - 例如，`<div />` 会被 React 渲染为 DOM 节点，`<MyComponent />` 会被 React 渲染为自定义组件；
  - 无论是 `<div />` 还是 `<MyComponent />` 均为 React 元素。

- **数组或 fragments**：使得 render 方法可以返回多个元素。

- **Portals**：可以渲染子节点到不同的 DOM 子树中。

- **字符串或数值类型**：它们在 DOM 中会被渲染为文本节点

- **布尔类型或 `null`**：什么都不渲染。

另外类组件有自己的生命周期，我们会在后面的章节中详细介绍。

### 2.2. 创建函数组件

函数组件是使用 function 来进行定义的函数，只是这个函数会返回和类组件中 render 函数返回一样的内容。

函数组件有自己的特点（当然，后面我们会讲 hooks，就不一样了）：

- 没有生命周期，也会被更新并挂载，但是没有生命周期函数；
- 没有 this(组件实例）；
- 没有内部状态（state）；

我们来定义一个函数组件：

```js
export default function App() {
  return <div>Hello World</div>;
}
```

## 三. 组件的生命周期

### 3.1. 认识生命周期

很多的事物都有从创建到销毁的整个过程，这个过程称之为是**生命周期**；

React 组件也有自己的生命周期，了解组件的生命周期可以让我们在最合适的地方完成自己想要的功能；

生命周期和生命周期函数的关系：

- 生命周期是一个抽象的概念，在生命周期的整个过程，分成了很多个阶段；

- - 比如装载阶段（Mount），组件第一次在 DOM 树中被渲染的过程；
  - 比如更新过程（Update），组件状态发生变化，重新更新渲染的过程；
  - 比如卸载过程（Unmount），组件从 DOM 树中被移除的过程；

- React 内部为了告诉我们当前处于哪些阶段，会对我们组件内部实现的某些函数进行回调，这些函数就是生命周期函数：

- - 比如实现 componentDidMount 函数：组件已经挂载到 DOM 上时，就会回调；
  - 比如实现 componentDidUpdate 函数：组件已经发生了更新时，就会回调；
  - 比如实现 componentWillUnmount 函数：组件即将被移除时，就会回调；
  - 我们可以在这些回调函数中编写自己的逻辑代码，来完成自己的需求功能；

我们谈 React 生命周期时，主要谈的类的生命周期，因为函数式组件是没有生命周期函数的；（后面我们可以通过 hooks 来模拟一些生命周期的回调）

### 3.2. 生命周期解析

我们先来学习一下最基础、最常用的生命周期函数：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuuicicEwkkD7zFNvR1BYib9OYbBk5vFia0sk82d1dJ77ys49egPl7KNoMZXyW8z3EOEshOHz07AAZT2wg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)React 基本生命周期

上图第一个区域解析：

- 当我们挂载一个组件时，会先执行 constructor 构造方法来创建组件；
- 紧接着调用 render 函数，获取要渲染的 DOM 结构（jsx），并且开始渲染 DOM；
- 当组件挂载成功（DOM 渲染完成），会执行 componentDidMount 生命周期函数；

上图第二个区域解析：

- 当我们通过修改 props，或者调用 setState 修改内部状态，或者直接调用 forceUpdate 时会重新调用 render 函数，进行更新操作；
- 当更新完成时，会回调 componentDidUpdate 生命周期函数；

上图第三个区域解析：

- 当我们的组件不再使用，会被从 DOM 中移除掉（卸载）；
- 这个时候会回调 componentWillUnmount 生命周期函数；

### 3.3. 生命周期函数

**constructor**

```js
constructor(props);
```

如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。

constructor 中通常只做两件事情：

- 通过给 `this.state` 赋值对象来初始化内部的 state；
- 为事件绑定实例（this）；

**componentDidMount**

```js
componentDidMount();
```

`componentDidMount()` 会在组件挂载后（插入 DOM 树中）立即调用。

componentDidMount 中通常进行哪里操作呢？

- 依赖于 DOM 的操作可以在这里进行；
- 在此处发送网络请求就最好的地方；（官方建议）
- 可以在此处添加一些订阅（会在 componentWillUnmount 取消订阅）；

**componentDidUpdate**

```js
componentDidUpdate(prevProps, prevState, snapshot);
```

`componentDidUpdate()` 会在更新后会被立即调用，首次渲染不会执行此方法。

- 当组件更新后，可以在此处对 DOM 进行操作；
- 如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求；（例如，当 props 未发生变化时，则不会执行网络请求）。

```jsx
componentDidUpdate(prevProps) {
  // 典型用法（不要忘记比较 props）：
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

**componentWillUnmount**

```jsx
componentWillUnmount();
```

`componentWillUnmount()` 会在组件卸载及销毁之前直接调用。

- 在此方法中执行必要的清理操作；
- 例如，清除 timer，取消网络请求或清除在 `componentDidMount()` 中创建的订阅等；

**代码验证所有的生命周期函数：**

```jsx
import React, { Component } from "react";

class HYTestCpn extends Component {
  render() {
    return <h2>HYTestCpn</h2>;
  }

  componentWillUnmount() {
    console.log("HYTestCpn componentWillUnmount");
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    console.log("调用constructor方法");
  }

  render() {
    console.log("调用render方法");
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        {this.state.counter <= 5 && <HYTestCpn />}
        <button onClick={(e) => this.increment()}>+1</button>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  componentDidMount() {
    console.log("调用componentDidMount方法");
  }

  componentDidUpdate() {
    console.log("调用componentDidUpdate方法");
  }

  componentWillUnmount() {
    console.log("调用componentWillUnmount方法");
  }
}
```

### 3.4. 不常用生命周期

除了上面介绍的生命周期函数之外，还有一些不常用的生命周期函数：

- getDerivedStateFromProps：state 的值在任何时候都依赖于 props 时使用；该方法返回一个对象来更新 state；
- getSnapshotBeforeUpdate：在 React 更新 DOM 之前回调的一个函数，可以获取 DOM 更新前的一些信息（比如说滚动位置）；
- shouldComponentUpdate：该生命周期函数很常用，但是我们等待讲性能优化时再来详细讲解；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuuicicEwkkD7zFNvR1BYib9OYbGWNw5Lj6QYkJL8LJbgYibp4TtEvQROlBnqV8ujd5L4y4DPn9ibicf8ueg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)完整的生命周期图

另外，React 中还提供了一些过期的生命周期函数，这些函数已经不推荐使用。

更详细的生命周期相关的内容，可以参考官网：https://zh-hans.reactjs.org/docs/react-component.html

# 父子组件通信

## 一. 认识组件的嵌套

组件之间存在嵌套关系：

- 在之前的案例中，我们只是创建了一个组件 App；
- 如果我们一个应用程序将所有的逻辑都放在一个组件中，那么这个组件就会变成非常的臃肿和难以维护；
- 所以组件化的核心思想应该是对组件进行拆分，拆分成一个个小的组件；
- 再将这些组件组合嵌套在一起，最终形成我们的应用程序；

我们来分析一下下面代码的嵌套逻辑：

```jsx
import React, { Component } from "react";

function Header() {
  return <h2>Header</h2>;
}

function Main() {
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  );
}

function Banner() {
  return <div>Banner</div>;
}

function ProductList() {
  return (
    <ul>
      <li>商品1</li>
      <li>商品2</li>
      <li>商品3</li>
      <li>商品4</li>
      <li>商品5</li>
    </ul>
  );
}

function Footer() {
  return <h2>Footer</h2>;
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
```

上面的嵌套逻辑如下，它们存在如下关系：

- App 组件是 Header、Main、Footer 组件的父组件；
- Main 组件是 Banner、ProductList 组件的父组件；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutc0GrRs2tiaXjDWh4wQ88C25wVRAUic6FGGUONx6FEJbWAY3NBSCvD5fmicFvFoJugPdlcE9xsBPC7g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)自定义组件的嵌套逻辑

在开发过程中，我们会经常遇到需要组件之间相互进行通信：

- 比如 App 可能使用了多个 Header，每个地方的 Header 展示的内容不同，那么我们就需要使用者传递给 Header 一些数据，让其进行展示；
- 又比如我们在 Main 中一次性请求了 Banner 数据和 ProductList 数据，那么就需要传递给他们来进行展示；
- 也可能是子组件中发生了事件，需要由父组件来完成某些操作，那就需要子组件向父组件传递事件；

总之，在一个 React 项目中，组件之间的通信是非常重要的环节；

父组件在展示子组件，可能会传递一些数据给子组件：

- 父组件通过 **属性=值** 的形式来传递给子组件数据；
- 子组件通过 **props** 参数获取父组件传递过来的数据；

## 二. 父组件传递子组件

### 2.1. 子组件是 class 组件

我们这里先演示子组件是 class 组件：

```jsx
import React, { Component } from "react";

// 1.类子组件
class ChildCpn1 extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const { name, age, height } = this.props;

    return (
      <div>
        <h2>我是class的组件</h2>
        <p>展示父组件传递过来的数据: {name + " " + age + " " + height}</p>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn1 name="why" age="18" height="1.88" />
      </div>
    );
  }
}
```

按照上面的结构，我们每一个子组件都需要写构造器来完成：`this.props = props;`

其实呢，大可不必，因为我们可以调用`super(props)`，我们来看一下 Component 的源码：

- 这里我们先不关心 context、updater；
- 我们发现传入的 props 会被 Component 设置到 this 中（父类的对象），那么子类就可以继承过来；
- 补充一个思考题：为什么子类可以继承过来呢？

```jsx
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}
```

所以我们的构造方法可以换成下面的写法：

```js
  constructor(props) {
    super(props);
  }
```

甚至我们可以省略，为什么可以省略呢？

如果不指定构造方法，则使用默认构造函数。对于基类，默认构造函数是

```js
constructor() {}
```

对于派生类，默认构造函数是：

```js
constructor(...args) {
  super(...args);
}
```

### 2.2. 子组件是 function 组件

我们再来演练一下，如果子组件是一个 function 组件：

```jsx
function ChildCpn2(props) {
  const { name, age, height } = props;

  return (
    <div>
      <h2>我是function的组件</h2>
      <p>展示父组件传递过来的数据: {name + " " + age + " " + height}</p>
    </div>
  );
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn1 name="why" age="18" height="1.88" />
        <ChildCpn2 name="kobe" age="30" height="1.98" />
      </div>
    );
  }
}
```

functional 组件相对来说比较简单，因为不需要有构造方法，也不需要有 this 的问题。

### 2.3. 参数验证 propTypes

对于传递给子组件的数据，有时候我们可能希望进行验证，特别是对于大型项目来说：

- 当然，如果你项目中默认继承了 Flow 或者 TypeScript，那么直接就可以进行类型验证；
- 但是，即使我们没有使用 Flow 或者 TypeScript，也可以通过 `prop-types` 库来进行参数验证；

从 React v15.5 开始，`React.PropTypes` 已移入另一个包中：`prop-types` 库

我们对之前的 class 组件进行验证：

```jsx
ChildCpn1.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  height: PropTypes.number,
};
```

这个时候，控制台就会报警告：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutc0GrRs2tiaXjDWh4wQ88C2bqkmrKnWg80PpSLFFUtFJhFkSylsXcibRlmgpn7aJvkkN7ONqsQrPHg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)类型验证警告

```html
<ChildCpn1 name="why" age="{18}" height="{1.88}" />
```

更多的验证方式，可以参考官网：https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html

- 比如验证数组，并且数组中包含哪些元素；
- 比如验证对象，并且对象中包含哪些 key 以及 value 是什么类型；
- 比如某个原生是必须的，使用 `requiredFunc: PropTypes.func.isRequired`

**如果没有传递，我们希望有默认值呢？**

- 我们使用`defaultProps`就可以了

```jsx
ChildCpn1.defaultProps = {
  name: "王小波",
  age: 40,
  height: 1.92,
};
```

## 三. 子组件传递父组件

某些情况，我们也需要子组件向父组件传递消息：

- 在 vue 中是通过自定义事件来完成的；
- 在 React 中同样是通过 props 传递消息，只是让`父组件`给`子组件`传递一个`回调函数`，在子组件中调用这个函数即可；

我们这里来完成一个案例：

- 将计数器案例进行拆解；
- 将按钮封装到子组件中：CounterButton；
- CounterButton 发生点击事件，将内容传递到父组件中，修改 counter 的值；

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)Counter 案例

案例代码如下：

```jsx
import React, { Component } from "react";

function CounterButton(props) {
  const { operator, btnClick } = props;
  return <button onClick={btnClick}>{operator}</button>;
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  changeCounter(count) {
    this.setState({
      counter: this.state.counter + count,
    });
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <CounterButton operator="+1" btnClick={(e) => this.changeCounter(1)} />
        <CounterButton operator="-1" btnClick={(e) => this.changeCounter(-1)} />
      </div>
    );
  }
}
```

## 四. 组件通信案例练习

我们来做一个相对综合的练习：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutc0GrRs2tiaXjDWh4wQ88C29FDibRZn5WpcOLK7y4V5K4F34JqLQz6lqyc3SBCiaAmVv84DpSpXic5PA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)TabControl 案例练习

index.js 代码：

```jsx
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

App.js

```jsx
import React, { Component } from "react";

import TabControl from "./TabControl";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.titles = ["流行", "新款", "精选"];

    this.state = {
      currentTitle: "流行",
    };
  }

  itemClick(index) {
    this.setState({
      currentTitle: this.titles[index],
    });
  }

  render() {
    return (
      <div>
        <TabControl
          titles={this.titles}
          itemClick={(index) => this.itemClick(index)}
        />
        <h2>{this.state.currentTitle}</h2>
      </div>
    );
  }
}
```

TabControl.js

```jsx
import React, { Component } from "react";

export default class TabControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }

  render() {
    const { titles } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="tab-control">
        {titles.map((item, index) => {
          return (
            <div className="tab-item" onClick={(e) => this.itemClick(index)}>
              <span
                className={"title " + (index === currentIndex ? "active" : "")}
              >
                {item}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  itemClick(index) {
    this.setState({
      currentIndex: index,
    });
    this.props.itemClick(index);
  }
}
```

style.css

```css
.tab-control {
  height: 40px;
  line-height: 40px;
  display: flex;
}

.tab-control .tab-item {
  flex: 1;
  text-align: center;
}

.tab-control .title {
  padding: 3px 5px;
}

.tab-control .title.active {
  color: red;
  border-bottom: 3px solid red;
}
```

## 五. React 插槽实现

### 5.1. 为什么使用插槽？

在开发中，我们抽取了一个组件，但是为了让这个组件具备更强的通用性，我们不能将组件中的内容限制为固定的 div、span 等等这些元素。

我们应该让使用者可以决定某一块区域到底存放什么内容。

举个栗子：假如我们定制一个通用的导航组件 - NavBar

- 这个组件分成三块区域：左边-中间-右边，每块区域的内容是不固定；
- 左边区域可能显示一个菜单图标，也可能显示一个返回按钮，可能什么都不显示；
- 中间区域可能显示一个搜索框，也可能是一个列表，也可能是一个标题，等等；
- 右边可能是一个文字，也可能是一个图标，也可能什么都不显示；

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)京东导航

这种需求在 Vue 当中有一个固定的做法是通过 slot 来完成的，React 呢？

- React 对于这种需要插槽的情况非常灵活；
- 有两种方案可以实现：children 和 props；

我这里先提前给出 NavBar 的样式：

```css
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.nav-bar .left,
.nav-bar .right {
  width: 80px;
  background: red;
}

.nav-bar .center {
  flex: 1;
  background: blue;
}
```

### 5.2. children 实现

每个组件都可以获取到 `props.children`：它包含组件的开始标签和结束标签之间的内容。

比如：

```html
<Welcome>Hello world!</Welcome>
```

在 `Welcome` 组件中获取 `props.children`，就可以得到字符串 `Hello world!`：

```jsx
function Welcome(props) {
  return <p>{props.children}</p>;
}
```

当然，我们之前看过 props.children 的源码：

- 如果只有一个元素，那么 children 指向该元素；
- 如果有多个元素，那么 children 指向的是数组，数组中包含多个元素；

那么，我们的 NavBar 可以进行如下的实现：

```jsx
import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="item left">{this.props.children[0]}</div>
        <div className="item center">{this.props.children[1]}</div>
        <div className="item right">{this.props.children[2]}</div>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <div>返回</div>
          <div>购物街</div>
          <div>更多</div>
        </NavBar>
      </div>
    );
  }
}
```

### 5.3. props 实现

通过 children 实现的方案虽然可行，但是有一个弊端：通过索引值获取传入的元素很容易出错，不能精准的获取传入的原生；

另外一个种方案就是使用 props 实现：

- 通过具体的属性名，可以让我们在传入和获取时更加的精准；

```jsx
import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props;

    return (
      <div className="nav-bar">
        <div className="item left">{leftSlot}</div>
        <div className="item center">{centerSlot}</div>
        <div className="item right">{rightSlot}</div>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    const navLeft = <div>返回</div>;
    const navCenter = <div>购物街</div>;
    const navRight = <div>更多</div>;

    return (
      <div>
        <NavBar
          leftSlot={navLeft}
          centerSlot={navCenter}
          rightSlot={navRight}
        />
      </div>
    );
  }
}
```

# 非父子组件通信

## 一. Context 使用

### 1.1. Context 应用场景

非父子组件数据的共享：

- 在开发中，比较常见的数据传递方式是通过 props 属性自上而下（由父到子）进行传递。
- 但是对于有一些场景：比如一些数据需要在多个组件中进行共享（地区偏好、UI 主题、用户登录状态、用户信息等）。
- 如果我们在顶层的 App 中定义这些信息，之后一层层传递下去，那么对于一些中间层不需要数据的组件来说，是一种冗余的操作。

我们来看一个例子：

```jsx
import React, { Component } from "react";

function ProfileHeader(props) {
  return (
    <div>
      <h2>用户昵称: {props.nickname}</h2>
      <h2>用户等级: {props.level}</h2>
    </div>
  );
}

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader
          nickname={this.props.nickname}
          level={this.props.level}
        />
        <ul>
          <li>设置1</li>
          <li>设置2</li>
          <li>设置3</li>
          <li>设置4</li>
          <li>设置5</li>
        </ul>
      </div>
    );
  }
}

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      nickname: "coderwhy",
      level: 99,
    };
  }

  render() {
    const { nickname, level } = this.state;

    return (
      <div>
        <Profile nickname={nickname} level={level} />
        <h2>其他内容</h2>
      </div>
    );
  }
}
```

我这边顺便补充一个小的知识点：Spread Attributes

- https://zh-hans.reactjs.org/docs/jsx-in-depth.html

下面两种写法是等价的：

```js
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = { firstName: "Ben", lastName: "Hector" };
  return <Greeting {...props} />;
}
```

那么我们上面的 Profile 的传递代码可以修改为如下代码：

```html
<ProfileHeader {...this.props} />
```

但是，如果层级更多的话，一层层传递是非常麻烦，并且代码是非常冗余的：

- React 提供了一个 API：Context；
- Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props；
- Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言；

### 1.2. Context 相关的 API

**React.createContext**

```js
const MyContext = React.createContext(defaultValue);
```

创建一个需要共享的 Context 对象：

- 如果一个组件订阅了 Context，那么这个组件会从离自身最近的那个匹配的 `Provider` 中读取到当前的 context 值；
- defaultValue 是组件在顶层查找过程中没有找到对应的`Provider`，那么就使用默认值

**Context.Provider**

```html
<MyContext.Provider value={/* 某个值 */}>
```

每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化：

- Provider 接收一个 `value` 属性，传递给消费组件；
- 一个 Provider 可以和多个消费组件有对应关系；
- 多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据；

当 Provider 的 `value` 值发生变化时，它内部的所有消费组件都会重新渲染；

**Class.contextType**

```jsx
class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* 基于 MyContext 组件的值进行渲染 */
  }
}
MyClass.contextType = MyContext;
```

挂载在 class 上的 `contextType` 属性会被重赋值为一个由 `React.createContext()` 创建的 Context 对象：

- 这能让你使用 `this.context` 来消费最近 Context 上的那个值；
- 你可以在任何生命周期中访问到它，包括 render 函数中；

**Context.Consumer**

```html
<MyContext.Consumer>
  {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>
```

这里，React 组件也可以订阅到 context 变更。这能让你在 `函数式组件` 中完成订阅 context。

- 这里需要 函数作为子元素（function as child）这种做法；
- 这个函数接收当前的 context 值，返回一个 React 节点；

### 1.3. Context 使用过程

我们先按照前面三个步骤来使用一个 Context：

- 我们就会发现，这个过程中 Profile 是不需要有任何的数据传递的

```jsx
import React, { Component } from "react";

const UserContext = React.createContext({ nickname: "默认", level: -1 });

class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <h2>用户昵称: {this.context.nickname}</h2>
        <h2>用户等级: {this.context.level}</h2>
      </div>
    );
  }
}

ProfileHeader.contextType = UserContext;

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader />
        <ul>
          <li>设置1</li>
          <li>设置2</li>
          <li>设置3</li>
          <li>设置4</li>
          <li>设置5</li>
        </ul>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <UserContext.Provider value={{ nickname: "why", level: 99 }}>
          <Profile />
        </UserContext.Provider>
        <h2>其他内容</h2>
      </div>
    );
  }
}
```

**什么时候使用默认值 defaultValue 呢？**如果出现了如下代码：

- `<Profile />`并没有作为 `UserContext.Provider` 的子组件；

```html
<Profile />
<UserContext.Provider value={{ nickname: "why", level: 99 }}>
</UserContext.Provider>
```

**什么时候使用 Context.Consumer 呢？**

- 1.当使用 value 的组件是一个函数式组件时；
- 2.当组件中需要使用多个 Context 时；

演练一：

```jsx
function ProfileHeader(props) {
  return (
    <div>
      <UserContext.Consumer>
        {(value) => {
          return (
            <div>
              <h2>用户昵称: {value.nickname}</h2>
              <h2>用户等级: {value.level}</h2>
            </div>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
```

演练二：当使用 value 的组件是一个函数式组件时；

1.创建一个新的 Context

```js
const ThemeContext = React.createContext({ color: "black" });
```

2.Provider 的嵌套

```html
<UserContext.Provider value={{ nickname: "why", level: 99 }}>
  <ThemeContext.Provider value={{color: "red"}}>
    <Profile />
  </ThemeContext.Provider>
</UserContext.Provider>
```

3.使用 Consumer 的嵌套

```html
<UserContext.Consumer>
  {value => { return (
  <ThemeContext.Consumer>
    { theme => (
    <div>
      <h2 style="{theme}">用户昵称: {value.nickname}</h2>
      <h2 style="{theme}">用户等级: {value.level}</h2>
    </div>
    ) }
  </ThemeContext.Consumer>
  ) }}
</UserContext.Consumer>
```

更多用法可以参考官网：https://zh-hans.reactjs.org/docs/context.html

后续我们会学习 Redux 来进行全局的状态管理。

## 二. 事件总线

### 2.1. 事件总线的概述

前面通过 Context 主要实现的是数据的共享，但是在开发中如果有跨组件之间的事件传递，应该如何操作呢？

- 在 Vue 中我们可以通过 Vue 的实例，快速实现一个事件总线（EventBus），来完成操作；
- 在 React 中，我们可以依赖一个使用较多的库 `events` 来完成对应的操作；

我们可以通过 npm 或者 yarn 来安装 events：

```
yarn add events;
```

events 常用的 API：

- 创建 EventEmitter 对象：eventBus 对象；
- 发出事件：`eventBus.emit("事件名称", 参数列表);`
- 监听事件：`eventBus.addListener("事件名称", 监听函数)`；
- 移除事件：`eventBus.removeListener("事件名称", 监听函数)`；

### 2.2. 案例演练

我们通过一个案例来进行演练：

```jsx
import React, { Component } from "react";
import { EventEmitter } from "events";

const eventBus = new EventEmitter();

class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <button onClick={(e) => this.btnClick()}>按钮</button>
      </div>
    );
  }

  btnClick() {
    eventBus.emit("headerClick", "why", 18);
  }
}

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader />
        <ul>
          <li>设置1</li>
          <li>设置2</li>
          <li>设置3</li>
          <li>设置4</li>
          <li>设置5</li>
        </ul>
      </div>
    );
  }
}

export default class App extends Component {
  componentDidMount() {
    eventBus.addListener("headerClick", this.headerClick);
  }

  headerClick(name, age) {
    console.log(name, age);
  }

  componentWillUnmount() {
    eventBus.removeListener("headerClick", this.headerClick);
  }

  render() {
    return (
      <div>
        <Profile />
        <h2>其他内容</h2>
      </div>
    );
  }
}
```

## 三. 临时知识补充

### 为什么 constructor 中不是必须传入 props 也能使用

在进行 React 开发中，有一个很奇怪的现象：

- 在调用 super()的时候，我没有传入 props，但是在下面的 render 函数中我依然可以使用；
- 如果你自己编写一个基础的类，可以尝试一下：这种情况 props 应该是 undefined 的；

```jsx
class ChildCpn extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { name, age, height } = this.props;
    return <h2>子组件展示数据: {name + " " + age + " " + height}</h2>;
  }
}
```

为什么这么神奇呢？

- 我一直喜欢说：计算机中没有黑魔法；
- 之所以可以，恰恰是因为 React 担心你的代码会出现上面这种写法而进行了一些 `骚操作`；
- React 不管你有没有通过 super 将 props 设置到当前的对象中，它都会重新给你设置一遍；

如何验证呢？

- 这就需要通过源码来验证了；
- React 的源码 packages 中有提供一个 Test Renderer 的 package；
- 这个 package 提供了一个 React 渲染器，用于将 React 组件渲染成纯 JavaScript 对象，不需要依赖 DOM 或原生移动环境；

查看源码：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuuPDakHqxuzFuqKicoP1qKiaTicIdImeBotRuzicsGW8AibYvyUNLdicWqAfhFShHKE4cKAKSNziaGHhw89Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)源码位置

我们来看一下这个组件是怎么被创建出来的：

- 我们找到其中的 render 函数；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuuPDakHqxuzFuqKicoP1qKiaTPOOXhN6rkVdG3rA971dAyNN5FZZpghSxcwjEEb5KoPUX56b0TRvzIQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)render 函数

- render 函数中有这样的一段代码；

- - 这个\_instance 实例就是组件对象；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuuPDakHqxuzFuqKicoP1qKiaTYlm85Fyqgg8zE7hrnPUbUPFq0kR9vF9eGfhVWgMIoV6qvAE257arAQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)创建\_instance 实例

- 我们再看一下，它在哪里重新赋值的：

- - 这里还包括通过 this.\_instance 的方式回调生命周期函数；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuuPDakHqxuzFuqKicoP1qKiaT5XIAIJbx7H799p964WR9U9YJx3p9RYH359HIukF1NZibFFoo7pcy3Yg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)重新赋值的地方

**结论：你无论是否手动的将 props 保存到组件的实例上，React 内部都会帮你保存的，我只能说：骚操作；**

# 深入理解 setState

> setState 是 React 中使用频率最高的一个 API（当然 hooks 出现之前），它的用法灵活多样，并且也是 React 面试题经常会考的一个知识点。
>
> 在这篇文章中，我对 React 的 setState 进行了很多解析，希望可以帮助大家真正理解 setState。（其中涉及到一个源码，我有贴出，但是没有详细展开，有机会我们再对源码进行解析，大家不是很懂也不影响你的学习，只需要知道 React 内部是这样做的即可，面试时也可以回答出来）

## 一. setState 的使用

### 1.1. 为什么使用 setState

回到最早的案例，当点击一个 `改变文本` 的按钮时，修改界面显示的内容：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutB9lC7UoOnZk1MviaCCUqFxLnVMoGhicB81ibhw9cwxXB5cPftzmeOn8ibHKxYyKwZqpwckepKHA2mbQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)案例

案例的基础代码如下：

```jsx
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World",
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
      </div>
    );
  }

  changeText() {}
}
```

**关键是 changeText 中应该如何实现：**

我们是否可以通过直接修改 state 中的 message 来修改界面呢？

- 点击不会有任何反应，为什么呢？
- 因为我们修改了 state 之后，希望 React 根据最新的 State 来重新渲染界面，但是这种方式的修改 React 并不知道数据发生了变化；
- React 并没有实现类似于 Vue2 中的 Object.defineProperty 或者 Vue3 中的 Proxy 的方式来监听数据的变化；
- 我们必须通过 setState 来告知 React 数据已经发生了变化；

```js
  changeText() {
    this.state.message = "你好啊,李银河";
  }
```

我们必须通过 setState 来更新数据：

- 疑惑：在组件中并没有实现 setState 的方法，为什么可以调用呢？
- 原因很简单，setState 方法是从 Component 中继承过来的。

```jsx
Component.prototype.setState = function (partialState, callback) {
  invariant(
    typeof partialState === "object" ||
      typeof partialState === "function" ||
      partialState == null,
    "setState(...): takes an object of state variables to update or a " +
      "function which returns an object of state variables."
  );
  this.updater.enqueueSetState(this, partialState, callback, "setState");
};
```

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutB9lC7UoOnZk1MviaCCUqFxhRFRXjhYz93pgwvibdbrmcibd53ddnhQ6og48icRdMyhgSyCCZ58tRIKQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)image-20200624165215233

所以，我们可以通过调用 setState 来修改数据：

- 当我们调用 setState 时，会重新执行 render 函数，根据最新的 State 来创建 ReactElement 对象；
- 再根据最新的 ReactElement 对象，对 DOM 进行修改；

```js
changeText() {
  this.setState({
    message: "你好啊,李银河"
  })
}
```

### 1.2. setState 异步更新

我们来看下面的代码：

- 最终打印结果是 Hello World；
- 可见 setState 是异步的操作，我们并不能在执行完 setState 之后立马拿到最新的 state 的结果

```js
changeText() {
  this.setState({
    message: "你好啊,李银河"
  })
  console.log(this.state.message); // Hello World
}
```

为什么 setState 设计为异步呢？

- setState 设计为异步其实之前在 GitHub 上也有很多的讨论；
- React 核心成员（Redux 的作者）Dan Abramov 也有对应的回复，有兴趣的同学可以参考一下；
- https://github.com/facebook/react/issues/11527#issuecomment-360199710；

我对其回答做一个简单的总结：

- `setState`设计为异步，可以显著的提升性能；

- - 如果每次调用 setState 都进行一次更新，那么意味着 render 函数会被频繁调用，界面重新渲染，这样效率是很低的；
  - 最好的办法应该是获取到多个更新，之后进行批量更新；

- 如果同步更新了 state，但是还没有执行 render 函数，那么 state 和 props 不能保持同步；

- - state 和 props 不能保持一致性，会在开发中产生很多的问题；

那么如何可以获取到更新后的值呢？

- setState 接受两个参数：第二个参数是一个回调函数，这个回调函数会在更新后会执行；
- 格式如下：`setState(partialState, callback)`

```js
changeText() {
  this.setState({
    message: "你好啊,李银河"
  }, () => {
    console.log(this.state.message); // 你好啊,李银河
  });
}
```

当然，我们也可以在生命周期函数：

```js
componentDidUpdate(prevProps, provState, snapshot) {
  console.log(this.state.message);
}
```

### 1.3. setState 一定是异步？

疑惑：setState 一定是异步更新的吗？

验证一：在 setTimeout 中的更新：

```js
changeText() {
  setTimeout(() => {
    this.setState({
      message: "你好啊,李银河"
    });
    console.log(this.state.message); // 你好啊,李银河
  }, 0);
}
```

验证二：原生 DOM 事件：

```jsx
componentDidMount() {
  const btnEl = document.getElementById("btn");
  btnEl.addEventListener('click', () => {
    this.setState({
      message: "你好啊,李银河"
    });
    console.log(this.state.message); // 你好啊,李银河
  })
}
```

其实分成两种情况：

- 在组件生命周期或 React 合成事件中，setState 是异步；
- 在 setTimeout 或者原生 dom 事件中，setState 是同步；

React 中其实是通过一个函数来确定的：enqueueSetState 部分实现（react-reconciler/ReactFiberClassComponent.js）

```jsx
enqueueSetState(inst, payload, callback) {
  const fiber = getInstance(inst);
  // 会根据React上下文计算一个当前时间
  const currentTime = requestCurrentTimeForUpdate();
  const suspenseConfig = requestCurrentSuspenseConfig();
  // 这个函数会返回当前是同步还是异步更新（准确的说是优先级）
  const expirationTime = computeExpirationForFiber(
    currentTime,
    fiber,
    suspenseConfig,
  );

  const update = createUpdate(expirationTime, suspenseConfig);

  ...
}
```

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutB9lC7UoOnZk1MviaCCUqFxc0Q0n6xicLAibO8ap93G4LPscnZlgwXDdkLclNHRwqQSzP2wfTibstPIQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)enqueueSetState 源码

computeExpirationForFiber 函数的部分实现：

- Sync 是优先级最高的，即创建就更新；

```jsx
  currentTime: ExpirationTime,
  fiber: Fiber,
  suspenseConfig: null | SuspenseConfig,
): ExpirationTime {
  const mode = fiber.mode;
  if ((mode & BlockingMode) === NoMode) {
    return Sync;
  }

  const priorityLevel = getCurrentPriorityLevel();
  if ((mode & ConcurrentMode) === NoMode) {
    return priorityLevel === ImmediatePriority ? Sync : Batched;
  }
```

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutB9lC7UoOnZk1MviaCCUqFxg1eSZlNCaIOTeiafERwKqEQJzKPGxWYgIQUJK3cwsUW8G10aEoEVsDA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)computeExpirationForFiber

### 1.4. setState 的合并

#### 1.4.1. 数据的合并

假如我们有这样的数据：

```jsx
this.state = {
  name: "coderwhy",
  message: "Hello World",
};
```

我们需要更新 message：

- 我通过 setState 去修改 message，是不会对 name 产生影响的；

```jsx
changeText() {
  this.setState({
    message: "你好啊,李银河"
  });
}
```

为什么不会产生影响呢？源码中其实是有对 `原对象` 和 `新对象进行合并的：`

- 事实上就是使用 `Object.assign(target, ...sources)` 来完成的；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutB9lC7UoOnZk1MviaCCUqFxKV5LUp3u60p1nJH7lNglZ2YGjcnsxTdat6iaWvTCicen0Clz9vgwomicA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)React 源码合并数据

#### 1.4.2. 多个 setState 合并

比如我们还是有一个 counter 属性，记录当前的数字：

- 如果进行如下操作，那么 counter 会变成几呢？答案是 1；
- 为什么呢？因为它会对多个 state 进行合并；

```jsx
  increment() {
    this.setState({
      counter: this.state.counter + 1
    });

    this.setState({
      counter: this.state.counter + 1
    });

    this.setState({
      counter: this.state.counter + 1
    });
  }
```

其实在源码的 processUpdateQueue 中有一个 do...while 循环，就是从队列中取出多个 state 进行合并的；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutB9lC7UoOnZk1MviaCCUqFxMksAXMnwnbGicAvknB41BBIsxtvuPhk6MmZia8nuRKMA7F1bBZR7QLtw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)React 源码

如何可以做到，让 counter 最终变成 3 呢？

```jsx
increment() {
  this.setState((state, props) => {
    return {
      counter: state.counter + 1
    }
  })

  this.setState((state, props) => {
    return {
      counter: state.counter + 1
    }
  })

  this.setState((state, props) => {
    return {
      counter: state.counter + 1
    }
  })
  }
```

为什么传入一个函数就可以变出 3 呢？

- 原因是多个 state 进行合并时，每次遍历，都会执行一次函数：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutB9lC7UoOnZk1MviaCCUqFx2MeibeyxLpQWhibp8D7ekHC3UfM1ptbkkuLic5rcSeFobag4ntzibuiaqWQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)传入的函数被多次执行

## 二. setState 性能优化

### 2.1. React 更新机制

我们在前面已经学习 React 的渲染流程：

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)jsx 到虚拟 DOM 到真实 DOM

那么 React 的更新流程呢？

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutB9lC7UoOnZk1MviaCCUqFxdOicRuqkm58AxubpBwO0nodxDgKxo4nPbEDBVoicsg6U52iaR87lyEDNQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)image-20200624090053224

React 在 props 或 state 发生改变时，会调用 React 的 render 方法，会创建一颗不同的树。

React 需要基于这两颗不同的树之间的差别来判断如何有效的更新 UI：

- 如果一棵树参考另外一棵树进行完全比较更新，那么即使是最先进的算法，该算法的复杂程度为 O(n 3 )，其中 n 是树中元素的数量；
- https://grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf；
- 如果在 React 中使用了该算法，那么展示 1000 个元素所需要执行的计算量将在十亿的量级范围；
- 这个开销太过昂贵了，React 的更新性能会变得非常低效；

于是，React 对这个算法进行了优化，将其优化成了 O(n)，如何优化的呢？

- 同层节点之间相互比较，不会垮节点比较；
- 不同类型的节点，产生不同的树结构；
- 开发中，可以通过 key 来指定哪些节点在不同的渲染下保持稳定；

### 2.2. Diffing 算法

#### 2.2.1. 对比不同类型的元素

当节点为不同的元素，React 会拆卸原有的树，并且建立起新的树：

- 当一个元素从 `<a>` 变成 `<img>`，从 `<Article>` 变成 `<Comment>`，或从 `<Button>` 变成 `<div>` 都会触发一个完整的重建流程；
- 当卸载一棵树时，对应的 DOM 节点也会被销毁，组件实例将执行 `componentWillUnmount()` 方法；
- 当建立一棵新的树时，对应的 DOM 节点会被创建以及插入到 DOM 中，组件实例将执行 `componentWillMount()` 方法，紧接着 `componentDidMount()` 方法；

比如下面的代码更改：

- React 会销毁 `Counter` 组件并且重新装载一个新的组件，而不会对 Counter 进行复用；

```html
<div>
  <Counter />
</div>

<span>
  <Counter />
</span>
```

#### 2.2.2. 对比同一类型的元素

当比对两个相同类型的 React 元素时，React 会保留 DOM 节点，仅比对及更新有改变的属性。

比如下面的代码更改：

- 通过比对这两个元素，React 知道只需要修改 DOM 元素上的 `className` 属性；

```html
<div className="before" title="stuff" />

<div className="after" title="stuff" />
```

比如下面的代码更改：

- 当更新 `style` 属性时，React 仅更新有所更变的属性。
- 通过比对这两个元素，React 知道只需要修改 DOM 元素上的 `color` 样式，无需修改 `fontWeight`。

```html
<div style={{color: 'red', fontWeight: 'bold'}} /> <div style={{color: 'green',
fontWeight: 'bold'}} />
```

如果是同类型的组件元素：

- 组件会保持不变，React 会更新该组件的 props，并且调用`componentWillReceiveProps()` 和 `componentWillUpdate()` 方法；
- 下一步，调用 `render()` 方法，diff 算法将在之前的结果以及新的结果中进行递归；

#### 2.2.3. 对子节点进行递归

在默认条件下，当递归 DOM 节点的子元素时，React 会同时遍历两个子元素的列表；当产生差异时，生成一个 mutation。

我们来看一下在最后插入一条数据的情况：

- 前面两个比较是完全相同的，所以不会产生 mutation；
- 最后一个比较，产生一个 mutation，将其插入到新的 DOM 树中即可；

```html
<ul>
  <li>first</li>
  <li>second</li>
</ul>

<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
```

但是如果我们是在中间插入一条数据：

- React 会对每一个子元素产生一个 mutation，而不是保持 `<li>星际穿越</li>`和`<li>盗梦空间</li>`的不变；
- 这种低效的比较方式会带来一定的性能问题；

```html
<ul>
  <li>星际穿越</li>
  <li>盗梦空间</li>
</ul>

<ul>
  <li>大话西游</li>
  <li>星际穿越</li>
  <li>盗梦空间</li>
</ul>
```

### 2.3. keys 的优化

我们在前面遍历列表时，总是会提示一个警告，让我们加入一个 key 属性：

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)key 的警告

我们来看一个案例：

```jsx
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: ["星际穿越", "盗梦空间"],
    };
  }

  render() {
    return (
      <div>
        <h2>电影列表</h2>
        <ul>
          {this.state.movies.map((item, index) => {
            return <li>{item}</li>;
          })}
        </ul>
        <button onClick={(e) => this.insertMovie()}>插入数据</button>
      </div>
    );
  }

  insertMovie() {}
}
```

方式一：在最后位置插入数据

- 这种情况，有无 key 意义并不大

```jsx
insertMovie() {
  const newMovies = [...this.state.movies, "大话西游"];
  this.setState({
    movies: newMovies
  })
}
```

方式二：在前面插入数据

- 这种做法，在没有 key 的情况下，所有的 li 都需要进行修改；

```js
insertMovie() {
  const newMovies = ["大话西游", ...this.state.movies];
  this.setState({
    movies: newMovies
  })
}
```

当子元素(这里的 li)拥有 key 时，React 使用 key 来匹配原有树上的子元素以及最新树上的子元素：

- 在下面这种场景下，key 为 111 和 222 的元素仅仅进行位移，不需要进行任何的修改；
- 将 key 为 333 的元素插入到最前面的位置即可；

```html
<ul>
  <li key="111">星际穿越</li>
  <li key="222">盗梦空间</li>
</ul>

<ul>
  <li key="333">Connecticut</li>
  <li key="111">星际穿越</li>
  <li key="222">盗梦空间</li>
</ul>
```

key 的注意事项：

- key 应该是唯一的；
- key 不要使用随机数（随机数在下一次 render 时，会重新生成一个数字）；
- 使用 index 作为 key，对性能是没有优化的；

### 2.4. SCU 的优化

#### 2.4.1. render 函数被调用

我们使用之前的一个嵌套案例：

- 在 App 中，我们增加了一个计数器的代码；
- 当点击+1 时，会重新调用 App 的 render 函数；
- 而当 App 的 render 函数被调用时，所有的子组件的 render 函数都会被重新调用；

```jsx
import React, { Component } from "react";

function Header() {
  console.log("Header Render 被调用");
  return <h2>Header</h2>;
}

class Main extends Component {
  render() {
    console.log("Main Render 被调用");
    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    );
  }
}

function Banner() {
  console.log("Banner Render 被调用");
  return <div>Banner</div>;
}

function ProductList() {
  console.log("ProductList Render 被调用");
  return (
    <ul>
      <li>商品1</li>
      <li>商品2</li>
      <li>商品3</li>
      <li>商品4</li>
      <li>商品5</li>
    </ul>
  );
}

function Footer() {
  console.log("Footer Render 被调用");
  return <h2>Footer</h2>;
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    console.log("App Render 被调用");

    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
```

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutB9lC7UoOnZk1MviaCCUqFxIicv5eQdicHoEcTrWvmibqot3XmkkMZTNCicnb6yxxqtprjq43EAUKTXcQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)嵌套树结构

那么，我们可以思考一下，在以后的开发中，我们只要是修改了 App 中的数据，所有的组件都需要重新 render，进行 diff 算法，性能必然是很低的：

- 事实上，很多的组件没有必须要重新 render；
- 它们调用 render 应该有一个前提，就是依赖的数据（state、props）发生改变时，再调用自己的 render 方法；

如何来控制 render 方法是否被调用呢？

- 通过`shouldComponentUpdate`方法即可；

#### 2.4.2. shouldComponentUpdate

React 给我们提供了一个生命周期方法 `shouldComponentUpdate`（很多时候，我们简称为 SCU），这个方法接受参数，并且需要有返回值：

- 该方法有两个参数：

- - 参数一：nextProps 修改之后，最新的 props 属性
  - 参数二：nextState 修改之后，最新的 state 属性

- 该方法返回值是一个 boolean 类型

- - 返回值为 true，那么就需要调用 render 方法；
  - 返回值为 false，那么久不需要调用 render 方法；
  - 默认返回的是 true，也就是只要 state 发生改变，就会调用 render 方法；

```
shouldComponentUpdate(nextProps, nextState) {
  return true;
}
```

我们可以控制它返回的内容，来决定是否需要重新渲染。

比如我们在 App 中增加一个 message 属性：

- jsx 中并没有依赖这个 message，那么它的改变不应该引起重新渲染；
- 但是因为 render 监听到 state 的改变，就会重新 render，所以最后 render 方法还是被重新调用了；

```jsx
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: "Hello World",
    };
  }

  render() {
    console.log("App Render 被调用");

    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  changeText() {
    this.setState({
      message: "你好啊,李银河",
    });
  }
}
```

这个时候，我们可以通过实现 shouldComponentUpdate 来决定要不要重新调用 render 方法：

- 这个时候，我们改变 counter 时，会重新渲染；
- 如果，我们改变的是 message，那么默认返回的是 false，那么就不会重新渲染；

```jsx
shouldComponentUpdate(nextProps, nextState) {
  if (nextState.counter !== this.state.counter) {
    return true;
  }

  return false;
}
```

但是我们的代码依然没有优化到最好，因为当 counter 改变时，所有的子组件依然重新渲染了：

- 所以，事实上，我们应该实现所有的子组件的 shouldComponentUpdate；

比如 Main 组件，可以进行如下实现：

- `shouldComponentUpdate`默认返回一个 false；
- 在特定情况下，需要更新时，我们在上面添加对应的条件即可；

```jsx
class Main extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    console.log("Main Render 被调用");
    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    );
  }
}
```

#### 2.4.3. PureComponent 和 memo

如果所有的类，我们都需要手动来实现 shouldComponentUpdate，那么会给我们开发者增加非常多的工作量。

我们来设想一下 shouldComponentUpdate 中的各种判断的目的是什么？

- props 或者 state 中的数据是否发生了改变，来决定 shouldComponentUpdate 返回 true 或者 false；

事实上 React 已经考虑到了这一点，所以 React 已经默认帮我们实现好了，如何实现呢？

- 将 class 基础自 PureComponent。

比如我们修改 Main 组件的代码：

```jsx
class Main extends PureComponent {
  render() {
    console.log("Main Render 被调用");
    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    );
  }
}
```

PureComponent 的原理是什么呢？

- 对 props 和 state 进行浅层比较；

**查看 PureComponent 相关的源码：**

react/ReactBaseClasses.js 中：

- 在 PureComponent 的原型上增加一个 isPureReactComponent 为 true 的属性

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutB9lC7UoOnZk1MviaCCUqFxmFiaXcY9yib6osTds7P6yGibfxApAQINF3tpCVg0zZZdnr7biaXHtkib02Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)PureComponent

React-reconcilier/ReactFiberClassComponent.js：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutB9lC7UoOnZk1MviaCCUqFxZ43YSSGgnAbBSLOU3w45XkfibrR7yQob9xBdHaQkoCsfSlOvrA1tCgg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)checkShouldComponentUpdate

这个方法中，调用 `!shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)`，这个 shallowEqual 就是进行浅层比较：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutB9lC7UoOnZk1MviaCCUqFxpUwu62Uuq7HcKIFQNFePicviaI8J6tmzuUibiaVs3T6Vfwh7TicTRwKjrXA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)shallowEqual

**那么，如果是一个函数式组件呢？**

我们需要使用一个高阶组件 memo：

- 我们将之前的 Header、Banner、ProductList 都通过 memo 函数进行一层包裹；
- Footer 没有使用 memo 函数进行包裹；
- 最终的效果是，当 counter 发生改变时，Header、Banner、ProductList 的函数不会重新执行，而 Footer 的函数会被重新执行；

```jsx
import React, { Component, PureComponent, memo } from "react";

const MemoHeader = memo(function () {
  console.log("Header Render 被调用");
  return <h2>Header</h2>;
});

class Main extends PureComponent {
  render() {
    console.log("Main Render 被调用");
    return (
      <div>
        <MemoBanner />
        <MemoProductList />
      </div>
    );
  }
}

const MemoBanner = memo(function () {
  console.log("Banner Render 被调用");
  return <div>Banner</div>;
});

const MemoProductList = memo(function () {
  console.log("ProductList Render 被调用");
  return (
    <ul>
      <li>商品1</li>
      <li>商品2</li>
      <li>商品3</li>
      <li>商品4</li>
      <li>商品5</li>
    </ul>
  );
});

function Footer() {
  console.log("Footer Render 被调用");
  return <h2>Footer</h2>;
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: "Hello World",
    };
  }

  render() {
    console.log("App Render 被调用");

    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <MemoHeader />
        <Main />
        <Footer />
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.counter !== this.state.counter) {
      return true;
    }

    return false;
  }

  changeText() {
    this.setState({
      message: "你好啊,李银河",
    });
  }
}
```

**memo 的原理是什么呢？**

react/memo.js：

- 最终返回一个对象，这个对象中有一个 compare 函数

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutB9lC7UoOnZk1MviaCCUqFxUccZHV1znRn92WbbPSl1rMXonnhWicJmzhTmUL7OfBpqYuiao3KDRyjQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)memo 函数

#### 2.4.4. 不可变数据的力量

我们通过一个案例来演练我们之前说的不可变数据的重要性：

```jsx
import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      friends: [
        { name: "lilei", age: 20, height: 1.76 },
        { name: "lucy", age: 18, height: 1.65 },
        { name: "tom", age: 30, height: 1.78 },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>朋友列表</h2>
        <ul>
          {this.state.friends.map((item, index) => {
            return (
              <li key={item.name}>
                <span>{`姓名:${item.name} 年龄: ${item.age}`}</span>
                <button onClick={(e) => this.incrementAge(index)}>
                  年龄+1
                </button>
              </li>
            );
          })}
        </ul>
        <button onClick={(e) => this.insertFriend()}>添加新数据</button>
      </div>
    );
  }

  insertFriend() {}

  incrementAge(index) {}
}
```

**我们来思考一下 inertFriend 应该如何实现？**

实现方式一：

- 这种方式会造成界面不会发生刷新，添加新的数据；
- 原因是继承自 PureComponent，会进行浅层比较，浅层比较过程中两个 friends 是相同的对象；

```jsx
insertFriend() {
  this.state.friends.push({name: "why", age: 18, height: 1.88});
  this.setState({
    friends: this.state.friends
  })
}
```

实现方式二：

- `[...this.state.friends, {name: "why", age: 18, height: 1.88}]`会生成一个新的数组引用；
- 在进行浅层比较时，两个引用的是不同的数组，所以它们是不相同的；

```jsx
insertFriend() {
  this.setState({
    friends: [...this.state.friends, {name: "why", age: 18, height: 1.88}]
  })
}
```

**我们再来思考一下 incrementAge 应该如何实现？**

实现方式一：

- 和上面方式一类似

```jsx
incrementAge(index) {
  this.state.friends[index].age += 1;
  this.setState({
    friends: this.state.friends
  })
}
```

实现方式二：

- 和上面方式二类似

```jsx
incrementAge(index) {
  const newFriends = [...this.state.friends];
  newFriends[index].age += 1;
  this.setState({
    friends: newFriends
  })
}
```

所以，在真实开发中，我们要尽量保证 state、props 中的数据不可变性，这样我们才能合理和安全的使用 PureComponent 和 memo。

当然，后面项目中我会结合 immutable.js 来保证数据的不可变性。

# 受控非受控组件

## 一. refs 的使用

在 React 的开发模式中，通常情况下不需要、也不建议直接操作 DOM 原生，但是某些特殊的情况，确实需要获取到 DOM 进行某些操作：

- 管理焦点，文本选择或媒体播放。
- 触发强制动画。
- 集成第三方 DOM 库。

### 1.1. 创建 ref 的方式

如何创建 refs 来获取对应的 DOM 呢？目前有三种方式：

- 方式一：传入字符串

- - 使用时通过 `this.refs.传入的字符串`格式获取对应的元素；

- 方式二：传入一个对象

- - 对象是通过 `React.createRef()` 方式创建出来的；
  - 使用时获取到创建的对象其中有一个`current`属性就是对应的元素；

- 方式三：传入一个函数

- - 该函数会在 DOM 被挂载时进行回调，这个函数会传入一个 元素对象，我们可以自己保存；
  - 使用时，直接拿到之前保存的元素对象即可；

代码演练：

```
import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.titleEl = null;
  }

  render() {
    return (
      <div>
        <h2 ref="title">String Ref</h2>
        <h2 ref={this.titleRef}>Hello Create Ref</h2>
        <h2 ref={element => this.titleEl = element}>Callback Ref</h2>

        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    )
  }

  changeText() {
    this.refs.title.innerHTML = "你好啊,李银河";
    this.titleRef.current.innerHTML = "你好啊,李银河";
    this.titleEl.innerHTML = "你好啊,李银河";
  }
}
```

### 1.2. ref 节点的类型

ref 的值根据节点的类型而有所不同：

- 当 `ref` 属性用于 HTML 元素时，构造函数中使用 `React.createRef()` 创建的 `ref` 接收底层 DOM 元素作为其 `current` 属性；
- 当 `ref` 属性用于自定义 class 组件时，`ref` 对象接收组件的挂载实例作为其 `current` 属性；
- **你不能在函数组件上使用 `ref` 属性**，因为他们没有实例；

这里我们演示一下 ref 引用一个 class 组件对象：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvFsopQCEXnsr5PfAgan49KjZicPiaQY7FPSbeEnuvSIB1rsagSraseD0Nk09allmwckn0pnSibsEQjA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)class 组件案例

```
import React, { PureComponent, createRef } from 'react';

class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.counterRef = createRef();
  }

  render() {
    return (
      <div>
        <Counter ref={this.counterRef}/>
        <button onClick={e => this.increment()}>app +1</button>
      </div>
    )
  }

  increment() {
    this.counterRef.current.increment();
  }
}
```

函数式组件是没有实例的，所以无法通过 ref 获取他们的实例：

- 但是某些时候，我们可能想要获取函数式组件中的某个 DOM 元素；
- 这个时候我们可以通过 `React.forwardRef` ，后面我们也会学习 hooks 中如何使用 ref；

## 二. 受控组件

### 2.1. 认识受控组件

#### 2.1.1. 默认提交表单方式

在 React 中，HTML 表单的处理方式和普通的 DOM 元素不太一样：表单元素通常会保存在一些内部的 state。

比如下面的 HTML 表单元素：

- 这个处理方式是 DOM 默认处理 HTML 表单的行为，在用户点击提交时会提交到某个服务器中，并且刷新页面；
- 在 React 中，并没有禁止这个行为，它依然是有效的；
- 但是通常情况下会使用 JavaScript 函数来方便的处理表单提交，同时还可以访问用户填写的表单数据；
- 实现这种效果的标准方式是使用“受控组件”；

```
<form>
  <label>
    名字:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="提交" />
</form>
```

#### 2.1.2. 受控组件提交表单

在 HTML 中，表单元素（如`<input>`、 `<textarea>` 和 `<select>`）之类的表单元素通常自己维护 state，并根据用户输入进行更新。

而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 `setState()`来更新。

- 我们将两者结合起来，使 React 的 state 成为“唯一数据源”；
- 渲染表单的 React 组件还控制着用户输入过程中表单发生的操作；
- 被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”；

例如，如果我们想让前一个示例在提交时打印出名称，我们可以将表单写为受控组件：

```
import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    }
  }

  render() {
    const {username} = this.state;

    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户名:
            <input type="text"
                   id="username"
                   onChange={e => this.handleUsernameChange(e)}
                   value={username}/>
          </label>
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit(event) {
    console.log(this.state.username);
    event.preventDefault();
  }
}
```

由于在表单元素上设置了 `value` 属性，因此显示的值将始终为 `this.state.value`，这使得 React 的 state 成为唯一数据源。

由于 `handleUsernameChange` 在每次按键时都会执行并更新 React 的 state，因此显示的值将随着用户输入而更新。

### 2.2. 常见表单的处理

刚才我们演示的是一个 input 表单的处理，这里我们再演示一下其他的情况。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvFsopQCEXnsr5PfAgan49K9FxrTIuvK5svQwuMXp63lYW9Gotsn0MMW4kbXibJmAajA1IG4dvZgpw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)表单的处理方式

#### 2.2.1. textarea 标签

texteare 标签和 input 比较相似：

```
import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      article: "请编写你喜欢的文章"
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="article">
            <textarea id="article" cols="30" rows="10"
                      value={this.state.article}
                      onChange={e => this.handleArticelChange(e)}/>
          </label>
          <div>
            <input type="submit" value="发布文章"/>
          </div>
        </form>
      </div>
    )
  }

  handleArticelChange(event) {
    this.setState({
      article: event.target.value
    })
  }

  handleSubmit(event) {
    console.log(this.state.article);
    event.preventDefault();
  }
}
```

#### 2.2.2. select 标签

select 标签的使用也非常简单，只是它不需要通过 selected 属性来控制哪一个被选中，它可以匹配 state 的 value 来选中。

我们来进行一个简单的演示：

```
import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      fruits: "orange"
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="fruits">
            <select id="fruits"
                    value={this.state.fruits}
                    onChange={e => this.handleFruitsChange(e)}>
              <option value="apple">苹果</option>
              <option value="orange">橘子</option>
              <option value="banana">香蕉</option>
            </select>
          </label>
          <div>
            <input type="submit" value="提交"/>
          </div>
        </form>
      </div>
    )
  }

  handleFruitsChange(event) {
    this.setState({
      fruits: event.target.value
    })
  }

  handleSubmit(event) {
    console.log(this.state.article);
    event.preventDefault();
  }
}
```

#### 2.2.3. 处理多个输入

多处理方式可以像单处理方式那样进行操作，但是需要多个监听方法：

- 这里我们可以使用 ES6 的一个语法：计算属性名（Computed property names）

```jsx
let i = 0;
let a = {
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

let param = "size";
let config = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4,
};

console.log(config); // {size: 12, mobileSize: 4}
```

我们进行对应的代码演练 L

```jsx
import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户:
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => this.handleChange(e)}
              value={username}
            />
          </label>
          <label htmlFor="password">
            密码:
            <input
              type="text"
              id="password"
              name="password"
              onChange={(e) => this.handleChange(e)}
              value={password}
            />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(this.state.username, this.state.password);
    event.preventDefault();
  }
}
```

## 三. 非受控组件

React 推荐大多数情况下使用 `受控组件` 来处理表单数据：

- 一个受控组件中，表单数据是由 React 组件来管理的；
- 另一种替代方案是使用非受控组件，这时表单数据将交由 DOM 节点来处理；

如果要使用非受控组件中的数据，那么我们需要使用 `ref` 来从 DOM 节点中获取表单数据。

我们来进行一个简单的演练：

- 使用 ref 来获取 input 元素；
- 在非受控组件中通常使用 defaultValue 来设置默认值；

```jsx
import React, { PureComponent, createRef } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.usernameRef = createRef();
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="">
            用户:
            <input
              defaultValue="username"
              type="text"
              name="username"
              ref={this.usernameRef}
            />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.usernameRef.current.value);
  }
}
```

同样，`<input type="checkbox">` 和 `<input type="radio">` 支持 `defaultChecked`，`<select>` 和 `<textarea>` 支持 `defaultValue`。

# 高阶组件及组件补充

## 一. 高阶组件

### 1.1. 认识高阶组件

什么是高阶组件呢？相信很多同学都听说过，也用过 `高阶函数`，它们非常相似，所以我们可以先来回顾一下什么是 `高阶函数`。

高阶函数的维基百科定义：至少满足以下条件之一：

- 接受一个或多个函数作为输入；
- 输出一个函数；

JavaScript 中比较常见的 filter、map、reduce 都是高阶函数。

那么说明是高阶组件呢？

- 高阶组件的英文是 **Higher-Order Components**，简称为 `HOC`；
- 官方的定义：**高阶组件是参数为组件，返回值为新组件的函数**；

我们可以进行如下的解析：

- 首先， `高阶组件` 本身不是一个组件，而是一个函数；
- 其次，这个函数的参数是一个组件，返回值也是一个组件；

高阶组件的调用过程类似于这样：

```
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

高阶函数的编写过程类似于这样：

```
function higherOrderComponent(WrapperComponent) {
  return class NewComponent extends PureComponent {
    render() {
      return <WrapperComponent/>
    }
  }
}
```

在 ES6 中，类表达式中类名是可以省略的，所以可以可以写成下面的写法：

```
function higherOrderComponent(WrapperComponent) {
  return class extends PureComponent {
    render() {
      return <WrapperComponent/>
    }
  }
}
```

另外，组件的名称都可以通过 displayName 来修改：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutzYJrIh46vLOtx6tsSEtmwzuSx62z9XW4M7coHla791uHPKib7v6TkVpVtJkCfTHAI0axVuqveDQQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)修改名称

完整的代码，我们可以这样来编写：

```
import React, { PureComponent } from 'react';

function higherOrderComponent(WrapperComponent) {
  return class NewComponent extends PureComponent {
    render() {
      return <WrapperComponent/>
    }
  }
}

class App extends PureComponent {
  render() {
    return (
      <div>
        App
      </div>
    )
  }
}

export default higherOrderComponent(App);
```

高阶组件并不是 React API 的一部分，它是基于 React 的组合特性而形成的设计模式；

高阶组件在一些 React 第三方库中非常常见：

- 比如 redux 中的 connect；（后续会讲到）
- 比如 react-router 中的 withRouter；（后续会讲到）

在我们的开发中，高阶组件可以帮助我们做哪些事情呢？

### 1.2. 高阶组件的使用

#### 1.2.1. props 的增强

**不修改原有代码的情况下，添加新的 props**

加入我们有如下案例：

```
class Header extends PureComponent {
  render() {
    const { name, age } = this.props;
    return <h2>Header {name + age}</h2>
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header name="aaa" age={18} />
      </div>
    )
  }
}
```

我们可以通过一个高阶组件，让使用者在不破坏原有结构的情况下对某个组件增强 props：

```
function enhanceProps(WrapperCpn, otherProps) {
 return props => <WrapperCpn {...props} {...otherProps} />
}

const EnhanceHeader = enhanceProps(Header, {height: 1.88})
```

**利用高阶组件来共享 Context**

利用高阶组件来共享 Context 属性

```
import React, { PureComponent, createContext } from 'react';

const UserContext = createContext({
  nickname: "默认",
  level: -1
})

function Header(props) {
  return (
    <UserContext.Consumer>
      {
        value => {
          const { nickname, level } = value;
          return <h2>Header {"昵称:" + nickname + "等级" + level}</h2>
        }
      }
    </UserContext.Consumer>
  )
}

function Footer(props) {
  return (
    <UserContext.Consumer>
      {
        value => {
          const { nickname, level } = value;
          return <h2>Footer {"昵称:" + nickname + "等级" + level}</h2>
        }
      }
    </UserContext.Consumer>
  )
}

const EnhanceHeader = enhanceProps(Header, { height: 1.88 })

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{ nickname: "why", level: 90 }}>
          <Header />
          <Footer />
        </UserContext.Provider>
      </div>
    )
  }
}
```

利用高阶组件`withUser`：

```
import React, { PureComponent, createContext } from 'react';

const UserContext = createContext({
  nickname: "默认",
  level: -1
})

function withUser(WrapperCpn) {
  return props => {
    return (
      <UserContext.Consumer>
        {
          value => {
            return <WrapperCpn {...props} {...value}/>
          }
        }
      </UserContext.Consumer>
    )
  }
}

function Header(props) {
  const { nickname, level } = props;
  return <h2>Header {"昵称:" + nickname + "等级:" + level}</h2>
}


function Footer(props) {
  const { nickname, level } = props;
  return <h2>Footer {"昵称:" + nickname + "等级:" + level}</h2>
}

const UserHeader = withUser(Header);
const UserFooter = withUser(Footer);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{ nickname: "why", level: 90 }}>
          <UserHeader />
          <UserFooter />
        </UserContext.Provider>
      </div>
    )
  }
}
```

#### 1.2.2. 渲染判断鉴权

在开发中，我们可能遇到这样的场景：

- 某些页面是必须用户登录成功才能进行进入；
- 如果用户没有登录成功，那么直接跳转到登录页面；

这个时候，我们就可以使用高阶组件来完成鉴权操作：

```
function LoginPage() {
  return <h2>LoginPage</h2>
}

function CartPage() {
  return <h2>CartPage</h2>
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <CartPage/>
      </div>
    )
  }
}
```

编写鉴权的高阶组件：

```
function loginAuth(Page) {
  return props => {
    if (props.isLogin) {
      return <Page/>
    } else {
      return <LoginPage/>
    }
  }
}
```

完整的代码如下：

```
import React, { PureComponent } from 'react';

function loginAuth(Page) {
  return props => {
    if (props.isLogin) {
      return <Page/>
    } else {
      return <LoginPage/>
    }
  }
}

function LoginPage() {
  return <h2>LoginPage</h2>
}

function CartPage() {
  return <h2>CartPage</h2>
}

const AuthCartPage = loginAuth(CartPage);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCartPage isLogin={true}/>
      </div>
    )
  }
}
```

#### 1.2.3. 生命周期劫持

```
import React, { PureComponent } from 'react';

class Home extends PureComponent {

  UNSAFE_componentWillMount() {
    this.begin = Date.now();
  }

  componentDidMount() {
    this.end = Date.now();
    const interval = this.end - this.begin;
    console.log(`Home渲染使用时间:${interval}`)
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>我是home的元素,哈哈哈</p>
      </div>
    )
  }
}

class Detail extends PureComponent {
  UNSAFE_componentWillMount() {
    this.begin = Date.now();
  }

  componentDidMount() {
    this.end = Date.now();
    const interval = this.end - this.begin;
    console.log(`Detail渲染使用时间:${interval}`)
  }

  render() {
    return (
      <div>
        <h2>Detail</h2>
        <p>我是detail的元素,哈哈哈</p>
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <Detail/>
      </div>
    )
  }
}
```

我们可以定义如下高阶组件：

```
function logRenderTime(WrapperCpn) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.begin = Date.now();
    }

    componentDidMount() {
      this.end = Date.now();
      const interval = this.end - this.begin;
      console.log(`Home渲染使用时间:${interval}`)
    }

    render() {
      return <WrapperCpn {...this.props}/>
    }
  }
}

const LogHome = logRenderTime(Home);
const LogDetail = logRenderTime(Detail);
```

完整代码如下：

```
import React, { PureComponent } from 'react';

function logRenderTime(WrapperCpn) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.begin = Date.now();
    }

    componentDidMount() {
      this.end = Date.now();
      const interval = this.end - this.begin;
      console.log(`${WrapperCpn.name}渲染使用时间:${interval}`)
    }

    render() {
      return <WrapperCpn {...this.props}/>
    }
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>我是home的元素,哈哈哈</p>
      </div>
    )
  }
}


class Detail extends PureComponent {
  render() {
    return (
      <div>
        <h2>Detail</h2>
        <p>我是detail的元素,哈哈哈</p>
      </div>
    )
  }
}

const LogHome = logRenderTime(Home);
const LogDetail = logRenderTime(Detail);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <LogHome />
        <LogDetail />
      </div>
    )
  }
}
```

### 1.3. 高阶函数的意义

我们会发现利用高阶组件可以针对某些 React 代码进行更加优雅的处理。

其实早期的 React 有提供组件之间的一种复用方式是 mixin，目前已经不再建议使用：

- `Mixin` 可能会相互依赖，相互耦合，不利于代码维护
- 不同的`Mixin`中的方法可能会相互冲突
- `Mixin`非常多时，组件是可以感知到的，甚至还要为其做相关处理，这样会给代码造成滚雪球式的复杂性

当然，HOC 也有自己的一些缺陷：

- `HOC`需要在原组件上进行包裹或者嵌套，如果大量使用`HOC`，将会产生非常多的嵌套，这让调试变得非常困难；
- `HOC`可以劫持`props`，在不遵守约定的情况下也可能造成冲突；

Hooks 的出现，是开创性的，它解决了很多 React 之前的存在的问题，比如 this 指向问题、比如 hoc 的嵌套复杂度问题等等；

后续我们还会专门来学习 hooks 相关的知识，敬请期待；

## 二. 组件补充

### 2.1. ref 转发

```
import React, { PureComponent, createRef } from 'react';

function Home(props) {
  return (
    <div>
      <h2 ref={props.ref}>Home</h2>
      <button>按钮</button>
    </div>
  )
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.homeTitleRef = createRef();
  }

  render() {
    return (
      <div>
        <Home ref={this.homeTitleRef}/>
        <button onClick={e => this.printInfo()}>打印ref</button>
      </div>
    )
  }

  printInfo() {
    console.log(this.homeTitleRef);
  }
}
```

使用 forwardRef

```
import React, { PureComponent, createRef, forwardRef } from 'react';

const Home = forwardRef(function(props, ref) {
  return (
    <div>
      <h2 ref={ref}>Home</h2>
      <button>按钮</button>
    </div>
  )
})

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.homeTitleRef = createRef();
  }

  render() {
    return (
      <div>
        <Home ref={this.homeTitleRef}/>
        <button onClick={e => this.printInfo()}>打印ref</button>
      </div>
    )
  }

  printInfo() {
    console.log(this.homeTitleRef.current);
  }
}
```

### 2.2. Portals

某些情况下，我们希望渲染的内容独立于父组件，甚至是独立于当前挂载到的 DOM 元素中（默认都是挂载到 id 为 root 的 DOM 元素上的）。

Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案：

- 第一个参数（`child`）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment；
- 第二个参数（`container`）是一个 DOM 元素；

```
ReactDOM.createPortal(child, container)
```

通常来讲，当你从组件的 render 方法返回一个元素时，该元素将被挂载到 DOM 节点中离其最近的父节点：

```
render() {
  // React 挂载了一个新的 div，并且把子元素渲染其中
  return (
    <div>
      {this.props.children}
    </div>
  );
}
```

然而，有时候将子元素插入到 DOM 节点中的不同位置也是有好处的：

```
render() {
  // React 并*没有*创建一个新的 div。它只是把子元素渲染到 `domNode` 中。
  // `domNode` 是一个可以在任何位置的有效 DOM 节点。
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  );
}
```

**比如说，我们准备开发一个 Modal 组件，它可以将它的子组件渲染到屏幕的中间位置：**

步骤一：修改 index.html 添加新的节点

```
<div id="root"></div>
<!-- 新节点 -->
<div id="modal"></div>
```

步骤二：编写这个节点的样式：

```
#modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: red;
}
```

步骤三：编写组件代码

```
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

class Modal extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById("modal")
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Modal>
          <h2>我是标题</h2>
        </Modal>
      </div>
    )
  }
}
```

### 2.3. Fragment

在之前的开发中，我们总是在一个组件中返回内容时包裹一个 div 元素：

```
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>当前计数: 0</h2>
        <button>+1</button>
        <button>-1</button>
      </div>
    )
  }
}
```

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutzYJrIh46vLOtx6tsSEtmwtP7861634xCaq5ZSgVkXtWW5jE4Gej0HrIzWZNGOp1yribFngbnPIxA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)界面渲染

我们会发现多了一个 div 元素：

- 这个 div 元素对于某些场景是需要的（比如我们就希望放到一个 div 元素中，再针对性设置样式）
- 某些场景下这个 div 是没有必要的，比如当前这里我可能希望所有的内容直接渲染到 root 中即可；

我们可以删除这个 div 吗？

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutzYJrIh46vLOtx6tsSEtmwgUhoXu0L9wu15ecibl8dfGf6l7a7E4gNv1cfnIaNOQfSibibiaic7QUf00g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)删除 div 报错

我们又希望可以不渲染这样一个 div 应该如何操作呢？

- 使用 Fragment
- Fragment 允许你将子列表分组，而无需向 DOM 添加额外节点；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutzYJrIh46vLOtx6tsSEtmwuuJ9iaOaWlB5y0SxS5JVKTfZSJw3FBYp928R1ZQwuG33dztWQl4ZK3w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)使用 Fragment 效果

React 还提供了 Fragment 的段语法：

- 它看起来像空标签 `<> </>`；

```
export default class App extends PureComponent {
  render() {
    return (
      <>
        <h2>当前计数: 0</h2>
        <button>+1</button>
        <button>-1</button>
      </>
    )
  }
}
```

但是，如果我们需要在 Fragment 中添加 key，那么就不能使用段语法：

```
{
  this.state.friends.map((item, index) => {
    return (
      <Fragment key={item.name}>
        <div>{item.name}</div>
        <div>{item.age}</div>
      </Fragment>
    )
  })
}
```

这里是不支持如下写法的：

```
<key={item.name}>
  <div>{item.name}</div>
  <div>{item.age}</div>
</>
```

### 2.4. StrictMode

`StrictMode` 是一个用来突出显示应用程序中潜在问题的工具。

- 与 `Fragment` 一样，`StrictMode` 不会渲染任何可见的 UI；
- 它为其后代元素触发额外的检查和警告；
- 严格模式检查仅在开发模式下运行；_它们不会影响生产构建_；

可以为应用程序的任何部分启用严格模式：

- *不*会对 `Header` 和 `Footer` 组件运行严格模式检查；
- 但是，`ComponentOne` 和 `ComponentTwo` 以及它们的所有后代元素都将进行检查；

```
import React from 'react';

function ExampleApplication() {
  return (
    <div>
      <Header />
      <React.StrictMode>
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </React.StrictMode>
      <Footer />
    </div>
  );
}
```

**但是检测，到底检测什么呢？**

1.识别不安全的生命周期：

```
class Home extends PureComponent {
  UNSAFE_componentWillMount() {

  }

  render() {
    return <h2>Home</h2>
  }
}
```

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutzYJrIh46vLOtx6tsSEtmwerpibyBrHWKqWoDaeJfaKZKh8pC8CibicYyMMQr8Vtria6ibCquUnuwB9eA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)警告信息

2.使用过时的 ref API

```
class Home extends PureComponent {
  UNSAFE_componentWillMount() {

  }

  render() {
    return <h2 ref="home">Home</h2>
  }
}
```

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutzYJrIh46vLOtx6tsSEtmwiazm7F62dZV819kACAHSF5c0P2rycjNUGkY9rbg5eJuE2ymfyXfibKrQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)警告信息

3.使用废弃的 findDOMNode 方法

在之前的 React API 中，可以通过 findDOMNode 来获取 DOM，不过已经不推荐使用了，可以自行学习演练一下

4.检查意外的副作用

- 这个组件的 constructor 会被调用两次；
- 这是严格模式下故意进行的操作，让你来查看在这里写的一些逻辑代码被调用多次时，是否会产生一些副作用；
- 在生产环境中，是不会被调用两次的；

```jsx
class Home extends PureComponent {
  constructor(props) {
    super(props);

    console.log("home constructor");
  }

  UNSAFE_componentWillMount() {}

  render() {
    return <h2 ref="home">Home</h2>;
  }
}
```

5.检测过时的 context API

早期的 Context 是通过 static 属性声明 Context 对象属性，通过 getChildContext 返回 Context 对象等方式来使用 Context 的；

目前这种方式已经不推荐使用，大家可以自行学习了解一下它的用法；

# React 中的使用 CSS

> 前面说过，整个前端已经是组件化的天下，而 CSS 的设计就不是为组件化而生的，所以在目前组件化的框架中都在需要一种合适的 CSS 解决方案。

## 一. React 中的 css 方案

### 1.1. react 中的 css

事实上，css 一直是 React 的痛点，也是被很多开发者吐槽、诟病的一个点。

在组件化中选择合适的 CSS 解决方案应该符合以下条件：

- 可以编写局部 css：css 具备自己的具备作用域，不会随意污染其他组件内的原生；
- 可以编写动态的 css：可以获取当前组件的一些状态，根据状态的变化生成不同的 css 样式；
- 支持所有的 css 特性：伪类、动画、媒体查询等；
- 编写起来简洁方便、最好符合一贯的 css 风格特点；
- 等等...

在这一点上，Vue 做的要远远好于 React：

- Vue 通过在.vue 文件中编写 `<style><style>` 标签来编写自己的样式；
- 通过是否添加 `scoped` 属性来决定编写的样式是全局有效还是局部有效；
- 通过 `lang` 属性来设置你喜欢的 `less`、`sass`等预处理器；
- 通过内联样式风格的方式来根据最新状态设置和改变 css；
- 等等...

Vue 在 CSS 上虽然不能称之为完美，但是已经足够简洁、自然、方便了，至少统一的样式风格不会出现多个开发人员、多个项目采用不一样的样式风格。

相比而言，React 官方并没有给出在 React 中统一的样式风格：

- 由此，从普通的 css，到 css modules，再到 css in js，有几十种不同的解决方案，上百个不同的库；
- 大家一致在寻找最好的或者说最适合自己的 CSS 方案，但是到目前为止也没有统一的方案；

在这篇文章中，我会介绍挑选四种解决方案来介绍：

- 方案一：内联样式的写法；
- 方案二：普通的 css 写法；
- 方案三：css modules；
- 方案四：css in js（styled-components）；

### 1.2. 普通的解决方案

#### 1.2.1. 内联样式

内联样式是官方推荐的一种 css 样式的写法：

- `style` 接受一个采用小驼峰命名属性的 JavaScript 对象，，而不是 CSS 字符串；
- 并且可以引用 state 中的状态来设置相关的样式；

```
export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      titleColor: "red"
    }
  }

  render() {
    return (
      <div>
        <h2 style={{color: this.state.titleColor, fontSize: "20px"}}>我是App标题</h2>
        <p style={{color: "green", textDecoration: "underline"}}>我是一段文字描述</p>
      </div>
    )
  }
}
```

内联样式的优点:

- 1.内联样式, 样式之间不会有冲突
- 2.可以动态获取当前 state 中的状态

内联样式的缺点：

- 1.写法上都需要使用驼峰标识
- 2.某些样式没有提示
- 3.大量的样式, 代码混乱
- 4.某些样式无法编写(比如伪类/伪元素)

所以官方依然是希望内联合适和普通的 css 来结合编写；

#### 1.2.2. 普通的 css

普通的 css 我们通常会编写到一个单独的文件。

App.js 中编写 React 逻辑代码：

```
import React, { PureComponent } from 'react';

import Home from './Home';

import './App.css';

export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <h2 className="title">我是App的标题</h2>
        <p className="desc">我是App中的一段文字描述</p>
        <Home/>
      </div>
    )
  }
}
```

App.css 中编写 React 样式代码：

```
.title {
  color: red;
  font-size: 20px;
}

.desc {
  color: green;
  text-decoration: underline;
}
```

这样的编写方式和普通的网页开发中编写方式是一致的：

- 如果我们按照普通的网页标准去编写，那么也不会有太大的问题；
- 但是组件化开发中我们总是希望组件是一个独立的模块，即便是样式也只是在自己内部生效，不会相互影响；
- 但是普通的 css 都属于全局的 css，样式之间会相互影响；

比如编写 Home.js 的逻辑代码：

```
import React, { PureComponent } from 'react';

import './Home.css';

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <h2 className="title">我是Home标题</h2>
        <span className="desc">我是Home中的span段落</span>
      </div>
    )
  }
}
```

又编写了 Home.css 的样式代码：

```
.title {
  color: orange;
}

.desc {
  color: purple;
}
```

最终样式之间会相互层叠，只有一个样式会生效；

#### 1.2.3. css modules

css modules 并不是 React 特有的解决方案，而是所有使用了类似于 webpack 配置的环境下都可以使用的。

但是，如果在其他项目中使用，那么我们需要自己来进行配置，比如配置 webpack.config.js 中的`modules: true`等。

但是 React 的脚手架已经内置了 css modules 的配置：

- .css/.less/.scss 等样式文件都修改成 .module.css/.module.less/.module.scss 等；
- 之后就可以引用并且进行使用了；

使用的方式如下：

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)css modules 用法

这种 css 使用方式最终生成的 class 名称会全局唯一：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutUCc4xM3CqWTZibCV9hRtKIxTn3Bsj8ofnvXXGfms4KhUzVozsdIBMTiaJdsXMawFzyBbYJcIx6ewA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)生成的代码结构

css modules 确实解决了局部作用域的问题，也是很多人喜欢在 React 中使用的一种方案。

但是这种方案也有自己的缺陷：

- 引用的类名，不能使用连接符(.home-title)，在 JavaScript 中是不识别的；
- 所有的 className 都必须使用`{style.className}` 的形式来编写；
- 不方便动态来修改某些样式，依然需要使用内联样式的方式；

如果你觉得上面的缺陷还算 OK，那么你在开发中完全可以选择使用 css modules 来编写，并且也是在 React 中很受欢迎的一种方式。

## 二. CSS in JS

### 2.1. 认识 CSS in JS

实际上，官方文档也有提到过 CSS in JS 这种方案：

- “CSS-in-JS” 是指一种模式，其中 CSS 由 JavaScript 生成而不是在外部文件中定义；
- _注意此功能并不是 React 的一部分，而是由第三方库提供。_ React 对样式如何定义并没有明确态度；

在传统的前端开发中，我们通常会将结构（HTML）、样式（CSS）、逻辑（JavaScript）进行分离。

- 但是在前面的学习中，我们就提到过，React 的思想中认为逻辑本身和 UI 是无法分离的，所以才会有了 JSX 的语法。
- 样式呢？样式也是属于 UI 的一部分；
- 事实上 CSS-in-JS 的模式就是一种将样式（CSS）也写入到 JavaScript 中的方式，并且可以方便的使用 JavaScript 的状态；
- 所以 React 有被人称之为 `All in JS`；

当然，这种开发的方式也受到了很多的批评：

- Stop using CSS in JavaScript for web development
- https://hackernoon.com/stop-using-css-in-javascript-for-web-development-fa32fb873dcc

批评声音虽然有，但是在我们看来很多优秀的 CSS-in-JS 的库依然非常强大、方便：

- CSS-in-JS 通过 JavaScript 来为 CSS 赋予一些能力，包括类似于 CSS 预处理器一样的样式嵌套、函数定义、逻辑复用、动态修改状态等等；
- 依然 CSS 预处理器也具备某些能力，但是获取动态状态依然是一个不好处理的点；
- 所以，目前可以说 CSS-in-JS 是 React 编写 CSS 最为受欢迎的一种解决方案；

目前比较流行的 CSS-in-JS 的库有哪些呢？

- styled-components
- emotion
- glamorous

目前可以说 styled-components 依然是社区最流行的 CSS-in-JS 库，所以我们以 styled-components 的讲解为主；

安装 styled-components：

```
yarn add styled-components
```

### 2.2. styled-components

#### 2.2.1. 标签模板字符串

ES6 中增加了`模板字符串`的语法，这个对于很多人来说都会使用。

但是模板字符串还有另外一种用法：标签模板字符串（Tagged Template Literals）。

我们一起来看一个普通的 JavaScript 的函数：

```
function foo(...args) {
  console.log(args);
}

foo("Hello World");
```

正常情况下，我们都是通过 `函数名()` 方式来进行调用的，其实函数还有另外一种调用方式：

```
foo`Hello World`; // [["Hello World"]]
```

如果我们在调用的时候插入其他的变量：

- 模板字符串被拆分了；
- 第一个元素是数组，是被模块字符串拆分的字符串组合；
- 后面的元素是一个个模块字符串传入的内容；

```
foo`Hello ${name}`; // [["Hello ", ""], "kobe"];
```

在 styled component 中，就是通过这种方式来解析模块字符串，最终生成我们想要的样式的

#### 2.2.2. styled 基本使用

styled-components 的本质是通过函数的调用，最终创建出一个`组件`：

- 这个组件会被自动添加上一个不重复的 class；
- styled-components 会给该 class 添加相关的样式；

比如我们正常开发出来的 Home 组件是这样的格式：

```
<div>
  <h2>我是Home标题</h2>
  <ul>
    <li>我是列表1</li>
    <li>我是列表2</li>
    <li>我是列表3</li>
  </ul>
</div>
```

我们希望给外层的 div 添加一个特殊的 class，并且添加相关的样式：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutUCc4xM3CqWTZibCV9hRtKIIJUsH5F6RPzywhSvJ2AGsaVjseUACyhUjm8T7DMNb7t0ib65EkibNSaA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)styled-components 基本使用

另外，它支持类似于 CSS 预处理器一样的样式嵌套：

- 支持直接子代选择器或后代选择器，并且直接编写样式；
- 可以通过&符号获取当前元素；
- 直接伪类选择器、伪元素等；

```
const HomeWrapper = styled.div`
  color: purple;

  h2 {
    font-size: 50px;
  }

  ul > li {
    color: orange;

    &.active {
      color: red;
    }

    &:hover {
      background: #aaa;
    }

    &::after {
      content: "abc"
    }
  }
`
```

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutUCc4xM3CqWTZibCV9hRtKIESvz75dpoFjFJ53hC1vWpsruDfQNcOENSdRXcTFq8HK9ibHHmmZVVYA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)最终效果如下

#### 2.2.3. props、attrs 属性

**props 可以穿透**

定义一个 styled 组件：

```
const HYInput = styled.input`
  border-color: red;

  &:focus {
    outline-color: orange;
  }
`
```

使用 styled 的组件：

```
<HYInput type="password"/>
```

**props 可以被传递给 styled 组件**

```
<HomeWrapper color="blue">
</HomeWrapper>
```

使用时可以获取到传入的 color：

- 获取 props 需要通过${}传入一个插值函数，props 会作为该函数的参数；
- 这种方式可以有效的解决动态样式的问题；

```
const HomeWrapper = styled.div`
  color: ${props => props.color};
}
```

**添加 attrs 属性**

```
const HYInput = styled.input.attrs({
  placeholder: "请填写密码",
  paddingLeft: props => props.left || "5px"
})`
  border-color: red;
  padding-left: ${props => props.paddingLeft};

  &:focus {
    outline-color: orange;
  }
`
```

#### 2.2.4. styled 高级特性

**支持样式的继承**

编写 styled 组件

```
const HYButton = styled.button`
  padding: 8px 30px;
  border-radius: 5px;
`

const HYWarnButton = styled(HYButton)`
  background-color: red;
  color: #fff;
`

const HYPrimaryButton = styled(HYButton)`
  background-color: green;
  color: #fff;
`
```

按钮的使用

```
<HYButton>我是普通按钮</HYButton>
<HYWarnButton>我是警告按钮</HYWarnButton>
<HYPrimaryButton>我是主要按钮</HYPrimaryButton>
```

**styled 设置主题**

在全局定制自己的主题，通过 Provider 进行共享：

```
import { ThemeProvider } from 'styled-components';

<ThemeProvider theme={{color: "red", fontSize: "30px"}}>
  <Home />
  <Profile />
</ThemeProvider>
```

在 styled 组件中可以获取到主题的内容：

```
const ProfileWrapper = styled.div`
  color: ${props => props.theme.color};
  font-size: ${props => props.theme.fontSize};
`
```

### 2.3. classnames

**vue 中添加 class**

在 vue 中给一个元素添加动态的 class 是一件非常简单的事情：

你可以通过传入一个对象：

```
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```

你也可以传入一个数组：

```
<div v-bind:class="[activeClass, errorClass]"></div>
```

甚至是对象和数组混合使用：

```
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```

**react 中添加 class**

React 在 JSX 给了我们开发者足够多的灵活性，你可以像编写 JavaScript 代码一样，通过一些逻辑来决定是否添加某些 class：

```
import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: true
    }
  }

  render() {
    const {isActive} = this.state;

    return (
      <div>
        <h2 className={"title " + (isActive ? "active": "")}>我是标题</h2>
        <h2 className={["title", (isActive ? "active": "")].join(" ")}>我是标题</h2>
      </div>
    )
  }
}
```

这个时候我们可以借助于一个第三方的库：classnames

- 很明显，这是一个用于动态添加 classnames 的一个库。

我们来使用一下最常见的使用案例：

```jsx
classNames("foo", "bar"); // => 'foo bar'
classNames("foo", { bar: true }); // => 'foo bar'
classNames({ "foo-bar": true }); // => 'foo-bar'
classNames({ "foo-bar": false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames("foo", { bar: true, duck: false }, "baz", { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, "bar", undefined, 0, 1, { baz: null }, ""); // => 'bar 1'
```

# AntDesign UI 库

> 对于学习过程，不是特别建议从一开始就使用别人的第三方库 UI 库，更重要的是要学会组件化相关的知识（就想前面我们已经讲了非常相关知识），之后自己来封装、设计一套自己的可复用组件。
>
> 但是在公司开发为了开发效率，我们往往也会选择一些非常优秀的第三方 UI 库，而 AntDesign 就是这样的一套优秀的 UI 组件库。

## 一. 认识 AntDesign

### 1.1. AntDesign 的介绍

`AntDesign` ，简称 `antd` 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。

AntDesign 的特点：

- 🌈 提炼自企业级中后台产品的交互语言和视觉风格。
- 📦 开箱即用的高质量 React 组件。
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
- ⚙️ 全链路开发和设计工具体系。
- 🌍 数十个国际化语言支持。
- 🎨 深入每个细节的主题定制能力。

```
全链路开发和设计指的是什么？
```

- 全链路这个词我记得是 16 年左右阿里提出的；
- 从`业务战略—用户场景—设计目标—交互体验—用户流程—预期效率`全方面进行分析和考虑；
- 这个主要是产品经理会考虑的一个点；

AntDesign 的兼容性：

- 现代浏览器和 IE11（需要 polyfills）。
- 支持服务端渲染。
- Electron

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXus6phNgnQ8BrOS0ZNEcqA3GHsz85KThTQyUpLjYuuZyPKYA28vc54jliaeS0Ya2OVYDvU7T3KvQmPw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)浏览器兼容

`antd@2.0` 之后不再支持 IE8，`antd@4.0` 之后不再支持 IE9/10。

目前稳定的版本：v4.4.0

### 1.2. AntDesign 的安装

**使用 npm 或 yarn 安装**

npm 安装：

```
npm install antd --save
```

yarn 安装：

```
yarn add antd
```

我们需要在 index.js 中引入全局的 Antd 样式：

```
import "antd/dist/antd.css";
```

在 App.js 中就可以使用一些组件了：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXus6phNgnQ8BrOS0ZNEcqA3GQaWyHH6J6zQ65dibhianJmyhVDs0uKy2KmgtQMO7fOMhrl2ibOdGLzwwA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)antd 的使用

**考虑一个问题：Antd 是否会将一些没有用的代码（组件或者逻辑代码）引入，造成包很大呢？**

`antd` 官网有提到：`antd` 的 JS 代码默认支持基于 ES modules 的 tree shaking，对于 js 部分，直接引入 `import { Button } from 'antd'` 就会有按需加载的效果。

### 1.3. 高级配置

#### 1.3.1. 认识 craco

上面的使用过程是无法对主题进行配置的，好像对主题等相关的高级特性进行配置，需要修改 create-react-app 的默认配置。

如何修改 create-react-app 的默认配置呢？

- 前面我们讲过，可以通过`yarn run eject`来暴露出来对应的配置信息进行修改；
- 但是对于 webpack 并不熟悉的人来说，直接修改 CRA 的配置是否会给你的项目带来负担，甚至会增加项目的隐患和不稳定性呢？
- 所以，在项目开发中是不建议大家直接去修改 CRA 的配置信息的；

那么如何来进行修改默认配置呢？社区目前有两个比较常见的方案：

- react-app-rewired + customize-cra；（这个是 antd 早期推荐的方案）
- craco；（目前 antd 推荐的方案）

第一步：安装 craco：

```
yarn add @craco/craco
```

第二步：修改 package.json 文件

- 原本启动时，我们是通过 react-scripts 来管理的；
- 现在启动时，我们通过 craco 来管理；

```
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}
```

第三步：在根目录下创建 craco.config.js 文件用于修改默认配置

```
module.exports = {
  // 配置文件
}
```

#### 1.3.2. 配置主题

按照 配置主题 的要求，自定义主题需要用到类似 less-loader 提供的 less 变量覆盖功能：

- 我们可以引入 craco-less 来帮助加载 less 样式和修改变量；

安装 `craco-less`：

```
yarn add craco-less
```

修改 craco.config.js 中的 plugins：

- 使用`modifyVars`可以在运行时修改 LESS 变量；
-

```
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
```

引入 antd 的样式时，引入 antd.less 文件：

```
// import "antd/dist/antd.css";
import 'antd/dist/antd.less';
```

修改后重启 `yarn start`，如果看到一个绿色的按钮就说明配置成功了。

#### 1.3.3. 配置别名

在项目开发中，某些组件或者文件的层级会较深，

- 如果我们通过上层目录去引入就会出现这样的情况：`../../../../components/button`；
- 如果我们可以配置别名，就可以直接从根目录下面开始查找文件：`@/components/button`，甚至是：`components/button`；

配置别名也需要修改 webpack 的配置，当然我们也可以借助于 craco 来完成：

```
...

const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  ...
  ,
  webpack: {
    alias: {
      '@': resolve("src"),
      'components': resolve("src/components"),
    }
  }
}
```

在导入时就可以按照下面的方式来使用了：

```
import HYCommentInput from '@/components/comment-input';
import HYCommentItem from 'components/comment-item';
```

## 二. AntDesign 案例

我们通过 AntDesign 来编写一个案例：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXus6phNgnQ8BrOS0ZNEcqA3GQ8EqiabT3UGZEptHibF8YDXanHS2icZ7BQqbMkGFRURl68aOxxRwnicHfQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)image-20200706111432484

### 1.1. 案例-评论框

我们选来完成评论框，评论框有两部分组成：

- TextArea 的输入框：Input.TextArea；
- 提交评论的按钮：Button；

```
import React, { PureComponent } from 'react';

import moment from 'moment';
import {
  Form, Button, Input
} from 'antd';

export default class HYCommentInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    }
  }

  render() {
    return (
      <div>
        <Input.TextArea rows={4} onChange={this.onChange.bind(this)} value={this.state.value} />
        <Button onClick={this.onSubmit.bind(this)} type="primary">
          添加评论
        </Button>
      </div>
    )
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  onSubmit() {
    console.log(this.state.value, moment().fromNow());
    const commentInfo = {
      id: Date.now(),
      name: "coderwhy",
      avatar: "https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
      content: <p>{this.state.value}</p>,
      datetime: moment()
    }

    this.props.submitComment(commentInfo);
    this.setState({
      value: ""
    });
  }
}
```

### 1.2. 案例-评论列表

评论列表主要是使用 Comment 组件，Comment 组件有一些属性：

- author：展示作者的名称；

- avatar：展示作者的头像；

- - 可以使用 Avatar 的组件进行展示；

- content：展示评论的内容；

- datetime：展示评论的时间：

- - 这里我们可以使用 Tooltip 组件，当鼠标放在上面时，会显示对应的 title 内容；

- actions：评论下方的操作按钮；

- - 这里我们可以使用 DeleteOutlined，但是它来自 `@ant-design/icons`，需要我们进行安装；

```
import React, { PureComponent } from 'react';

import {
  Comment,
  Avatar,
  Tooltip
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export default class HYCommentItem extends PureComponent {
  render() {
    const { comment } = this.props;

    return (
      <Comment
        author={<a href="/#">{comment.name}</a>}
        avatar={
          <Avatar
            src={comment.avatar}
            alt={comment.name}
          />
        }
        content={comment.content}
        datetime={
          <Tooltip title={comment.datetime.format('YYYY-MM-DD HH:mm:ss')}>
            <span>{comment.datetime.fromNow()}</span>
          </Tooltip>
        }
        actions={ this.getActions() }
      />
    )
  }

  getActions() {
    return [
      <span onClick={this.props.removeItem}><DeleteOutlined/> 删除</span>
    ]
  }
}
```

### 1.3. 案例-App 组件

我们在 App 组件中，使用封装的两个组件：

```jsx
import React, { PureComponent } from "react";

import HYCommentInput from "./components/comment-input";
import HYCommentItem from "./components/comment-item";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      commentList: [],
    };
  }

  render() {
    return (
      <div style={{ width: "500px", padding: "20px" }}>
        {this.state.commentList.map((item, index) => {
          return (
            <HYCommentItem
              key={item.id}
              comment={item}
              index={index}
              removeItem={(e) => this.removeItem(index)}
            />
          );
        })}
        <HYCommentInput submitComment={this.submitComment.bind(this)} />
      </div>
    );
  }

  submitComment(comment) {
    this.setState({
      commentList: [...this.state.commentList, comment],
    });
  }

  removeItem(index) {
    const newCommentList = [...this.state.commentList];
    newCommentList.splice(index, 1);
    this.setState({
      commentList: newCommentList,
    });
  }
}
```

# Axios 库使用

## 一. axios 库的基本使用

### 1.1. 网络请求的选择

目前前端中发送网络请求的方式有很多种：

选择一:传统的 Ajax 是基于 XMLHttpReques(XHR)

- 为什么不用它呢?

- - 非常好解释, 配置和调用方式等非常混乱.
  - 编码起来看起来就非常蛋疼.
  - 所以真实开发中很少直接使用, 而是使用 jQuery-Ajax

选择二: 在前面的学习中, 我们经常会使用 jQuery-Ajax

- 相对于传统的 Ajax 非常好用.

- 为什么不选择它呢？

- - jQuery 整个项目太大，单纯使用 ajax 却要引入整个 JQuery 非常的不合理（采取个性化打包的方案又不能享受 CDN 服务）；
  - 基于原生的 XHR 开发，XHR 本身的架构不清晰，已经有了 fetch 的替代方案；
  - 尽管 JQuery 对我们前端的开发工作曾有着深远的影响，但是的确正在退出历史舞台；

选择三: Fetch API

- 选择或者不选择它?

- - Fetch 是 AJAX 的替换方案，基于 Promise 设计，很好的进行了关注分离，有很大一批人喜欢使用 fetch 进行项目开发；
  - 但是 Fetch 的缺点也很明显，首先需要明确的是 Fetch 是一个 low-level（底层）的 API，没有帮助你封装好各种各样的功能和实现；
  - 比如发送网络请求需要自己来配置 Header 的 Content-Type，不会默认携带 cookie 等；
  - 比如错误处理相对麻烦（只有网络错误才会 reject，HTTP 状态码 404 或者 500 不会被标记为 reject）；
  - 比如不支持取消一个请求，不能查看一个请求的进度等等；
  - MDN Fetch 学习地址：https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch

选择四：axios

- axios: ajax i/o system.

- axios 是目前前端使用非常广泛的网络请求库，包括 Vue 作者也是推荐在 vue 中使用 axios；

- 主要特点包括：

- - 在浏览器中发送 XMLHttpRequests 请求；
  - 在 node.js 中发送 http 请求；
  - 支持 Promise API；
  - 拦截请求和响应；
  - 转换请求和响应数据；
  - 等等；

### 1.2. axios 的基本使用

支持多种请求方式:

- paxios(config)
- axios.request(config)
- axios.get(url[, config])
- axios.delete(url[, config])
- axios.head(url[, config])
- axios.post(url[, data[, config]])
- axios.put(url[, data[, config]])
- axios.patch(url[, data[, config]])

**注意：下面的测试我都会使用 httpbin.org 这个网站来测试，是我个人非常喜欢的一个网站；**

我们来发送一个 get 请求：

```
// 1.发送一个get请求
    axios({
      method: "get",
      url: "https:httpbin.org/get",
      params: {
        name: "coderwhy",
        age: 18
      }
    }).then(res => {
      console.log("请求结果:", res);
    }).catch(err => {
      console.log("错误信息:", err);
    });
```

你也可以直接发送 get，那么就不需要传入 method（当然不传入默认也是 get 请求）

```
    axios.get("https://httpbin.org/get", {
      params: {
        name: "kobe",
        age: 40
      }
    }).then(res => {
      console.log("请求结果:", res);
    }).catch(err => {
      console.log("错误信息:", err);
    });
```

当然，你也可以使用 await、async 在 componentDidMount 中发送网络请求：

```
async componentDidMount() {
    const result = await axios.get("https://httpbin.org/get", {
      params: {
        name: "kobe",
        age: 40
      }
    })
    console.log(result);
  }
```

那么，有错误的时候，await 中如何处理呢？使用 try-catch 来处理错误信息

```
async componentDidMount() {
    try {
      const result = await axios.get("https://httpbin.org/get", {
        params: {
          name: "kobe",
          age: 40
        }
      })
      console.log(result);
    } catch(err) {
      console.log(err);
    }
  }
```

发送多个并发的请求：

```
const request1 = axios.get("https://httpbin.org/get", {
      params: {name: "why", age: 18}
    });
    const request2 = axios.post("https://httpbin.org/post", {
      name: "kobe",
      age: 40
    })
    axios.all([request1, request2]).then(([res1, res2]) => {
      console.log(res1, res2);
    }).catch(err => {
      console.log(err);
    })
```

**选读：axios(config)和 axios.get()或 axios.post 有上什么区别呢？**

查看源码就会发现，`axios.get()或axios.post`本质上最终都是在调用 axios 的 request

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuuG35I9eBia8f2k3R89XSYE5Gkp8TfONkbibXJQx86zalQZohXW3F8Cjse3rBfUNib6NEd3aWYxz8aow/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)在 Axios 的原型上添加各种请求方法

本质上都是 request 请求：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuuG35I9eBia8f2k3R89XSYE5h7vVzUMh7WPTItV8zjrW4fdH8571xA7fGnSlmHZ56WaQQDnZtze5Wg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)本质都是 request 请求

### 1.3. axios 的配置信息

#### 1.3.1. 请求配置选项

下面是创建请求时可以用的配置选项：

- 只有 URL 是必传的；
- 如果没有指定 method，请求将默认使用`get`请求；

```
{
   // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // default

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data, headers) {
    // 对 data 进行任意转换处理
    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    return data;
  }],

  // `headers` 是即将被发送的自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {
    ID: 12345
  },

   // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属：Stream
  data: {
    firstName: 'Fred'
  },

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,

   // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // default

  // `adapter` 允许自定义处理请求，以使测试更轻松
  // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  adapter: function (config) {
    /* ... */
  },

 // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

   // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default

  // `responseEncoding` indicates encoding to use for decoding responses
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default

   // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

   // `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

   // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,

  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5, // default

  // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Only either `socketPath` or `proxy` can be specified.
  // If both are specified, `socketPath` is used.
  socketPath: null, // default

  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // `keepAlive` 默认没有启用
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` 指定用于取消请求的 cancel token
  // （查看后面的 Cancellation 这节了解更多）
  cancelToken: new CancelToken(function (cancel) {
  })
}
```

#### 1.3.2. 响应结构信息

某个请求的响应包含以下信息：

```
{
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 服务器响应的头
  headers: {},

   // `config` 是为请求提供的配置信息
  config: {},
 // 'request'
  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance the browser
  request: {}
}
```

#### 1.3.3. 默认配置信息

你可以指定将被用在各个请求的配置默认值：

**全局的 axios 默认配置：**

```
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

**自定义实例默认配置：**

```
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

配置信息的查找顺序如下：

- 优先是请求的 config 参数配置；
- 其次是实例的 default 中的配置；
- 最后是创建实例时的配置；

### 1.4. axios 的拦截器

axios 库有一个非常好用的特性是可以添加拦截器：

- 请求拦截器：在发送请求时，请求被拦截；

- - 发送网络请求时，在页面中添加一个 loading 组件作为动画；
  - 某些网络请求要求用户必须登录，可以在请求中判断是否携带了 token，没有携带 token 直接跳转到 login 页面；
  - 对某些请求参数进行序列化；

- 响应拦截器：在响应结果中，结果被拦截；

- - 响应拦截中可以对结果进行二次处理（比如服务器真正返回的数据其实是在 response 的 data 中）；
  - 对于错误信息进行判断，根据不同的状态进行不同的处理；

```
axios.interceptors.request.use(config => {
  // 1.发送网络请求时，在页面中添加一个loading组件作为动画；

  // 2.某些网络请求要求用户必须登录，可以在请求中判断是否携带了token，没有携带token直接跳转到login页面；

  // 3.对某些请求参数进行序列化；
  return config;
}, err => {
  return err;
})

axios.interceptors.response.use(response => {
  return response.data;
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case400:
        err.message = "请求错误";
        break;
      case401:
        err.message = "未授权访问";
        break;
    }
  }
  return err;
})
```

## 二. axios 库的二次封装

### 2.1. 为什么要封装

为什么我们要对 axios 进行二次封装呢？

- 默认情况下我们是可以直接使用 axios 来进行开发的；
- 但是我们考虑一个问题，假如有 100 多处中都直接依赖 axios，突然间有一天 axios 出现了重大 bug，并且该库已经不再维护，这个时候你如何处理呢？
- 大多数情况下我们会寻找一个新的网络请求库或者自己进行二次封装；
- 但是有 100 多处都依赖了 axios，方便我们进行修改吗？我们所有依赖 axios 库的地方都需要进行修改；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuuG35I9eBia8f2k3R89XSYE5UYGsRxPvTBmLlIaNI19ElhUTAQQkgqX6Py1Zm1FKVakBEgtSsd7gVg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)直接依赖 axios

如果是自己进行了二次封装，并且暴露一套自己的 API：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuuG35I9eBia8f2k3R89XSYE5F9DotgxzWTicRNbBnZLCQoz8yUV6FecGGJDXTfpHSM9z6cjo6MqQoOg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)自己进行二次封装

### 2.2. axios 二次封装

创建一个 service 文件夹（其他名字都可以），用于存放所有的网络请求相关的内容。

创建文件 config.js，用于存放一些配置信息：

```
exportconst TIMEOUT = 5000;

const devBaseURL = "https://httpbin.org";
const proBaseURL = "https://production.org";
console.log(process.env.NODE_ENV);
exportconst baseURL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;
```

创建 request.js，用于封装请求对象：

```
import axios from'axios';

import {
  TIMEOUT,
  baseURL
 } from"./config";

const instance = axios.create({
  timeout: TIMEOUT,
  baseURL: baseURL
})

axios.interceptors.request.use(config => {
  // 1.发送网络请求时，在页面中添加一个loading组件作为动画；

  // 2.某些网络请求要求用户必须登录，可以在请求中判断是否携带了token，没有携带token直接跳转到login页面；

  // 3.对某些请求参数进行序列化；
  return config;
}, err => {
  return err;
})

instance.interceptors.response.use(response => {
  return response.data;
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case400:
        err.message = "请求错误";
        break;
      case401:
        err.message = "未授权访问";
        break;
    }
  }
  return err;
})

exportdefault instance;
```

使用测试：

```js
request({
  url: "/get",
  params: {
    name: "why",
    age: 18,
  },
})
  .then(console.log)
  .catch(console.error);

request({
  url: "/post",
  method: "post",
  data: {
    name: "kobe",
    age: 40,
  },
})
  .then(console.log)
  .catch(console.error);
```

# React 过渡动画

> 在开发中，我们想要给一个组件的显示和消失添加某种过渡动画，可以很好的增加用户体验。
>
> 当然，我们可以通过原生的 CSS 来实现这些过渡动画，但是 React 社区为我们提供了 react-transition-group 用来完成过渡动画。

## 一. react-transition-group 介绍

React 曾为开发者提供过动画插件 `react-addons-css-transition-group`，后由社区维护，形成了现在的 `react-transition-group`。

这个库可以帮助我们方便的实现组件的 `入场` 和 `离场` 动画，使用时需要进行额外的安装：

```
# npm
npm install react-transition-group --save

# yarn
yarn add react-transition-group
```

react-transition-group 本身非常小，不会为我们应用程序增加过多的负担。

react-transition-group 主要包含四个组件：

- Transition

- - 该组件是一个和平台无关的组件（不一定要结合 CSS）；
  - 在前端开发中，我们一般是结合 CSS 来完成样式，所以比较常用的是 CSSTransition；

- CSSTransition

- - 在前端开发中，通常使用 CSSTransition 来完成过渡动画效果

- SwitchTransition

- - 两个组件显示和隐藏切换时，使用该组件

- TransitionGroup

- - 将多个动画组件包裹在其中，一般用于列表中元素的动画；

## 二. react-transition-group 使用

### 2.1. CSSTransition

https://reactcommunity.org/react-transition-group/

CSSTransition 是基于 Transition 组件构建的：

- CSSTransition 执行过程中，有三个状态：appear、enter、exit；

- 它们有三种状态，需要定义对应的 CSS 样式：

- - 第一类，开始状态：对于的类是-appear、-enter、exit；
  - 第二类：执行动画：对应的类是-appear-active、-enter-active、-exit-active；
  - 第三类：执行结束：对应的类是-appear-done、-enter-done、-exit-done；

CSSTransition 常见对应的属性：

- in：触发进入或者退出状态

- - 如果添加了`unmountOnExit={true}`，那么该组件会在执行退出动画结束后被移除掉；
  - 当 in 为 true 时，触发进入状态，会添加-enter、-enter-acitve 的 class 开始执行动画，当动画执行结束后，会移除两个 class，并且添加-enter-done 的 class；
  - 当 in 为 false 时，触发退出状态，会添加-exit、-exit-active 的 class 开始执行动画，当动画执行结束后，会移除两个 class，并且添加-enter-done 的 class；

- classNames：动画 class 的名称

- - 决定了在编写 css 时，对应的 class 名称：比如 card-enter、card-enter-active、card-enter-done；

- timeout：

- - 过渡动画的时间

- appear：

- - 是否在初次进入添加动画（需要和 in 同时为 true）

- 其他属性可以参考官网来学习：

- - https://reactcommunity.org/react-transition-group/transition

CSSTransition 对应的钩子函数：主要为了检测动画的执行过程，来完成一些 JavaScript 的操作

- onEnter：在进入动画之前被触发；
- onEntering：在应用进入动画时被触发；
- onEntered：在应用进入动画结束后被触发；

```
import './App.css'

import { CSSTransition } from 'react-transition-group';

import { Card, Avatar, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isShowCard: true
    }
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={e => this.setState({isShowCard: !this.state.isShowCard})}>显示/隐藏</Button>
        <CSSTransition in={this.state.isShowCard}
                       classNames="card"
                       timeout={1000}
                       unmountOnExit={true}
                       onEnter={el => console.log("进入动画前")}
                       onEntering={el => console.log("进入动画")}
                       onEntered={el => console.log("进入动画后")}
                       onExit={el => console.log("退出动画前")}
                       onExiting={el => console.log("退出动画")}
                       onExited={el => console.log("退出动画后")}
                      >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div>
    )
  }
}
```

对应的 css 样式如下：

```
.card-enter, .card-appear {
  opacity: 0;
  transform: scale(.8);
}

.card-enter-active, .card-appear-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 300ms, transform 300ms;
}

.card-exit {
  opacity: 1;
}

.card-exit-active {
  opacity: 0;
  transform: scale(.8);
  transition: opacity 300ms, transform 300ms;
}
```

### 2.2. SwitchTransition

SwitchTransition 可以完成两个组件之间切换的炫酷动画：

- 比如我们有一个按钮需要在 on 和 off 之间切换，我们希望看到 on 先从左侧退出，off 再从右侧进入；
- 这个动画在 vue 中被称之为 vue transition modes；
- react-transition-group 中使用 SwitchTransition 来实现该动画；

SwitchTransition 中主要有一个属性：mode，有两个值

- in-out：表示新组件先进入，旧组件再移除；
- out-in：表示就组件先移除，新组建再进入；

如何使用 SwitchTransition 呢？

- SwitchTransition 组件里面要有 CSSTransition 或者 Transition 组件，不能直接包裹你想要切换的组件；
- SwitchTransition 里面的 CSSTransition 或 Transition 组件不再像以前那样接受 in 属性来判断元素是何种状态，取而代之的是 key 属性；

我们来演练一个按钮的入场和出场效果：

```
import { SwitchTransition, CSSTransition } from "react-transition-group";

export default class SwitchAnimation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOn: true
    }
  }

  render() {
    const {isOn} = this.state;

    return (
      <SwitchTransition mode="out-in">
        <CSSTransition classNames="btn"
                       timeout={500}
                       key={isOn ? "on" : "off"}>
          {
          <button onClick={this.btnClick.bind(this)}>
            {isOn ? "on": "off"}
          </button>
        }
        </CSSTransition>
      </SwitchTransition>
    )
  }

  btnClick() {
    this.setState({isOn: !this.state.isOn})
  }
}
```

对应的 css 代码：

```
.btn-enter {
  transform: translate(100%, 0);
  opacity: 0;
}

.btn-enter-active {
  transform: translate(0, 0);
  opacity: 1;
  transition: all 500ms;
}

.btn-exit {
  transform: translate(0, 0);
  opacity: 1;
}

.btn-exit-active {
  transform: translate(-100%, 0);
  opacity: 0;
  transition: all 500ms;
}
```

### 2.3. TransitionGroup

当我们有一组动画时，需要将这些 CSSTransition 放入到一个 TransitionGroup 中来完成动画：

```jsx
import React, { PureComponent } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default class GroupAnimation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
    };
  }

  render() {
    return (
      <div>
        <TransitionGroup>
          {this.state.friends.map((item, index) => {
            return (
              <CSSTransition classNames="friend" timeout={300} key={index}>
                <div>{item}</div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <button onClick={(e) => this.addFriend()}>+friend</button>
      </div>
    );
  }

  addFriend() {
    this.setState({
      friends: [...this.state.friends, "coderwhy"],
    });
  }
}
```

# Redux(一)初见

> 在 React 的开发过程中，Redux 对于我们是非常重要的。
>
> 但是对于很多人来说，初次接触 redux 会感觉 redux 的学习坡度非常陡峭，难度比较大。
>
> 在接下来，我会通过一个系列的方式循循渐进、层层深入的方式来讲解 Redux：从 redux 的独立使用过程、到 redux 的结构划分、到 redux 结合 react 的过程、到 redux 中异步操作、到复杂数据的结构处理、到结合 immutable 的使用。
>
> 整个过程，都是在现有知识的基础之上层层递增、一步步掌握 redux 的使用！

## 一. 认识 Redux

### 1.1. JavaScript 纯函数

函数式编程中有一个概念叫纯函数，JavaScript 符合函数式编程的范式，所以也有纯函数的概念；

在 React 中，纯函数的概念非常重要，在接下来我们学习的 Redux 中也非常重要，所以我们有必须来回顾（如果你之前没有学过，那么你就是学习）一下纯函数。

**纯函数的维基百科定义：**

在程序设计中，若一个函数符合以下条件，那么这个函数被称为纯函数：

- 此函数在相同的输入值时，需产生相同的输出。函数的输出和输入值以外的其他隐藏信息或状态无关，也和由 I/O 设备产生的外部输出无关。
- 该函数不能有语义上可观察的函数副作用，诸如“触发事件”，使输出设备输出，或更改输出值以外物件的内容等。

当然上面的定义会过于的晦涩，所以我简单总结一下：

- 确定的输入，一定会产生确定的输出；
- 函数在执行过程中，不能产生副作用；

那么我们来看几个函数是否是纯函数：

案例一：

- 很明显，下面的函数是一个纯函数；
- 它的输出是依赖我们的输入内容，并且中间没有产生任何副作用；

```
function sum(num1, num2) {
  return num1 + num2;
}
```

案例二：

- add 函数不是一个纯函数；
- 函数依赖一个外部的变量，变量发生改变时，会影响：确定的输入，产生确定的输出；
- 能否改进成纯函数呢？const foo = 5; 即可

```
let foo = 5;

function add(num) {
  return foo + num;
}

console.log(add(5));
foo = 10;
console.log(add(5));
```

案例三：

- printInfo 不是一个纯函数；
- 虽然无论输入什么，最终输出都是 undefined，但是它产生了副作用，修改了传入的对象；

```
function printInfo(info) {
  console.log(info.name, info.age);
  info.name = "哈哈哈";
}
```

当然纯函数还有很多的变种，但是我们只需要理解它的核心就可以了。

为什么纯函数在函数式编程中非常重要呢？

- 因为你可以`安心的写`和`安心的用`；
- 你在写的时候保证了函数的纯度，只是但是实现自己的业务逻辑即可，不需要关心传入的内容或者依赖其他的外部变量；
- 你在用的时候，你确定你的输入内容不会被任意篡改，并且自己确定的输入，一定会有确定的输出；

React 中就要求我们无论是函数还是 class 声明一个组件，这个组件都必须像纯函数一样，保护它们的 props 不被修改：

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)React 的严格规则

在之后学习 redux 中，reducer 也被要求是一个纯函数。

### 1.2. 认识 Redux

#### 1.2.1. 为什么需要 redux？

JavaScript 开发的应用程序，已经变得越来越复杂了：

- JavaScript 需要管理的状态越来越多，越来越复杂；
- 这些状态包括服务器返回的数据、缓存数据、用户操作产生的数据等等，也包括一些 UI 的状态，比如某些元素是否被选中，是否显示加载动效，当前分页；

管理不断变化的 state 是非常困难的：

- 状态之间相互会存在依赖，一个状态的变化会引起另一个状态的变化，View 页面也有可能会引起状态的变化；
- 当应用程序复杂时，state 在什么时候，因为什么原因而发生了变化，发生了怎么样的变化，会变得非常难以控制和追踪；

React 是在视图层帮助我们解决了 DOM 的渲染过程，但是 State 依然是留给我们自己来管理：

- 无论是组件定义自己的 state，还是组件之间的通信通过 props 进行传递；也包括通过 Context 进行数据之间的共享；
- React 主要负责帮助我们管理视图，state 如何维护最终还是我们自己来决定；

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)react 的思想

Redux 就是一个帮助我们管理 State 的容器：Redux 是 JavaScript 的状态容器，提供了可预测的状态管理；

Redux 除了和 React 一起使用之外，它也可以和其他界面库一起来使用（比如 Vue），并且它非常小（包括依赖在内，只有 2kb）

#### 1.2.2. redux 的核心理念

Redux 的核心理念非常简单。

比如我们有一个朋友列表需要管理：

- 如果我们没有定义统一的规范来操作这段数据，那么整个数据的变化就是无法跟踪的；
- 比如页面的某处通过`products.push`的方式增加了一条数据；
- 比如另一个页面通过`products[0].age = 25`修改了一条数据；
- 整个应用程序错综复杂，当出现 bug 时，很难跟踪到底哪里发生的变化；

```
const initialState = {
  friends: [
    { name: "why", age: 18 },
    { name: "kobe", age: 40 },
    { name: "lilei", age: 30 },
  ]
};
```

Redux 要求我们通过 action 来更新数据：

- 所有数据的变化，必须通过派发（dispatch）action 来更新；
- action 是一个普通的 JavaScript 对象，用来描述这次更新的 type 和 content；

比如下面就是几个更新 friends 的 action：

- 强制使用 action 的好处是可以清晰的知道数据到底发生了什么样的变化，所有的数据变化都是可跟追、可预测的；
- 当然，目前我们的 action 是固定的对象，真实应用中，我们会通过函数来定义，返回一个 action；

```
const action1 = { type: "ADD_FRIEND", info: { name: "lucy", age: 20 } }
const action2 = { type: "INC_AGE", index: 0 }
const action3 = { type: "CHANGE_NAME", playload: { index: 0, newName: "coderwhy" } }
```

但是如何将 state 和 action 联系在一起呢？答案就是 reducer

- reducer 是一个纯函数；
- reducer 做的事情就是将传入的 state 和 action 结合起来生成一个新的 state；

```
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.info] }
    case "INC_AGE":
      return {
        ...state, friends: state.friends.map((item, index) => {
          if (index === action.index) {
            return { ...item, age: item.age + 1 }
          }
          return item;
        })
      }
    case "CHANGE_NAME":
      return {
        ...state, friends: state.friends.map((item, index) => {
          if (index === action.index) {
            return { ...item, name: action.newName }
          }
          return item;
        })
      }
    default:
      return state;
  }
}
```

#### 1.2.3. redux 的三大原则

**单一数据源**

整个应用程序的 state 被存储在一颗 object tree 中，并且这个 object tree 只存储在一个 store 中：

- Redux 并没有强制让我们不能创建多个 Store，但是那样做并不利于数据的维护；
- 单一的数据源可以让整个应用程序的 state 变得方便维护、追踪、修改；

**State 是只读的**

唯一修改 State 的方法一定是触发 action，不要试图在其他地方通过任何的方式来修改 State：

- 这样就确保了 View 或网络请求都不能直接修改 state，它们只能通过 action 来描述自己想要如何修改 state；
- 这样可以保证所有的修改都被集中化处理，并且按照严格的顺序来执行，所以不需要担心 race condition（竟态）的问题；

**使用纯函数来执行修改**

通过 reducer 将 `旧state`和 `actions`联系在一起，并且返回一个新的 State：

- 随着应用程序的复杂度增加，我们可以将 reducer 拆分成多个小的 reducers，分别操作不同 state tree 的一部分；
- 但是所有的 reducer 都应该是纯函数，不能产生任何的副作用；

## 二. redux 的基本使用

### 2.1. redux 使用过程

安装 redux：

```
npm install redux --save
# 或
yarn add redux
```

这里，我通过创建一个简单的 js 文件，我们先来简单学习一下 redux：

**搭建项目结构**

1.创建一个新的项目文件夹：learn-redux

```
# 执行初始化操作
yarn init

# 安装redux
yarn add redux
```

2.创建 src 目录，并且创建 index.js 文件

- 暂时没有任何内容

  3.修改 package.json 可以执行 index.js

```
"scripts": {
  "start": "node src/index.js"
}
```

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)修改 packages.json

**开始在 index.js 中编写代码**

1.创建一个对象，作为我们要保存的状态：

```
const redux = require('redux');

const initialState = {
  counter: 0
}
```

2.创建 Store 来存储这个 state

- 创建 store 时必须创建 reducer；
- 我们可以通过 `store.getState` 来获取当前的 state

```
// 创建reducer
const reducer = (state = initialState, action) => {
  return state;
}

// 根据reducer创建store
const store = redux.createStore(reducer);

console.log(store.getState());
```

3.通过 action 来修改 state

- 通过 dispatch 来派发 action；
- 通常 action 中都会有 type 属性，也可以携带其他的数据；

```
store.dispatch({
  type: "INCREMENT"
})

store.dispath({
  type: "DECREMENT"
})

store.dispatch({
  type: "ADD_NUMBER",
  number: 5
})
```

4.修改 reducer 中的处理代码

- 这里一定要记住，reducer 是一个纯函数，不需要直接修改 state；
- 后面我会讲到直接修改 state 带来的问题；

```
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {...state, counter: state.counter + 1};
    case "DECREMENT":
      return {...state, counter: state.counter - 1};
    case "ADD_NUMBER":
      return {...state, counter: state.counter + action.number}
    default:
      return state;
  }
}
```

5.可以在派发 action 之前，监听 store 的变化：

```
store.subscribe(() => {
  console.log(store.getState());
})
```

完成的案例代码如下：

```
const redux = require('redux');

const initialState = {
  counter: 0
}

// 创建reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {...state, counter: state.counter + 1};
    case "DECREMENT":
      return {...state, counter: state.counter - 1};
    case "ADD_NUMBER":
      return {...state, counter: state.counter + action.number}
    default:
      return state;
  }
}

// 根据reducer创建store
const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
})

// 修改store中的state
store.dispatch({
  type: "INCREMENT"
})
// console.log(store.getState());

store.dispatch({
  type: "DECREMENT"
})
// console.log(store.getState());

store.dispatch({
  type: "ADD_NUMBER",
  number: 5
})
// console.log(store.getState());
```

### 2.2. redux 结构划分

如果我们将所有的逻辑代码写到一起，那么当 redux 变得复杂时代码就难以维护。

接下来，我会对代码进行拆分，将 store、reducer、action、constants 拆分成一个个文件。

**注意：node 中对 ES6 模块化的支持**

目前我使用的 node 版本是 v12.16.1，从 node v13.2.0 开始，node 才对 ES6 模块化提供了支持：

- node v13.2.0 之前，需要进行如下操作：

- - 在 package.json 中添加属性：`"type": "module"`；
  - 在执行命令中添加如下选项：`node --experimental-modules src/index.js`;

- node v13.2.0 之后，只需要进行如下操作：

- - 在 package.json 中添加属性：`"type": "module"`；

注意：导入文件时，需要跟上.js 后缀名；

**对 redux 结构进行划分**

创建 store/index.js 文件：

```
import redux from 'redux';
import reducer from './reducer.js';

const store = redux.createStore(reducer);

export default store;
```

创建 store/reducer.js 文件：

```
import {
  ADD_NUMBER,
  SUB_NUMBER
} from './constants.js';

const initialState = {
  counter: 0
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_NUMBER:
      return {...state, counter: state.counter + action.num};
    case SUB_NUMBER:
      return {...state, counter: state.counter - action.num};
    default:
      return state;
  }
}

export default reducer;
```

创建 store/actionCreators.js 文件：

```
import {
  ADD_NUMBER,
  SUB_NUMBER
} from './constants.js'

const addAction = (count) => ({
  type: ADD_NUMBER,
  num: count
});

const subAction = (count) => ({
  type: SUB_NUMBER,
  num: count
})

export {
  addAction,
  subAction
}
```

创建 store/constants.js 文件：

```
const ADD_NUMBER = "ADD_NUMBER";
const SUB_NUMBER = "SUB_NUMER";

export {
  ADD_NUMBER,
  SUB_NUMBER
}
```

### 2.3. Redux 流程图

我们已经知道了 redux 的基本使用过程，那么我们就更加清晰来认识一下 redux 在实际开发中的流程：

- 1.全局通常只有一个 Store，存储我们的 State；
- 2.Component 中在某些情况会派发 Action（这些 Action 是我们提前定义好的）；
- 3.Reducer 会接收到这些 Action，并且在 Reducer 中会返回一个新的 State，作为 Store 的 State；
- 4.State 发生更新之后会触发通知，告知订阅者数据发生了改变；
- 5.订阅者拿到最新的数据（在 props 中），更新到 jsx 中，界面发生改变；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXusiaYfC61jkOPTUGxU3CicfYUj77xDmU61icYlYibE1wYj0DtMQ3HfJxfUKQWoY468bEyLlgkYCSRecFA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)image-20200709202742120

# Redux(二) .react-redux

> 上一个章节主要是学习 redux 本身的基本使用过程，这个章节我们来学习一下如何将 redux 结合到 React 中来使用。
>
> 我会先按照简单的方式，自己来将 redux 结合到 react 中，并且结合高阶函数、Context 一步步来实现 connect 和 Provider 的功能。
>
> 紧接着会讲解 react-redux 库的使用，帮助我们实现 react-redux 的连接。

## 一. react 结合 redux

### 1.1. redux 融入 react 代码

目前 redux 在 react 中使用是最大的，所以我们需要将之前编写的 redux 代码，融入到 react 当中去。

这里我创建了两个组件：

- Home 组件：其中会展示当前的 counter 值，并且有一个+1 和+5 的按钮；
- Profile 组件：其中会展示当前的 counter 值，并且有一个-1 和-5 的按钮；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvEGXWWvhicvpxrkZt3SUj4b62l9Q3gVgDte8NH0Tnk8eBsv1ZFtibnm9jc4BxIaHEBOrYT7q7GDZ4w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)界面展示效果

home.js 代码实现：

```
import React, { PureComponent } from 'react';

import store from '../store';
import {
  addAction
} from '../store/actionCreators';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.addCounter()}>+5</button>
      </div>
    )
  }

  increment() {
    store.dispatch(addAction(1));
  }

  addCounter() {
    store.dispatch(addAction(5));
  }
}
```

Profile.js 代码实现：

```
import React, { PureComponent } from 'react';

import store from '../store';
import {
  subAction
} from '../store/actionCreators';

export default class Profile extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  render() {
    return (
      <div>
        <hr/>
        <h1>Profile</h1>
        <div>
          <h2>当前计数: {this.state.counter}</h2>
          <button onClick={e => this.decrement()}>-1</button>
          <button onClick={e => this.subCounter()}>-5</button>
        </div>
      </div>
    )
  }

  decrement() {
    store.dispatch(subAction(1));
  }

  subCounter() {
    store.dispatch(subAction(5));
  }
}
```

上面的代码其实非常简单，核心代码主要是两个：

- 在 `componentDidMount` 中定义数据的变化，当数据发生变化时重新设置 `counter`;
- 在发生点击事件时，调用 store 的`dispatch`来派发对应的`action`；

### 1.2. 自定义 connect 函数

上面的代码是否可以实现`react组件`和`redux`结合起来呢？

- 当然是可以的，但是我们会发现每个使用的地方其实会有一些重复的代码：
- 比如监听 store 数据改变的代码，都需要在 `componentDidMount`中完成；
- 比如派发事件，我们都需要去先拿到 `store`， 在调用其 `dispatch` 等；

能否将这些公共的内容提取出来呢？

我们来定义一个 connect 函数：

- 这个 connect 函数本身接受两个参数：

- - 参数一：里面存放 `component` 希望使用到的 `State` 属性；
  - 参数二：里面存放 `component` 希望使用到的 `dispatch`动作；

- 这个 connect 函数有一个返回值，是一个高阶组件：

- - 在`constructor`中的 state 中保存一下我们需要获取的状态；
  - 在`componentDidMount`中订阅 store 中数据的变化，并且执行 `setState`操作；
  - 在`componentWillUnmount`中需要取消订阅；
  - 在`render`函数中返回传入的`WrappedComponent`，并且将所有的状态映射到其`props`中；
  - 这个高阶组件接受一个组件作为参数，返回一个 class 组件；
  - 在这个 class 组件中，我们进行如下操作：

```
import React, { PureComponent } from "react";

import store from '../store';

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function handleMapCpn(WrappedComponent) {
    return class extends PureComponent {
      constructor(props) {
        super(props);

        this.state = {
          storeState: mapStateToProps(store.getState())
        }
      }

      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(store.getState())
          })
        })
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return <WrappedComponent {...this.props}
                                 {...mapStateToProps(store.getState())}
                                 {...mapDispatchToProps(store.dispatch)}/>
      }
    }
  }
}
```

在 home 和 props 文件中，我们按照自己需要的 state、dispatch 来进行映射：

比如 home.js 中进行如下修改：

- mapStateToProps：用于将 state 映射到一个对象中，对象中包含我们需要的属性；

- mapDispatchToProps：用于将 dispatch 映射到对象中，对象中包含在组件中可能操作的函数；

- - 当调用该函数时，本质上其实是调用 dispatch(对应的 Action)；

```
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNumber: function(number) {
      dispatch(addAction(number));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
```

在 Profile 中也是类似的操作。

有了 connect 函数，我们之后只需要关心从 state 和 dispatch 中映射自己需要的状态和行为即可；

### 1.3. store 的 context 处理

但是上面的 connect 函数有一个很大的缺陷：依赖导入的 store

- 如果我们将其封装成一个独立的库，需要依赖用于创建的 store，我们应该如何去获取呢？
- 难道让用户来修改我们的源码吗？不太现实；

正确的做法是我们提供一个 Provider，Provider 来自于我们创建的 Context，让用户将 store 传入到 value 中即可；

创建一个 context.js 文件：

```
import { createContext } from 'react';

export const StoreContext = createContext();
```

修改 connect 函数中 class 组件部分的代码：

- 注意下面我们将 class 组件的名称明确的定义出来，并且给它的`contextType`进行了赋值；
- 在组件内部用到 store 的地方，统一使用 this.context 代替（注意：constructor 中直接使用第二个参数即可）

```
import React, { PureComponent } from "react";

import { StoreContext } from './context';

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function handleMapCpn(WrappedComponent) {
    class ConnectCpn extends PureComponent {
      constructor(props, context) {
        super(props);

        this.state = {
          storeState: mapStateToProps(context.getState())
        }
      }

      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          })
        })
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return <WrappedComponent {...this.props}
          {...mapStateToProps(this.context.getState())}
          {...mapDispatchToProps(this.context.dispatch)} />
      }
    }

    ConnectCpn.contextType = StoreContext;

    return ConnectCpn;
  }
}
```

在入口的 index.js 中，使用 Provider 并且提供 store 即可：

```
import { StoreContext } from './utils/context';
import store from './store';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
);
```

测试代码，依然可以正常运行。

## 二. react-redux 使用

### 2.1. react-redux 的使用

开始之前需要强调一下，redux 和 react 没有直接的关系，你完全可以在 React, Angular, Ember, jQuery, or vanilla JavaScript 中使用 Redux。

尽管这样说，redux 依然是和 React 或者 Deku 的库结合的更好，因为他们是通过 state 函数来描述界面的状态，Redux 可以发射状态的更新，让他们作出相应。

虽然我们之前已经实现了 connect、Provider 这些帮助我们完成连接 redux、react 的辅助工具，但是实际上 redux 官方帮助我们提供了 react-redux 的库，可以直接在项目中使用，并且实现的逻辑会更加的严谨和高效。

安装 react-redux：

```
yarn add react-redux
```

使用 connect 函数：

- 将之前使用的 connect 函数，换成 react-redux 的 connect 函数；

```
import React, { PureComponent } from 'react';
import { connect } from "react-redux";

// import connect from '../utils/connect2';


export default connect(mapStateToProps, mapDispatchToProps)(Home);
```

使用 Provider：

- 将之前自己创建的 Context 的 Provider，换成 react-redux 的 Provider 组件：
- 注意：这里传入的是 store 属性，而不是 value 属性（待会儿可以在源码中查看）；

```
import { Provider } from 'react-redux';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### 2.2. react-redux 的源码

这里我简单带着大家看一下 react-redux 的源码：

- 但是第一因为这个教程不是讲源码为主的教程（穿插讲解部分源码），所以源码只会阅读核心的部分；
- 另外我经常会说，整个社区在 hooks 出现后大量的库转向了 hooks，所以在源码中会出现大量的 hooks 代码；
- 因为目前还没有讲解 hooks 相关的 API，所以某些 hooks 的作用在这里也不方便解释（可以学习完 hooks 之后再详细阅读）；

首先，我们简单看一下 Provider 的源码：

- 使用了一个 useMemo 来返回一个 contextValue 的对象；

- - 这里使用 useMemo 的原因是为了进行性能的优化；
  - 在依赖的 store 不改变的情况下，不会进行重新计算，返回一个新的对象；

- 在下面的 Context 的 Provider 中就会将其赋值给 value 属性；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvEGXWWvhicvpxrkZt3SUj4bQw1PygawAicZAibwRAkHX32wibskibfZl2ia6JPibnCGKs3NVNIchAa4FRhA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)image-20200713171101825

ReactReduxContext 来自另外一个文件：

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)Context 对象的创建

**connect 函数的依赖比较复杂：**

调用 createConnect 来返回一个 connect 函数：

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)image-20200713171920708

createConnect 函数的调用：

-

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)createConnect 函数

connect 函数最终调用的是 connectHOC：

- connectHOC 其实是 connectAdvanced 的函数；
- connectAdvanced 函数最终返回的是 wrapWithConnect 函数；

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)image-20200713173338618

wrapWithConnect 函数：

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)wrapWithConnect 函数

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvEGXWWvhicvpxrkZt3SUj4bLzLyVdiazXMeYvjYkTc77ReBQMfeY5mzK2odGqoLNa668xkjpMPIBOw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)wrapWithConnect 最终的返回值

# Redux(三)中间件

## 一. 中间件的使用

### 1.1. 组件中异步请求

在之前简单的案例中，redux 中保存的 counter 是一个本地定义的数据，我们可以直接通过同步的操作来 dispatch action，state 就会被立即更新。

但是真实开发中，redux 中保存的很多数据可能来自服务器，我们需要进行异步的请求，再将数据保存到 redux 中。

在之前学习网络请求的时候我们讲过，网络请求可以在 class 组件的`componentDidMount`中发送，所以我们可以有这样的结构：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvIZjYO8f7o0s12OGsibvQjFQQ2lB8BibBkhudPlRfsac7OpVtkibnw9sNw5KQHJj0QqiaZBIsvL3Fujw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)组件中发送网络请求

我现在完成如下案例操作：

- 在 Home 组件中请求 banners 和 recommends 的数据；
- 在 Profile 组件中展示 banners 和 recommends 的数据；

**redux 代码进行如下修改：**

在 reducer.js 中添加 state 初始化数据和 reducer 函数中处理代码：

```
const initialState = {
  counter: 0,
  banners: [],
  recommends: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case CHANGE_BANNER:
      return { ...state, banners: action.banners };
    case CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}
```

constants 中增加常量：

```
const CHANGE_BANNER = "CHANGE_BANNER";
const CHANGE_RECOMMEND = "CHANGE_RECOMMEND";
```

actionCreators.js 中添加 actions：

```
const changeBannersAction = (banners) => ({
  type: CHANGE_BANNER,
  banners
})

const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMEND,
  recommends
})
```

**组件中代码代码修改：**

Home 组件：

```
import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import axios from 'axios';

import {
  addAction,
  changeBannersAction,
  changeRecommendsAction
} from '../store/actionCreators';

class Home extends PureComponent {
  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      const data = res.data.data;
      this.props.changeBanners(data.banner.list);
      this.props.changeRecommends(data.recommend.list);
    })
  }

  ...其他业务代码
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNumber: function(number) {
      dispatch(addAction(number));
    },
    changeBanners(banners) {
      dispatch(changeBannersAction(banners));
    },
    changeRecommends(recommends) {
      dispatch(changeRecommendsAction(recommends));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
```

Profile 组件：

```
import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import {
  subAction
} from '../store/actionCreators';

class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <div>
          <h2>当前计数: {this.props.counter}</h2>
          <button onClick={e => this.decrement()}>-1</button>
          <button onClick={e => this.subCounter()}>-5</button>
        </div>
        <h1>Banners</h1>
        <ul>
          {
            this.props.banners.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
        <h1>Recommends</h1>
        <ul>
          {
            this.props.recommends.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }

  ...其他逻辑代码
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends
  }
}

const mapDispatchToProps = dispatch => {
  return {
    subNumber: function (number) {
      dispatch(subAction(number));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
```

### 1.2. redux 中异步请求

上面的代码有一个缺陷：

- 我们必须将网络请求的异步代码放到组件的生命周期中来完成；
- 事实上，网络请求到的数据也属于我们状态管理的一部分，更好的一种方式应该是将其也交给 redux 来管理；

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)redux 中发送网络请求

但是在 redux 中如何可以进行异步的操作呢？

- 答案就是使用**中间件（Middleware）**；
- 学习过 Express 或 Koa 框架的童鞋对中间件的概念一定不陌生；
- 在这类框架中，Middleware 可以帮助我们在请求和响应之间嵌入一些操作的代码，比如 cookie 解析、日志记录、文件压缩等操作；

redux 也引入了中间件（Middleware）的概念：

- 这个中间件的目的是在`dispatch的action`和`最终达到的reducer`之间，扩展一些自己的代码；
- 比如日志记录、调用异步接口、添加代码调试功能等等；

我们现在要做的事情就是发送异步的网络请求，所以我们可以添加对应的中间件：

- 这里官网推荐的、包括演示的网络请求的中间件是使用 `redux-thunk`；

redux-thunk 是如何做到让我们可以发送异步的请求呢？

- 我们知道，默认情况下的 dispatch(action)，action 需要是一个 JavaScript 的对象；

- `redux-thunk`可以让 dispatch(action 函数)，`action可以是一个函数`；

- 该函数会被调用，并且会传给这个函数一个 dispatch 函数和 getState 函数；

- - dispatch 函数用于我们之后再次派发 action；
  - getState 函数考虑到我们之后的一些操作需要依赖原来的状态，用于让我们可以获取之前的一些状态；

**如何使用 redux-thunk 呢？**

1.安装 redux-thunk

```
yarn add redux-thunk
```

2.在创建 store 时传入应用了 middleware 的 enhance 函数

- 通过 applyMiddleware 来结合多个 Middleware, 返回一个 enhancer；
- 将 enhancer 作为第二个参数传入到 createStore 中；

```
// 通过applyMiddleware来结合多个Middleware, 返回一个enhancer
const enhancer = applyMiddleware(thunkMiddleware);
// 将enhancer作为第二个参数传入到createStore中
const store = createStore(reducer, enhancer);
```

3.定义返回一个函数的 action：

- 注意：这里不是返回一个对象了，而是一个函数；
- 该函数在 dispatch 之后会被执行；

```
const getHomeMultidataAction = () => {
  return (dispatch) => {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      const data = res.data.data;
      dispatch(changeBannersAction(data.banner.list));
      dispatch(changeRecommendsAction(data.recommend.list));
    })
  }
}
```

4.修改 home.js 中的代码：

```
import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import {
  addAction,
  getHomeMultidataAction
} from '../store/actionCreators';

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultidata();
  }

  ...其他逻辑代码
}

...mapStatetoProps

const mapDispatchToProps = dispatch => {
  return {
    addNumber: function(number) {
      dispatch(addAction(number));
    },
    getHomeMultidata() {
      dispatch(getHomeMultidataAction());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
```

### 1.3. redux-devtools

我们之前讲过，redux 可以方便的让我们对状态进行跟踪和调试，那么如何做到呢？

- redux 官网为我们提供了 redux-devtools 的工具；
- 利用这个工具，我们可以知道每次状态是如何被修改的，修改前后的状态变化等等；

安装该工具需要两步：

- 第一步：在对应的浏览器中安装相关的插件（比如 Chrome 浏览器扩展商店中搜索 Redux DevTools 即可，其他方法可以参考 GitHub）；
- 第二步：在 redux 中继承 devtools

```
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 通过applyMiddleware来结合多个Middleware, 返回一个enhancer
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
// 将enhancer作为第二个参数传入到createStore中
const store = createStore(reducer, enhancer);

export default store;
```

trace 打开：

```
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
```

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)devtools 工具

### 1.4. redux-saga

#### 1.4.1. ES6 的 generator

saga 中间件使用了 ES6 的 generator 语法，所以我们有必须简单讲解一下：

- 注意：我这里并没有列出 generator 的所有用法，事实上它的用法非常的灵活，大家可以自行去学习一下。

在 JavaScript 中编写一个普通的函数，进行调用会立即拿到这个函数的返回结果：

```
function foo() {
  return "Hello World";
}

foo() // Hello World
```

如果我们将这个函数编写成一个生成器函数：

```
function *foo() {
  yield "Hello";
  yield "World";
}

const iterator = foo();
console.log(iterator, typeof iterator); // 一个object类型的iterator对象
```

调用 iterator 的 next 函数，会销毁一次迭代器，并且返回一个 yield 的结果：

```
// 调用一次next()是消耗一次迭代器
iterator.next(); // {value: "Hello", done: false}
iterator.next(); // {value: "World", done: false}
iterator.next(); // {value: undefined, done: true}
```

研究一下 foo 生成器函数代码的执行顺序：

```
function *foo() {
  console.log("111111");
  yield "Hello";
  console.log("222222");
  yield "World";
  console.log("333333");
}

// 调用一次next()是消耗一次迭代器
iterator.next(); // {value: "Hello", done: false}
// 打印111111
iterator.next(); // {value: "World", done: false}
// 打印222222
iterator.next(); // {value: undefined, done: true}
// 打印333333
```

generator 和 promise 一起使用：

```
function *bar() {
  const result = yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello Generator");
      return "Hello";
    }, 2000);
  });
  console.log(result);
}

const bIterator = bar();
bIterator.next().value.then(res => {
  bIterator.next(res);
});
```

#### 1.4.2. redux-saga 的使用

1.安装 redux-saga

```
yarn add redux-saga
```

2.集成 redux-saga 中间件

```
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer.js';
import mySaga from './saga';

// 通过createSagaMiddleware函数来创建saga中间件
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

// 通过applyMiddleware来结合多个Middleware, 返回一个enhancer
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware));
// 将enhancer作为第二个参数传入到createStore中
const store = createStore(reducer, enhancer);

// 必须启动saga中间件，并且传入其要监听的generator
sagaMiddleware.run(mySaga);

export default store;
```

3.saga.js 文件的编写：

- takeEvery：可以传入多个监听的 actionType，每一个都可以被执行（对应有一个 takeLastest，会取消前面的）
- put：在 saga 中派发 action 不再是通过 dispatch，而是通过 put；
- all：可以在 yield 的时候 put 多个 action；

```
import { takeEvery, put, all } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_HOME_MULTIDATA
} from "./constants";
import {
  changeBannersAction,
  changeRecommendsAction,
} from './actionCreators';

function* fetchHomeMultidata(action) {
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
  console.log(res);
  const data = res.data.data;
  yield all([
    put(changeBannersAction(data.banner.list)),
    put(changeRecommendsAction(data.recommend.list))
  ])
}

function* mySaga() {
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
}

export default mySaga;
```

## 二. 中间件的原理

### 2.1. 打印日志需求

前面我们已经提过，中间件的目的是在 redux 中插入一些自己的操作：

- 比如我们现在有一个需求，在 dispatch 之前，打印一下本次的 action 对象，dispatch 完成之后可以打印一下最新的 store state；
- 也就是我们需要将对应的代码插入到 redux 的某部分，让之后所有的 dispatch 都可以包含这样的操作；

如果没有中间件，我们是否可以实现类似的代码呢？

当然可以，类似下面的方式即可：

```
console.log("dispatching:", addAction(5));
store.dispatch(addAction(5));
console.log("new state:", store.getState());

console.log("dispatching:", addAction(10));
store.dispatch(subAction(10));
console.log("new state:", store.getState());
```

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)image-20200715162208857

但是这种方式缺陷非常明显：

- 首先，每一次的 dispatch 操作，我们都需要在前面加上这样的逻辑代码；
- 其次，存在大量重复的代码，会非常麻烦和臃肿；

是否有一种更优雅的方式来处理这样的相同逻辑呢？

- 我们可以将代码封装到一个独立的函数中

```
function dispatchAndLog(action) {
  console.log("dispatching:", action);
  store.dispatch(addAction(5));
  console.log("新的state:", store.getState());
}

dispatchAndLog(addAction(10));
```

但是这样的代码有一个非常大的缺陷：

- 调用者（使用者）在使用我的 dispatch 时，必须使用我另外封装的一个函数 dispatchAndLog；
- 显然，对于调用者来说，很难记住这样的 API，更加习惯的方式是直接调用 dispatch；

我们来进一步对代码进行优化；

### 2.2. 修改 dispatch

事实上，我们可以利用一个 hack 一点的技术：Monkey Patching，利用它可以修改原有的程序逻辑；

我们对代码进行如下的修改：

- 这样就意味着我们已经直接修改了 dispatch 的调用过程；
- 在调用 dispatch 的过程中，真正调用的函数其实是 dispatchAndLog；

```
let next = store.dispatch;

function dispatchAndLog(action) {
  console.log("dispatching:", addAction(10));
  next(addAction(5));
  console.log("新的state:", store.getState());
}

store.dispatch = dispatchAndLog;
```

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvIZjYO8f7o0s12OGsibvQjFQNb9WrU2gZTMwK1BqlfjMFk4icgW7SpBd7lria1K3BAiaMLlsg11bnUNg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)image-20200715162244169

当然，我们可以将它封装到一个模块中，只要调用这个模块中的函数，就可以对 store 进行这样的处理：

```
function patchLogging(store) {
  let next = store.dispatch;

  function dispatchAndLog(action) {
    console.log("dispatching:", action);
    next(addAction(5));
    console.log("新的state:", store.getState());
  }

  store.dispatch = dispatchAndLog;
}
```

### 2.3. thunk 需求

redux-thunk 的作用：

- 我们知道 redux 中利用一个中间件 redux-thunk 可以让我们的 dispatch 不再只是处理对象，并且可以处理函数；
- 那么 redux-thunk 中的基本实现过程是怎么样的呢？事实上非常的简单。

我们来看下面的代码：

- 我们又对 dispatch 进行转换，这个 dispatch 会判断传入的

```
function patchThunk(store) {
  let next = store.dispatch;

  function dispatchAndThunk(action) {
    if (typeof action === "function") {
      action(store.dispatch, store.getState);
    } else {
      next(action);
    }
  }

  store.dispatch = dispatchAndThunk;
}
```

将两个 patch 应用起来，进行测试：

```
patchLogging(store);
patchThunk(store);

store.dispatch(addAction(10));

function getData(dispatch) {
  setTimeout(() => {
    dispatch(subAction(10));
  }, 1000)
}

// 传入函数
store.dispatch(getData);
```

### 2.4. 合并中间件

单个调用某个函数来合并中间件并不是特别的方便，我们可以封装一个函数来实现所有的中间件合并：

```
function applyMiddleware(store, middlewares) {
  middlewares = middlewares.slice();

  middlewares.forEach(middleware => {
    store.dispatch = middleware(store);
  })
}

applyMiddleware(store, [patchLogging, patchThunk]);
```

我们来理解一下上面操作之后，代码的流程：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuvIZjYO8f7o0s12OGsibvQjFDAjzXgaUXT2wpR0ibCpXCgQ9dsWuia1dFrR6okB8Picb5nXoltq4C2wAQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)合并中间件的流程

当然，真实的中间件实现起来会更加的灵活，这里我们仅仅做一个抛砖引玉，有兴趣可以参考 redux 合并中间件的源码流程。

# Redux(四): state 如何管理

## 一. reducer 拆分

### 1.1. reducer 代码拆分

我们来看一下目前我们的 reducer：

- 当前这个 reducer 既有处理 counter 的代码，又有处理 home 页面的数据；
- 后续 counter 相关的状态或 home 相关的状态会进一步变得更加复杂；
- 我们也会继续添加其他的相关状态，比如购物车、分类、歌单等等；

```
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case CHANGE_BANNER:
      return { ...state, banners: action.banners };
    case CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}
```

如果将所有的状态都放到一个 reducer 中进行管理，随着项目的日趋庞大，必然会造成代码臃肿、难以维护。

**因此，我们可以对 reducer 进行拆分：**

我们先抽取一个对 counter 处理的 reducer：

```
// counter相关的状态
const initialCounter = {
  counter: 0
}

function counterReducer(state = initialCounter, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}
```

再抽取一个对 home 处理的 reducer：

```
// home相关的状态
const initialHome = {
  banners: [],
  recommends: []
}

function homeReducer(state = initialHome, action) {
  switch (action.type) {
    case CHANGE_BANNER:
      return { ...state, banners: action.banners };
    case CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}
```

如果将它们合并起来呢？

```
const initialState = {
}

function reducer(state = initialState, action) {
  return {
    counterInfo: counterReducer(state.counterInfo, action),
    homeInfo: homeReducer(state.homeInfo, action),
  }
}
```

### 1.2. reducer 文件拆分

目前我们已经将不同的状态处理拆分到不同的 reducer 中，我们来思考：

- 虽然已经放到不同的函数了，但是这些函数的处理依然是在同一个文件中，代码非常的混乱；
- 另外关于 reducer 中用到的 constant、action 等我们也依然是在同一个文件中；

所以，接下来，我们可以对文件结构再次进行拆分：

```
./store
├── counter
│   ├── actioncreators.js
│   ├── constants.js
│   ├── index.js
│   └── reducer.js
├── home
│   ├── actioncreators.js
│   ├── constants.js
│   ├── index.js
│   └── reducer.js
├── index.js
├── reducer.js
└── saga.js
```

这里不再给出代码，每个文件中存放的内容即可：

- home/actioncreators.js：存放 home 相关的 action；
- home/constants.js：存放 home 相关的常量；
- home/reducer.js：存放分离的 reducer 代码；
- index.js：统一对外暴露的内容；

### 1.3. combineReducers

目前我们合并的方式是通过每次调用 reducer 函数自己来返回一个新的对象：

```
import { reducer as counterReducer } from './counter';
import { reducer as homeReducer } from './home';

const initialState = {
}

function reducer(state = initialState, action) {
  return {
    counterInfo: counterReducer(state.counterInfo, action),
    homeInfo: homeReducer(state.homeInfo, action),
  }
}
```

事实上，redux 给我们提供了一个 combineReducers 函数可以方便的让我们对多个 reducer 进行合并：

```
import { combineReducers } from 'redux';

import { reducer as counterReducer } from './counter';
import { reducer as homeReducer } from './home';

const reducer = combineReducers({
  counterInfo: counterReducer,
  homeInfo: homeReducer
})

export default reducer;
```

那么 combineReducers 是如何实现的呢？

- 事实上，它也是讲我们传入的 reducers 合并到一个对象中，最终返回一个 combination 的函数（相当于我们之前的 reducer 函数了）；
- 在执行 combination 函数的过程中，它会通过判断前后返回的数据是否相同来决定返回之前的 state 还是新的 state；
- 新的 state 会触发订阅者发生对应的刷新，而旧的 state 可以有效的组织订阅者发生刷新；

```
export default function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers)
  const finalReducers = {}
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i]

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        warning(`No reducer provided for key "${key}"`)
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key]
    }
  }
  const finalReducerKeys = Object.keys(finalReducers)

  // This is used to make sure we don't warn about the same
  // keys multiple times.
  let unexpectedKeyCache
  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {}
  }

  let shapeAssertionError
  try {
    assertReducerShape(finalReducers)
  } catch (e) {
    shapeAssertionError = e
  }

  return function combination(state = {}, action) {
    if (shapeAssertionError) {
      throw shapeAssertionError
    }

    if (process.env.NODE_ENV !== 'production') {
      const warningMessage = getUnexpectedStateShapeWarningMessage(
        state,
        finalReducers,
        action,
        unexpectedKeyCache
      )
      if (warningMessage) {
        warning(warningMessage)
      }
    }

    let hasChanged = false
    const nextState = {}
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i]
      const reducer = finalReducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)
      if (typeof nextStateForKey === 'undefined') {
        const errorMessage = getUndefinedStateErrorMessage(key, action)
        throw new Error(errorMessage)
      }
      nextState[key] = nextStateForKey
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey
    }
    hasChanged =
      hasChanged || finalReducerKeys.length !== Object.keys(state).length
    return hasChanged ? nextState : state
  }
}
```

## 二. ImmutableJS

### 2.1. 数据可变性的问题

在 React 开发中，我们总是会强调数据的不可变性：

- 无论是类组件中的 state，还是 redux 中管理的 state；
- 事实上在整个 JavaScript 编码过程中，数据的不可变性都是非常重要的；

数据的可变性引发的问题：

- 我们明明没有修改 obj，只是修改了 obj2，但是最终 obj 也被我们修改掉了；
- 原因非常简单，对象是引用类型，它们指向同一块内存空间，两个引用都可以任意修改；

```
const obj = {
  name: "why",
  age: 18
}

console.log(obj); // {name: "why", age: 18}
const obj2 = obj;
obj2.name = "kobe";
console.log(obj); // {name: "kobe", age: 18}
```

有没有办法解决上面的问题呢？

- 进行对象的拷贝即可：Object.assign 或扩展运算符

```
console.log(obj); // {name: "why", age: 18}
const obj2 = {...obj};
obj2.name = "kobe";
console.log(obj); // {name: "kobe", age: 18}
```

这种对象的浅拷贝有没有问题呢？

- 从代码的角度来说，没有问题，也解决了我们实际开发中一些潜在风险；
- 从性能的角度来说，有问题，如果对象过于庞大，这种拷贝的方式会带来性能问题以及内存浪费；

有人会说，开发中不都是这样做的吗？

- 我比较喜欢一句话：从来如此，便是对的吗？

### 2.2. 认识 ImmutableJS

为了解决上面的问题，出现了 Immutable 对象的概念：

- Immutable 对象的特点是只要修改了对象，就会返回一个新的对象，旧的对象不会发生改变；

但是这样的方式就不会浪费内存了吗？

- 为了节约内存，又出现了一个新的算法：Persistent Data Structure（持久化数据结构或一致性数据结构）；

当然，我们一听到持久化第一反应应该是数据被保存到本地或者数据库，但是这里并不是这个含义：

- 用一种数据结构来保存数据；
- 当数据被修改时，会返回一个对象，但是新的对象会尽可能的利用之前的数据结构而不会对内存造成浪费；

如何做到这一点呢？结构共享：

- 如果在公众号等地方动图不能正常显示，可以查看下面的静态图；

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)Immutable 原理动画

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)Immutable data

### 2.3. ImutableJS 常见 API

我们来学习一下 ImmutableJS 常用的 API：

- 注意：我这里只是演示了一些 API，更多的方式可以参考官网；

```
const imjs = Immutable;

// 1.定义JavaScript的Array和转换成immutable的List
const friends = [
  { name: "why", age: 18 },
  { name: "kobe", age: 30 }
]

// 不会进行深层转换
const imArray1 = imjs.List(friends);
// 会进行深层转换
const imArray2 = imjs.fromJS(friends);
// console.log(imArray1);
// console.log(imArray2);

// 1.定义JavaScript的Object和转换成immutable的Map
const info = {
  name: "coderwhy",
  age: 18,
  friend: {
    name: "kobe",
    age: 30
  }
}

const imObj1 = imjs.Map(info);
const imObj2 = imjs.fromJS(info);
// console.log(imObj1);
// console.log(imObj2);

// 3.对immutable操作
// 3.1.添加数据
// 产生一个新的immutable对象
console.log(imArray1.push("aaaa"));
console.log(imArray1.set(2, "aaaa"));
// 原来的是不变的
console.log(imArray1);

// 3.2.修改数据
console.log(imArray1.set(1, "aaaa"));
console.log(imArray2.set(2, imjs.fromJS("bbbb")));

// 3.3.删除数据
console.log(imArray1.delete(0).get(0)); // {name: "kobe", age: 30}

// 3.4.查询数据
console.log(imArray1.get(1));
console.log(imArray2.get(1));
console.log(imArray1.get(1).name);
console.log(imArray2.getIn([1, "name"]));

// 4.转换成JavaScript对象
const array = imArray1.toJS();
const obj = imObj1.toJS();
console.log(array);
console.log(obj);
```

### 2.4. ImmutableJS 重构 redux

目前 Redux 已经学习了过多的内容了，很多同学已经认识到 redux 的难度，所以如何将 ImmutableJS 和 redux 结合使用我们这里先不讲解。

具体 ImmutableJS 和 Redux 的结合使用，放到后续项目练习时，再详细说明。

## 三. Redux FAQ

### 是否将所有的状态应用到 redux

我们学习了 Redux 用来管理我们的应用状态，并且非常好用（当然，你学会前提下，没有学会，好好回顾一下）。

目前我们已经主要学习了三种状态管理方式：

- 方式一：组件中自己的 state 管理；
- 方式二：Context 数据的共享状态；
- 方式三：Redux 管理应用状态；

在开发中如何选择呢？

- 首先，这个没有一个标准的答案；
- 某些用户，选择将所有的状态放到 redux 中进行管理，因为这样方便追踪和共享；
- 有些用户，选择将某些组件自己的状态放到组件内部进行管理；
- 有些用户，将类似于主题、用户信息等数据放到 Context 中进行共享和管理；
- 做一个开发者，到底选择怎样的状态管理方式，是你的工作之一，可以一个最好的平衡方式（Find a balance that works for you, and go with it.）；

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuuPtxc2VNSb80zpYnIGMuvnVQibpWpibqd1Yw83j7pD2RyN9suzn3vqfBGn2wqtpnbAFglB4Y228vvg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)redux 作者建议

目前项目中我采用的 state 管理方案：

- UI 相关的组件内部可以维护的状态，在组件内部自己来维护；
- 只要是需要共享的状态，都交给 redux 来管理和维护；
- 从服务器请求的数据（包括请求的操作），交给 redux 来维护；

当然，根据不同的情况会进行适当的调整，在后续学习网易云音乐项目时，我也会再次讲解以实战的角度来设计数据的管理方案。

# 掌握 react-router

## 一. 认识 react-router

### 1.1. 认识前端路由

路由其实是网络工程中的一个术语：在架构一个网络时，非常重要的两个设备就是路由器和交换机。

当然，目前在我们生产中路由器也是越来越被大家所熟知，因为我们生活中都会用到路由器：

- 事实上，路由器主要维护的是一个映射表；
- 映射表会决定数据的流向；

路由的概念出现最早是在后端路由中实现的，原因是 web 的发展主要经历了这样一些阶段：

- 后端路由阶段；
- 前后端分离阶段；
- 单页面富应用（SPA）；

**阶段一：后端路由阶段**

早期的网站开发整个 HTML 页面是由服务器来渲染的.

- 服务器直接生产渲染好对应的 HTML 页面, 返回给客户端进行展示.

但是, 一个网站, 这么多页面服务器如何处理呢?

- 一个页面有自己对应的网址, 也就是 URL.
- URL 会发送到服务器, 服务器会通过正则对该 URL 进行匹配, 并且最后交给一个 Controller 进行处理.
- Controller 进行各种处理, 最终生成 HTML 或者数据, 返回给前端.
- 这就完成了一个 IO 操作.

上面的这种操作, 就是后端路由.

- 当我们页面中需要请求不同的**路径**内容时, 交给服务器来进行处理, 服务器渲染好整个页面, 并且将页面返回给客户端.
- 这种情况下渲染好的页面, 不需要单独加载任何的 js 和 css, 可以直接交给浏览器展示, 这样也有利于 SEO 的优化.

后端路由的缺点:

- 一种情况是整个页面的模块由后端人员来编写和维护的.
- 另一种情况是前端开发人员如果要开发页面, 需要通过 PHP 和 Java 等语言来编写页面代码.
- 而且通常情况下 HTML 代码和数据以及对应的逻辑会混在一起, 编写和维护都是非常糟糕的事情.

**阶段二：前后端分离阶段**

前端渲染的理解：

- 每次请求涉及到的静态资源都会从静态资源服务器获取，这些资源包括 HTML+CSS+JS，然后在前端对这些请求回来的资源进行渲染；
- 需要注意的是，客户端的每一次请求，都会从静态资源服务器请求文件；
- 同时可以看到，和之前的后端路由不同，这时后端只是负责提供 API 了；

前后端分离阶段：

- 随着 Ajax 的出现, 有了前后端分离的开发模式；
- 后端只提供 API 来返回数据，前端通过 Ajax 获取数据，并且可以通过 JavaScript 将数据渲染到页面中；
- 这样做最大的优点就是前后端责任的清晰，后端专注于数据上，前端专注于交互和可视化上；
- 并且当移动端(iOS/Android)出现后，后端不需要进行任何处理，依然使用之前的一套 API 即可；
- 目前很多的网站依然采用这种模式开发（jQuery 开发模式）；

**阶段三：单页面富应用（SPA）**

单页面富应用的理解：

- 单页面富应用的英文是 single-page application，简称 SPA；
- 整个 Web 应用只有实际上只有一个页面，当 URL 发生改变时，并不会从服务器请求新的静态资源；
- 而是通过 JavaScript 监听 URL 的改变，并且根据 URL 的不同去渲染新的页面；

如何可以应用 URL 和渲染的页面呢？前端路由

- 前端路由维护着 URL 和渲染页面的映射关系；
- 路由可以根据不同的 URL，最终让我们的框架（比如 Vue、React、Angular）去渲染不同的组件；
- 最终我们在页面上看到的实际就是渲染的一个个组件页面；

### 1.2. 前端路由原理

前端路由是如何做到 URL 和内容进行映射呢？监听 URL 的改变。

**URL 的 hash**

- URL 的 hash 也就是锚点(#), 本质上是改变 window.location 的 href 属性；
- 我们可以通过直接赋值 location.hash 来改变 href, 但是页面不发生刷新；

```jsx
<div id="app">
  <a href="#/home">home</a>
  <a href="#/about">about</a>
  <div class="router-view"></div>
</div>

<script>
  // 1.获取router-view
  const routerViewEl = document.querySelector(".router-view");

  // 2.监听hashchange
  window.addEventListener("hashchange", () => {
    switch(location.hash) {
      case "#/home":
        routerViewEl.innerHTML = "home";
        break;
      case "#/about":
        routerViewEl.innerHTML = "about";
        break;
      default:
        routerViewEl.innerHTML = "default";
    }
  })
</script>
```

hash 的优势就是兼容性更好，在老版 IE 中都可以运行，但是缺陷是有一个#，显得不像一个真实的路径。

**HTML5 的 History**

history 接口是 HTML5 新增的, 它有 l 六种模式改变 URL 而不刷新页面：

- replaceState：替换原来的路径；
- pushState：使用新的路径；
- popState：路径的回退；
- go：向前或向后改变路径；
- forword：向前改变路径；
- back：向后改变路径；

我们这里来简单演示几个方法：

```jsx
<div id="app">
  <a href="/home">home</a>
  <a href="/about">about</a>
  <div class="router-view"></div>
</div>

<script>
  // 1.获取router-view
  const routerViewEl = document.querySelector(".router-view");

  // 2.监听所有的a元素
  const aEls = document.getElementsByTagName("a");
  for (let aEl of aEls) {
    aEl.addEventListener("click", (e) => {
      e.preventDefault();
      const href = aEl.getAttribute("href");
      console.log(href);
      history.pushState({}, "", href);
      historyChange();
    })
  }

  // 3.监听popstate和go操作
  window.addEventListener("popstate", historyChange);
  window.addEventListener("go", historyChange);

  // 4.执行设置页面操作
  function historyChange() {
    switch(location.pathname) {
      case "/home":
        routerViewEl.innerHTML = "home";
        break;
      case "/about":
        routerViewEl.innerHTML = "about";
        break;
      default:
        routerViewEl.innerHTML = "default";
    }
  }

</script>
```

### 1.3. react-router

目前前端流行的三大框架, 都有自己的路由实现:

- Angular 的 ngRouter
- React 的 ReactRouter
- Vue 的 vue-router

React Router 的版本 4 开始，路由不再集中在一个包中进行管理了：

- react-router 是 router 的核心部分代码；
- react-router-dom 是用于浏览器的；
- react-router-native 是用于原生应用的；

目前我们使用最新的 React Router 版本是 v5 的版本：

- 实际上 v4 的版本和 v5 的版本差异并不大；

安装 react-router：

- 安装 react-router-dom 会自动帮助我们安装 react-router 的依赖；

```
yarn add react-router-dom
```

## 二. react-router 基本使用

### 2.1. Router 基本使用

react-router 最主要的 API 是给我们提供的一些组件：

- BrowserRouter 或 HashRouter

- - Router 中包含了对路径改变的监听，并且会将相应的路径传递给子组件；
  - BrowserRouter 使用 history 模式；
  - HashRouter 使用 hash 模式；

- Link 和 NavLink：

- - 通常路径的跳转是使用 Link 组件，最终会被渲染成 a 元素；
  - NavLink 是在 Link 基础之上增加了一些样式属性（后续学习）；
  - to 属性：Link 中最重要的属性，用于设置跳转到的路径；

- Route：

- - Route 用于路径的匹配；
  - path 属性：用于设置匹配到的路径；
  - component 属性：设置匹配到路径后，渲染的组件；
  - exact：精准匹配，只有精准匹配到完全一致的路径，才会渲染对应的组件；

在 App 中进行如下演练：

```jsx
import React, { PureComponent } from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";

export default class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Link to="/profile">我的</Link>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
      </BrowserRouter>
    );
  }
}
```

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)显示效果

### 2.2. NavLink 的使用

**路径选中时，对应的 a 元素变为红色**

这个时候，我们要使用 NavLink 组件来替代 Link 组件：

- activeStyle：活跃时（匹配时）的样式；
- activeClassName：活跃时添加的 class；
- exact：是否精准匹配；

先演示 activeStyle：

```html
<NavLink to="/" activeStyle={{color: "red"}}>首页</NavLink>
<NavLink to="/about" activeStyle={{color: "red"}}>关于</NavLink>
<NavLink to="/profile" activeStyle={{color: "red"}}>我的</NavLink>
```

但是，我们会发现在选中 about 或 profile 时，第一个也会变成红色：

- 原因是/路径也匹配到了/about 或/profile；
- 这个时候，我们可以在第一个 NavLink 中添加上 exact 属性；

```html
<NavLink exact to="/" activeStyle={{color: "red"}}>首页</NavLink>
```

默认的 activeClassName：

- 事实上在默认匹配成功时，NavLink 就会添加上一个动态的 active class；
- 所以我们也可以直接编写样式

```css
a.active {
  color: red;
}
```

当然，如果你担心这个 class 在其他地方被使用了，出现样式的层叠，也可以自定义 class

```html
<NavLink exact to="/" activeClassName="link-active">首页</NavLink>
<NavLink to="/about" activeClassName="link-active">关于</NavLink>
<NavLink to="/profile" activeClassName="link-active">我的</NavLink>
```

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)设置 activeClassName 效果

### 2.3. Switch 的作用

我们来看下面的路由规则：

- 当我们匹配到某一个路径时，我们会发现有一些问题；
- 比如/about 路径匹配到的同时，`/:userid`也被匹配到了，并且最后的一个 NoMatch 组件总是被匹配到；

```
<Route exact path="/" component={Home} />
<Route path="/about" component={About} />
<Route path="/profile" component={Profile} />
<Route path="/:userid" component={User}/>
<Route component={NoMatch}/>
```

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)匹配效果如下

原因是什么呢？默认情况下，react-router 中只要是路径被匹配到的 Route 对应的组件都会被渲染；

但是实际开发中，我们往往希望有一种排他的思想：

- 只要匹配到了第一个，那么后面的就不应该继续匹配了；
- 这个时候我们可以使用 Switch 来将所有的 Route 进行包裹即可；

```
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/profile" component={Profile} />
  <Route path="/:userid" component={User} />
  <Route component={NoMatch} />
</Switch>
```

### 2.3. Redirect 的使用

Redirect 用于路由的重定向，当这个组件出现时，就会执行跳转到对应的 to 路径中：

我们这里使用这个的一个案例：

- 用户跳转到 User 界面；

- 但是在 User 界面有一个 isLogin 用于记录用户是否登录：

- - true：那么显示用户的名称；
  - false：直接重定向到登录界面；

App.js 中提前定义好 Login 页面对应的 Route：

```
<Switch>
  ...其他Route
  <Route path="/login" component={Login} />
  <Route component={NoMatch} />
</Switch>
```

在 User.js 中写上对应的逻辑代码：

```
import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom';

export default class User extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false
    }
  }

  render() {
    return this.state.isLogin ? (
      <div>
        <h2>User</h2>
        <h2>用户名: coderwhy</h2>
      </div>
    ): <Redirect to="/login"/>
  }
}
```

## 三. react-router 高级使用

### 3.1. 路由嵌套

在开发中，路由之间是存在嵌套关系的。

这里我们假设 about 页面中有两个页面内容：

- 商品列表和消息列表；
- 点击不同的链接可以跳转到不同的地方，显示不同的内容；

```
import React, { PureComponent } from 'react';

import { Route, Switch, Link } from 'react-router-dom';

function AboutProduct(props) {
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
    </ul>
  )
}

function AboutMessage(props) {
  return (
    <ul>
      <li>消息列表1</li>
      <li>消息列表2</li>
      <li>消息列表3</li>
    </ul>
  )
}

export default class About extends PureComponent {
  render() {
    return (
      <div>
        <Link to="/about">商品</Link>
        <Link to="/about/message">消息</Link>

        <Switch>
          <Route exact path="/about" component={AboutProduct} />
          <Route path="/about/message" component={AboutMessage} />
        </Switch>
      </div>
    )
  }
}
```

### 3.2. 手动跳转

目前我们实现的跳转主要是通过 Link 或者 NavLink 进行跳转的，实际上我们也可以通过`JavaScript代码`进行跳转。

但是通过`JavaScript代码`进行跳转有一个前提：必须获取到 history 对象。

如何可以获取到 history 的对象呢？两种方式

- 方式一：如果该组件是通过路由直接跳转过来的，那么可以直接获取 history、location、match 对象；
- 方式二：如果该组件是一个普通渲染的组件，那么不可以直接获取 history、location、match 对象；

那么如果普通的组件也希望获取对应的对象属性应该怎么做呢？

- 前面我们学习过高阶组件，可以在组件中添加想要的属性；
- react-router 也是通过高阶组件为我们的组件添加相关的属性的；

如果我们希望在 App 组件中获取到 history 对象，必须满足以下两个条件：

- App 组件必须包裹在 Router 组件之内；
- App 组件使用 withRouter 高阶组件包裹；

index.js 代码修改如下：

```
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

App.js 代码修改如下：

```
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
...省略其他的导入代码

class App extends PureComponent {
  render() {
    console.log(this.props.history);

    return (
      <div>
        ...其他代码
        <button onClick={e => this.pushToProfile()}>我的</button>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/:userid" component={User} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }

  pushToProfile() {
    this.props.history.push("/profile");
  }
}

export default withRouter(App);
```

**源码选读：这里的 history 来自哪里呢？是否和之前使用的 window.history 一样呢？**

我们发现 withRouter 的高阶函数来自 react-router-dom：

- 实际上来自 react-router 的包；

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)image-20200721175654993

withRouter 函数：

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)withRouter 函数

history 对象来自哪里呢？

- 实际来自上面代码的 context；

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)context

这个 context 的值来自哪里呢？

- 来自于 context.Consumer 的 value 中；

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)Router 中的 value

this.props.history 来自哪里呢？

- 来自 BrowserRouter 或者 HashRouter 在创建时，传入的值；
- 又传递给了 Router，Router 的子组件可以通过该 context 获取到这个值；

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)BrowserRouter 的源码

createBrowserHistory 来自哪里呢？

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)history 模块

执行 push 操作的本质：

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)push 操作

### 2.5. 传递参数

传递参数有三种方式：

- 动态路由的方式；
- search 传递参数；
- to 传入对象；

**动态路由的方式**

动态路由的概念指的是路由中的路径并不会固定：

- 比如`/detail`的 path 对应一个组件 Detail；
- 如果我们将 path 在 Route 匹配时写成`/detail/:id`，那么 `/detail/abc`、`/detail/123`都可以匹配到该 Route，并且进行显示；
- 这个匹配规则，我们就称之为动态路由；

通常情况下，使用动态路由可以为路由传递参数。

```
<div>
 ...其他Link
  <NavLink to="/detail/abc123">详情</NavLink>

  <Switch>
    ... 其他Route
    <Route path="/detail/:id" component={Detail}/>
    <Route component={NoMatch} />
  </Switch>
</div>
```

detail.js 的代码如下：

- 我们可以直接通过 match 对象中获取 id；
- 这里我们没有使用 withRouter，原因是因为 Detail 本身就是通过路由进行的跳转；

```
import React, { PureComponent } from 'react'

export default class Detail extends PureComponent {
  render() {
    console.log(this.props.match.params.id);

    return (
      <div>
        <h2>Detail: {this.props.match.params.id}</h2>
      </div>
    )
  }
}
```

**search 传递参数**

NavLink 写法：

- 我们在跳转的路径中添加了一些 query 参数；

```
<NavLink to="/detail2?name=why&age=18">详情2</NavLink>

<Switch>
  <Route path="/detail2" component={Detail2}/>
</Switch>
```

Detail2 中如何获取呢？

- Detail2 中是需要在 location 中获取 search 的；
- 注意：这个 search 没有被解析，需要我们自己来解析；

```
import React, { PureComponent } from 'react'

export default class Detail2 extends PureComponent {
  render() {
    console.log(this.props.location.search); // ?name=why&age=18

    return (
      <div>
        <h2>Detail2:</h2>
      </div>
    )
  }
}
```

**to 传入对象**

to 可以直接传入一个对象

```
<NavLink to={{
    pathname: "/detail2",
    query: {name: "kobe", age: 30},
    state: {height: 1.98, address: "洛杉矶"},
    search: "?apikey=123"
  }}>
  详情2
</NavLink>
```

获取参数：

```
import React, { PureComponent } from 'react'

export default class Detail2 extends PureComponent {
  render() {
    console.log(this.props.location);

    return (
      <div>
        <h2>Detail2:</h2>
      </div>
    )
  }
}
```

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)location 对象

## 四. react-router-config

目前我们所有的路由定义都是直接使用 Route 组件，并且添加属性来完成的。

但是这样的方式会让路由变得非常混乱，我们希望将所有的路由配置放到一个地方进行集中管理：

- 这个时候可以使用 react-router-config 来完成；

安装 react-router-config：

```
yarn add react-router-config
```

常见 router/index.js 文件：

```
import Home from "../pages/home";
import About, { AboutMessage, AboutProduct } from "../pages/about";
import Profile from "../pages/profile";
import Login from "../pages/login";
import User from "../pages/user";
import Detail from "../pages/detail";
import Detail2 from "../pages/detail2";
import NoMatch from "../pages/nomatch";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about",
        exact: true,
        component: AboutProduct
      },
      {
        path: "/about/message",
        component: AboutMessage
      },
    ]
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/user",
    component: User
  },
  {
    path: "/detail/:id",
    component: Detail
  },
  {
    path: "/detail2",
    component: Detail2
  },
  {
    component: NoMatch
  }
];

export default routes;
```

将之前的 Switch 配置，换成 react-router-config 中提供的 renderRoutes 函数：

```
{renderRoutes(routes)}

{/* <Switch>
     <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
      <Route path="/user" component={User} />
      <Route path="/login" component={Login} />
      <Route path="/detail/:id" component={Detail}/>
      <Route path="/detail2" component={Detail2}/>
      <Route component={NoMatch} />
 </Switch> */}
```

如果是子组件中，需要路由跳转，那么需要在子组件中使用 renderRoutes 函数：

- 在跳转到的路由组件中会多一个 `this.props.route` 属性；
- 该`route`属性代表当前跳转到的路由对象，可以通过该属性获取到 `routes`；

```
export default class About extends PureComponent {
  render() {
    return (
      <div>
        <Link to="/about">商品</Link>
        <Link to="/about/message">消息</Link>

        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}
```

实际上 react-router-config 中还提供了一个`matchRoutes`辅助函数：

- `matchRoutes(routes, pathname)`传入一个路由对象数组，获取所有匹配的路径；

```
const routes = matchRoutes(this.props.route.routes, "/about");
console.log(routes);
```

查看 renderRoutes 的源码也是非常简单的：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXuuDNeMIonxdWHlEVX5xiaJiaP5j6ac9z5BnIwmxPic7r3tXZibXsLxq0h9jKqowZJWRIVDjSxSYbfibcBg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)renderRoutes 源码
