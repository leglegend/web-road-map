## 1、Vue相关
### 1.1 组件间传值
除了了解都有哪些传值方式外，还能够说出每种方式适合哪些场景：  

*1、Props*  
父传子最方便快捷的方式，子组件无法直接改变props的传值，需要通过emit的方式告知父组件更改props的值。也可通过v-model实现双向绑定更改props。  
`注：Vue3中移除了v-bind的.sync修饰符`  

*2、事件API*  
组件实例的事件API，通过`$on/$once`注册事件，`$emit`触发事件。  
`注：$on/$once在Vue3中已被移除`  

*3、透传*  
Vue2：父组件传递给子组件的事件和没有被props接收的属性，可通过`v-on="$listeners"`和`v-bind="$arrts"`方式传递给孙子组件。  
Vue3：父组件传递给子组件的没有被props或emits接收的属性和事件，可通过`v-bind="$arrts"`的方式传递给孙子组件。  
`注：$listeners在Vue3中已被合并到$attrs`  

*4、状态管理器*  
使用Vuex或Pinia，可在任意组件传值或接收某值。  

*5、访问组件实例*  
可通过`$parent/$refs/$children/$root`获取组件实例，直接使用组件实例中的属性或方法。  
`注：$children在Vue3中已被移除`  

*6、依赖注入*  
祖先组件`provide`提供数据或方法，后代组件可以通过`inject`访问。  

*7、事件总线*  
在Vue的root节点上添加一个Vue实例$bus，可以使用该实例的事件API进行组件间通信。由于Vue3中移除了部分事件API，可通过第三方库实现事件总线。

### 1.2 v-if和v-for的优先级
在Vue2中，v-for具有更高的优先级，所以v-if使用v-for中的变量是可行的。  
而在Vue3中，v-if的优先级大于v-for，将不能够使用v-for中的变量。  
通过对比Vue2和Vue3编译出来的代码能够非常直观的看到其处理方式的不同：
```html
<template>
  <div>
    <span v-if="item" v-for="item in items"></span>
  </div>
</template>
```
在上端代码中，Vue2编译出来的代码为：
```js
function a(n, r, t) {
  var e = t(144),
    o = function () {
      var n = this,
        r = n._self._c
      return r(
        'div',
        n._l(n.items, function (t) {
          return t ? r('span', [n._v(n._s(t))]) : n._e()
        }),
        0
      )
    },
    i = [],
    u = {
      name: 'HelloWorld',
      data() {
        return { items: [1, 2, 3] }
      },
      props: { msg: String }
    },
    f = u,
    c = t(1),
    a = (0, c.Z)(f, o, i, !1, null, '9ecfc8c2', null),
    l = a.exports
  ;(e.ZP.config.productionTip = !1),
    new e.ZP({
      render: function (n) {
        return n(l)
      }
    }).$mount('#app')
}
```
代码被压缩混淆了，但还是能找到其中的render函数`r()`。能够看到，Vue2编译出来的代码先调用了`_l`函数渲染列表，然后才是`v-if`编译为的三元表达式。  

Vue3编译出来的代码为：
```js
const __sfc__ = {
  __name: 'App',
  setup(__props) {
    const items = [0, 1, 2]

    return (_ctx, _cache) => {
      return (
        _openBlock(),
        _createElementBlock('div', null, [
          _ctx.item
            ? (_openBlock(),
              _createElementBlock(
                _Fragment,
                { key: 0 },
                _renderList(items, (item) => {
                  return _createElementVNode('span')
                }),
                64 /* STABLE_FRAGMENT */
              ))
            : _createCommentVNode('v-if', true)
        ])
      )
    }
  }
}
```
可以看到，v-if首先被编译为一个三元表达式，v-for相关内容在三元表达式里面，这时候item是没有值的。  

> 注：无论在Vue2和Vue3中，都不推荐将v-if和v-for同时使用。

### 1.3 Vue里有哪些生命周期？分别做了什么事情？
beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
beforeDestroy/beforeUnmount
destroyed/unmounted 
