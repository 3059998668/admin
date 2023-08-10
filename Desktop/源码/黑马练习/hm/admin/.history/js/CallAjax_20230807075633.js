// 封装ajax请求函数
function CallAjax(type, url, data, success, error) {
    const Promise = new Promise((resolve, reject) => {
        console.log(type, url, data, callback)
        $.ajax({
            type: type,
            url: url,
            data: data,
            success: () => {
                resolve(res)
            },
            error: error
        })
    })

}
// 调用
CallAjax('GET', 'url', { data: data }, (res) => {
    resolve(res)
}, (res) => {
    reject(res)
})

Promise.then((value) => {
    console.log(value)
        // 成功的回调
}, (reason) => {
    console.log(reason)
        // 失败的回调
})