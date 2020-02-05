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
})