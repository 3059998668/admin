// 封装ajax请求函数
function CallAjax(data) {
    return new Promise((resolve, reject) => {
        // console.log(type, url, data)
        $.ajax({
            type: data.type,
            url: data.url,
            data: data.data,
            success: (res) => {
                resolve(res)
            },
            error: (res) => {
                reject(res)
            }
        })
    })



}
// 调用
CallAjax({
    type: 'GET',
    url: 'v1/UserSign',
    data: { username: 123456, usertoken: "7a53946a5fce5c43e52bfdc10a2fbc68" }
}).then((value) => {
    console.log(value)
        // 成功的回调
}, (reason) => {
    console.log(reason)
        // 失败的回调
})