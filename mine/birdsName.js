let rp = require('request-promise')

async function main() {
    let res = await rp('http://h5uc.wondersea.mobi/storage/birdDetail.do?sso=MaqZ62nbP2qNHOhGEyFuTg__&vp=2&vk=iHJJy&id=1');

    let data = res.match(/(?<=<title>).*(?=详情-小鸟OL--)/);
    console.log(data[0]);

}

main();