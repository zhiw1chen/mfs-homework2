let rp = require('request-promise')

async function callback(index) {
    let res = await rp('http://h5uc.wondersea.mobi/storage/birdDetail.do?sso=MaqZ62nbP2qNHOhGEyFuTg__&vp=2&vk=iHJJy&id=' + index);

    let data = res.match(/(?<=<title>).*(?=详情-小鸟OL--)/);

    return data[0];
}