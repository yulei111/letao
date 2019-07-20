$(function () {

  // 1 表单校验， bootsrapValidator这个插件对表单有要求
  // bootsrapValidator、会在提交的时候做表单校验，校验失败会阻止表单的提交会显示错误信息；
  $('form').bootstrapValidator({
    fields: {
      // username所有校验
      username: {
        validators: {
          notEmpty: {
            message: "用户名不能为空"
          },
          stringLength: {
            min: '3',
            max: "6",
            message: '用户名长度必须是3-6位'
          },
          callback: {
            message: "用户名不存在"
          }
        }
      },
      // password校验规则
      password: {
        validators: {
          notEmpty: {
            message: "密码不能为空"
          },
          stringLength: {
            min: '6',
            max: "12",
            message: '用户名长度必须是3-12位'
          },
          callback: {
            message: "密码输入错误"
          }
        }
      }
    },

    //2. 指定校验时的图标显示，默认是bootstrap风格
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },

  });
  // 2注册一个校验成功事件
  $("form").on('success.form.bv', function (e) {

    e.preventDefault(); //阻止发送请求

    //使用ajax提交逻辑
    $.ajax({
      type: 'post',
      url: '/employee/employeeLogin',
      data: $("form").serialize(),
      success: function (info) {
        console.log(info);

        if (info.error === 1000) {
          // 1 修改哪个字段
          // 2修改状态 NOT_VALIDATED，VALIDATING，INVALID或者VALID（未验证、验证、无效或有效）
          $("form").data('bootstrapValidator').updateStatus("username", "INVALID", 'callback');
        }
        if (info.error === 1001) {
          $("form").data('bootstrapValidator').updateStatus("password", "INVALID", 'callback');
        }
        if (info.success) {
          location.href = 'index.html';

        }
      }
    })

  });
  // 点击重置样式图标消失

  $("[type='reset']").on('click', function () {
    $("form").data('bootstrapValidator').resetForm(true);
  })

})