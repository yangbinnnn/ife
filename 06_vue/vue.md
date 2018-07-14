## Vue.js

Vue.js 是一套构建用户界面的渐进式框架

## 语法

- `v-on:` 用于绑定事件，如`v-on:click`
- `v-if` 用于做条件判断
- `v-for` 用于绑定一个数组, 优先级比`v-if` 高
- `v-model` 用于双向绑定数据，可用于方便取`input` 数据等
- `v-bind` 用于动态的将一个或多个特性，或一个组件`props` 绑定到一个表达式


## Vue 实例生命周期
![vue-lifecycle](../assets/vue-lifecycle.png)

## 计算属性

计算属性通过一个方法计算出属性值并可模板中重复使用, vue 中模板中支持单行简单的表达式，但如果需要重复使用一个表达式或
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

## 链接

- API: https://cn.vuejs.org/v2/api
- Key: https://cn.vuejs.org/v2/api/#key, https://cn.vuejs.org/v2/guide/list.html#key
