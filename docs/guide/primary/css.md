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


## 三、盒子模型
### 块级盒子/内联盒子
区别于HTML的`块状元素`/`内联元素`，虽然两个`block`都是表示元素/盒子会和父容器一样宽，`inline`都是表示元素/盒子不会换行，宽度随内容改变，但是HTML强调的是元素本身，就算我们把`div`的`display`属性改成`inline`，`div`还是一个`块级元素`，但它已经变成了`内联盒子`。  
块级盒子与内联盒子的区别：
|                  | 块级盒子                         | 内联盒子                                               |
| ---------------- | -------------------------------- | ------------------------------------------------------ |
| width和height    | 默认和父容器一样宽，可以设置宽高 | 取决于内容的宽度，width和height不生效                  |
| 是否换行         | 每个盒子都将换行                 | 不会换行                                               |
| 和其他盒子的关系 | 内外边距和边框会将其他盒子推开   | 水平方向的边距和边框会把其他内联盒子推开，垂直方向不会 |
### 盒子模型的组成
CSS中组成一个块级盒子需要：  
- content: 显示内容，大小可以通过设置 `width` 和 `height`
- padding：内边距，通过 `padding` 设置
- border：边框，通过 `border` 设置
- margin：外边距，通过 `margin` 设置

内外边距和边框都可以通过`top\right\bottom\left`分别设置不同方向的边距边框。`margin`可以为负值，会和其他元素重叠。两个外边距相接的元素，其外边距会重叠，实际相隔取决于外边距较大的那个。
### 两种盒子模型
假设有如下元素：
```css
div {
  width: 100px;
  height: 50px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```
1. **标准盒子模型**  
对于标准盒子模型，上述元素的宽度应该是`width+padding+border = 150px`，即内容+内边距+边框。
::: warning 注意
margin不计入盒子大小，它影响的是盒子的外部空间。
:::
2. **替代盒子模型**  
如果把上述元素的样式稍作修改`box-sizing: border-box;`，那么该元素的盒子实际宽高就是`100px 50px`。所以内容的宽应该减去边框和内边距为`100-20-20-5-5 = 50`。
### inline-block
可以通过`display:inline-block`设置元素，使其同时拥有块级和内联盒子的特性，width和height将会生效，内外边距和边框会推开其他元素，但不会跳转到新行。
## 四、文档流
### 标准流
标准流：没有改变默认布局规则情况下的页面元素布局方式。
### 浮动流
### 定位流

## 属性
### 单位
除了`px`是`绝对长度单位`，其他均为`相对长度单位`
| 单位 | 描述                                                                              |
| ---- | --------------------------------------------------------------------------------- |
| px   | 像素                                                                              |
| em   | 在font-size中使用是相对于父元素的字体大小，在其他属性中使用是相对于自身的字体大小 |
| rem  | 相对于根元素font-size的大小                                                       |
| lh   | 相对于元素的line-height                                                           |
| vw   | 视窗宽度的1%                                                                      |
| vh   | 视窗高度的1%                                                                      |
| %    | 相对于父元素的属性百分比                                                          |
### 背景
`background`属性是一个简写，它能够包含很多的普通属性，先来看下面这个超级复杂的背景：
```css
.box {
  background: linear-gradient(105deg, rgba(255,255,255,.2) 39%, rgba(51,56,57,1) 96%) center center / 400px 200px no-repeat,url(big-star.png) center no-repeat, rebeccapurple;
}
```
一个个介绍花费篇幅太大，不符合我们这篇文章的定位，一下介绍几个常用的例子：
```css
/* 背景颜色 */
.box {
  background: red;
  background-color: #ffffff;
  background-color: rgba(255,255,255,.2);
}

/* 背景图片 */
.box {
  background-image: url(balloons.jpg);
  background-repeat: no-repeat; /* repeat、repeat-x、repeat-y */
  background-size: 100px 10%; /* 保持宽高比，cover拉伸，contain填充*/
  background-position: 10px 10px; /* 雪碧图专项 */
}

/* 背景渐变 */
.box {
  background-image: linear-gradient(90deg,#ffffff,#000000);
  background-image: linear-gradient(circle,rgba(0,249,255,1) 39%, rgba(51,56,57,1) 96%);
}
```
### 文字
#### 字体
```css
p {
  color:red; /* 颜色 */
  font-family: "Trebuchet MS", Verdana, sans-serif; /* 字体 */
  font-size: 1em; /* 字体大小 */
  font-style: italic; /* 斜体  normal正常*/
  font-weight: bold; /* 粗体 */
  text-transform: none; /* 字体转换 uppercase大写 lowercase小写 capitalize首字母大写  full-width全角 */
  text-decoration: none; /* underline下划线 overline上划线 line-through删除线 */
  text-shadow: 4px 4px 5px red; /* 文字阴影 */
}
```
::: tip font简写
font可按照以下顺序简写：font-style, font-variant, font-weight, font-stretch, font-size, line-height, and font-family
:::
#### 布局
```css
p {
  text-align: left; /* 对齐方式  */
  line-height: 1; /* 行高  */
  letter-spacing: 2px;  /* 字与字之间的距离  */
  word-spacing: 4px; /* 字母与字母之间的距离  */
}
```
这里再说下溢出的问题，溢出的文本和块会超过父元素边界显示在父元素的外面，我们可以通过overflow属性解决这个问题：
```css
div {
  overflow: visible; /* 可见 */
  overflow: hidden; /* 隐藏 */
  overflow: hidden; /* 滚动 */
}
```
关于换行，有以下几个样式需要注意：
```css
div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowarp;
}
```
### 列表
### 表格





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