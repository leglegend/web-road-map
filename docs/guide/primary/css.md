# CSS :star:
层叠样式表（Cascading Style Sheet，简称：CSS）是一种样式表语言，用来描述HTML文档的呈现。
## 一、引入方式
1. 行内样式
```html
<div style="height:100px"></div>
```
2. 内部样式表
```html
<head>
  <style>
    div {
      height:100px;
    }
  </style>
</head>
```
3. 外部样式表
```css
/* style.css */
body {
  margin: 0px;
}
```

## 二、选择器
### 标签选择器
```css
/* 标签选择器 */
div { }
/* 标签属性选择器 */
a[title] { } 
/* 特定值的标签属性 */
a[href="https://example.com"] { }
```
### 类选择器
```css
.class-name { }
/* 与下面的属性选择器等价 */
[class=class-name] { }
```
### id选择器
```css
#canvas { }
```
### 通配符选择器
通配符`*`可以匹配任意HTML元素。
```css
/* 为所有元素添加样式 */
* {
    font-size: 14px;
}
/* 为所有带有title属性的元素添加样式 */
a[title] { } 
```
::: warning 注意
不推荐使用通配选择器，因为它是性能最低的一个 CSS 选择器。
:::



### 属性选择器
### 派生选择器
#### 后代选择器
#### 子元素选择器
#### 相邻兄弟选择器
### 组合选择器
### 伪选择器
### 选择器的优先级

## 属性
### 单位
1. px
2. em
3. rem
4. vw
5. vh
### 背景
### 文本
### 字体
### 列表
### 表格

## 文档流
### 标准流
### 浮动流
### 定位流


## 内联元素/块状元素

## 盒子模型
### content
### padding
### border
### margin

## 浮动
### 设置浮动float
### 清除浮动clear

## 定位
### static
### absolute
### fiexd
### relative
### sticky

## 层叠规则
## BFC和IFC机制

## CSS3
### 响应式布局
#### 媒体查询
#### Flex布局
#### Grid布局
#### 瀑布流
### 动画
### 过渡
### 渐变
### 背景
### 边框
### 圆角
### 字体
### 2D/3D转换

## 面试重点
### 单位的区别
### 选择器的优先级
### 实现垂直水平居中的100种方法
### 自适应
### 三角形