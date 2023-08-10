userIndex() //调用首页
var Status = true;


function userIndex() {


    // 1、 发送ajax请求获取到本地存储的usertoken参数， 然后提交
    var token = JSON.parse(localStorage.getItem('data')) || '' // 获取到本地存储的数据，用对象的形式拿到
        // console.log(token.username)
    sign(token) //调用签到函数，把token传进去
    $.ajax({
            type: 'GET',
            url: 'v1/GetUserInfo',
            data: {
                username: token.username,
                usertoken: token.usertoken
            },
            success: function(res) {
                InviteCode(res) //调用生成邀请码，传入res
                layer.msg(res.msg)
                console.log(res.data, res)

                // if (res.data === undefined) { //res.data等于undefined 说明未登录，则强制返回登陆页面
                //     //1、清除token
                //     localStorage.clear()
                //         // 2、强制跳转登录页面
                //     window.location = 'login.html'

                // } else {
                //     // 登录成功执行的事件
                //     // // 把数据存到本地存储里，在从本地存储渲染
                //     localStorage.setItem('ifon', JSON.stringify(res.data))
                //     userloginIfon(JSON.parse(localStorage.getItem('ifon')))
                // }
                var infoData = localStorage.setItem('info', JSON.stringify(res.data))
                console.log(infoData)
                userloginIfon(res.data || '') //如果没有数据，则让他等于空，则不会报错
                Status = false

            },
            // complete: function(res) { //不论成功还是失败，都会调用complete回调函数
            //     console.log(res)
            //     console.log(res.responseJSON.code)
            //     if (res.responseJSON.code === 400) { //code===400说明没有登录，则强制跳转页面
            //         //1、清除token
            //         localStorage.clear()
            //             // 2、强制跳转登录页面
            //         window.location = 'login.html'

            //     }
            // }

        })
        // 2、把获取到返回的数据渲染到页面上
    function userloginIfon(data) {
        console.log(data)
        $('#nickname').text(data.nickname) //用户名
        $('#usertx').attr("src", data.usertx) //用户头像
            // 用户vip
        $('#EndVip-time').text(data.viptime)
        $('.invitecode').text('邀请码：' + data.invitecode)

    }
    // 点击退出页面exit
    $('#exit').on('click', function() {
            // 弹出框
            layer.confirm('确定退出登录吗？', { icon: 3, title: '提示' }, function(index) {
                // 1、清除本地存储的uesertoken内容
                localStorage.clear()
                setTimeout(function() {
                    // 2、跳转到登录页面
                    window.location = 'login.html'
                }, 800)
                layer.msg('已成功退出', { icon: 1 });
                layer.close(index)

            }, function() {
                layer.msg('取消退出');
            });

        })
        // 上传文件
        // $('#file').on('change', function() {
        //     var da = JSON.parse(localStorage.getItem('data'))

    //     console.log($(this).val())
    //         // var form = new FormData();
    //         //     // console.log($('#file').files)
    //         // var form = $('#file').append($(this).val());
    //         // console.log(form)
    //         // $.ajax({
    //         //     type: 'POST',
    //         // "url": "v1/UploadHead?username=123456&usertoken=" + da.usertoken,
    //         //     data: form,
    //         //     succecc: function(res) {
    //         //         console.log(res)
    //         //     }
    //         // })
    //     var fileInput = document.getElementById('file')
    //     var form = new FormData();
    //     form.append("file", fileInput.files[0], "C:\fakepath\aaa.PNG");

    //     console.log(fileInput.files[0])


    //     var xhr = new XMLHttpRequest();
    //     xhr.withCredentials = true;

    //     xhr.addEventListener("readystatechange", function() {
    //         if (this.readyState === 4) {
    //             console.log(this.responseText);
    //         }
    //     });

    //     xhr.open("POST", "http://lanzou.freeapks.cn/v1/UploadHead?username=123456&usertoken=2ffc5ba88b7e62bdabe49696304bc416");
    //     // xhr.setRequestHeader("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

    //     xhr.send(form);

    // })
}
// 用户签到
function sign(res) {
    console.log(res) //传进来数据
        // 绑定签到点击按钮
    $('#sign').on('click', function() {
        // 发送签到的ajax请求
        CallAjax('GET', 'v1/UserSign', {
            username: res.username,
            usertoken: res.usertoken
        }, function(res) {
            if (res.code === 200) {
                setTimeout(function() {
                    layer.msg(res.msg)
                }, 1500)
                userIndex()

            } else if (res.code === 400) {
                layer.msg(res.msg)
                console.log(res)
            }


        })
    })
}


// 生成邀请码
function InviteCode(res) {
    console.log(res)
        // 判断有没有生成邀请码，如果有值则不调用ajax
    if (res.data.invitecode === null) {
        // console.log('说明没有生成邀请码，则写调用代码')
        var data = JSON.parse(localStorage.getItem('data')) //获取到本地存储的token
        CallAjax('GET', 'v1/Getinvitecode', {
            username: data.username,
            usertoken: data.usertoken
        }, function(res) {
            layer.msg(res.msg)
            console.log(res)
            userIndex()
        })

    } else {
        // 有验证码则不调用
        console.log('不调用')
    }
}



// 用户点击复制剪切板
function copy() {
    $('#invitecode').on('click', function() {

    })
}