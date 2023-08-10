// 封装ajax请求函数
function CallAjax(type, url, data, callback) {
    const Promise = new Promise((resolve, reject) => {
        console.log(type, url, data, callback)
        $.ajax({
            type: type,
            url: url,
            data: data,
            success: resolve(),
            error: reject()
        })
    })

}