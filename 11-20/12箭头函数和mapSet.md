### 问答题
1. 什么是箭头函数？它和 function 声明的函数有什么区别？
    * 在ES6中使用=>声明函数叫做箭头函数
    * 和function相比，它是匿名函数，无法使用new方法。它的this是静态的，指向window

1. 下面代码输出的是什么？为什么？
    * 1,2,3
    * 第一个是obj,第二个指向全局域，第三个是obj2

1. 下面代码输出的是什么？为什么？
    * 2,2,2；
    * 箭头函数静态绑定this，所以三个都是指向全局域

1. 箭头函数的this静态绑定是什么含义？和this的动态绑定有什么区别？请写出示例代码说明区别
    * 静态绑定下，函数对变量的使用是选取window下的变量声明，而不是根据调用函数的场景选取
    <pre>
    var a = 2
    var obj = {
    a : 1,
    fun : () => {
            console.log(this.a)
        }
    }
    obj.fun()</pre>
    * 输出是2，因为this静态绑定了全局域下的var a=2;

1. 下面代码输出是什么？结合第三题，试理解this静态绑定的绑定规则。
    * 输出为1；
    * 箭头函数的this静态绑定把this绑定到上一层的this，此处的上一次function的this不是静态绑定的，所以在调用的时候把this指向了函数内；若把函数改成如下：
    <pre>var id = 2;
    var foo=()=> {
        return () => {
            console.log('id:', this.id);
        };
    }
    foo.call({id: 1})()</pre>
    则返回值为2

1. 对于function声明的函数，如果想实现箭头函数的this静态绑定，需要怎么做？
    * 可以使用.bind()方法
    <pre>
    var obj = {
    id: 999,
    fun: function() {
            console.log(this.id)
        }.bind(window)
    }
    var id = 2;
    obj.fun();</pre>

1. 什么是柯里化(currying)，它有什么作用？
    * 可以把通用函数转换成特用函数，把多参数函数转换成单参数函数

1. 下面代码输出的是什么？为什么？
    * 2 undefined
    * 没有大括号就是返回值

1. 什么是 Set ，它和数组有什么异同？
    * Set类似于数学中的集合，没有重复元素，没有固定顺序

1. 什么是 WeakSet / WeakMap？和 Set / Map 有什么异同？
    * WeakSet的成员只能是对象，不能是其他类型的值，且垃圾回收机制不考虑WeakSet对该对象的引用。WeakMap只接受对象作为键名，且其键名所指的对象不计入垃圾回收机制。

### 代码题
1. 请把下列代码改写成箭头函数的写法
    * <code>[1,2,3].map(x=> x * x)</code>

1. 请将下面函数柯里化(currying)，需要写出箭头函数和非箭头函数两种答案
    <pre>
    function cala_currying(origin) {
        return function(add) {
            return function(mul) {
                return (origin + add) * mul
            }
        }
    }

    let cala_currying = origin => add => mul => (origin + add) * mul</pre>

1. 请使用 Set 实现数组去重
    <pre>
    let arr1 = new Array(1, 2, 3, 3, 4, 1);
    arr2 = new Set(arr1);
    arr1 = [...arr2]</pre>

1. 请实现打印 Map 中所有的键值对
    <pre>
    let map = new Map([
        ['math', 100],
        ['Chinese', 90],
        ['English', 80]
    ]);

    for (let [key, value] of map) {
        console.log(key, value)
    }</pre>