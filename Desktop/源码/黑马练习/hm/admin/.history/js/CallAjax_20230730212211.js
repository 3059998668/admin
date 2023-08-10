// 封装ajax请求函数
function CallAjax(type, url, data, callback) {
    console.log(type, url, data, callback)
    $.ajax({
        type: type,
        url: url,
        data: data,
        success: callback
    })
}