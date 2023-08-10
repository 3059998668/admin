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
    return ProMiSe

}
// 调用
CallAjax('GET', 'v1/UserSign', { data: data })

ProMiSe.then((value) => {
    console.log(value)
        // 成功的回调
}, (reason) => {
    console.log(reason)
        // 失败的回调
})