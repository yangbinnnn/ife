## Vue.js

Vue.js 是一套构建用户界面的渐进式框架

## 语法

- `v-on` 用于绑定事件，如`v-on:click`
- `v-if` 用于做条件判断
- `v-for` 用于绑定一个数组, 优先级比`v-if` 高
- `v-model` 用于双向绑定数据，可用于方便取`input` 数据等
- `v-bind` 用于动态的将一个或多个特性，或一个组件`props` 绑定到一个表达式，可缩写为: `:`

### v-bind 动态设置元素属性
动态设置按钮`disabled` 属性
```
<Button v-bind:disabled="isActived"> {{ activedStatus }} </Button>
```
如果使用`v-if` 和`v-else` 则比较冗余
```
<a v-if="!isActived">
<Button>未激活</Button>
</a>
<a v-else>
<Button disabled>已激活</Button>
</a>
```



## Vue 实例生命周期
![vue-lifecycle](../assets/vue-lifecycle.png)

## 计算属性

计算属性通过一个方法计算出属性值并可在模板中重复使用, vue 中模板中支持单行简单的表达式，但如果需要重复使用一个表达式或
需要复杂的计算逻辑，可以使用计算属性`computed` 或方法`methods`，两者都能实现相同的功能，不过`computed` 是有缓存的
它只在属性依赖的值发生变化的时候才做计算。

```
<!-- use cache -->
computed: {
    abc: function() {
        return 'abc'
    }
}

<!-- no cache -->
methods: {
    abc: function() {
        return 'abc'
    }
}
```

## 组件
- 组件是可以复用的Vue 示例
- 组件的`data` 必须是一个function
- 任何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。为了把迭代数据传递到组件里，我们要用`props` 并用
`v-bind:x='x'` 传递，且父子之间prop 为单向下行绑定，父级prop 更新会影响子级prop，子级prop 不影响父级prop
- 可通过`emit` 触发自定义事件

## [slot](src/slot.html)
- 插槽在组件模板中定义，`<slot/>`用于接受并展示组件模板传入的内容
- 如果模板中没有`<slot/>` 元素，则渲染页面时父元素传入的内容会被忽略
- `<slot/>` 中可以定义默认的内容，如果父元素传入内容则忽略默认的内容，否则使用默认内容
- 多个具名`<slot name="xxx"/>` 在模板中必须要有相同的祖宗元素
- 具名`<slot name="xxx"/>` 作用于`<template>` 元素与其他普通元素如`<p>` 效果有所差别

## vue-route

## vuex
主要功能在多个组件之间共享状态数据

![vuex](../assets/vuex.png)


## 其他

### `h` 的含义
link: https://github.com/vuejs/babel-plugin-transform-vue-jsx/issues/6
```
It comes from the term "hyperscript", which is commonly used in many virtual-dom implementations. "Hyperscript" itself stands for "script that generates HTML structures" because HTML is the acronym for "hyper-text markup language".
```
```
new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
})
```

`render: h => h(App)` 是下面内容的缩写
```
render: function (createElement) {
    return createElement(App);
}
```
link: https://github.com/vuejs-templates/webpack-simple/issues/29

## 项目开发

```
npm install -g @vue/cli @vue/cli-init 
```

```
vue init webpack vue-routing
```

### Webpack Loader
通过`loader` 处理各种资源文件，`.js`，`.css`等等，将各种资源绑定到一起，VUE 脚手架生成的工程目录使用以下几种loader
配置路径`build/webpack.base.conf.js`

- [file-loader](https://webpack.js.org/loaders/file-loader/) 加载文件
- [url-loader](https://webpack.js.org/loaders/url-loader/) 将文件转换成base64 编码，一般用于处理图片资源

> 将小于10000 字节的图片文件，转换成base64，大于10000 字节的文件使用`file-loader` 加载，文件输出位置`img/`
文件命名规则：`[name].[hash:7].[ext]`
```
{
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
    }
}
```

- [babel-loader](https://webpack.js.org/loaders/babel-loader/) 将ES5+ 代码转换成ES5（运行环境兼容，比如使用了ES新的语法，但运行环境不支持这个语法，babel 将可以将这个新语法转换成相同效果且能在当前环境运行的语法）

> 使用`babel-loader` 处理`src`,`test` 目录下的`js` 文件
```
{
    test: /\.js$/,
    loader: 'babel-loader',
    include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
}
```

- [vue-loader](https://github.com/vuejs/vue-loader) 用于处理`vue` 单文件组件

```
{
    test: /\.vue$/,
    loader: 'vue-loader',
    options: vueLoaderConfig
}
```

- https://webpack.js.org/loaders/

### 实践

- N 选 1
> 有N 个按钮，只能选择1 个
[pickone.html](src/pickone.html) 中两种实现方式，`button + click event` 实现比`radio check` 要简单一些

- 可编辑表格
> 通过render 实现表格的编辑功能
[editTable.html](src/editTable.html)


## 链接

- API: https://cn.vuejs.org/v2/api
- Key: https://cn.vuejs.org/v2/api/#key, https://cn.vuejs.org/v2/guide/list.html#key
- https://vue-loader-v14.vuejs.org/zh-cn/features/scoped-css.html
- https://coderexample.com/your-first-vuejs-app/
- https://laravel-news.com/jquery-vue
- https://codesandbox.io
- How the hell can i include a css file: https://github.com/vuejs-templates/webpack/issues/604
- https://flaviocopes.com/vue-introduction/
- https://alligator.io/vuejs/component-slots/
- https://medium.com/3yourmind/large-scale-vuex-application-structures-651e44863e2f
- Edit table https://segmentfault.com/a/1190000016850565
- https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md
- 定义模板的多种方法 https://juejin.im/entry/598297b95188253592278f77
- https://itnext.io/how-not-to-vue-18f16fe620b5
