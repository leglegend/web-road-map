# 图解HTTP
## 第1章 了解Web及网络基础
### 使用HTTP协议访问Web
HTTP(HyperText Transfer Protocol)，超文本传输协议
### HTTP的诞生
WWW(World Wide Web)，万维网
构建万维网的三项技术：
1. HTML(HyperText Markup Language)，超文本标记语言
2. HTTP
3. URL(Uniform Resource Locator)，统一资源定位符
### 网络基础TCP/IP
计算机与网络设备要互相通信，双方就必须基于相同的方法，或称之为——协议(protocol)。  
TCP/IP协议分为四层：应用层、传输层、网络层、数据链路层。  

* 应用层：决定了向用户提供应用服务时通信的活动  
例如：FTP(File Transfer Protocol)文件传输协议，DNS(Domain Name System)域名系统，HTTP
* 传输层：提供处于网络连接中的两台计算机之间的数据传输
传输层有两个性质不同的协议：**TCP**(Transmission Control Protocol)传输控制协议，UPD(User Data Protocol)用户数据报协议
* 网络层：用来处理网络上流动的数据包，选择一条传输路线
* 数据链路层：用来处理连接网络的硬件部分  

客户端 -> 应用层 -> 传输层 -> 网络层 -> 链路层
                                        |
服务器 <- 应用层 <- 传输层 <- 网络层 <- 链路层

举个HTTP请求的例子：
1. 客户端在 应用层 发起HTTP请求
2. 在 传输层 把HTTP请求报文分割并打标记
3. 在 网络层 增加作为通信目的地的MAC地址
4. 链路层 接收到数据逐层向上发送
每一层都会给信息打上一层首部信息，接收时每一层都会取掉

这种把数据包装起来的做法叫做封装

### 与HTTP关系密切的协议：IP、TCP和DNS
IP(Internet Protocol)网际协议 位于网络层，其作用是把各种数据包传送给对方
MAC地址(Media Access Control Address)  


TCP位于传输层，提供可靠的字节流服务。
字节流服务(Byte Stream Service)，指为了方便传输，将打款数据分割成以报文段(segment)为单位的数据包进行管理

为确保数据送达目标，TCP协议采用了三次握手策略，数据包送出后，会向对方确认是否成功送达。
握手过程中使用了TCP的标志(flag) SYN(synchronize) ACK(acknowledgement)

1. 发送带有SYN标志的数据包给对方
2. 接收后回传带有SYN/ACK标志的数据包以示传达确认信息
3. 发送端再回传带有ACK标志的数据包，代表握手结束

### 负责域名解析的额DNS服务
DNS(Domain Name System)，和HTTP一样位于应用层，提供域名到IP地址之间的解析服务。
DNS服务，通过域名查IP，或通过IP反差域名

### 各种协议与HTTP协议的关系

### URI和URL
URI(Uniform Resource Identifier) 统一资源标识符 
URL(Uniform Resource Locator) 统一资源定位符
URL就是使用浏览器访问页面时要输入的网页地址

URL是URI的子集，URI用字符串标识某一互联网资源，URL标识资源的地址

绝对URI格式：  
http://user:pass@www.example.jp:80/dir/index.html?uid=1001&type=user#ch1
协议   登录信息   服务器地址      端口号 文件路径    查询字符串          片段标识符

登录信息：用户名密码，可选  
服务器地址：可以是DNS可解析的名称，也可以是192.168.1.1这种IPv4地址，或者[0:0:0:0:0:0:0:0:1]IPv6地址  
端口号：可省略，自动使用默认端口号
带层次的文件路径：服务器上的路径  
查询字符串：针对指定文件路径内的资源，传入任意参数，可选  
片段标识符：可选，一般用于标记已获取资源的子资源  

RFC(Request for Comments) 征求修正意见书  

## 第2章 简单的HTTP协议
### HTTP协议用于客户端和服务端之间的通信
### 通过请求和响应的交换达成通信
请求包含：method(请求方法)，URI，协议版本(HTTP/1.1)，首部字段，内容实体
响应包含：协议版本、状态码(status code)、原因短语(reason-phrase)、首部字段(header field)、主体(entity body)
### HTTP是不保存状态的协议
即无状态(stateless)协议，不具备保存之前发送过的请求或响应的功能  
可用Cookie技术管理状态
### 请求URI定位元素
HTTP协议使用URI定位网上的资源  
GET http://hacker.jp/index.htm HTTP/1.1  -> 
GET /index.htm HTTP/1.1
Host:hacker.jp
如果不是访问特定资源而是对服务器本身发起请求可用*代替URI  
OPTIONS * HTTP/1.1
### 告知服务器意图的HTTP方法
HTTP/1.1可使用的方法
GET：获取资源  
POST：传输实体主体  
PUT：传输文件  
HEAD：获得报文首部  
DELETE：删除文件  
OPTIONS：询问支持的方法  
TRACE：追踪路径  
CONNECT：要求用隧道协议连接代理  
CONNECT方法要求在与代理服务器通信时建立隧道，实现用隧道协议进行TCP通信。主要使用SSL（Secure Sockets Layer，安全套接层）和TLS（Transport Layer Security，传输层安全）协议把通信内容加密后经网络隧道传输。  
### 使用方法下达命令
### 持久连接节省通信量
持久连接 HTTP keep-alive，避免加载很多资源时每次都要建立TCP连接  
在HTTP/1.1中，所有连接默认都是持久连接  
持久连接使可以同时发送多个连接，而不用等待上次连接结束再发起下个连接
### 使用Cookie的状态管理
响应报文有一个Set-Cookie的首部字段，通知客户端保存Cookie，下次请求会在请求中加入Cookie

## 第3章 HTTP报文内的HTTP信息
### HTTP报文
HTTP报文是由多行(CR+LF换行)数据构成的字符串文本
包含请求报文和响应报文

### 请求报文及响应报文的结构
报文首部
空行
报文主体(可选)

请求行：方法URI和HTTP版本  
状态行：状态码原因短语和HTTP版本
首部字段：请求头、响应头、实体  
其他：RFC未定义的首部(Cookie等)
### 编码提升传输速率