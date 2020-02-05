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
}

let getInfoArr = (pages) => {
    let promiseArray = new Array();
    for (let i = 0; i < 10; i++) {
        _url = "xxx/news" + i;
        promiseArray.push(ajaxGet(_url));
    }
    return Promise.all(promiseArray);;
}

getInfoArr(10).then((data) => {
    showData(data); //展示数据
})

function getData() {
    _url = 'xxxx/news';
    for (let i = 0; i < 10; i++) {
        url = _url + i;
        ajaxGet(url).then(data => {
            showData(data); //展示数据
        });
    }
}