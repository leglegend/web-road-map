# Node.js入门教程
[Node.js官网入门教程链接](http://nodejs.cn/learn)
## Node.js简介
Node.js是一个开源和跨平台的JavaScript运行时环境。
Node.js在浏览器之外运行V8引擎。  
Node.js在单线程运行，使用异步I/O。  
**一个HelloWorld示例：**  
```js
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
```
## 安装Node.js
[下载地址](http://nodejs.cn/download/)
## Node.js 和浏览器的区别
- 没有DOM和BOM等浏览器提供的对象API
- 不用担心浏览器版本
- 使用CommonJS而非ES Modules
## 启动和退出Node.js脚本
通过下面的指令调用：
```js
node server.js
```
在控制台运行，可直接通过`ctrl-c`关闭，或者在代码里调用`process.exit()`（不建议）。 

## 读取环境变量
```js
process.env.NODE_ENV // "development"
```
该环境变量默认是`development`，可在脚本运行前将其设置为`production`，告诉Node.js这是生产环境。
::: tip 注意
process不需要require，它是自动可用的。
:::

## 从命令行接收参数
当使用node指令启动脚本时，可以传入任意数量的参数。  
```js
node server.js foo=bar 
```
可通过process.argv属性获取这个参数，argv返回一个数组：  
['node命令的完整路径','被执行文件的完整路径','参数']
可使用`minimist`库帮助解析参数

## 输出到命令行
```js
console.log('123')
console.log('%s花了%d元买了%i个苹果','小明',1.5,1)
console.clear() // 清楚控制台
console.count('') // 对打印字符串的次数进行计数
console.trace() // 打印堆栈踪迹
console.time()
console.timeEnd() // 计算耗时
console.error() // 错误日志
console.log('\x1b[33m%s\x1b[0m', '你好') // 黄色文本
```
