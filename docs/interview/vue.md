## 组件间传值
### Props
父传子最方便快捷的方式，子组件无法直接改变props的传值，需要通过emit的方式告知父组件更改props的值。也可通过v-model实现双向绑定更改props。  
注：Vue3中移除了v-bind的.sync修饰符
### $on/$emit
组件实例的事件api  
注：$on在Vue3中已被移除
### 透传
父组件传递的值和事件可通过v-bind="$attrs"，v-on="$listeners"的方式传递给孙组件。
注：$listeners在Vue3中已被合并到$attrs
### 状态管理器
vuex或者pinia
### $parent/$refs/$children/$root
访问组件实例进行操作
注：$children在Vue3中已被移除
### 依赖注入
使用provide提供数据或方法，后代可以通过inject访问
### 事件总线
在Vue的root节点上添加一个Vue实例$bus，可以使用该实例的事件api，由于Vue3中移除了部分事件API，可通过第三方库实现事件总线

## v-if和v-for哪个优先级更高
在Vue2中，v-for具有更高的优先级，但在Vue3中，v-if的优先级更高，所以不能在v-if中使用v-for的参数。  
v-if在render函数中就是一个三元表达式，为true则渲染该节点 

## 简述Vue的生命周期以及每个阶段做的事情
beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
beforeDestroy/beforeUnmount
destroyed/unmounted 
