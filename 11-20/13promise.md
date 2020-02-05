### 简答题
1. Promsie 对象有几种状态？他们之间是怎么转换的？
    * pending,reject,resolve
    * 仅能由pending向reject或pending向resolve转换

1. 下面代码的输出结果是什么？（饿了么面试题）
    * 2 3 5 4 1

1. 什么是 Promise 对象？引入 Promise 对象是为了解决什么？
    * Promise是异步编程的一种解决方法。简单说是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果，从语法上说，promise是一个对象，从它可以获取异步操作的消息，promise提供了统一的API，各种异步操作都可以用同样的方法进行处理。
    * 异步调用

1. <code>var p = new Promise()</code> 中 <code>p</code>对象有哪些方法？各有什么功能？
    * then方法可以接受连个回调函数作为参数，第一个回调函数是promise对象的状态变为resolved时调用，第二个回调函数是promise对象的状态变为rejected时调用，其中，第二个函数是可选的，不一定要提供，这两个函数都接受promise对象传出的值作为参数；
    * catch方法捕获由reject返回的err并执行相应操作

1. <code>Promise.all</code> 和 <code>Promise.race </code>的区别是什么？
    * all会在所有进程执行完后执行then
    * race会在第一个进程执行完后立即执行then

1. Promise 中抛出未处理的异常会怎么样？会阻碍后面的代码执行吗？Chrome 和 Node.js 环境下有什么不同？
    * Promise抛出后不会形象后面的代码执行
    * Chrome会打印err，但node.js只会给出警告

1. <code>catch </code>方法中再抛出异常会怎么样，需要怎样捕捉？
    * 使用done方法,其总是处于回调链的尾端，保证抛出任何可能出现的错误。

1. <code>then</code>的链式调用每次返回的是同一个 Promise 对象吗？请写一小段代码证明你的观点
    * 并不是。类似下面代码，由于每次都是返回new Promise，所以不是同一个
    <pre>
    function timeout(ms, data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, ms)
        })
    }

    timeout(1000, 'Promise1').then(data => {
        console.log(data);
        return timeout(1000, 'Promise2');
    }).then(data => {
        console.log(data)
    })</pre>

### 代码题
1. 请使用 Promise 重构之前作业：新闻瀑布流 中的 图片加载 和 加载更多 部分，比较 Promise 写法与之前的写法的区别
    <pre>
    function getImg(url) {
        return new Promise((resolve, reject) => {
            var img = new Image();
            img.onload = () => {
                resolve(img);
            }
            img.src = url;
        })
    }


    getImg('xxx.jpg').then(data => {
        showImg(); //展示到页面中
    })</pre>

1. 请自行封装 ajaxGet(url) 函数，其返回值为 Promise ，其中 data 为获取的数据（内部使用 XMLHttpRequest）
    <pre>
    function ajaxGet(url) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest;
            xhr.open('get', url, true)
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    resolve(xhr.response);
                } else {
                    reject(new Error("err!"))
                }
            }
            xhr.send();
        })
    }</pre>

1. 请利用自己实现的 ajaxGet(url) 函数，实现串行（一个接一个的）发送10个请求，来获取下面 api 的前10页数据
    <pre>
    function getData() {
        _url = 'xxxx/news';
        for (let i = 0; i < 10; i++) {
            url = _url + i;
            ajaxGet(url).then(data => {
                showData(data); //展示数据
            });
        }
    }</pre>

1. 请利用自己实现的 ajaxGet(url) 函数，实现并行（同时）发送10个请求，来获取下面 api 的前10页数据
    <pre>
    let getInfoArr = (pages) => {
        let promiseArray = new Array();
        for (let i = 0; i < 10; i++) {
            _url = "xxx/news" + i;
            promiseArray.push(ajaxGet(_url));
            }
        return Promise.all(promiseArray);
    }

    getInfoArr(10).then((data) => {
        showData(data); //展示数据
    })</pre>
