## 什么是CSS，CSS是如何工作的

CSS（层叠样式表） 是用来定义网页样式（字体，颜色，大小等）和网页布局的。

因为我们需要一个被装饰的对象，在HTML 中就是元素，所以我们得知道网页（HTML）中有哪些元素，同时我们需要选择某个元素要有什么样的CSS 进行装饰。CSS 提供了很多元素的选择器来方便我们对元素进行装饰。

浏览器使用CSS 渲染HTML 内容：HTML -> CSS 选择器 -> 元素 -> CSS 样式 -> 浏览器渲染。

外部样式表：`<link rel="stylesheet" href="style.css">`

内部样式表：`<style> xxx:xxx </style>`

内联样式：`<p style=""xxx:xxx"">`

## 关于DOM

DOM 是一种树状的数据结构，用来结构化地存储HTML 元素，CSS 样式，以及元素与样式的关系。

也就是说，浏览器打开一个HTML 文档后会将这个文档中的元素和样式结构化到一个DOM 中，并在这个DOM 中记录没有元素的样式，最后通过这个DOM 渲染出最后的效果。

## CSS的基本语法是怎样的

选择器，属性，属性值构成了CSS 的规则，规则如下：

```css
选择器 {
  属性1：属性值1；
  属性2：属性值2；
}
```

给HTML 中的`p` 段落元素设置样式：

```css
p {
  color: red;
  background-color: yellow;
}
```

## CSS选择器是什么概念，简单选择器和属性选择器是什么

选择器用来定位HTML 中的元素。

简单选择器通过元素，class，和id 定位。

```css
/*元素定位*/
p {
    ...
}

/*class 定位*/
.classA {
  ...
}

/*id 定位*/
#idA {
  ...
}
```

属性选择器通过属性和属性值定位。

```css
/*选择所有属性attr*/
[attr] {
  ...
}

/*选择所有属性attr 值等于"x"*/
[attr="x"] {
  ...
}

/*选择所有属性attr 值包含"x"*/
[attr~="x"] {
  ...
}
```

派生选择器（上下文选择器）通过元素上下文定位，如所有p 元素下的 span 元素

```css
p span {
  ...
}
```

[伪类选择器](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction\_to\_CSS/Pseudo-classes\_and\_pseudo-elements)在不同状态下显示不同的样式，常见的如访问过的超链接显示为蓝色

```css
a:visited {
  color: blue;
}
```

## 文本样式都有哪些相关属性，对应哪些值

HTML 中文本占据了绝大部分。常见的属性：

- `colore:red`

- `font-family:arial,serif,monospace`

- `font-size:10px`，`font-size:1.2em`

- `font-style:normal`

- `text-align:left`，`text-align:center`

```css
p {
      color: red;
      background-color: yellow;
      text-align: center;
      font-size: 20px;
      font-style: italic;
  }
```

## CSS 层叠和继承

从CSS 的名字层叠样式图我们知道，可以有多个样式同时针对同一个元素，这样就会存在两个相同的属性应该优先用哪个属性值的问题。

重要性（!important）> 专用性 > 源码顺序

专用性: ID > Class > 元素

style: 1000

ID: 100

Class，属性，伪类: 10

元素，伪元素：1

更加上面四个评估方式计算出来的值代表一个选择器的专用性，值越大专用性越高，专用性越高则属性值的优先级越高。

```css
/* specificity: 0101 */
#outer a {
  background-color: red;
}

/* specificity: 0201 */
#outer #inner a {
  background-color: blue;
}
```

inherit: 继承父元素属性的文本样式，如字体大小，颜色等，不会继承布局

## 盒模型

![box-model-standard-small](../assets/box-model-standard-small.png)

[box-sizing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing): border-box，改变 `width` 和 `height` 的作用范围

![box-model-alt-small](../assets/box-model-alt-small.png)

## float 浮动元素

常用于多列布局，float 元素脱离原来的文档流。

使用百分比的宽带，可以一定程度上自适应屏幕大小（流式、响应式布局）。

清除浮动`clear:both`，表示浮动到当前元素为止，也就是说当前元素以下的元素不受浮动影响。

```css
<div style="clear:both"></div>
```

浮动的宽度难以计算，如果某列的宽度（padding 或border）变了则会影响整个列布局，此时可以用`box-sizing:border-box`  属性改变盒子模型使列的宽度一致。



## inline、block和inline-block的概念

- inline 内联元素，多个内联元素之间不换行，不可以设置`width` `height` 属性

- block 块级元素，每一个块级元素独占一行，可以设置`width` `height` 属性

- inline-block 内联块级元素，结合`inline` 和`block` 的特点，即不换行又可以设置`width` `height` 属性

```css
display: inline
display: block
display: inline-block
```



## 参考

- https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction\_to\_CSS/Cascade\_and\_inheritance
- https://css-tricks.com/all-about-floats/
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
