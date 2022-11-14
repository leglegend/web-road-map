# JavaScript :star:
JavaScript是前端的基础，也是最重要的一部分。
## 资源 :books:
- [JavaScript高级程序设计](https://weread.qq.com/web/bookDetail/751326d0720befab7514782)
- [你不知道的JavaScript(上卷)](https://weread.qq.com/web/bookDetail/8c632230715c01a18c683d8)
- [你不知道的JavaScript(中卷)](https://weread.qq.com/web/bookDetail/f5d32510715c0190f5ddc42)
- [你不知道的JavaScript(下卷)](https://weread.qq.com/web/bookDetail/c1232d00715c016fc1234b3)
- [MDN JavaScript文档](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)
- [黑马程序员JavaScript全套教程](https://www.bilibili.com/video/BV1ux411d75J?vd_source=a2c78fa2818cd1e38303fc142c03c033)  

::: tip 建议
0基础建议看视频入门，有一定基础可以直接撸上面的书或者MDN文档。
:::
## 数据类型 :star:
### 基本数据类型
- Undefined
- Null
- Boolean   
- Number
- String
- Symbol
- BigInt
### 原生引用类型
- Date
- RegExp
### 原始值包装类型
- Boolean   
- Number
- String
### 单例内置对象
- Math
- Global
### 集合引用类型
- Array
- Map
- Set

## 语句 :star:
- if语句
- do...while语句
- while语句
- for语句
- for-in语句
- for-of语句
- 标签语句 
- break和continue语句
- with语句(不推荐使用)
- switch语句

## 对象 :star:
### 创建对象
通过字面量创建和通过构造函数创建。
### 原型和原型链
每个实例对象都有一个__proto__属性，指向其构造函数的**原型对象**，也就是构造函数的prototype属性。原型对象也有__proto__属性，层层向上直到一个对象的原型为null，这一层层的关系链接起来就是**原型链**。
### 继承
ES6之前继承通过修改构造函数的原型对象实现，ES6提供了class和extends实现继承(但原理是一样的)
### 类
ES6新加的class可以声明一个类，取代之前通过函数声明构造函数的方式。需要了解类中的属性、方法、静态属性和静态方法，类的继承。
## 函数 :star:
### 箭头函数和正式函数
需要知道箭头函数和正式函数的区别，以及`this`的指向。
### 函数声明和函数表达式
一个简单的方法判断：以function开头的是函数声明，非function开头的是函数表达式。
```js
// 函数声明
function foo (){

} 
// 函数表达式
let foo = function(){} // 匿名函数
let foo = function bar(){}
let foo = ()=>{}
(function(){ // 这个是小括号开头的呦

})(); // IIFE 立即执行函数表达式
```
### this的指向
可以理解为，函数调用过程中是把某个对象绑定在this上方便我们调用的，有以下几种绑定方式：
1. **默认绑定**  
这里需要强调一下函数的调用方式：**独立函数调用**，指直接使用不带任何修饰的函数引用进行调用。这种调用`this`默认指向全局对象。在严格模式下，不能将全局对象用于默认绑定，`this`会绑定为`undefined`。（在ESModule中默认是严格模式，所以默认绑定中this始终指向`undefined`）
2. **隐式绑定**  
如果`正式函数`通过某个对象调用，那么`this`指向这个**对象本身**。这种调用方式非常多，例如函数是对象的一个属性，把函数赋值给对象的一个属性，通过参数传递函数等等等等...最简单的方式就是只看函数是否通过`xx.函数()`的方式调用，如果是，则this指向xx，如果不是，别管函数是否是在对象内部声明的，都不会采用隐式绑定的原则。
3. **显式绑定**  
通过`apply`、`call`或者`bind`实现的绑定。
4. **new绑定**  
通过new关键字实例化一个对象时，构造函数中的this指向实例对象。
5. **箭头函数**  
箭头函数不受上面的任何规则的约束，this永远指向声明箭头函数的执行上下文的this。
### 闭包 :warning:
套用《JavaScript高级程序设计》中的一句言简意赅的描述：**引用了其他函数作用域中变量的函数，就是闭包**。
### 作用域 :warning:
了解JS中都有哪些作用域，var、let和const语句声明的变量分别是什么作用域。

## Promise :star:
### Promise的使用
- Promise.resolve()
- Promise.reject()
- Promise.all()
- Promise.race()
### async/await

## DOM/BOM :white_check_mark: 
## Ajax请求 :white_check_mark:
能供使用XMLHttpRequest手写一个ajax。
## ES6新特性 :star:
只提上面没提到的：
- 解构运算符/展开运算符
- Proxy/Reflect
- 
## 面试重点 :warning:
### 手写Promise
### 防抖和节流
debounce throttle
### 手写apply、call、bind
```js
// 手写call
Function.prototype.callFn = function (_this, ...args) {
  let fn = this
  _this = _this && _this instanceof Object ? _this : window
  _this.fn = fn
  _this.fn(...args)
  delete _this.fn
}
// 手写apply
Function.prototype.applyFn = function (_this, args) {
  let fn = this
  _this = _this && _this instanceof Object ? _this : window
  _this.fn = fn
  _this.fn(...args)
  delete _this.fn
}
// 手写bind
Function.prototype.bindFn = function (_this, ...args) {
  let fn = this
  _this = _this && _this instanceof Object ? _this : window
  return (...args2) => {
    _this.fn = fn
    _this.fn(...[...args, ...args2])
    delete _this.fn
  }
}
```
### Cookie、localStorage和sessionStorage