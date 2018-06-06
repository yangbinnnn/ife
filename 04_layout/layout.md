## 文档流

正常文档流，不对页面进行任何布局控制，浏览器默认的HTML 布局样式，一般按照HTML 源码中元素的出现顺序排列，块级元素换行排列，内联元素在同一行排列直到一行空间无法排列则换行到下一行。

## 布局的几种方式

- [float](../03_css/src/float.html)

- [position](src/two-column-position.html)

- [flexbox](src/flexbox.html)

## 常用布局

- 两栏布局

- 三栏布局

- 圣杯布局: 两边定宽，中间自适应

- 元素在HTML 中的位置顺序会影响float\](src/two-column-float.html) 的布局，但不会影响position\](src/two-column-position.html)

- float 布局时如果浏览器窗口较小元素会自动换行，而position 布局会显示在同一行

- flexbox 布局是如果浏览器窗口较小元素不会换行，元素内容会被压缩，但不会溢出，flexbox 在浏览器宽度足够是，各元素会保存指定的大小，但如果宽度不够元素会被压缩

## position 定位

- 静态定位，`static` 元素的默认定位方式，正常文档流

- 相对定位，`relative` ，可以使用`top`，`bottom`，`left`，`right` 属性来移动元素，即使偏移了原来位置，但任然会占据原来的位置

- 绝对定位，`absolute`，脱离了正常文档流，相对于第一个非`static`的祖先元素定位，如消息框，控制菜单

- 固定定位，`fixed`，脱离正常文档流，相对于浏览器窗口定位，如导航菜单

## 参考

- https://coolshell.cn/articles/9666.html

- http://taligarsiel.com/Projects/howbrowserswork1.htm

- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
