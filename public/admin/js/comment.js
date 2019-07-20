// ajax请求之前

// ajax请求之后

// ajax 6个事件
// ajaxStart 开始触发
// ajaxSend 发送的时候触发
// ajaxSuccess成功的时候触发
// ajaxError失败的时候触发
// ajaxComplete完成的时候触发 
// ajaxStop 结束的时候触发

$(document).ajaxStart(function () {
  // 请求之前
  NProgress.start();
});

$(document).ajaxStop(function () {
  // 请求之后
  setTimeout(function () {
    NProgress.done();
  }, 500);
});


// 二级菜单显示隐藏效果

$('.second').prev().on('click', function () {
  $(this).next().slideToggle();
});

// 侧边栏的显示隐藏
$(".icon-menu").on("click", function () {
  $('.lt_aside').toggleClass("active");
  $("body").toggleClass("active")
});


// 模态框显示与隐藏
$(".icon-log-out").on("click", function () {
  $('#logooutModal').modal('toggle');
});

// 退出功能
$(".btn_logout").on("click", function () {
  // 发送ajax请求 让服务器清除缓存
  $.ajax({
    type: 'get',
    url: '/employee/employeeLogout',
    success: function (info) {
      // 打印info，success=true
      if (info.success) {
        // 跳转
        location.href = "login.html";
      }
    }
  })
})
