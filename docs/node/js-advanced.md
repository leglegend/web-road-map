# JavaScript高级程序设计(第四版)
## 书籍简介
《JavaScript高级程序设计》是2006年人民邮电出版社出版的图书，作者是(美)(Nicholas C.Zakas)扎卡斯，本书适合有一定编程经验的开发人员阅读，也可作为高校相关专业课程的教材。其在2019年出版了第四版，涵盖ECMAScript 2019，全面、深入地介绍了JavaScript开发者必须掌握的前端开发技术，涉及JavaScript的基础特性和高级特性。书中详尽讨论了JavaScript的各个方面，从JavaScript的起源开始，逐步讲解到新出现的技术，其中重点介绍ECMAScript和DOM标准。在此基础上，接下来的各章揭示了JavaScript的基本概念，包括类、期约、迭代器、代理，等等。另外，书中深入探讨了客户端检测、事件、动画、表单、错误处理及JSON。本书同时也介绍了近几年来涌现的重要新规范，包括Fetch API、模块、工作者线程、服务线程以及大量新API。
## 入手推荐
微信读书65元可购入此书(无限卡可白嫖)，也可以试读前十章，之所以推荐微信读书，是因为电子书上面的代码颜色比较适合阅读，不认识的单词也可以长按查询知道其中文意思和发音，微信读书上还有很多别的书籍，而且大部分是免费的。
## 一、JavaScript和ECMAScript
原文第一章介绍了JavaScript的历史，其实对大多数人来说，并不需要关注JavaScript的历史，但需要知道JavaScript和ECMAScript的关系。</br>
一句话总结：ECMAScript是一种规范，而JavaScript是实现这种规范的语言。</br>
对于浏览器来说，除了ECMAScript这种规范，还有W3C(万维网联盟)指定的HTML规范。我们目前常用的浏览器，Chrome、Firefox、Safari、Opera、IE(这个也常用么?)都是根据ECMAScript和W3C指定的规范来实现的，但是规范是规范，实现的方式是不同的，这也就导致了不同的浏览器有不同的实现方式，所以一个让程序员头疼的问题就出现了————浏览器兼容性。</br>
除了不同浏览器实现的规范方式不同，还有规范本身也在一直更新，比如老的IE8就不支持ECMAScript6，如果你们公司除了需要兼容不同的浏览器的同时，还要兼容浏览器的不同版本，那就真的是男上加男了。</br>
其实对于现代浏览器来说(上面的除了IE都是)，程序员已经不需要过多关注不同浏览器带来的问题，浏览器本身对于规范的实施比较到位，使用框架也能通过插件完成对不同浏览器的支持，还是需要把精力放在技术本身，这些东西了解下就行。
## 二、在HTML中使用JavaScript
### script标签和script标签属性
可以通过<script></script>标签把JavaScript引入到HTML中，script标签上可以配置几种属性：
- type：指定JavaScript的类型，默认是text/javascript，也可以指定为application/javascript，这样就可以在浏览器中查看到JavaScript代码了。
- async：指定是否异步加载，默认是false，如果是true，那么就是异步加载，如果是false，那么就是同步加载。异步不会阻止浏览器继续加载下面的内容，需保证异步加载的js文件互相之间没有依赖。
- chartset：指定JavaScript的编码，默认是UTF-8，也可以指定为GBK等。
- crossorigin：指定跨域，默认是anonymous，也可以指定为use-credentials。
- defer：指定是否延迟加载，默认是false，如果开启则浏览器会在解析完</html>标签后再加载。
- intergrity：指定脚本的完整性，默认是空。
- language：指定JavaScript的语言，默认是JavaScript。(已废弃)
- src：指定JavaScript的路径，默认是空。
<br/>

引入JavaScript的两种方式：
```html
<script src="js/jquery.js"></script>
<!-- 和 -->
<script>
    console.log("hello world");
</script>
```
通过`src`标签引入外部js或直接在`<script>`标签中写入JavaScript代码，这两种方式都可以，前者更容易维护，后者更简单，。
### script的加载顺序
在不适用`async`和`dfer`属性的前提下，会按照html文件标签的顺序加载，如果放进head里就是先加载script再加载页面，为了不阻塞页面，一般放在`body`标签的最后面。</br>
如果使用`async`，会在加载到script标签时开始加载，但不会阻塞后面的标签加载，加载时间不确定，不完全按照标签顺序加载。</br>
如果使用`defer`，会按照标签顺序，在加载完</html>标签后依序加载。</br>
### noscript标签
提示用户您的浏览器不支持script。
## 三、基本数据类型
又称为简单数据类型，一共有六种，Symbol是ECMAScript6新增的数据类型。
### Undefined
Undefined数据类型只有一个值就是undefined，声明了一个变量但是没有给他赋值时，该变量的值就是undefined。
```js
let foo;
console.log(foo); // undefined
```
### Null
Null数据类型只有一个值就是null，表示一个空对象指针。
```js
typeof null; // object
```
一般用作初始化一个肯定会赋值的变量。
### Boolean
Boolean数据类型只有两个值，true和false。所有的数据类型都可以通过调用Boolean()函数转换为Boolean数据类型。
```js
null; // false
undefined; // false
0; // false
1; // true
NaN; // false
''; // false
'1'; // true
Object(); // true
```
### Number
#### 浮点数
Number数据类型可以表示数值，包括整数和浮点数。浮点数这里有个0.1+0.2！=0.3的结果，因为浮点数的精度问题。0.1会被换算成二进制进行计算，而0.1的二进制是个无限小数，所以计算出来的结果会是0.300000000000004。一般会采用放大为整数计算再缩小10的倍数。</br>
浮点数可以用科学计数法表示，如1.23e5，表示1.23×10的5次方，1.23e-5表示1.23×10的-5次方。</br>
#### 范围
Number不可是无限大的，可以用Infinity表示无限大，-Infinity表示无限小。</br>
#### NaN
NaN表示Not a Number，即非数字。设计到NaN的所有操作都会返回NaN，可以通过isNaN()函数判断某个变量或表达式是否是NaN。
#### 数值转换
可以用Number()，parseInt()和parseFloat()函数转换为整数和浮点数，具体细节不说了，整数最好用parseInt()，浮点数用parseFloat()。</br>
### String
字符串类型，可用单引号、双引号、反引号标示。</br>
几乎所有值都可用toString()转换为字符串。</br>
### Symbol
就是说Symbol()函数可以给一个不重复的初始值，我把它当成不显示具体值的uuid。</br>
### 语句
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

## 四、变量、作用域、内存
### 原始值和引用值
原始值就是我们上面提到的六种原始数据类型或称基本数据类型定义的变量的值。原始值和引用值的区别在于：**保存原始值的变量是按值访问的，而保存引用值的变量是按引用访问的，即该值指向的是一个地址**。引用值都是对象，所以通过`typeof`运算符判断变量的类型返回的都是`object`。如果要判断某个引用值变量是通过哪个函数构建的，需要用`instanceof`运算符判断。
原始值变量赋值给别的变量会生成原始值的副本，而引用值变量赋值给其他变量只会复制指针，所以两个变量指向同一个Object。
### 作用域
JavaScript中存在三个作用域：**全局作用域、函数级作用域、块级作用域**。每一个作用域都有一个与其关联的变量对象，这些变量对象之间的关系称为作用域链，它决定了各个作用域执行的顺序，当前作用域可以访问到其上级作用域的方法和变量。<br/>
var是函数作用域，let和const是块级作用域，var声明的变量在整个函数中都可使用，而let和const声明的变量只在其声明的花括号{}内有效。
### 垃圾回收
浏览器回收内存有两种方式，标记清理和引用计数。
#### 标记清理
变量进入执行上下文时会被标记一个声明，变量离开上下文时则打上离开的标记，浏览器会定时回收被打赏离开标记的变量。
#### 引用计数
记录变量被引用的次数，被赋值+1，取消赋值或被覆盖则-1，成0的变量就是可清理变量。不过这种方式有很多问题，例如循环引用，A引用了B，B引用了A，就算AB都离开执行上下文，因为互相引用，也不会被清理，这种方式已经被弃用了。
#### 性能
垃圾回收会影响浏览器性能，所以尽可能减少垃圾回收程序执行的频率。以下列举几个提高性能的点：
- 声明：多用const，少用let，不用var
- 隐藏类：如果两个变量同属一个引用类型(或者说类)，引擎会通过隐藏类将创建的对象关联起来，提高性能，但要注意，如果给其中一个变量声明了不同的属性，则两个变量对应不同的隐藏类。（可能这也是使用TS的一个原因吧）
- 删除属性：不要用delete，变量赋值为null可以不改变隐藏类的关联关系。
- 垃圾回收：降低新建删除对象的频率，可以更改对象的值而不是重新赋值成一个新的对象。
- 内存泄漏：全局变量泄露(声明变量没使用任何关键字)，定时器不用后没有销毁，函数中返回闭包导致函数执行完后没有被销毁，应避免上述操作。
- 静态分配对象池：先创建一个对象池，防止频繁新建销毁对象触发更多的垃圾回收

## 五、基本引用类型
**对象是某个引用类型的`实例`，通过`new`加一个构造函数创建。**
```javascript
let date = new Date()
```
ECMAScript提供了很多原生引用类型供开发者使用：Date，String，Number，Boolean，RegExp。其中，我们把String、Number和Boolean称作原始值包装类型。
直接赋值给变量原始值和通过原始值包装类型给变量赋值不完全相同：
```javascript
let str = 'hello world' // typeof str 'string'
let strObj = new String('hello world') // typeof strObj 'object'
str instanceof String // false
strObj instanceof String // true
```
其他原始值包装类型情况和String类似。
### 一些需要记住的基本引用类型的方法
#### String
- concat:：拼接字符串
- slice、subString：分割字符串，传入起始位置和结束位置
- subStr：分割字符串，传入起始位置和字符个数
- indexOf： 从头查找，返回第一个匹配的位置
- lastIndexOf：从尾查找，返回第一个匹配的位置
- startsWith：是否开始于
- endsWith：是否结束于
- includes：是否包含
- trim、trimLeft、trimRight：去除空格
- repeat：重复
- toLowerCase：转换为小写
- toUpperCase：转换为大写
- replace：替换

#### Number
- toFixed：返回包含指定小数点位数的数值字符串
- toExponential：返回以科学记数法（也称为指数记数法）表示的数值字符串
  
### 单例内置对象
内置对象，或称全局对象(MDN这么称呼的)。要区分内置对象和单例内置对象，Object、Array、String、Date不仅是内置对象，还是引用类型，是可以通过new指令创建实例的。而单例内置对象就真的只是一个对象，可以把他理解为全局唯一的，并且身上挂着很多方法的一个对象，比如说Math，通过console.log输出其实就是这样的：
```javascript
{
    abs:f(),
    cos:f(),
    max:f(),
    min:f(),
    ...
}
```
所以我们这节只需要知道这几个对象，然后明白其中关键几个用法就可以了。
#### Global
globalThis是ES11(ES2020)新加入的全局对象，之前代码并不能够显式的访问到它。我们平时常用的isNaN()、isFinite()、parseInt()和parseFloat()，实际上都是Global对象的方法。
除了这些，还有一些实用的方法：
```javascript
encodeURIComponent：编码
decodeURIComponent：解码
eval：解释器
```
#### Math
Math上有很多非常实用的方法，能够执行复杂的数学计算：
```javascript
min：返回最小值
max：返回最大值
ceil：向上取整
floor：向下取整
round：四舍五入
random：随机数
abs：绝对值
```

## 六、集合引用类型
这章的主要内容是Array、Map、Set。
### Array
数组，一组有序的数据，JS的数组不同于其他语言，数组中每个元素可以不是同类型数据。
#### 创建数组
有下面几种方式：
```javascript
let array = [1,2,3] // 字面量方式创建
let array = new Array(1,2,3) // 通过Array构造函数创建
let array = Array(1,2,3)
```
这上面几种方式得到的结果完全一致。
```javascript
let array = new Array(1,2,3) // [1,2,3]
let array = new Array(123) // 长度为123的数组
```
Array构造函数还有两个ES6新增的用于创建数组的静态方法：from()和of()。from()用于将类数组结构转换为数组实例，而of()用于将一组参数转换为数组实例。
```javascript
let array = Array.from(1,2,3) // [1,2,3]
let array = Array.from('123') // ['1','2','3']
```
#### 数组空位
```javascript
let array = [,] // [null,null]
array[0] // undefined
```
#### 迭代器方法
```javascript
let a = ['red','yellow']
a.keys() // 0,1
a.values() // 'red','yellow'
a.entries() // [0,'red'],[1,'yellow']
```
#### 赋值填充方法
- fill：三个参数，填充值，填充开始索引，填充结束索引
- copyWithin：三个参数，插入位置，复制开始位置，复制结束位置

#### 栈、队列方法
- push：最后插入
- pop：最后弹出
- shift：最前弹出
- unshift：最前插入

#### 排序方法
reverse()可用来反向排列数组，如果想按条件排序，可使用sort()。
sort()默认从小到大排序，也可以接受一个比较函数，比较函数接收两个参数，在函数中判断哪个参数排在前面。
``` javascript
array.sort((a,b)=>{
  return 1 // a排在b后面
  return -1 // a排在b前面
  return 0 // a和b相等
})

```

#### 操作方法
- concat：在数组末尾添加元素
- slice：两个参数，起止位置索引，在本身数组基础上创建一个新数组，不会改变原数组
- splice：三个参数，索引位置，删除元素数量，新插入的元素，返回被删除的元素

#### 搜索和位置方法
- indexOf
- lastIndexOf
- includes
- find 返回元素
- findIndex 返回元素索引
#### 迭代方法
- every 都返回true则返回true
- some 有一个返回true则返回true
- forEach 不返回任何值
- map 返回的值构成一个新数组
- filter 返回的true的元素构成一个新数组

#### 归并方法
reduce()和reduceRight()。

### 定型数组
没搞定

### Map
通过key/value存储的集合。
```javascript
const map = new Map()
map.set('key','value')
map.get('key')
map.size
map.has('key')
map.delete('key')
map.set('key1','value1').set('key2','value2')
map.clear()
```
#### 迭代
可通过for of语句迭代，也可通过keys()、values()、entries()。
#### Object和Map
内存占用：同样内存，Map多存储50%
插入性能：量大的情况，Map更好
查找速度：Object更快
删除性能：Map完胜
#### WeakMap
key只能是Object，key消失则对应值被回收，不可迭代。

### Set
拥有一系列唯一值的集合。
```javascript
const set = new Set()
set.add('value')
set.has('value')
set.size
set.delete('value')
set.add('value1').add('value2')
set.clear()
```
#### 迭代
Set会维护值插入时的顺序，可通过keys()、values()、entries()迭代。

### WeakSet
值只能是Object，值消失则对应值被回收，不可迭代。

## 七、迭代器与生成器
迭代需要在一个有序集合上进行，循环是一种最简单的迭代，但是需要提前知道起始点和长度。
### 迭代器
#### 迭代器模式
我们把实现了Iterable接口的对象称为可迭代对象，他们可通过Iterator(迭代器)消费。
检查一个对象是否可以通过迭代器迭代，可通过下面的方法：
```javascript
let num = 1
console.log(num[Symbol.iterator]) // undefined

let arr = [1,2,3]
console.log(arr[Symbol.iterator]) // function values() { [native code] }
```
迭代器通过`next()`方法遍历数据，next方法返回量个属性，done和value。
每个迭代器都能完成一次完整迭代，互相之间没有联系。
#### 自定义迭代器
通过实现[Symbol.iterator]()方法来创建自定义迭代器。
``` javascript
class Foo {
    [Symbol.iterator]() {
        return {
            next() {
                return { done: true }
            }
        }
    }
}

let foo = new Foo()
console.log(foo[Symbol.iterator]().next()) // {done:true}
```
#### 提前中止迭代器
return()方法，对于for...of，可用break、continue、return或throw提前退出。

### 生成器
生成器拥有在一个函数块内暂停和恢复代码执行的能力。生成器是一个函数，在函数名称前加一个*号表示它是一个生成器。
::: tip 注意
箭头函数不能用来定义生成器函数。
:::
调用生成器函数会生成一个生成器对象，next()方法可以执行生成器。
#### 通过yield中断执行
没有yield的生成器，调用一次next()就会返回{done:true}，函数体中遇到yield，生成器会停止，知道下次调用next()。
yield可以返回值，通过yield返回的值，done为false，通过return返回的值，done为true。
生成器也是一种可迭代对象。
yield还可以当作中间参数使用，通过next()传递的值能通过yield接收。
```javascript
function *foo(t) {
    console.log(t)
    let a = yield t
    console.log(a)
    return t
}

let a = foo(1)
console.log(a.next(2))
console.log(a.next(3))
// 1
// {"value":1,"done":false}
// 3
// {"value":1,"done":true}
```
上面的2没有输出，是因为第一次调用next传入的值是初始化foo是传入的值。
yield * [1,2,3]可以迭代三次。

## 八、对象、类与面向对象编程
对象是一组属性的无序集合。
### 理解对象
对象可通过创建Object的实例创建，或直接通过字面量创建。
#### 数据属性和访问器属性
对象有两种属性：数据属性和访问器属性。
数据属性是保存数据值的位置，有四个特性描述它们的行为：
- [[Configurable]]：是否可以被删除或修改，默认为true。
- [[Enumerable]]：是否可以被for...in循环遍历，默认为true。
- [[Writable]]：是否可以被赋值，默认为true。
- [[Value]]：属性的值，默认为undefined。

访问器属性是一个函数，用来描述对象的属性的读取和设置行为，它包含四个特性：
- [[Configurable]]：是否可以被删除或修改，默认为true。
- [[Enumerable]]：是否可以被for...in循环遍历，默认为true。
- [[Get]]：读取属性的函数。
- [[Set]]：设置属性的函数。
访问器属性不能直接定义，必须通过Object.defineProperty()方法。
如果需要一次定义多个属性，可以使用Object.defineProperties()方法。
```javascript
let persion = {}
Object.definePropertyS(persion, {
    name: {
        value: '张三'
    },
    age: {
        value: 18
    },
    job: {
        get: function() {
            return 'web'
        }
    }
})
```
#### 读取属性特性
使用Object.getOwnPropertyDescriptor()方法可以取得指定属性的属性描述符。返回值是一个对象，对于访问器属性包含configurable、enumerable、get和set属性，对于数据属性包含configurable、enumerable、writable和value属性。ECMAScript 2017新增了Object.getOwnPropertyDescriptors()静态方法，相当于对每个属性调用Object.getOwnPropertyDescriptor()。
#### 合并对象
Object.assign()方法，将源对象的所有可枚举自身属性，复制到目标对象。
#### 相等判定
Object.is()方法，判断两个值是否相等。对于-0，+0，isNaN也能正确返回。
#### 属性简写
属性名和变量名一致时，可以只写变量名。
#### 结构语法
...
### 创建对象

#### Object构造函数或字面量
#### 工厂模式

#### 构造函数模式
通过new+构造函数名，创建一个新对象。
new一个实例的过程如下：
1. 在内存中创建一个新对象。
2. 新对象的__proto__属性指向构造函数的prototype属性。
3. 构造函数内部this指向新对象。
4. 执行构造函数内部代码
5. 构造函数返回新对象。如果手动return，则返回return的内容。
#### 原型模式
每个函数都有一个prototype属性，指向一个对象。
理解原型：
创建一个函数时，会自动获得一个prototype属性，prototype会自动获得一个constructor属性，指向创建函数的构造函数。prototype上的属性是共享的，每一个实例都能访问得到。
判断一个实例对象是否是通过某个构造函数创建的，可以通过以下几种方式：
- instanceof：判断构造函数的prototype属性是否出现在实例对象的原型链上。
- XX.prototype.isPrototypeOf(xx)：判断原型对象是否出现在实例对象的原型链上。
- Object.getPrototypeOf()，返回对象的__proto__属性。

可以通过Object.setPrototypeOf()方法设置一个对象的__proto__属性，但是对性能有很大影响。也可以通过Object.create()创建一个新的对象，同时为其指定原型。

Object.hasOwnProperty()可以判断实例对象上有没有某个属性，in操作符可以判断通过该对象是否能访问到某个属性。这两个结合可以判断实例对象的原型链上是否存在某个属性：xx.hasOwnProperty(name) == false && name in xx == true

for in 可以循环实例对象所有可枚举属性，包括原型对象的属性。Object.keys()只会返回实例对象上的可枚举属性，Object.getOwnPropertyNames()可以返回所有实例属性，包括不可枚举属性。

如果需要重写原型对象，可以在声明构造函数后，直接通过Persion.prototype= {}的方式重写，不过这样会把prototype自带的constructor属性覆盖掉，可以通过defineProperty再定义回来enmuerable设置为false。

#### 对象迭代
Object.values()和Object.entries()接收一个对象，返回它们内容的数组。Object.values()返回对象值的数组，Object.entries()返回键/值对的数组。

### 继承
#### 原型链
每个构造函数都有一个原型对象，原型有个属性指回构造函数，实例对象内部有个指针指向原型对象，如果原型对象也是某个构造函数的实例，那原型对象也有个指针指向它构造函数的原型，这样实例和原型之间就构造了一条原型链。对于绝大多数实例来说，原型链的顶端就是Object.prototype，Object.prototype是一个构造函数，它的原型是null。
#### 盗用构造函数
在子类构造函数中调用父类构造函数，解决原型包含引用值导致的继承问题。
```javascript
function SuperType(name) {
  this.name = name
}
function SubType() {
  // 继承SuperType并传参
  SuperType.call(this, 'Nicholas')
  // 实例属性
  this.age = 29
}
let instance = new SubType()
console.log(instance.name) // "Nicholas";
console.log(instance.age) // 29
```
#### 组合继承
通过原型链继承原型上的方法和属性，通过盗用构造函数继承实例属性。
```javascript
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}
SuperType.prototype.sayName = function () {
  console.log(this.name)
}
function SubType(name, age) {
  // 继承属性
  SuperType.call(this, name)
  this.age = age
}
// 继承方法
SubType.prototype = new SuperType()
```

#### 原型式继承
```javascript
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

let person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
}
let anotherPerson = object(person)
anotherPerson.name = 'Greg'
anotherPerson.friends.push('Rob')
let yetAnotherPerson = object(person)
yetAnotherPerson.name = 'Linda'
yetAnotherPerson.friends.push('Barbie')
console.log(person.friends) // "Shelby, Court, Van, Rob, Barbie"
```
#### 寄生式继承
创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象。

#### 寄生组合式继承
寄生式组合继承通过盗用构造函数继承属性，但使用混合式原型链继承方法。基本思路是不通过调用父类构造函数给子类原型赋值，而是取得父类原型的一个副本。说到底就是使用寄生式继承来继承父类原型，然后将返回的新对象赋值给子类原型。
```javascript
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.sayName = function () {
  console.log(this.name)
}

function SubType(name, age) {
  SuperType.call(this, name) // 盗用继承
  this.age = age
}

function inheritPrototype(subType, superType) {
  let prototype = object(superType.prototype) // 创建对象
  prototype.constructor = subType // 增强对象
  subType.prototype = prototype // 赋值对象
}

inheritPrototype(SubType, SuperType)
```

### 类
```javascript
    // 类声明
    class Person {}
    // 类表达式
    const Animal = class {}
```
类没有提升，受块作用域限制。类可以包含构造函数方法、实例方法、获取函数、设置函数和静态类方法。
```javascript
    // 空类定义，有效
    class Foo {}
    // 有构造函数的类，有效
    class Bar {
      constructor() {}
    }
    // 有获取函数的类，有效
    class Baz {
      get myBaz() {}
    }
    // 有静态方法的类，有效
    class Qux {
      static myQux() {}
    }
```
#### 类构造函数
使用new和类实例化时，会调用类的构造函数，其他操作和实例化构造函数一致。
#### 实例、原型和类成员
在类构造函数中通过this添加的属性会成为实例属性，在类块中定义的方法会成为原型方法。类块中不能添加原始值或对象。类支持设置获取和访问器。
```javascript
class Persion {
    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }
}
```
可以在类上定义静态方法，每个类只能定义一个静态方法，在静态方法中，this指向类自身。静态方法将直接加在类身上，而普通方法则加在类的原型上。
静态方法适合作为实例工厂：
```javascript
    class Person {
      constructor(age) {
        this.age_ = age;
      }
      sayAge() {
        console.log(this.age_);
      }
      static create() {
        // 使用随机年龄创建并返回一个Person实例
        return new Person(Math.floor(Math.random()＊100));
      }
    }
    console.log(Person.create()); // Person { age_: ... }
```
类内部不支持添加原型或成员数据，但是外部可以。
```javascript
Person.prototype.name = 'Linda'
Person.name = 'Jack'
```

可以在类内部定义生成器：
```javascript
class Person {
  // 在原型上定义生成器方法
  *createNicknameIterator() {
    yield 'Jack'
    yield 'Jake'
    yield 'J-Dog'
  }
  // 在类上定义生成器方法
  static *createJobIterator() {
    yield 'Butcher'
    yield 'Baker'
    yield 'Candlestick maker'
  }
  // 在原型上定义生成器
  *[Symbol.iterator]() {
    yield* [1, 2, 3]
  }
}
let jobIter = Person.createJobIterator()
console.log(jobIter.next().value) // Butcher
console.log(jobIter.next().value) // Baker
console.log(jobIter.next().value) // Candlestick maker
let p = new Person()
let nicknameIter = p.createNicknameIterator()
console.log(nicknameIter.next().value) // Jack
console.log(nicknameIter.next().value) // Jake
console.log(nicknameIter.next().value) // J-Dog
```
#### 类的继承
通过`extends`可以继承类或者构造函数。
```javascript
class Vehicle {}
// 继承类
class Bus extends Vehicle {}
let b = new Bus()
console.log(b instanceof Bus) // true
console.log(b instanceof Vehicle) // true
function Person() {}
// 继承普通构造函数
class Engineer extends Person {}
let e = new Engineer()
console.log(e instanceof Engineer) // true
console.log(e instanceof Person) // true
```
派生类可通过super调用父类的构造函数。
```javascript
class Vehicle {
  constructor() {
    this.hasEngine = true
  }
  static identify() {
    console.log('vehicle')
  }
}
class Bus extends Vehicle {
  constructor() {
    // 不要在调用super()之前引用this，否则会抛出ReferenceError
    super() // 相当于super.constructor()
    console.log(this instanceof Vehicle) // true
    console.log(this) // Bus { hasEngine: true }
  }
  // 静态方法中可以通过super调用继承父类的静态方法
   static identify() {
    super.identify()
  }
}
new Bus()
Bus.identify() // vehicle
```
::: tip 注意
- super只能在派生类的构造函数和静态方法中使用，要么调用构造函数，要么调用静态方法。
- super()会调用父类的构造方法，并将返回的实例赋值给this。
- 没有定义构造函数会自动调用super()，定义了则必须手动调用super()或返回一个对象。
:::

##### 抽象基类
只能被继承，不能被实例化。
```javascript
// 抽象基类
class Vehicle {
  constructor() {
    console.log(new.target)
    if (new.target === Vehicle) {
      throw new Error('Vehicle cannot be directly instantiated')
    }
  }
}
// 派生类
class Bus extends Vehicle {}
new Bus() // class Bus {}
new Vehicle() // class Vehicle {}
// Error: Vehicle cannot be directly instantiated
```

## 九、代理与反射

### 代理基础
代理是目标对象的抽象，目标对象可通过代理来操作，并施加行为。
```javascript
const target = {
  id: 'target'
}
const handler = {}
const proxy = new Proxy(target, handler)
```
#### 捕获器
可以通过在handler定义一个get方法设置捕获其，捕获其接收目标对象，查询属性，还有代理属性三个参数。
```javascript
    const target = {
      foo: 'bar'
    };
    const handler = {
      get(trapTarget, property, receiver) {
        return trapTarget[property];
      }
    };
    const proxy = new Proxy(target, handler);
    console.log(proxy.foo);   // bar
    console.log(target.foo); // bar
```
可以通过trapTarget[property]重建原始操作。调用全局Reflect方法可以轻松重建原始行为。
```javascript
const target = {
  foo: 'bar'
}
const handler = {
  get() {
    return Reflect.get(...arguments)
  }
}
const proxy = new Proxy(target, handler)
console.log(target.foo) // bar
console.log(proxy.foo) // bar
// 可简写
const handler = {
  get: Reflect.get
}
```
#### 撤销代理
```javascript
    const target = {
      foo: 'bar'
    };
    const handler = {
      get() {
        return 'intercepted';
      }
    };
    const { proxy, revoke } = Proxy.revocable(target, handler);
    console.log(proxy.foo);    // intercepted
    console.log(target.foo);   // bar
    revoke();
    console.log(proxy.foo);    // TypeError
```
#### 反射
- 反射api不限于捕获器
- 大多数反射api在Object有对应方法
#### 代理的代理
#### 代理不能代理Date

### 代理捕获器与反射方法
代理有13种基本操作，这些操作有各自不同的反射API。
1. get(target,property,receiver) => Reflect.get()
可拦截操作：
- proxy.property 
- proxy[property] 
- Object.create(proxy)[property] 
- Reflect.get(proxy,property,receiver)
2. set(target,property,value,receiver) => Reflect.set()
可拦截操作：
- proxy.property=value 
- proxy[property]=value 
- Object.create(proxy)[property]=value 
- Reflect.set(proxy,property,value,receiver)
```javascript
    const myTarget = {};
    const proxy = new Proxy(myTarget, {
      set(target, property, value, receiver) {
        console.log('set()');
        return Reflect.set(...arguments)
      }
    });
    proxy.foo = 'bar';
    // set()
```
返回true表示成功，false表示失败。
3. has(target,property) => Reflect.has()
可拦截操作：
- property in proxy
- property in Object.create(proxy)
- with(proxy) {(property); }
- Reflect.has(proxy, property)
返回true表示存在，false表示不存在。
4. defineProperty(target,property,descriptor) => Reflect.defineProperty()
```javascript
descriptor: {
  enmuerable: true,  // 可枚举
  configurable: true, // 可编辑删除
  writable: true, // 可编辑
  value: 'haha'
}
```
可拦截操作：
- Object.defineProperty(proxy, property, descriptor)
- Reflect.defineProperty(proxy, property, descriptor)

5. getOwnPropertyDescriptor(target,property) => Reflect.getOwnPropertyDescriptor()
6. deleteProperty(target,property) => Reflect.deleteProperty()
可拦截操作：
- delete proxy.property
- delete proxy[property]
- Reflect.deleteProperty(proxy,property)
返回ture表示删除成功，false表示删除失败。
7. ownKeys(target) => Reflect.ownKeys()
可拦截操作：
- Object.getOwnPropertyNames(proxy)
- Object.getOwnPropertySymbols(proxy)
- Object.keys(proxy)
- Reflect.ownKeys(proxy)
8. getPrototypeOf(target) => Reflect.getPrototypeOf()
可拦截操作：
- Object.getPrototypeOf(proxy)
- Reflect.getPrototypeOf(proxy)
- proxy.__proto__
- Object.prototype.isPrototypeOf(proxy)
- proxy instanceof Object
9. setPrototypeOf(target,prototype) => Reflect.setPrototypeOf()
10. isExtensible(target) => Reflect.isExtensible() 是否可拓展的
11. preventExtensions(target) => Reflect.preventExtensions() 方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。
12. apply(target,thisArg,argumentsList) => Reflect.apply() 调用函数时被调用
```javascript
    const myTarget = () => {};
    const proxy = new Proxy(myTarget, {
      apply(target, thisArg, ...argumentsList) {
        console.log('apply()');
        return Reflect.apply(...arguments)
      }
    });
    proxy();
    // apply()
```
可拦截操作：
- proxy(...argumentsList)
- Function.prototype.apply(thisArg, argumentsList)
- Function.prototype.call(thisArg, ...argumentsList)
- Reflect.apply(target, thisArgument, argumentsList)
13. construct(target,argumentsList,newTarget) => Reflect.construct()
```javascript
    const myTarget = function() {};
    const proxy = new Proxy(myTarget, {
      construct(target, argumentsList, newTarget) {
        console.log('construct()');
        return Reflect.construct(...arguments)
      }
    });
    new proxy;
    // construct()
```
可拦截操作：
- new proxy(...argumentsList)
- Reflect.construct(target, argumentsList, newTarget)

### 代理模式
通过捕获get、set、has等操作，监控对象什么时候被修改访问。
隐藏属性（get时返回undefined）
属性验证（set时选择是否设置值）
函数构造参数认证（apply和constructoer时返回失败）

## 十、函数
### 箭头函数
```javascript
let f = (a,b)=> {
  return a+b
}
```
任何可用函数表达式的地方都可以使用箭头函数，声明函数则只能用正式函数。
只有一个参数可以省略括号，只有一行代码可以省略大括号和return。
箭头函数不能使用arguments、super和new.target，也不能用作构造函数。此外，箭头函数也没有prototype属性。

### 参数
函数内部访问arguments对象，会返回每一个参数的值。
### 默认值
```javascript
    function makeKing(name = 'key') {
      return name
    }
```
arguments对象始终以传入的值为准。
### 函数声明与函数表达式
函数声明会有函数声明提升（类似于var的变量提升）。
函数表达式不会提升，用var声明也不会。
### 函数作为值
可以把函数当作变量，当作参数传递给另一个变量。
### 函数内部
arguments
this：引用的是把函数当成方法调用的上下文对象。
谁调用就指向谁，否则指向window
箭头函数中，this指向定义它的上下文。
new.target ： new是指向实例 否则为undefined
### 函数属性与方法
length（命名参数的个数）和prototype（原型对象）
bind()会返回一个新的实例，该实例的this指向bind的参数
### 闭包
闭包指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。
闭包的作用域链包含它引用的变量所在函数的作用域。
#### 闭包中的this
每个函数在创建时都会创建两个特殊变量，this和arguments。内部函数永远无法直接访问到外部函数的这两个变量。
内部函数使用箭头函数定义，则this指向定义它的函数的this。
通过函数声明创建函数，则this指向window。
### 立即调用函数表达式
立即调用的匿名函数又被称为立即调用函数表达式(IIFE)。
```javascript
(function(){
 // 块级作用域
})()
```
### 私有变量
函数内部的变量是不能直接在函数外部调用的，但是闭包可以调用。通过返回一个函数达到访问私有变量的目的。
### 静态私有变量
```javascript
(function () {
  let name = ''
  Person = function (value) {
    name = value
  }
  Person.prototype.getName = function () {
    return name
  }
  Person.prototype.setName = function (value) {
    name = value
  }
})()
```
### 单例对象
```javascript
let singleton = (function () {
  // 私有变量和私有函数
  let privateVariable = 10
  function privateFunction() {
    return false
  }
  // 特权/公有方法和属性
  return {
    publicProperty: true,
    publicMethod() {
      privateVariable++
      return privateFunction()
    }
  }
})()
```
## 十一、期约与异步函数
### 异步编程
JS的异步行为会推入一个队列中，当前同步代码执行完毕后，会执行队列中的异步代码。
ES6之前多用回调完成异步操作。
### 期约
```javascript
    let p = new Promise(() => {});
    setTimeout(console.log, 0, p);   // Promise <pending>
```
期约状态：
- 待定（pending）
- 兑现（fulfilled，有时候也称为“解决”, resolved）
- 拒绝（rejected）
期约的执行器函数是同步执行的。
reject会抛出异常，无法通过try...catch捕获。
Promise.resolve()相当于new Promise(resolve=>resolve())。
Promise.reject()相当于new Promise((resolve,reject)=>reject())。
#### Promise的实例方法
- Promise.prototype.then(onResolved, onRejected)
返回一个新的Promise实例，新实例默认通过Promise.resolve()包装返回值，无返回值则为undefined。
- Promise.prototype.catch(onRejected)
事实上，这个方法就是一个语法糖，调用它就相当于调用Promise.prototype.then(null, onRejected)。
catch也会返回一个新的Promise实例。
- Promise.prototype.finally(onFinally)
无论解决还是拒绝，这个方法都会执行，这个方法返回夫期约的传递。
#### 非重入期约方法
即使直接返回fullfilled或rejected的Promise，then中的方法也不会立即执行，而是被推入队列中，等到主线程执行完毕后再执行。

#### 邻近处理程序的执行顺序
先添加到队列的期约先执行，后添加的期约后执行。所以.then().then().then()这种方式实际上是按循序执行的。
#### 期约连锁
.then().then().then()
Promise.all()静态方法创建的期约会在一组期约全部解决之后再解决。
```javascript
    let p = Promise.all([
      Promise.resolve(3),
      Promise.resolve(),
      Promise.resolve(4)
    ]);
    p.then((values) => setTimeout(console.log, 0, values)); // [3, undefined, 4]
```
如果被拒接，则第一个拒绝的理由会传入onRejected方法。
Promise.race()静态方法返回一个包装期约，是一组集合中最先解决或拒绝的期约的镜像。
Promise.race()不会对解决或拒绝的期约区别对待。无论是解决还是拒绝，只要是第一个落定的期约，Promise.race()就会包装其解决值或拒绝理由并返回新期约。
#### 期约扩展
期约取消：resolve之前判断是否执行resolve
进度通知：TODO

### 异步函数
async/await是ES8规范新增的，使得异步代码能够同步执行。
- async关键词用于声明异步函数，可以用在函数声明、函数表达式、箭头函数和方法上。
```javascript
asycn function f() {}
let f = function {}
let f = async () => {}
let o = {
  async f() {}
}
```
异步函数的返回值会用Promise.resolve()包装。在异步函数抛出错误会返回拒绝期约。
- await关键字可以暂停异步函数代码的执行，等待期约解决。
await期待一个Promise实例(不是必须，非异步实例会直接返回)，然后对其解包，返回值是resolve参数的值。
reject需要catch捕获，返回值会被await解包。或者直接使用try...catch捕获。
await只能在异步函数中使用，不能再顶层上下文使用，
调用异步函数在没遇到await之前和同步函数没有区别，遇到await之后，会记录这个位置，等到右边可用了，推送到消息队列中，恢复执行。
```javascript
await async1()
await async2()
await async3()
// 如果三个函数没有前后依赖可以这样改
let a1 = async1()
let a2 = async2()
let a3 = async3()
await a1
await a2
await a3
```
## 十二、BOM
浏览器对象模型（BOM, Browser ObjectModel）。
### window对象
ECMAScript中的Global对象，也是浏览器窗口的JavaScript接口。  
var在全局声明的变量和函数，都会被挂载到window对象上。  
#### 窗口关系
top对象始终指向最上层窗口。  
parent指向当前窗口的父窗口。  
self始终指向window。
#### 窗口位置与像素比
现代浏览器提供了screenLeft和screenTop属性，用于表示窗口相对于屏幕左侧和顶部的位置，返回值的单位是CSS像素。  
可以使用moveTo()和moveBy()方法移动窗口。  
```javascript
    // 把窗口移动到左上角
    window.moveTo(0,0);
    // 把窗口向下移动100 像素
    window.moveBy(0, 100);
    // 把窗口移动到坐标位置(200, 300)
    window.moveTo(200, 300);
    // 把窗口向左移动50 像素
    window.moveBy(-50, 0);
```
**像素比**  
不同设备分辨率不同，高分辨率下的设备应该和低分辨率设备保持1个单位像素大小相同。  
物理像素和实际像素的转换比率由window.devicePixelRatio属性提供。  
#### 窗口大小
innerWidth、innerHeight、outerWidth和outerHeight。outerWidth和outerHeight返回浏览器窗口自身的大小。innerWidth和innerHeight返回浏览器窗口中页面视口的大小（不包含浏览器边框和工具栏）。  
```javascript
    // 缩放到100×100
    window.resizeTo(100, 100);
    // 缩放到200×150
    window.resizeBy(100, 50);
    // 缩放到300×300
    window.resizeTo(300, 300);
```
#### 窗口滚动
```javascript
    // 正常滚动
    window.scrollTo({
      left: 100,
      top: 100,
      behavior: 'auto'
    });
    // 平滑滚动
    window.scrollTo({
      left: 100,
      top: 100,
      behavior: 'smooth'
    });
```
#### 导航与打开新窗口
window.open(url, target, features)  
target可一世一个iframe的id，或者是_blank。。。
#### 定时器
setTimeout()用于指定在一定时间后执行某些代码，而setInterval()用于指定每隔一段时间执行某些代码。  
timeoutID = setTimeout(function,delay,...args)  
为了调度不同代码的执行，JavaScript维护了一个任务队列。其中的任务会按照添加到队列的先后顺序执行。delay只是告诉JS在多少毫秒后把function推到队列中。  
clearTimeout(timeoutID)可以在setTimeout执行前取消执行。  
::: tip 注意
所有超时执行函数的this都指向window，如果需要期调用它的函数的this，可以用箭头函数。
:::
setTimeout和setInterval都是按时往tasks queue中添加任务，当前任务执行完后才会执行下个任务，执行当前代码，回调函数，事件监听回调都会往任务队列添加任务。  
js中不止这一个任务队列，除了Tasks还有Microttasks，当前线的Task运行完成后，会优先处理Microttasks中的任务，Microttasks中的任务处理完后，才会接着处理Tasks中的任务，如果处理Microttasks过程中还有Microttask加进来，会一并处理完成后再处理Tasks。
#### 系统对话框
alert()、confirm()和prompt()方法调用时代码会停止执行，关闭后才会显示
### location对象
window.location和document.location都指向location，location保存着当前加载文档的信息，也保存着把URL解析为离散片段后能够通过属性访问的信息。  
- location.search：返回了url中?开始的内容
URLSearchParams可以解析url参数：
```javascript
    let qs = "? q=javascript&num=10";
    let searchParams = new URLSearchParams(qs);
    alert(searchParams.toString());   // " q=javascript&num=10"
    searchParams.has("num");           // true
    searchParams.get("num");           // 10
    searchParams.set("page", "3");
    alert(searchParams.toString());   // " q=javascript&num=10&page=3"
    searchParams.delete("q");
    alert(searchParams.toString());   // " num=10&page=3"
```
- location.assign(url)
导航到新URL的操作，同时在浏览器历史记录中增加一条记录，相当于：
```javascript
window.location = "http://www.wrox.com";
location.href = "http://www.wrox.com";
```
修改location对象的属性也会修改当前加载的页面：
```javascript
    // 假设当前URL为http://www.wrox.com/WileyCDA/
    // 把URL修改为http://www.wrox.com/WileyCDA/#section1
    location.hash = "#section1";
    // 把URL修改为http://www.wrox.com/WileyCDA/?q=javascript
    location.search = "? q=javascript";
    // 把URL修改为http://www.somewhere.com/WileyCDA/
    location.hostname = "www.somewhere.com";
    // 把URL修改为http://www.somewhere.com/mydir/
    location.pathname = "mydir";
    // 把URL修改为http://www.somewhere.com:8080/WileyCDA/
    location.port = 8080;
```
除了hash之外，只要修改location的一个属性，就会导致页面重新加载新URL，修改hash只会添加一条历史记录。  
- location.replace(url)
这个方法接收一个URL参数，但重新加载后不会增加历史记录。调用replace()之后，用户不能回到前一页。
- location.reload()
它能重新加载当前显示的页面。
```javascript
    location.reload();      // 重新加载，可能是从缓存加载
    location.reload(true); // 重新加载，从服务器加载
```
### navigator对象
navigator对象的属性通常用于确定浏览器的类型。
- navigator.plugins
```javascript
[{
  name:'插件名称',
  description:'插件介绍',
  filename:'插件的文件名',
  length:'由当前插件处理的MIME类型数量'
}]
```
- navigator.registerProtocolHandler()
可以借助这个方法将Web应用程序注册为像桌面软件一样的默认应用程序。  
必须传入3个参数：要处理的协议（如"mailto"或"ftp"）、处理该协议的URL，以及应用名称。

### screen对象
客户端显示器的信息，比如像素宽度和像素高度。
### history对象
history对象表示当前窗口首次使用以来用户的导航历史记录。  
- history.go(index of string)
```javascript
    // 后退一页
    history.go(-1);
    // 前进一页
    history.go(1);
    // 前进两页
    history.go(2);
    // 导航到最近的wrox.com页面
    history.go("wrox.com");
    // 导航到最近的nczonline.net页面
    history.go("nczonline.net");
    // 后退一页
    history.back();
    // 前进一页
    history.forward();
```
- history.length 这个属性反映了历史记录的数量，包括可以前进和后退的页面。
#### 历史状态管理
状态管理API则可以让开发者改变浏览器URL而不会加载新页面，history.pushState()方法。这个方法接收3个参数：一个state对象、一个新状态的标题和一个（可选的）相对URL。pushState()会创建新的历史记录，所以也会相应地启用“后退”按钮。单击“后退”按钮，就会触发window对象上的popstate事件。
## 十三、客户端检测
### 能力检测
又称特性检测，测试浏览器是否支持某个特性。例如检测浏览器是否支持getElementById：
```javascript
    function getElement(id) {
      if (document.getElementById) {
        return document.getElementById(id);
      } else if (document.all) {
        return document.all[id];
      } else {
        throw new Error("No way to retrieve element! ");
      }
    }
```
先检测最优方法，再检测备用方案，实在不行再抛错。
#### 安全能力检测
进行能力检测时应该尽量使用typeof操作符，但光有它还不够。尤其是某些宿主对象并不保证对typeof测试返回合理的值。
#### 基于能力检测进行浏览器分析
集中检测所有能力，而不是等到用的时候再重复检测。  
根据对浏览器特性的检测并与已知特性对比，确认用户使用的是什么浏览器。  
通过检测一种或一组能力，并不总能确定使用的是哪种浏览器。  
### 用户代理检测
- navigator.userAgent 用户代理检测通过浏览器的用户代理字符串确定使用的是什么浏览器。
- navigator.oscpu 对应用户代理字符串中操作系统/系统架构相关信息。
- navigator.vendor 包含浏览器开发商信息。
- navigator.platform 表示浏览器所在的操作系统。
- screen.colorDepth 和screen.pixelDepth返回一样的值，即显示器每像素颜色的位深。
- screen.orientation 包含Screen Orientation API定义的屏幕信息。orientation.type和angle可以确定屏幕是否旋转。
- navigator.geolocation 属性暴露了Geolocation API，可以让浏览器脚本感知当前设备的地理位置。
- navigator. onLine 可以确定浏览器的联网状态。连网和断网会触发window的online和offline事件。
- navigator.connection 网络连接状况。
- navigator.getBattery() 属性暴露了Battery API，可以让浏览器脚本感知当前设备的电池状态。
- navigator.hardwareConcurrency 返回浏览器支持的逻辑处理器核心数量
- navigator.deviceMemory 返回设备大致的系统内存大小
- navigator.maxTouchPoints 属性返回触摸屏支持的最大关联触点数量

## 十四、DOM
文档对象模型（DOM, Document Object Model）是HTML和XML文档的编程接口。
### 节点层级
任何HTML或XML文档都可以用DOM表示为一个由节点构成的层级结构。  
document节点表示每个文档的根节点。  
根节点的唯一子节点是<html>元素，我们称之为文档元素（documentElement）。  
```html
Document
  Element <html>
    Element <head>
      Element <title>
      Element <meta>
    Element <body>
      Element <p>
        Element <a>
          Element <img>
```
HTML中的每段标记都可以表示为这个树形结构中的一个节点。  
DOM中总共有12种节点类型，这些类型都继承一种基本类型。  
#### Node类型
在JavaScript中，所有节点类型都继承Node类型，因此所有类型都共享相同的基本属性和方法。  
每个节点都有nodeType属性，表示该节点的类型。节点类型由定义在Node类型上的12个数值常量表示： 
- Node.ELEMENT_NODE 元素节点 1
- Node.ATTRIBUTE_NODE 属性节点 2
- Node.TEXT_NODE 文本节点 3
- Node.CDATA_SECTION_NODE CDATA节点 4
- Node.ENTITY_REFERENCE_NODE 实体引用节点 5
- Node.ENTITY_NODE 实体节点 6
- Node.PROCESSING_INSTRUCTION_NODE 注释节点 7
- Node.COMMENT_NODE 注释节点 8
- Node.DOCUMENT_NODE 文档节点 9
- Node.DOCUMENT_TYPE_NODE 文档类型节点 10
- Node.DOCUMENT_FRAGMENT_NODE 文档片段节点 11
- Node.NOTATION_NODE 注释节点 12
nodeName与nodeValue保存着有关节点的信息。  
对元素而言，nodeName始终等于元素的标签名，而nodeValue则始终为null。  
每个节点都有一个childNodes属性，其中包含一个NodeList的实例,previousSibling和nextSibling可以在这个列表的节点间导航，firstChild和lastChild分别指向childNodes中的第一个和最后一个子节点。    
每个节点都有一个parentNode属性，指向其DOM树中的父元素。 
hasChildNodes()返回节点是否有子节点。  
##### 操作节点
appendChild() 方法将一个节点添加到父节点的末尾。 
insertBefore() 添加节点到开头。  
replaceChild()方法接收两个参数：要插入的节点和要替换的节点。要替换的节点会被返回并从文档树中完全移除，要插入的节点会取而代之。  
removeChild() 移除节点  
cloneNode(boolean)，会返回与调用它的节点一模一样的节点，传入一个布尔，代表是否深复制，深复制会复制节点上所有子节点。返回的节点没有父亲节点，可通过appendChild插入文档中。  
#### Document类型  
文档对象document是HTMLDocument的实例（HTMLDocument继承Document），表示整个HTML页面。  
- nodeType等于9；
- nodeName值为"#document"；
- nodeValue值为null；
- parentNode值为null；
- ownerDocument值为null；
- 子节点可以是DocumentType（最多一个）、Element（最多一个）、ProcessingInstruction或Comment类型。
- document.documentElement属性返回文档的根元素，即<html>标签。
- document.body 属性返回文档的body元素，即<body>标签。
- document.doctype 属性返回文档的doctype，即<!DOCTYPE>标签。
- document.title 当前页面的标题，可修改
- document.URL 当前页面的URL
- document.domain 域名，只能设置当前url包含的域名
- document.getElementById(id) 
- document.getElementsByTagName(img) 返回数组，所有img，可传入*，返回所有元素。
- document.getElementsByName(name) 通过元素的name属性，返回数组
- document.anchors包含文档中所有带name属性的<a>元素。
- document.forms包含文档中所有<form>元素（与document.getElementsByTagName ("form")返回的结果相同）。
- document.images包含文档中所有<img>元素（与document.getElementsByTagName ("img")返回的结果相同）。
- document.links包含文档中所有带href属性的<a>元素。

### Element类型
Element表示XML或HTML元素，对外暴露出访问元素标签名、子节点和属性的能力。Element类型的节点具有以下特征：
- nodeType等于1；
- nodeName值为元素的标签名；
- nodeValue值为null；
- parentNode值为Document或Element对象；
- 子节点可以是Element、Text、Comment、ProcessingInstruction、CDATASection、EntityReference类型。
可以通过nodeName或tagName属性来获取元素的标签名。注意大小写。  
所有HTML元素都通过HTMLElement类型表示，所有HTML元素都有以下属性：
- id，元素在文档中的唯一标识符；
- title，包含元素的额外信息，通常以提示条形式展示；
- lang，元素内容的语言代码（很少用）；
- dir，语言的书写方向（"ltr"表示从左到右，"rtl"表示从右到左，同样很少用）；
- className，相当于class属性，用于指定元素的CSS类（因为class是ECMAScript关键字，所以不能直接用这个名字）。
```html
    <div id="myDiv" class="bd" title="Body text" lang="en" dir="ltr"></div>
    <script>
          let div = document.getElementById("myDiv");
    alert(div.id);           // "myDiv"
    alert(div.className);   // "bd"
    alert(div.title);        // "Body text"
    alert(div.lang);         // "en"
    alert(div.dir);          // "ltr"
    </script>
```
可以直接通过元素来修改标签的内容。  
与属性相关的DOM方法主要有3个：getAttribute()、setAttribute()和removeAttribute()。这些方法主要用于操纵属性。属性名不区分大小写。  
```js
    let div = document.getElementById("myDiv");
    alert(div.getAttribute("id"));      // "myDiv"
    alert(div.getAttribute("class"));   // "bd"
    alert(div.getAttribute("title"));   // "Body text"
    alert(div.getAttribute("lang"));    // "en"
    alert(div.getAttribute("dir"));     // "ltr"
```
通过DOM对象访问的属性中有两个返回的值跟使用getAttribute()取得的值不一样：
- style DOM对象返回一个CSSStyleDeclaration对象，getAttribute()只返回字符串。
- onclick DOM对象返回一个函数，getAttribute()返回源码。
setAttribute(name,value)  
#### 创建元素
document.createElement(tag)

### Text类型
包含按字面解释的纯文本：
nodeType等于3；
- nodeName值为"#text"；
- nodeValue值为节点中包含的文本；
- parentNode值为Element对象；
- 不支持子节点。

### Comment类型
DOM中的注释通过Comment类型表示。
- nodeType等于8；
- nodeName值为"#comment"；
- nodeValue值为注释的内容；
- parentNode值为Document或Element对象；
- 不支持子节点。
### CDATASection类型
CDATASection类型表示XML中特有的CDATA区块。  nodeType等于4；
### DocumentType类型
DocumentType类型的节点包含文档的文档类型（doctype）信息，DocumentType对象保存在document.doctype属性中。
- nodeType等于10；
- nodeName值为文档类型的名称；
- nodeValue值为null；
- parentNode值为Document对象；
- 不支持子节点。
name这个属性包含文档类型的名称，即紧跟在<! DOCTYPE后面的那串文本。
### DocumentFragment类型

### DOM编程
#### 动态脚本
```js
    <script src="foo.js"></script>
    // 使用dom实现这个操作
    let script = document.createElement("script");
    script.src = "foo.js";
    document.body.appendChild(script);
```
还可以动态添加函数：
```js
    let script = document.createElement("script");
    script.appendChild(document.createTextNode("function sayHi(){alert('hi'); }"));
    document.body.appendChild(script);
```
#### 动态样式
使用DOM添加link
```js
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "styles.css";
    let head = document.getElementsByTagName("head")[0];
    head.appendChild(link);
```
使用DOM添加style
```js
    let style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode("body{background-color:red}"));
    let head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
```
#### MutationObserver接口
可以在DOM被修改时异步执行回调。
```js
    let observer = new MutationObserver(() => console.log('<body> attributes changed'));
    observer.observe(document.body, { attributes: true });
```
- observe() 可复用  
使用observe方法把一个节点和一个回调函数绑定到一起。  
- disconnect() 终止所有监听
### 总结
DOM由一系列节点类型构成，主要包括以下几种。
- Node是基准节点类型，是文档一个部分的抽象表示，所有其他类型都继承Node。
- Document类型表示整个文档，对应树形结构的根节点。在JavaScript中，document对象是Document的实例，拥有查询和获取节点的很多方法。
- Element节点表示文档中所有HTML或XML元素，可以用来操作它们的内容和属性。
- 其他节点类型分别表示文本内容、注释、文档类型、CDATA区块和文档片段。

## 十五、DOM扩张
### Selectors API
- querySelector()  
querySelector()方法接收CSS选择符参数，返回匹配该模式的第一个后代元素。  
```js
        // 取得<body>元素
    let body = document.querySelector("body");
    // 取得ID为"myDiv"的元素
    let myDiv = document.querySelector("#myDiv");
    // 取得类名为"selected"的第一个元素
    let selected = document.querySelector(".selected");
    // 取得类名为"button"的图片
    let img = document.body.querySelector("img.button");
```
- querySelectorAll() 返回所有匹配的项，是个NodeList
- matches() 检查一个元素是否匹配指定的选择器
### 元素遍历
Element Traversal API为DOM元素添加了5个属性：
- childElementCount，返回子元素数量（不包含文本节点和注释）；
- firstElementChild，指向第一个Element类型的子元素（Element版firstChild）；
- lastElementChild，指向最后一个Element类型的子元素（Element版lastChild）；
- previousElementSibling，指向前一个Element类型的同胞元素（Element版previousSibling）；
- nextElementSibling，指向后一个Element类型的同胞元素（Element版nextSibling）。
### HTML5
- getElementsByClassName() 返回一个包含所有类名为className的元素的NodeList
- classList
```js
    // 删除"disabled"类
    div.classList.remove("disabled");
    // 添加"current"类
    div.classList.add("current");
    // 切换"user"类
    div.classList.toggle("user");
    // 检测类名
    if (div.classList.contains("bd") && ! div.classList.contains("disabled")){
      // 执行操作
    )
    // 迭代类名
    for (let class of div.classList){
      doStuff(class);
    }
```
- document.activeElement 返回当前活动元素
- document.hasFocus() 方法，该方法返回布尔值，表示文档是否拥有焦点
- document.readyState  loading，表示文档正在加载；complete，表示文档加载完成。
- document.compatMode 浏览器当前处于什么渲染模式。"CSS1Compat" or "BackCompat"
- document.head 指向文档的<head>元素
- document.characterSet = "UTF-8";
innerHTML:  
```js
div.innerHTML = "Hello & welcome, <b>\"reader\"! </b>";
// 插入div中
```
outerHTML：
```js
div.innerHTML = "Hello & welcome, <b>\"reader\"! </b>";
// 替换div
```
- scrollIntoView()方法存在于所有HTML元素上  
alignToTop 窗口滚动后元素的顶部是否与与视口顶部对齐  
scrollIntoViewOptions behavior：定义过渡动画，可取的值为"smooth"和"auto"，block：定义垂直方向的对齐，可取的值为"start"、"center"、"end"和"nearest"，inline：定义水平方向的对齐，可取的值为"start"、"center"、"end"和"nearest"

### 专有扩展
- children属性
- contains()方法
- innerText属性
- outerText属性
- scrollIntoViewIfNeeded()

## 十六、DOM2和DOM3
HTML中的样式有3种定义方式：外部样式表（通过<link>元素）、文档样式表（使用<style>元素）和元素特定样式（使用style属性）。  
通过DOM修改样式：
```js
    let myDiv = document.getElementById("myDiv");
    // 设置背景颜色
    myDiv.style.backgroundColor = "red";
    // 修改大小
    myDiv.style.width = "100px";
    myDiv.style.height = "200px";
    // 设置边框
    myDiv.style.border = "1px solid black";

    // cssText是一次性修改元素多个样式
    myDiv.style.cssText = "width: 25px; height: 100px; background-color: green";
```
以后再看吧。。。。

## 十七、事件
### 事件流
事件流描述了页面接收事件的顺序。  
#### 事件冒泡
被点击的元素，最先触发click事件。然后，click事件沿DOM树一路向上，在经过的每个节点上依次触发，直至到达document对象。
#### 事件捕获
在事件捕获中，click事件首先由document元素捕获，然后沿DOM树依次向下传播，直至到达实际的目标元素。
#### DOM事件流
事件流分为3个阶段：事件捕获、到达目标和事件冒泡。 
### 事件处理程序
为响应事件而调用的函数被称为事件处理程序（或事件监听器）。
#### HTML事件处理
以下列方式创建的事件处理程序，会创建一个函数封装属性的值：
```js
    function() {
      with(document) {
        with(this) {
          // 属性值
          console.log(this.value)
        }
      }
    }
```
onclick属性中的值能直接访问到document和this里面的值
```html
    <!-- 输出"Click Me" -->
    <input type="button" value="Click Me" onclick="console.log(this.value)">
```
这种方式的事件处理程序会创建一个局部变量event。this指向这个元素。  
如果这个元素是一个表单输入框，则作用域链中还会包含表单元素：
```js
      function() {
        with (document) {
          with (this.form) {
            with (this) {
              // 属性值
            }
          }
        }
      }
```
#### DOM0事件处理程序
```js
    let btn = document.getElementById("myBtn");
    btn.onclick = function() {
      console.log(this.id); // myBtn
      console.log(btn===this)  // true
    };
```
DOM0事件处理程序的this指向元素本身。不会包裹this和document。  
#### DOM2事件处理程序
addEventListener()和removeEventListener()
```js
    let btn = document.getElementById("myBtn");
    btn.addEventListener('click',function() {
      console.log(this.id); // myBtn
      console.log(btn===this)  // true
    },false); // true为捕获阶段触发，false非捕获阶段触发
```
可以为同一个元素添加多个事件。  
#### IE事件处理程序
attachEvent() 需要用'onclick' this = window
#### 跨浏览器事件处理程序
DOM2>IE>DOM1

### 事件对象
在DOM中发生事件时，所有相关信息都会被收集并存储在一个名为event的对象中。
#### DOM事件对象
event对象是传给事件处理程序的唯一参数。event.type属性包含的事件类型。  
在事件处理程序内部，this对象始终等于currentTarget的值，而target只包含事件的实际目标（触发事件的元素）。  
event.preventDefault()方法用于阻止特定事件的默认动作(比如啊标签的href)。 
event.stopPropagation()用于取消后续事件捕获或冒泡。  
event.eventPhase可以确定事件流的状态：1：捕获阶段，2目标调用，3冒泡阶段。
::: tip 注意
event对象只在事件处理程序执行期间存在，一旦执行完毕，就会被销毁。
:::
#### IE事件对象
DOM0方式指定的事件，event是window的一个属性。attachEvent()指定的，则event对象会作为唯一的参数传给处理函数，但仍是window的属性。
returnValue设置为false相当于preventDefault()
```js
    var link = document.getElementById("myLink");
    link.onclick = function() {
      window.event.returnValue = false;
    };
```
ancelBubble属性与DOM stopPropagation()方法用途一样，都可以阻止事件冒泡。  
```js
    var link = document.getElementById("myLink");
    link.onclick = function() {
      window.event.cancelBuddle = true;
    };
```
#### 跨浏览器事件对象

### 事件类型
OM3 Events定义了如下事件类型:
- 用户界面事件（UIEvent）：涉及与BOM交互的通用浏览器事件。
- 焦点事件（FocusEvent）：在元素获得和失去焦点时触发。
- 鼠标事件（MouseEvent）：使用鼠标在页面上执行某些操作时触发。
- 滚轮事件（WheelEvent）：使用鼠标滚轮（或类似设备）时触发。
- 输入事件（InputEvent）：向文档中输入文本时触发。
- 键盘事件（KeyboardEvent）：使用键盘在页面上执行某些操作时触发。
- 合成事件（CompositionEvent）：在使用某种IME（InputMethod Editor，输入法编辑器）输入字符时触发。
#### 用户界面事件
- load：在window上当页面加载完成后触发，在窗套（<frameset>）上当所有窗格（<frame>）都加载完成后触发，在<img>元素上当图片加载完成后触发，在<object>元素上当相应对象加载完成后触发。
- unload：在window上当页面完全卸载后触发，在窗套上当所有窗格都卸载完成后触发，在<object>元素上当相应对象卸载完成后触发。
- abort：在<object>元素上当相应对象加载完成前被用户提前终止下载时触发。
- error：在window上当JavaScript报错时触发，在<img>元素上当无法加载指定图片时触发，在<object>元素上当无法加载相应对象时触发，在窗套上当一个或多个窗格无法完成加载时触发。
- select：在文本框（<input>或textarea）上当用户选择了一个或多个字符时触发。
- resize：在window或窗格上当窗口或窗格被缩放时触发。
- scroll：当用户滚动包含滚动条的元素时在元素上触发。<body>元素包含已加载页面的滚动条。
  