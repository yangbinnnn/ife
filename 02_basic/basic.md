## HTML 是什么，HTML5 是什么
> 超文本标记语言，HTML5 是第五版，用于规范网络中资源的表现格式

## HTML 元素标签、属性都是什么概念？
> 元素标签就是定义约定的一些具有特殊含义字符，如 `p` 表示段落，那么我们就可以知道用`<p> ... <p/>` 包裹的内容是一个段落
> 元素标签属性用来**修饰**元素标签，丰富要表达的内容，如`<p a=xxx color=red> ... <p/>` ，这样我们在解析`p` 标签，发现它有两个属性`a=xxx` 和 `color=red` 那么我们就可以按照这两个属性的定义来丰富内容，假设`color=red` 要来描述段落`p` 的内容字体颜色，那么我们在渲染段落`p` 时就将这段内容的字体颜色设为`red`

## 文档类型是什么概念，起什么作用？
> DOCTYPE 用来描述文档的类型，常见的如`<!DOCTYPE html>`，告诉文本解析器(浏览器等) 我是一个`html` 类型的文档，请用`html` 的格式规范（语义）来解析我

## meta标签都用来做什么的？
> meta标签主要用来描述整个文档的属性，就是一个人有年龄，名字，性别一样，文档也可以有描述自身的一些属性，如`<meta charset="UTF-8">` 表示我的字符集是`UTF-8` 请用UTF-8 来解析我的字符，不要用`ASCII`，`UTF-16` 等字符集来解析我，否则会解析失败，还有`<meta name="author" content="yang bin">` 表示我的作者是`yangbin` ，**标签属性** 可以自定义也可以是多方共识的，多方共识的具有更好的流通性


## Web语义化是什么，是为了解决什么问题
https://www.zhihu.com/question/20455165
> 使用一定的规范，让机器能够容易解析处理Web 内容，同时对人具有很好的可读性

## 链接是什么概念，对应什么标签？
> 指向另外一个资源内容的地址(其他网页)，`a`

## 常用标签都有哪些，都适合用在什么场景
> html -> header -> meta -> body -> div -> p
> h1~h6 -> form -> input
> style -> img -> video -> code -> nav

## 表单标签都有哪些，对应着什么功能，都有哪些属性
- form  -> action -> method
- input -> type -> name -> value
- button -> onclick
- select
- option -> value
- textarea -> rows -> cols

## ol, ul, li, dl, dd, dt等这些标签都适合用在什么地方，举个例子
- ol: ordered list
- ul: unordered list
- li: list item
- dl: description list
- dt: term/name in a description list
- dd: describe term/name in a description list
