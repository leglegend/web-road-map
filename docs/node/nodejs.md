# 深入浅出Node.js

## 一、Node简介
### Node的特点
#### 异步I/O
类似去web中的发送请求，浏览器在发送完请求后，并不知道服务器会在何时给出响应。在Node中，异步I/O与次类似，以读取未见为例子：
```js
var fs = require('fs');
fs.readFile('file.txt', function(err, data) {
  console.log('done');
});
console.log('reda file')
// read file
// done
```
#### 事件与回调函数
以处理Ajax请求为例：
```js
const http = require('http')
http
  .createServer(function (request, response) {
    request.on('data', function (chunk) {
    })
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Hello World\n')
  })
  .listen(8888)
```
通过事件监听请求，通过回调处理请求。
#### 单线程
Node和浏览器中的Javascript一样，都是单线程的，这使得我们不需要过多的考虑状态同步问题，但单线程也有他的弱点，比如无法利用多核CPU、错误会引起整个应用退出、占用CPU导致无法异步调用I/O。  
浏览器中可以利用Worker创建工作者线程，Node中可以利用ChildProcess创建子进程。
#### 跨平台
通过libuv实现跨平台。
### Node的应用场景
 I/O密集型（异步I/O）  
 是否不擅长CPU密集型业务？单线程容易阻塞
 分布式应用

 ## 二、模块机制
 ### CommonJS规范
 1. 模块引用
```js
var http = require('http')
```
2. 模块定义
在Node中，一个文件就是一个模块，在模块中，还存在一个module对象，exports是module的属性。
```js
module.exports = {

}
exports.add = function() {

}
```
3. 模块标识
模块标识其实就是传递给require()方法的参数，它必须是符合小驼峰命名的字符串，或者以．、.．开头的相对路径，或者绝对路径。它可以没有文件名后缀．js。
### Node的模块实现
在Node中引入模块，需要经历3个步骤：路径分析、文件定位、编译执行。Node种有两类模块，一类是Node提供的模块，称为核心模块；另一类是用户编写的模块，称为文件模块。  
核心模块在源码编译过程中就直接加载到内存中，而文件模块是在运行时加载的。  
Node对引入过的模块会进行缓存，无论什么模块，Node二次加载都会采用缓存优先。  
#### 路径分析和文件定位
require()接收一个模块标识符，模块标识符在Node种有以下几类：
- 核心模块，如http、fs、path等。
- ．或．．开始的相对路径文件模块。
- 以/开始的绝对路径文件模块。
- 非路径形式的文件模块，如自定义的connect模块。
require()方法会将路径转为真实路径。  
自定义模块会自身所在目录逐级向上查找node_modules目录，如果找到，就会加载该模块，比较慢。  
遇到没添加扩展名的文件，Node会按．js、.json、.node的次序补足扩展名，依次尝试，如果不是js文件，最好加上扩展名。  
require()没有找到对应的文件，会把目录当作一个包来处理，首先查找package.json文件，如果没有，会查找index文件。  
#### 模块编译
在Node中，每个模块就是一个对象：
```js
        function Module(id, parent) {
          this.id = id;
          this.exports = {};
          this.parent = parent;
          if (parent && parent.children) {
            parent.children.push(this);
          }

          this.filename = null;
          this.loaded = false;
          this.children = [];
        }
```
每一个编译成功的模块都会将其文件路径作为索引缓存在Module._cache对象上，以提高二次引入的性能。   
Node对获取的JavaScript文件内容进行了头尾包装，一个正常的JavaScript文件会被包装成如下的样子：
```js
        (function (exports, require, module, __filename, __dirname) {
          var math = require('math');
          exports.area = function (radius) {
            return Math.PI * radius * radius;
          };
        });
```
所以在每个js文件中都能访问到exports、module等变量和require方法。  
由于这里面exports是以形参的方式传入的，所以不能直接给exports复制，如果需要则要使用`module.exports`进行赋值。  

### 核心模块
核心模块其实分为C/C++编写的和JavaScript编写的两部分，其中C/C++文件存放在Node项目的src目录下，JavaScript文件存放在lib目录下。  

### C/C++扩展模块
V8是Node自身的动力来源之一。它自身由C++写成，可以实现JavaScript与C++的互相调用。

### 包与npm
#### 包结构
- package.json：包描述文件。
- bin：用于存放可执行二进制文件的目录。
- lib：用于存放JavaScript代码的目录。
- doc：用于存放文档的目录。
- test：用于存放单元测试用例的代码。
```json
// package.json
{
    "name": "node", // 包名 规范定义它需要由小写的字母和数字组成，可以包含．、_和-，但不允许出现空格。
    "description": "a node package", // 包描述
    "version": "1.0.0", // 包版本
    "keywords": ["node", "package"], // 包关键字
    "maintainers": [{"name": "maintainer"}], // 包维护者列表。每个维护者由name、email和web这3个属性组成
    "contributors": [], // 贡献者列表
    "bugs": "", // 一个可以反馈bug的网页地址或邮件地址。
    "licenses": "", // 许可证
    "repository": "", // 代码仓库
    "dependencies": [], // 使用当前包所需要依赖的包列表。NPM会通过这个属性帮助自动加载依赖的包。
    "devDependencies": [], // 一些模块只在开发时需要依赖。
    "scripts": {}, // 脚本说明对象 
    "main": "", // 模块引入方法require()在引入包时，会优先检查这个字段，并将其作为包中其余模块的入口。
}
```
#### NPM常用功能
```js
npm -v // 查看NPM版本
npm // 查看npm帮助
npm install express // 安装依赖包
npm install express -g // 全局安装依赖包
npm install underscore --registry=http://registry.url // 使用特定的registry安装依赖包
npm config set registry http://registry.url // 修改默认源
npm init // 初始化项目，生成package.json文件
npm adduser // 注册账号
npm publish // 发布包
npm ls // 查看包列表
```
### 前后端共用模块
一些模块可以做到前后端公用。

## 三、异步I/O
异步I/O的提出是期望I/O的调用不再阻塞后续运算，将原有等待I/O完成的这段时间分配给其余需要的业务去执行。  
操作系统内核对于I/O只有两种方式：阻塞与非阻塞。阻塞I/O会等待I/O完成，非阻塞I/O会立即返回调用状态，为获取完整数据，需重复调用I/O来确认是否完成，这种重复调用判断叫做轮询。  
对于Node的异步I/O，实际上是把I/O放在了其他线程完成。我们把JavaScript运行的线程叫做主线程，通过部分线程进行阻塞或非阻塞I/O操作，完成后通过线程通信将数据返回主线程，这就实现了异步I/O。  
Windows和*nix平台都支持这种异步I/O操作，但是实现方式不同，Node提供了libuv作为抽象封装层，抹平了不同平台的差异。  

### Node的异步I/O
在进程启动时，Node便会创建一个类似于while(true)的循环，每执行一次循环体的过程我们称为Tick。每个Tick的过程就是查看是否有事件待处理，如果有，就取出事件及其相关的回调函数。  
除了用户代码无法并行执行外，所有的I/O（磁盘I/O和网络I/O等）则是可以并行起来的。  

### 非I/O的异步API
setTimeout()、setInterval()、setImmediate()和process.nextTick()是一些一些与I/O无关的异步API。  
调用setTimeout()或者setInterval()创建的定时器会被插入到定时器观察者内部的一个红黑树中。每次Tick执行时，会从该红黑树中迭代取出定时器对象，检查是否超过定时时间，如果超过，就形成一个事件，它的回调函数将立即执行。  
调用process.nextTick()方法，只会将回调函数放入队列中，在下一轮Tick时取出执行。  
setImmediate()优先级低于process.nextTick()。  

### 事件驱动与高性能服务器
集中典型的服务器模型：
- 同步式。对于同步式的服务，一次只能处理一个请求，并且其余请求都处于等待状态。
- 每进程/每请求。为每个请求启动一个进程，这样可以处理多个请求，但是它不具备扩展性，因为系统资源只有那么多。
- 每线程/每请求。为每个请求启动一个线程来处理。尽管线程比进程要轻量，但是由于每个线程都占用一定内存，当大并发请求到来时，内存将会很快用光，导致服务器缓慢。  
Node采用事件驱动，通过事件循环处理所有任务。  

## 四、异步编程

### 函数式编程
高阶函数：以函数作为参数或返回值的函数。  
通过指定部分参数来产生一个新的定制函数的形式就是偏函数。  
### 异步编程的优势与难点
基于事件驱动的非阻塞异步I/O模型。  
try/catch语句不能捕获异步请求。
### 异步编程解决方案
- 事件发布/订阅模式。
- Promise/Deferred模式。
- 流程控制库。
```js
        // 订阅
        emitter.on("event1", function (message) {
          console.log(message);
        });
        // 只会触发一次
        emitter.once"event1", function (message) {
          console.log(message);
        });
        // 发布
        emitter.emit('event1', "I am message! ");
```
Promise现在ES6已经支持了。

## 五、内存控制
在浏览器不需要过多的关注垃圾回收机制，但是服务器接收所有用户的访问，需要严格控制内存使用。
### V8的垃圾回收机制与内存限制
Node中通过JavaScript使用内存时就会发现只能使用部分内存（64位系统下约为1.4 GB,32位系统下约为0.7GB）。  
当我们在代码中声明变量并赋值时，所使用对象的内存就分配在堆中。 
可通过以下方式调整内存：   
```
        node --max-old-space-size=1700 test.js // 单位为MB
        // 或者
        node --max-new-space-size=1024 test.js // 单位为KB        
```
### 内存泄漏
把内存当缓存是危险的，最好使用外部缓存，Redis。



