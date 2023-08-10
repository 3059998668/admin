// 封装ajax请求函数
function CallAjax(type, url, data) {
    const Promise = new Promise((resolve, reject) => {
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
CallAjax('GET', 'url', { data: data })

Promise.then((value) => {
    console.log(value)
        // 成功的回调
}, (reason) => {
    console.log(reason)
        // 失败的回调
})