# Vue.js设计与实现
Vue.js官方团队成员——霍春阳著作，尤大作序推荐，一本对vue3深度解析的书，每个使用vue的前端人都该深读一遍，极力推荐！
## 一、框架设计与实现
### 第1章 权衡的艺术
#### 声明式和命令式
这章讲述了Vue.js框架在设计之初的一些选择，这里提到了一些概念——`声明式`和`命令式`。命令式在我们日常编码中很是常见，比如说：为id为root的标签添加文本`hello world`并绑定一个点击事件，用代码可以非常清晰的描述这个操作：
```js
const root = document.querySelect('#root')
root.innerText = 'hello world'
root.addEventListener('click', ()=>{ alert('ok') })
```
可以看到，声明式的整个过程都能用代码一一描述出来。而命令式，就好像我们只用告诉Vue.js我们要做什么：
```html
<div id="root" @click="()=> alert('ok')"></div>
```
Vue.js内部一定是通过声明式来完成整个操作的，但是开发者只需要关注结果。  
Vue.js采用了声明式框架，并不是因为声明式性能更优越，其性能并不高于命令式。例如我们通过document操作直接修改一个标签中的内容，还有比这性能更高的操作了么？没有，通过Vue.js实现这个功能，需要先找到这个标签，再通过命令式修改标签中的内容，这会损失一些性能。但是声明式更加利于代码的维护，Vue.js要做到的就是，在保持可维护性的同时让性能损失最小化。  
#### 虚拟DOM VS innerHTML
将一个标签放进页面，可以通过`document`或者`innerHTML`，Vue.js底层一定是使用了这两者之一的，但其实现的过程，是通过虚拟DOM来实现的。在比较性能之前，需要先明确一个点，操作DOM的计算量要远远高于JS层面的计算，我们可以通过他们在DOM层面的计算量+JS层面的计算量来确定性能孰优孰劣。  
| 阶段     | 运算    | 虚拟DOM         | innerHTML          |
| -------- | ------- | --------------- | ------------------ |
| 创建页面 | JS运算  | 创建VNode       | 渲染HTML字符模板   |
|          | DOM运算 | 新建所有DOM元素 | 新建所有DOM元素    |
| 更新页面 | JS运算  | 创建VNode+Diff  | 渲染HTML字符模板   |
|          | DOM运算 | 必要的DOM更新   | 销毁旧DOM创建新DOM |
可以看到，在创建页面的时候，两种方法并没有太大差别，但是一但更新了页面，虚拟DOM只需要更新修改了的内容，无意性能会更好。  
除了性能，虚拟DOM也比直接操作模板字符串更加便捷和更容易维护。
#### 运行时和编译时
Vue.js是一个运行时+编译时框架。我们先回忆下在用Vue写代码时的场景，HTML代码都放在`<template>`标签下，Vue.js会把这些HTML标签编译成一个树形结构的对象，在运行到浏览器中时，再把这些代码渲染为HTML代码放进页面中。
### 第2章 框架设计的核心要素
Vue3中通过`console.log()`打印出来的Ref对象不利于阅读，可通过DevTools中的Console标签下的`Enable custom formatters`选项优化提示。  
开发环境中需要给到开发者足够的提示，但是这些提示生产环境并用不到，这些提示会在构建资源时被移除。  
Rollup和webpack都支持`Tree-Shaking`功能，排除`dead code`。可通过`/*#__PURE__*/`注释配合`Tree-Shaking`的工作。  
Vue会根据用户的需要提供不同形式的包，例如通过script标签引入的就是一个IIFE格式的资源，或者在ESM中使用，在打包工具中使用，在Node中使用等，都可通过rollup或者webpack配置包的形式。  
用不到的模块，也可通过配置设置不打进包里。比如所我们不使用OptionApi，就可以设置__VUE_OPTION_API__为false来禁用。  
Vue提供了`registerErrorHandler`和`callWithErrorHandling`函数来注册和捕获错误。`app.config.errorHandler`也可注册统一错误处理函数。  
### 第3章 Vue.js 3 的设计思路
Vue.js主要由编译器(renderer)和渲染器(compiler)组成，在完整的认识他们之前，我们可以把它们当成一个函数，先简单的阐述其功能。先来看一段简单的代码：
```html
<template>
  <div @click="handler">click me</div>
</template>

<script>
  export default {
    data() {},
    methods: {
      handler() {}
    }
  }
</script>
```
这段代码再简单不过了，给div绑定一个click事件，div中的内容是`click me`。看一下这段简单的代码Vue.js是如何实现的。  
对于编译器来说，`template`标签里的内容就是一串字符串，编译器会把它翻译成一个渲染函数：
```js
render() {
  return h('div', { onClick: handler }, 'click me')
}
```
这里面的`h`函数负责返回一个JS对象，调用`h`函数的结果就是：
```js
{
  tag: 'div',
  props: { onClick: handler },
  children: 'click me'
}
```
之后编译器会把`render`函数放在组件对象上：
```js
export default {
  data() {},
  methods: {
    handler() {}
  },
  render() {
    return h('div', { onClick: handler }, 'click me')
  }
}
```
`render`函数返回的就是虚拟DOM，渲染器(renderer)负责把虚拟DOM渲染到页面上：
```js
function renderer(vnode, container) {
  const el = document.createElement(vnode.tag)
  // 遍历 vnode.props 属性，将属性、事件添加到 DOM 元素
  for (const key in vnode.props) {
    if (/^on/.test(key)) {
      // 以 on 开头，说明是事件
      el.addEventListener(
        key.substr(2).toLowerCase(), // 事件名称
        vnode.props[key] // 事件处理函数
      )
    }
  }

  // 处理 children
  if (typeof vnode.children === 'string') {
    // 如果 children 是字符串，说明它是元素的文本子节点
    el.appendChild(document.createTextNode(vnode.children))
  } else if (Array.isArray(vnode.children)) {
      // 如果 children 是数组，则递归调用 renderer 渲染子节点，挂载到当前元素上
    vnode.children.forEach((child) => renderer(child, el))
  }

  // 将元素添加到挂载点下
  container.appendChild(el)
}
```
如果上述的元素不是`div`，而是一个组件，那该如何处理？文章提到了组件的本质：
```js
const MyComponent = function() {
  return {
    tag: 'div',
    props: { onClick: handler },
    children: 'click me'
  }
}
```
也就是说，组件返回的其实也是一个虚拟DOM，不过在处理组件前我们要先进行一部操作：
```js
function mountComponent(vnode, container) {
  // 调用组件函数，获取虚拟DOM
  const subtree = vnode.tag()
  // 调用 renderer 函数，渲染subtree
  renderer(subtree, container)
}
```
这就是编译器和渲染器大概的工作原理，后续章节会详细的介绍它们。
## 二、相应系统
### 第4章 相应系统的作用与实现
