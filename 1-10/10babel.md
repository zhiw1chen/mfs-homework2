### 问答题
1. babel 是什么，它能干什么，不能干什么？
    * JavaScript语法编辑器，可以实现不同js标准下的等价转换以便适应不同的浏览器版本
    * 对于如const这样的新内容的丢失无法弥补

1. 我们使用 babel 把 es6/7的代码编译为 es5代码后，为什么还需要引入 polyfill？
    * 可能低版本不支持fill等，用polyfill对API进行补充

1. .babelrc文件是干嘛的？常见配置是什么？
    * 是babel的配置文件
    * babel-preset-env；babel-preset-es2015;babel-preset-es2016;babel-preset-es2017;babel-preset-stage-x;

1. presets 中设置 env 是什么含义？
    * 可以根据配置的目标浏览器或者运行环境来自动将ES2015+的代码转换为es5

1. babel 中 presets 与 plugin 有什么区别？有什么联系？
    * presets:babel插件的预设，包括一部分的plugin
    * plugin:babel的插件

1. 请比较 let,var,const 命令的不同
    * var 声明的变量作用域为声明它所在的整个函数或全局作用域，存在变量提升。
    * let 声明的变量作用域为它所在的代码块，即{}范围，在代码块外调用它将会报错。同时let 声明的变量不存在变量提升，在没有声明它的时候调用它将会报错。同时let声明的变量还有暂时性死区的特性，它声明的变量会暂时绑定在它的作用域内，不会受到外部的影响，外部声明 var a,代码块内{a=1;let a=2}将会报错，a未定义，因为代码块内a不再受到外部作用域内的a的影响，且let不存在变量提升，所以a=1是未一个未声明过的变量赋值。let不允许重复声明，即var a=1;let a=2会报错。
    * const 的作用域和let一样，同样存在暂时性死区，同样不存在变量提升，同样不允许重复声明。同时,const声明的变量为静态变量，其变量指向的内存地址的数据不允许改变


### 代码题
1. 以下代码在 presets:['env'] 环境下编译结果是什么？ 请解释 babel 为什么这样编译（babel 是通过什么方法保证两段代码等价的）
<pre>var a = 10;{
    var _a2 = 11;
    var b = 12;
    console.log(_a2);
}
var _a = 13;
console.log(_a);
</pre>
块内的let的作用于仅限于块内，所以对其进行重命名并且不影响块外的名字

1. 以下代码在 presets:['env'] 环境下编译结果是什么？为什么？
    * 会报错，因为babel无法将其转换为等效的ES5代码