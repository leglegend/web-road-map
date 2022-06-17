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

## 从命令行接收输入
```js
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`你叫什么名字?`, (name) => {
  console.log(`你好 ${name}!`)
  readline.close()
})
```
如果需要更复杂的输入，推荐使用`Inquirer.js`。

## exports
```js
module.exports = {
  name: 'exports'
}
// or 
exports.foo = {
  name: 'exports'
}
```

## npm 包管理器
`npm install`会安装`package.json`里面所有的依赖到`node_modules`文件夹中。  
也可以通过`npm install <package-name>`安装特定的包。  
- --save/-S 安装并添加条目到 package.json 文件的 dependencies。
- --save-dev/-D 安装并添加条目到 package.json 文件的 devDependencies。 
`npm install --production` 生产环境，不会安装dev包。   
`npm update`可更新所有包，更新单个包用`npm update <package-name>`。  
`npm run <task-name>`可运行package.json中script属性下的指定任务。  
`npm root -g`可查看全局位置。  
`npx <package-name>`可运行包。 
`npm list` 查看所有已安装包的最新版本。  
`npm list -g` 全局。  
`npm list --depth=0` 顶层软件包。  
`npm list <package-name>` 具体某个包的版本。  
`npm view <package-name> version` 线上最新版本，加s获取所有版本。
`npm install <package-name>@<version>` 安装某个包的指定版本。
`npm uninstall <package-name>` 卸载指定包。

## package.json
- version 表明了当前的版本。
- name 设置了应用程序/软件包的名称。
- description 是应用程序/软件包的简短描述。
- main 设置了应用程序的入口点。
- private 如果设置为 true，则可以防止应用程序/软件包被意外地发布到 npm。
- scripts 定义了一组可以运行的 node 脚本。
- dependencies 设置了作为依赖安装的 npm 软件包的列表。
- devDependencies 设置了作为开发依赖安装的 npm 软件包的列表。
- engines 设置了此软件包/应用程序在哪个版本的 Node.js 上运行。
- browserslist 用于告知要支持哪些浏览器（及其版本）。

## package-lock.json
该文件旨在跟踪被安装的每个软件包的确切版本，以便产品可以以相同的方式被 100％ 复制（即使软件包的维护者更新了软件包）。
- `〜0.13.0`，只更新版本补丁，0.13.1可以，0.14.0不行
- `^0.13.0`，更新版本和补丁
- `0.13.0`，不更新
package-lock.json会固化当前安装的每个包的版本，`npm install`时，npm会使用这些确切的版本。  
当运行`npm update`时，package-lock.json文件中的依赖的版本会被更新，package.json不会变。    

## 包运行器 npx
`npx`可以运行使用Node.js构建并通过npm仓库发布的代码。  

## 事件循环
事件循环(Event loops)负责执行代码、收集和处理事件以及执行队列中的子任务。  
调用栈(Call Stack)是一个LIFO队列（后进先出）。  
每次迭代中的事件循环都会查看调用堆栈中是否有东西并执行它直到调用栈为空。  
steTimeout或者用户触发事件会被放入消息队列(任务队列)中。  
事件循环会优先处理调用栈中的所有消息(任务)，当调用堆栈为空时，它才会处理消息队列的任务。  
微任务(Microttasks)，每当调用栈为空时，微任务队列中的每一个任务会被依次执行，新添加的任务也会在下一个宏任务执行前执行。
## process.nextTick()
将一个函数传给`process.nextTick()`时，则指示引擎在当前操作结束（在下一个事件循环滴答开始之前）时调用此函数。  
```js
console.log(1)
setImmediate(()=>{
  console.log(6)
})
setTimeout(console.log, 0, 5)
Promise.resolve(4).then(console.log)
process.nextTick(() => {
  console.log(3)
})
console.log(2)
// 1 2 3 4 5 6
```

## JavaScript 异步编程与回调

## Promise
## async/await

## Node.js 事件触发器
```js
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()
eventEmitter.on('start', (number) => {
  console.log('开始'+number)
})
eventEmitter.emit('start', 23)
```
- `once` 单词监听
- `removeListener`/`off` 从事件中移除事件监听器
- `removeAllListeners` 移除事件的所有监听器

## 搭建HTTP服务器
```js
const http = require('http') // 引入http模块

const port = 3000 // 设置端口号

const server = http.createServer((req, res) => { // 创建服务器
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('你好世界\n') // 返回
})

server.listen(port, () => { // 监听
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})
```
## 发送HTTP请求
```js
const https = require('https')
const options = {
  hostname: 'nodejs.cn',
  port: 443,
  path: '/todos',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`状态码: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()
```
使用axios可以简化很多：
```js
const axios = require('axios')

axios
  .post('http://nodejs.cn/todos', {
    todo: '做点事情'
  })
  .then(res => {
    console.log(`状态码: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
```

## 文件描述符
```js
const fs = require('fs')

fs.open('/Users/joe/test.txt', 'r', (err, fd) => {
  //fd 是文件描述符。
})
```
- `r`  打开文件用于读取。
- `r+` 打开文件用于读写。
- `w+` 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
- `a`  打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
- `a+` 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。
`fs.open()`可以同步打开文件。  

## 文件属性
用Node查看文件的详细信息：
```js
const fs = require('fs')
fs.stat('./server.js', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(stats)
})
```
- `stats.isFile()` 是否为文件
- `stats.isDirectory()` 是否为目录(文件夹)
- `stats.isSymbolicLink()` 是否为符号链接
- `stats.size` 获取文件大小

## 文件路径
```js
const path = require('path')

const src = '/Users/joe/test.txt'
path.dirname(src) // '/Users/joe'
path.basename(src) // 'test.txt'
path.extname(src) // '.txt'

path.basename(notes, path.extname(src)) //test

path.join(path.dirname(src), 'test.txt') // '/Users/joe/test.txt'
```
`path.resolve()` 获得相对路径的绝对路径计算。
```js
path.resolve('./test.txt') // 将test.txt附加到当前工作目录上
path.resolve('tmp', 'test.txt')// 将tmp/test.txt附加到当前工作目录上
path.resolve('/tmp', 'test.txt')// /tmp/test.txt
```
`path.normalize()`  当包含诸如 `.`、`..` 或`双斜杠`之类的相对说明符时，其会尝试计算实际的路径。

## 读取文件
```js
const fs = require('fs')

fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
```
`fs.readFileSync()` 可以同步读取。  
这两个方法都会将文件的全部内容读取到内存中，大文件最好用流来读取文件的内容。  

## 写入文件
```js
const fs = require('fs')

const content = '一些内容'

fs.writeFile('/Users/joe/test.txt', { flag: 'a+' }, content, err => {
  if (err) {
    console.error(err)
    return
  }
  //文件写入成功。
})
```
`fs.writeFileSync()` 可以同步写入。`flag`可传入以下几项：
- `r+` 打开文件用于读写。
- `w+` 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
- `a`  打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
- `a+` 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。
**将内容追加到文件末尾:**  
```js
const content = '一些内容'

fs.appendFile('file.log', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //完成！
})
```
`fs.appendFileSync()` 可以异步追加。  

## 使用文件夹
- `fs.access()` 检查文件夹是否存在以及 Node.js 是否具有访问权限。
- `fs.mkdir()` 或 `fs.mkdirSync()` 可以创建新的文件夹。
- `fs.readdir()` 或 `fs.readdirSync()` 可以读取目录的内容（全部的文件和子文件夹）。
- `fs.rename()` 或 `fs.renameSync()` 可以重命名文件夹。 
- `fs.rmdir()` 或 `fs.rmdirSync()` 可以删除文件夹。

## 路径模块
除了之前介绍的，还有下面几个：
- `path.parse()` 解析对象的路径为组成其的片段。 
- `path.relative()` 两个参数，基于当前工作目录，返回从第一个路径到第二个路径的相对路径。
- `path.isAbsolute()` 如果是绝对路径，则返回 true。 

## 操作系统模块
```js
const os = require('os')
```

## 事件模块
```js
const EventEmitter = require('events')
const door = new EventEmitter()

door.on('open', () => {
  console.log('The door is open')
}) // door.addListener()效果一样

door.emit('open') // 触发事件
door.eventNames() // 返回door身上注册事件的数组
door.getMaxListeners() // 最大监听数量
door.listenerCount('open') // 获取指定事件监听器的数量
door.listeners('open') // 返回监听器数组
door.off('open') // 取消监听 同removeListener()
door.once('open') // 只监听一次
door.prependListener('open') // 在监听器数组的开头添加一个监听器
door.prependOnceListener('open') // 在监听器数组的开头添加一个监听器，只监听一次
door.removeAllListeners('open') // 删除指定事件的所有监听器
door.removeListener() // 删除指定事件的指定监听器
door.setMaxListeners() // 设置最大监听数量
```

## http 模块
```js
const http = require('http')
http.createServer() // 创建一个服务器，返回http.Server实例
http.request() // 创建一个请求，返回http.ClientRequest实例
http.get() // 自动地设置 HTTP 方法为 GET，并自动地调用req.end()。
```
**http.Server：**
```js
const server = http.createServer() // 返回http.Server实例
server.listen(port,fn) // 启动 HTTP 服务器并监听连接。
server.close(fn) // 关闭服务器。
```
**http.IncomingMessage和http.ServerResponse：**
```js
const server = http.createServer((req, res) => {
  //req 是一个 http.IncomingMessage 对象。
  //res 是一个 http.ServerResponse 对象。
  req.statusCode() // 返回响应状态码
  req.headers() // 返回响应头
  req.method() // 返回请求方法
  req.url() // 返回请求的 URL
  req.httpVersion() // 返回请求的 HTTP 版本

  res.statusCode = 500
  res.statusMessage = '内部服务器错误'
  res.setHeader('headername', value) // 设置 HTTP 消息头的值
  res.writeHead(statusCode, headers) // 设置 HTTP 响应头和状态码
  res.end() // 发送响应内容并关闭连接
})
```

## Buffer
它表示在 V8 JavaScript 引擎外部分配的固定大小的内存块。


## 流
在传统的方式中，当告诉程序读取文件时，这会将文件从头到尾读入内存，然后进行处理。使用流，则可以逐个片段地读取并处理（而无需全部保存在内存中）。  
