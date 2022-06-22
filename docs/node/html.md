# MDN HTML教学
HTML (HyperText Markup Language) 不是一门编程语言，而是一种用来告知浏览器如何组织页面的标记语言。HTML 可复杂、可简单，一切取决于开发者。它由一系列的元素（elements）组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。
## 一、开始学习
先来了解下学习HTML前你需要知道的东西。  
HTML由一个个元素组成，每个元素都包含`开始标签`、`结束标签`、`内容`(空元素只有一个标签)。
```html
<p>Hello World</p>
<img/>
```
### 块级元素和内联元素
- **块级元素**：在页面中以块的形式展现，相对于前面的内容，它会出现在新的一行，其后面的内容会被挤到下一行。
- **内联元素**：不会导致换行，通常出现在一堆文字中间。

### 属性
元素可以拥有属性，由属性名和属性值组成，也可以只有属性名，表示这是一个布尔属性。
```html
<input type="text" disabled/>
```
### HTML中的特殊字符
在HTML中，字符 `<`,`>`,`"`,`'`和`&`是特殊字符，如果想使用这些符号本身，而不是作为HTML语法使用，则需要使用字符的引用：
| 原义字符 | 等价字符引用 |
| -------- | ------------ |
| <        | &lt;         |
| >        | &gt;         |
| "        | &quot;       |
| '        | &apos;       |
| &        | &amp;        |
### HTML注释
```html
<!--这是一段注释-->
```
## 二、head标签
先来看一个完整的`head`标签：
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="my-css-file.css">
    <title>我的测试页面</title>
    <script src="my-js-file.js" defer></script>
  </head>
  <body>
    <p>这是我的页面</p>
  </body>
</html>
```
### title标签
`<title>`中的内容可以设置为当前页面的标题，显示在浏览器顶端。
### meta标签
meta标签用以描述一个HTML网页的属性，例如作者、网页描述、关键字等。
```html
<!--指定文档中字符的编码-->
<meta charset="utf-8">
<!--作者-->
<meta name="author" content="Leglegend">
<!--关键字-->
<meta name="keywords" content="关键字">
<!--网页描述-->
<meta name="description" content="一个普通的网页">
```

