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
### 数值转换
可以用Number()，parseInt()和parseFloat()函数转换为整数和浮点数，具体细节不说了，整数最好用parseInt()，浮点数用parseFloat()。</br>
### String
字符串类型，可用单引号、双引号、反引号标示。</br>
几乎所有值都可用toString()转换为字符串。</br>
### Symbol
就是说Symbol()函数可以给一个不重复的初始值，我把它当成不显示具体值的uuid。</br>
## 四、语句
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
- 
