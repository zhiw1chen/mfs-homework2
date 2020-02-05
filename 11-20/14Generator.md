### 问答题
1. 什么是 Generator 函数？和普通函数有什么区别？怎么声明 Generator 函数？
    * Generator是ES6标准引入的新的数据类型。一个Generator看上去像一个函数，但可以返回多次。就是函数不会一次性执行完，是使用next方法，每次执行到一个返回值（yield或return，return后不再有返回值)
    * function*

1. 怎样调用 Generator 函数并逐步执行 Generator 代码？
    * 例如某变量a=gen,执行时使用a.next()

1. Generator 函数实现无限序列原理是什么？
    * 并不会一次执行完返回所有值，而是next一次返回一个

1. Generator 函数怎么实现函数内的数据与函数外进行交互的？请从函数内数据传至函数外，和函数外数据传至函数内 两个方面说明
    * 内传外：通过yield将返回值传至函数外。
    * 外传内：在调用next(data)时，传入一个参数，yield 执行时就会返回这个参数，从而使函数外数据传至函数内

1. yield*有什么用？它和 yield 有什么关系？（此题请自学完成）
    * yield* x在一个Generator函数内遍历另一个Generator时使用，就不会返回一个遍历对象而是得到x中的所有状态

1. 怎么迭代出Generator 函数所有值？请使用 for of 循环实现
    <pre>
    for(let value of foo())
    {
        console.log(value);
    }</pre>

### 代码题
1. 请实现 Generator 函数 range(start,end)，可以迭代出start到end直接所有整数
    <pre>
    function* range(start, end) {
        let _start = Math.ceil(start);
        let _end = Math.floor(end);
        for (let N = _start; N <= _end; N++) {
            yield N;
        }
    }
    let arr = [...range(2.3, 14.6)];
    console.log(arr)</pre>

1. 请实现 Generator 函数 fib()，实现计算无限序列：斐波那契数列
    <pre>
    function* fib() {
        let pre = 0,
            curr = 1;
        yield 0;
        while (true) {
            [pre, curr] = [curr, pre + curr];
            yield pre;
        }
    }</pre>

1. 请使用解构语法，使用上面实现的 fib() 函数计算斐波那契数列前 3 项
    <pre>
    [x1, x2, x3] = fib();
    console.log(x1, x2, x3)</pre>