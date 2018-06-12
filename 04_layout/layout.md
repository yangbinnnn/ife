## 文档流

正常文档流，不对页面进行任何布局控制，浏览器默认的HTML 布局样式，一般按照HTML 源码中元素的出现顺序排列，块级元素换行排列，内联元素在同一行排列直到一行空间无法排列则换行到下一行。

## 布局的几种方式

- [float](../03_css/src/float.html)

- [position](src/two-column-position.html)

- [flexbox](src/flexbox.html)

## 常用布局

- 两栏布局

- 三栏布局

- [圣杯布局](http://alistapart.com/article/holygrail): 两边定宽，中间自适应，main -> left -> right

- [双飞翼布局](https://theqwang.github.io/2016/01/08/%E6%B5%85%E6%9E%90%E5%9C%A3%E6%9D%AF%E5%B8%83%E5%B1%80%E5%92%8C%E5%8F%8C%E9%A3%9E%E7%BF%BC%E5%B8%83%E5%B1%80): 两边定宽，中间自适应，main-wrap -> main -> left -> right

- 元素在HTML 中的位置顺序会影响float\](src/two-column-float.html) 的布局，但不会影响position\](src/two-column-position.html)

- float 布局时如果浏览器窗口较小元素会自动换行，而position 布局会显示在同一行

- flexbox 布局是如果浏览器窗口较小元素不会换行，元素内容会被压缩，但不会溢出，flexbox 在浏览器宽度足够是，各元素会保存指定的大小，但如果宽度不够元素会被压缩

## 圣杯布局与双飞翼布局的比较

> From[双飞翼布局](https://theqwang.github.io/2016/01/08/%E6%B5%85%E6%9E%90%E5%9C%A3%E6%9D%AF%E5%B8%83%E5%B1%80%E5%92%8C%E5%8F%8C%E9%A3%9E%E7%BF%BC%E5%B8%83%E5%B1%80)

1. 两种布局方式都是把主列放在文档流最前面，使主列优先加载。
2. 两种布局方式在实现上也有相同之处，都是让三列浮动，然后通过负外边距形成三列布局。
3. 两种布局方式的不同之处在于如何处理中间主列的位置：圣杯布局是利用父容器的左、右内边距定位；双飞翼布局是把主列嵌套在div后利用主列的左、右外边距定位。

## position 定位

- 静态定位，`static` 元素的默认定位方式，正常文档流

- 相对定位，`relative` ，可以使用`top`，`bottom`，`left`，`right` 属性来移动元素，即使偏移了原来位置，但任然会占据原来的位置

- 绝对定位，`absolute`，脱离了正常文档流，相对于第一个非`static`的祖先元素定位，如消息框，控制菜单

- 固定定位，`fixed`，脱离正常文档流，相对于浏览器窗口定位，如导航菜单

## 负边距

TODO

## 参考

- https://coolshell.cn/articles/9666.html

- http://taligarsiel.com/Projects/howbrowserswork1.htm

- https://css-tricks.com/snippets/css/a-guide-to-flexbox/

- http://alistapart.com/article/holygrail

- http://www.cnblogs.com/dolphinX/p/4071725.html
