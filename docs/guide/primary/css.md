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
*[title] { } 
```
::: warning 注意
不推荐使用通配选择器，因为它是性能最低的一个 CSS 选择器。
:::
### 伪类选择器
伪类连同伪元素一起，他们允许你不仅仅是根据文档DOM树中的内容对元素应用样式，而且还允许你根据外部因素来应用样式：
```css
a:active { }
p:first-child { }
input:focus { color: red; }
button:hover { color: blue; }
li:last-child { }
ul li:last-of-type { } /* 父元素的最后一个子元素 */
a:link { color: slategray; } /* 尚未选中的链接 */
body :not(a) { } /* 非<a>元素 */
p:nth-child(an+b) { } /* 找到当前元素下的兄弟元素:详见下表 */
p:nth-last-child(an+b) { } /* 从后开始匹配 */
p:nth-of-type(4n) { }
p:nth-last-of-type(2) { }
input:out-of-range { } /* 当前值处于属性min和max限定的范围外的input */
:target { border: 2px solid black; } /* 选择一个 ID 与当前 URL 片段匹配的元素*/
a:visited { color: green; }/* 所有被访问过的 <a> 变绿 */
```
`nth-child`参数表：
| 值        | 含义                       |
| --------- | -------------------------- |
| 0n+3/3    | 匹配第3个元素              |
| 1n+0/n    | 匹配每个元素               |
| 2n+0/even | 匹配位置为偶数的元素       |
| 2n+1      | 匹配位置为奇数的元素       |
| 3n+4      | 从4开始，每3位匹配一个元素 |
| -n+3      | 匹配前3个元素              |
### 伪元素选择器
伪元素是一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。
```css
a::after { content: "1"; } /* 创建一个伪元素，作为已选中元素的最后一个子元素,默认是行内元素 */
a::before { content: "1"; } /* 创建一个伪元素，作为已选中元素的最后一个子元素 */
p::first-letter { font-size: 130%; } /* 选中块级元素第一行的第一个字母，文字所处的行之前不能有其他内容 */
p::first-line { } /* 选中块级元素第一行，只能在一个 display 值为 block, inline-block, table-cell 或者 table-caption中有用。 */
::selection { background-color: cyan; } /* 文档中被用户高亮的部分 */
::slotted() {} /* 用于选定那些被放在 HTML 模板中的元素 */
```
### 派生选择器
1. **后代选择器**  
组合了两个选择器，如果第二个选择器匹配的元素具有与第一个选择器匹配的祖先元素，则它们将被选择。
```css
body div { }
```
2. **子代选择器**  
当使用  > 选择符分隔两个元素时，它只会匹配那些作为第一个元素的直接后代 (子元素) 的第二元素。
```css
div > span { }
```
3. **相邻兄弟选择器**  
介于两个选择器之间，当第二个元素紧跟在第一个元素之后，且同属一同一个父元素，则第二个元素被选中。
```css
img + p { font-weight: bold; } /* 图片后面紧跟着的段落将被选中 */
```
4. **通用兄弟选择器**  
位置无须紧邻，只须同层级，A~B 选择A元素之后所有同层级B元素。
```css
p ~ span { color: red; } /* 与p同级，且在p后的span将被选中 */
```

### 选择器的优先级
一个选择器的优先级可以说是由四个部分相加，可以认为是个十百千四位数：
1. **千位**：内联样式
2. **百位**：id选择器
3. **十位**：类选择器、属性选择器或者伪类
4. **个位**：标签选择器、伪元素选择器
::: warning 注意
通配符 (*)，组合符 (+, >, ~, ' ')和(:not) 不会影响优先级。  
**!important**会覆盖上面所有优先级。
:::
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