## 浅拷贝和深拷贝
原始值和引用值  
对象和数组  
循环引用  
特殊引用累心 function/null

最简单的方法：JSON.stringify(JSON.parse(obj))，但是有很多问题，比如undefined的值会被忽略，循环引用会报错。