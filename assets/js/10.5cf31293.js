(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{430:function(t,a,s){"use strict";s.r(a);var r=s(65),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"javascript高级程序设计-第四版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript高级程序设计-第四版"}},[t._v("#")]),t._v(" JavaScript高级程序设计(第四版)")]),t._v(" "),s("h2",{attrs:{id:"书籍简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#书籍简介"}},[t._v("#")]),t._v(" 书籍简介")]),t._v(" "),s("p",[t._v("《JavaScript高级程序设计》是2006年人民邮电出版社出版的图书，作者是(美)(Nicholas C.Zakas)扎卡斯，本书适合有一定编程经验的开发人员阅读，也可作为高校相关专业课程的教材。其在2019年出版了第四版，涵盖ECMAScript 2019，全面、深入地介绍了JavaScript开发者必须掌握的前端开发技术，涉及JavaScript的基础特性和高级特性。书中详尽讨论了JavaScript的各个方面，从JavaScript的起源开始，逐步讲解到新出现的技术，其中重点介绍ECMAScript和DOM标准。在此基础上，接下来的各章揭示了JavaScript的基本概念，包括类、期约、迭代器、代理，等等。另外，书中深入探讨了客户端检测、事件、动画、表单、错误处理及JSON。本书同时也介绍了近几年来涌现的重要新规范，包括Fetch API、模块、工作者线程、服务线程以及大量新API。")]),t._v(" "),s("h2",{attrs:{id:"入手推荐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入手推荐"}},[t._v("#")]),t._v(" 入手推荐")]),t._v(" "),s("p",[t._v("微信读书65元可购入此书(无限卡可白嫖)，也可以试读前十章，之所以推荐微信读书，是因为电子书上面的代码颜色比较适合阅读，不认识的单词也可以长按查询知道其中文意思和发音，微信读书上还有很多别的书籍，而且大部分是免费的。")]),t._v(" "),s("h2",{attrs:{id:"一、javascript和ecmascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、javascript和ecmascript"}},[t._v("#")]),t._v(" 一、JavaScript和ECMAScript")]),t._v(" "),s("p",[t._v("原文第一章介绍了JavaScript的历史，其实对大多数人来说，并不需要关注JavaScript的历史，但需要知道JavaScript和ECMAScript的关系。"),s("br"),t._v("\n一句话总结：ECMAScript是一种规范，而JavaScript是实现这种规范的语言。"),s("br"),t._v("\n对于浏览器来说，除了ECMAScript这种规范，还有W3C(万维网联盟)指定的HTML规范。我们目前常用的浏览器，Chrome、Firefox、Safari、Opera、IE(这个也常用么?)都是根据ECMAScript和W3C指定的规范来实现的，但是规范是规范，实现的方式是不同的，这也就导致了不同的浏览器有不同的实现方式，所以一个让程序员头疼的问题就出现了————浏览器兼容性。"),s("br"),t._v("\n除了不同浏览器实现的规范方式不同，还有规范本身也在一直更新，比如老的IE8就不支持ECMAScript6，如果你们公司除了需要兼容不同的浏览器的同时，还要兼容浏览器的不同版本，那就真的是男上加男了。"),s("br"),t._v("\n其实对于现代浏览器来说(上面的除了IE都是)，程序员已经不需要过多关注不同浏览器带来的问题，浏览器本身对于规范的实施比较到位，使用框架也能通过插件完成对不同浏览器的支持，还是需要把精力放在技术本身，这些东西了解下就行。")]),t._v(" "),s("h2",{attrs:{id:"二、在html中使用javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、在html中使用javascript"}},[t._v("#")]),t._v(" 二、在HTML中使用JavaScript")]),t._v(" "),s("h3",{attrs:{id:"script标签和script标签属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script标签和script标签属性"}},[t._v("#")]),t._v(" script标签和script标签属性")]),t._v(" "),s("p",[t._v("可以通过"),s("script"),t._v("标签把JavaScript引入到HTML中，script标签上可以配置几种属性：")]),t._v(" "),s("ul",[s("li",[t._v("type：指定JavaScript的类型，默认是text/javascript，也可以指定为application/javascript，这样就可以在浏览器中查看到JavaScript代码了。")]),t._v(" "),s("li",[t._v("async：指定是否异步加载，默认是false，如果是true，那么就是异步加载，如果是false，那么就是同步加载。异步不会阻止浏览器继续加载下面的内容，需保证异步加载的js文件互相之间没有依赖。")]),t._v(" "),s("li",[t._v("chartset：指定JavaScript的编码，默认是UTF-8，也可以指定为GBK等。")]),t._v(" "),s("li",[t._v("crossorigin：指定跨域，默认是anonymous，也可以指定为use-credentials。")]),t._v(" "),s("li",[t._v("defer：指定是否延迟加载，默认是false，如果开启则浏览器会在解析完"),t._v("标签后再加载。")]),t._v(" "),s("li",[t._v("intergrity：指定脚本的完整性，默认是空。")]),t._v(" "),s("li",[t._v("language：指定JavaScript的语言，默认是JavaScript。(已废弃)")]),t._v(" "),s("li",[t._v("src：指定JavaScript的路径，默认是空。\n"),s("br")])]),t._v(" "),s("p",[t._v("引入JavaScript的两种方式：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("js/jquery.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 和 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("通过"),s("code",[t._v("src")]),t._v("标签引入外部js或直接在"),s("code",[t._v("<script>")]),t._v("标签中写入JavaScript代码，这两种方式都可以，前者更容易维护，后者更简单，。")]),t._v(" "),s("h3",{attrs:{id:"script的加载顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script的加载顺序"}},[t._v("#")]),t._v(" script的加载顺序")]),t._v(" "),s("p",[t._v("在不适用"),s("code",[t._v("async")]),t._v("和"),s("code",[t._v("dfer")]),t._v("属性的前提下，会按照html文件标签的顺序加载，如果放进head里就是先加载script再加载页面，为了不阻塞页面，一般放在"),s("code",[t._v("body")]),t._v("标签的最后面。"),s("br"),t._v("\n如果使用"),s("code",[t._v("async")]),t._v("，会在加载到script标签时开始加载，但不会阻塞后面的标签加载，加载时间不确定，不完全按照标签顺序加载。"),s("br"),t._v("\n如果使用"),s("code",[t._v("defer")]),t._v("，会按照标签顺序，在加载完"),t._v("标签后依序加载。"),s("br")]),t._v(" "),s("h3",{attrs:{id:"noscript标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#noscript标签"}},[t._v("#")]),t._v(" noscript标签")]),t._v(" "),s("p",[t._v("提示用户您的浏览器不支持script。")]),t._v(" "),s("h2",{attrs:{id:"三、基本数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、基本数据类型"}},[t._v("#")]),t._v(" 三、基本数据类型")]),t._v(" "),s("p",[t._v("又称为简单数据类型，一共有六种，Symbol是ECMAScript6新增的数据类型。")]),t._v(" "),s("h3",{attrs:{id:"undefined"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#undefined"}},[t._v("#")]),t._v(" Undefined")]),t._v(" "),s("p",[t._v("Undefined数据类型只有一个值就是undefined，声明了一个变量但是没有给他赋值时，该变量的值就是undefined。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])]),s("h3",{attrs:{id:"null"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#null"}},[t._v("#")]),t._v(" Null")]),t._v(" "),s("p",[t._v("Null数据类型只有一个值就是null，表示一个空对象指针。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// object")]),t._v("\n")])])]),s("p",[t._v("一般用作初始化一个肯定会赋值的变量。")]),t._v(" "),s("h3",{attrs:{id:"boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boolean"}},[t._v("#")]),t._v(" Boolean")]),t._v(" "),s("p",[t._v("Boolean数据类型只有两个值，true和false。所有的数据类型都可以通过调用Boolean()函数转换为Boolean数据类型。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("h3",{attrs:{id:"number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[t._v("#")]),t._v(" Number")]),t._v(" "),s("h4",{attrs:{id:"浮点数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浮点数"}},[t._v("#")]),t._v(" 浮点数")]),t._v(" "),s("p",[t._v("Number数据类型可以表示数值，包括整数和浮点数。浮点数这里有个0.1+0.2！=0.3的结果，因为浮点数的精度问题。0.1会被换算成二进制进行计算，而0.1的二进制是个无限小数，所以计算出来的结果会是0.300000000000004。一般会采用放大为整数计算再缩小10的倍数。"),s("br"),t._v("\n浮点数可以用科学计数法表示，如1.23e5，表示1.23×10的5次方，1.23e-5表示1.23×10的-5次方。"),s("br")]),t._v(" "),s("h4",{attrs:{id:"范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#范围"}},[t._v("#")]),t._v(" 范围")]),t._v(" "),s("p",[t._v("Number不可是无限大的，可以用Infinity表示无限大，-Infinity表示无限小。"),s("br")]),t._v(" "),s("h4",{attrs:{id:"nan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nan"}},[t._v("#")]),t._v(" NaN")]),t._v(" "),s("p",[t._v("NaN表示Not a Number，即非数字。设计到NaN的所有操作都会返回NaN，可以通过isNaN()函数判断某个变量或表达式是否是NaN。")]),t._v(" "),s("h3",{attrs:{id:"数值转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数值转换"}},[t._v("#")]),t._v(" 数值转换")]),t._v(" "),s("p",[t._v("可以用Number()，parseInt()和parseFloat()函数转换为整数和浮点数，具体细节不说了，整数最好用parseInt()，浮点数用parseFloat()。"),s("br")]),t._v(" "),s("h3",{attrs:{id:"string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String")]),t._v(" "),s("p",[t._v("字符串类型，可用单引号、双引号、反引号标示。"),s("br"),t._v("\n几乎所有值都可用toString()转换为字符串。"),s("br")]),t._v(" "),s("h3",{attrs:{id:"symbol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[t._v("#")]),t._v(" Symbol")]),t._v(" "),s("p",[t._v("就是说Symbol()函数可以给一个不重复的初始值，我把它当成不显示具体值的uuid。"),s("br")]),t._v(" "),s("h2",{attrs:{id:"四、语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、语句"}},[t._v("#")]),t._v(" 四、语句")]),t._v(" "),s("ul",[s("li",[t._v("if语句")]),t._v(" "),s("li",[t._v("do...while语句")]),t._v(" "),s("li",[t._v("while语句")]),t._v(" "),s("li",[t._v("for语句")]),t._v(" "),s("li",[t._v("for-in语句")]),t._v(" "),s("li",[t._v("for-of语句")]),t._v(" "),s("li",[t._v("标签语句")]),t._v(" "),s("li",[t._v("break和continue语句")]),t._v(" "),s("li",[t._v("with语句(不推荐使用)")]),t._v(" "),s("li",[t._v("switch语句")]),t._v(" "),s("li")])])}),[],!1,null,null,null);a.default=n.exports}}]);