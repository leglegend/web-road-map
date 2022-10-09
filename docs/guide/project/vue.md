# Vue :star:
学习完三件套之后，就需要选择三大框架之一进行学习，现在大部分企业都会使用框架进行前端开发。
## 资源 :books:
[Vue官方教程](https://cn.vuejs.org/)  
[深入浅出Vue.js](https://weread.qq.com/web/reader/f8632810723f0231f86d9aa)  
[Vue.js设计与实现](https://item.jd.com/13611922.html)  

::: tip 建议
Vue官方的教程非常全面，建议反复刷，熟悉各种用法。上面两本书都是讲Vue原理的，一本Vue2一本Vue3。下面不会列举Vue的用法，看官网即可，只会列举一些重要的知识点。
:::

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
| Vue2          | Vue3          | setup           |
| ------------- | ------------- | --------------- |
| beforeCreate  | beforeCreate  | x               |
| created       | created       | x               |
| beforeMount   | beforeMount   | onBeforeMount   |
| mounted       | mounted       | onMounted       |
| beforeUpdate  | beforeUpdate  | onBeforeUpdate  |
| updated       | updated       | onUpdated       |
| beforeDestroy | beforeUnmount | onBeforeUnmount |
| destroyed     | unmounted     | onUnmounted     |

setup在beforeCreate之前运行，故没有beforeCreate和created这两个钩子函数。

我们可以把Vue的生命周期分为`创建`、`挂载`、`更新`和`卸载`四个阶段，每个阶段会在开始和结束时分别调用beforeXxxx和xxxxed声明周期钩子函数。  

另外还有`初始化`、`编译`阶段，但是没有与之对应的钩子函数。  

我们按照实例化一个Vue对象的顺序给出每个阶段做了哪些工作：  

*1、初始化阶段*  
从`new Vue()`到`beforeCreate`之间的阶段，主要在Vue实例上初始化一些属性(`$root、$parent、$children、$refs等等`)、初始化事件(实例上有个_events属性用来存放注册在该实例的事件函数)以及初始化渲染函数(每个实例都有_c函数，就是createElement)  

*2、创建阶段*  
`beforeCreate`到`created`之间，该阶段主要是在Vue实例上添加我们在组件中定义的injects、props、methods、data、computed、watch、provide(真的是按照上面给出的顺序)，当然还包括将数据变为响应式。  
所以在`created`钩子函数中，我们能够访问到option中的所有内容，但还不能访问到DOM。这时修改data中的数据，在挂载完成后是能够反映到界面上的，因为挂载时用到的数据已经就是被修改后的数据了。  

*3、编译阶段*  
只有完整版的Vue才会有的阶段，在`created`和`beforeMount`之间，将模板中的代码转换为render函数。  

*4、挂载阶段*  
`beforeMount`和`mounted`之间的阶段，运行render函数，将虚拟DOM渲染到界面上。在`mounted`中，已经可以访问到真实DOM了。  

*5、更新阶段*  
挂载完成后数据发生变化，会进入更新阶段，这里的更新指的是更新界面。在`beforeMount`中，数据已经发生变化，但还没有将最新的数据渲染到界面上，之后会进行`patch`更新真实DOM。`mounted`中已经可以访问到最新的DOM了。 

*6、卸载阶段*  
主动调用`$destroy`或组件在父组件被卸载/隐藏，会立即触发`beforeDestroy`，可以在`beforeDestroy`进行清除计时器等操作，此时Vue实例还未被销毁。当`destroyed`被触发时，就无法访问到Vue实例了。


### 1.14 Vue双向绑定的实现原理
Vue的双向绑定其实是一个语法糖，`v-model`相当于`:value`和`@input`的组合。  

应用在不同组件上的`v-model`会自动对应相应的`v-on`事件，例如`input`组件会绑定为`@input`，而`checkbox`、`select`会绑定为`@change`。  

`v-model`还可以应用在组件上，因为Vue不推荐子组件直接更改父组件的props，通过在组件上绑定`v-model`，可以直接通过emit修改对应的值，而不需要在父组件做任何处理，非常方便。可以看下官网的例子：
```js
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
      <input
        type="checkbox"
        v-bind:checked="checked"
        v-on:change="$emit('change', $event.target.checked)"
      >
    `
})
```
`model`中的数据即是子组件中对应`v-model`的值和事件。  

这里还要提一嘴`.sync`修饰符：
```html
<text-document :title.sync="title"></text-document>
```
使用了`.sync`修饰符的props，只要在子组件中通过以下方式调用，就可以修改父组件中绑定的值：
```js
$emit('update:title', 123)
```

Vue3中取消了`.sync`修饰符，但是可以给`v-model`添加参数，上面的例子只需要通过`v-model:title`进行绑定，就能够实现同样的效果。  
> 在Vue3中，组件上的`v-model`如果没有任何参数，那他默认为`modelValue`，修改值时需要使用`$emit('update:modelValue', 123)`

### 1.5 Vue3和Vue2的区别
1. Composition API  
Vue3新增的组合式API，书写形式更加接近于原生JS，增强了代码复用性，可读性。
2. 支持多根节点  
Vue3支持多根节点组件，即fragments。  
3. Teleport  
Teleport是一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的DOM结构外层的位置去。
4. Suspense
Suspense是一个内置组件，用来在组件树中协调对异步依赖的处理。它让我们可以在组件树上层等待下层的多个嵌套异步依赖项解析完成，并可以在等待时渲染一个加载状态。  
5. 响应式原理  
Vue2通过Object.defineProperty实现响应式，Vue3通过Proxy实现响应式。  
6. TypeScript支持  
Vue3通过TypeScript重写，更好的支持TypeScript的类型定义
7. CSS Module和CSS v-bind

### 1.6 v-if和v-show的区别
`v-if`能够真正隐藏元素，显示/隐藏时元素会从DOM树中被添加/删除。  

`v-show`是通过`display:none`隐藏元素，并不会真的删除元素。  

`v-if`需要重新渲染元素，开销比`v-show`大，适合不需要频繁显示/隐藏的元素。

### 1.16 nextTick原理
在Vue中，我们修改了data中的值，并不会实时的刷新到界面上，而是放在一个微任务队列中，在当前事件循环运行完毕后，再执行队列中的函数。  

nextTick中的代码会被放入这个队列，在下一次DOM更新之后运行。这对某些场景很有用，比如说DOM更新后需要将焦点放在一个刷新后才会生成的输入框中，我们直接获取这个输入框的DOM是无效的，因为这时真实DOM中还没有输入框，这时就可以在nextTick中做这项操作，当nextTick中的代码执行时，输入框已经存在于真实DOM中了。 

### 1.18 组件中data为什么是一个函数
组件是可以复用的，data作为一个函数保证了复用组件时每个组件的data数据是相互独立的。  

