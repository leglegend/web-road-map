# 图解HTTP
## 了解Web及网络基础
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
传输层有两个性质不同的协议：TCP(Transmission Control Protocol)传输控制协议，UPD(User Data Protocol)用户数据报协议
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