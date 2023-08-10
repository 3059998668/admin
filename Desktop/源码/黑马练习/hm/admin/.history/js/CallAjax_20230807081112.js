// 封装ajax请求函数
function CallAjax(type, url, data) {
    const ProMiSe = new Promise((resolve, reject) => {
        console.log(type, url, data, callback)
        $.ajax({
            type: type,
            url: url,
            data: data,
            success: () => {
                resolve(res)
            },
            error: (res) => {
                reject(res)
            }
        })
    })

}
// 调用
CallAjax('GET', 'v1/UserSign', { username: 123456, usertoken: "7a53946a5fce5c43e52bfdc10a2fbc68" })

ProMiSe.then((value) => {
    console.log(value)
        // 成功的回调
}, (reason) => {
    console.log(reason)
        // 失败的回调
})