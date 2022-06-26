# 深入浅出Vue.js
## 一、Vue.js简介
Vue是一款渐进式JavaScript框架。渐进式代表的含义是：主张最少。如果你只需要维护一个单页面，可以引入Vue.js来简化交互，也可以作为已有项目的库来使用。如果需要构建一个大型应用，也可以使用脚手架的方式初始化一个项目。  
所谓渐进式，就是把框架分层：  
**视图层渲染->组件机制->路由机制->状态管理->构建工具**  
既可以只是用视图层渲染功能来制作一个单页，也可以使用Vue全家桶来开发大型应用。  
## 第一篇 变化侦测
Vue.js最独特的特性之一是看起里并不显眼的响应式系统。数据模型仅仅是普通的JavaScript对象。而当你修改他们时，视图会进行更新。这使得状态管理非常简单、直接。不过理解其工作原理同样重要，这样你可以回避一些常见的问题。
## 二、Objct的变化侦测
Object和Array的变化侦听采取了不同的处理方式。
### 如何追踪变化
在JavaScript中，有两种方法可以侦测到数据的变化：`Object.defineProperty`和`Proxy`。Vue2中使用的便是`Object.defineProperty`。  
下面是一段通过`Object.defineProperty`侦测数据变化的代码：
```js
  function defineReactive(data, key, val) {
    Object.defineProperty(data, key, {
      enumerable: true,
      writable: true,
      configurable: true,
      get: function () {
        return val
      },
      set: function (newVal) {
        if (val === newVal) return
        val = newVal
      }
    })
  }
```



