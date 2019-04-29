$(function() {
  var aSj = window.localStorage.getItem('sj')
  if (aSj) {
    $('.Verification>span').html(aSj)
    count(aSj)
  } else {
    var time = 60
    $('.Verification>span').html('获取验证码')
  }
  // 手机号码验证
  $('.Mobile>input').on('blur', function() {
    var Mobile = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
    var res = Mobile.test($(this).val())
    if (!res) {
      $('.Mobile>em').css('display', 'block')
    } else {
      $('.Mobile>em').css('display', 'none')
    }
  })
  // 短信验证
  $('.Verification>span').on('click', function() {
    if (time != 60) {
      return
    } else {
      count()
    }
  })

  // 用户名验证
  $('.name>input').on('blur', function() {
    console.log(1);
    var uPattern = /^^[0-9a-zA-Z\u4e00-\u9fa5_]{4,16}$$/
    var res = uPattern.test($(this).val())
    if (res) {
      $('.name>.name_tips').css('display', 'none')
    } else {
      $('.name>.name_tips').css('display', 'block')
    }
  })
  // 验证密码
  $('#psw1>input').on('blur', function() {
    console.log(1);
    var str = $(this).val()
    if (str.length > 5 && str.length < 16) {
      $('#psw1>span').css('display', 'none')
    } else {
      $('#psw1>span').css('display', 'block')
    }
  })
  $('#psw2>input').on('blur', function() {
    var str = $(this).val()
    var str1 = $('#psw1>input').val()
    if(!str){
      $('#psw2>span').css('display', 'block');
      return
    }
    if (str === str1) {
      $('#psw2>span').css('display', 'none')
    } else {
      $('#psw2>span').css('display', 'block')
    }
  })
  // 应用名称验证
  $('.information_name>input').on('blur', function() {
    var reg = /^^[\一-\龥]{1,20}$$/
    if (!reg.test($(this).val())) {
      $('.information_name>em').css('display', 'block')
    } else {
      $('.information_name>em').css('display', 'none')
    }
  })
  // 验证版本号
  $('#informatio_v>.right>input').on('blur', function() {
    var reg = /^^([0-9]{1}).([0-9]{1}).([0-9]{1})$$/
    if (!reg.test($(this).val())) {
      $('#informatio_v>em').css('display', 'block')
    } else {
      $('#informatio_v>em').css('display', 'none')
    }
  })
  // 应用子分类
  $('#brief>.right>input').on('blur', function() {
    var reg = /^^[\一-\龥]{1,6}$$/
    if (!reg.test($(this).val())) {
      $('#brief>em').css('display', 'block')
    } else {
      $('#brief>em').css('display', 'none')
    }
  })
  //短信按钮倒计时功能
  function count(num) {
    if (num) {
      time = aSj
    }
    time1 = setInterval(() => {
      time--
      window.localStorage.setItem('sj', time)
      $('.Verification>span').html(time)
      if (time < 1) {
        localStorage.clear()
        $('.Verification>span').html('获取验证码')
        clearInterval(time1)
        time = 60
      }
    }, 1000)
  }
})
