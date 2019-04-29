(function(){
    $(".show").hide()
    $("#name").blur(function(){
        var  reg=/^[\一-\龥]{2,6}$/;
        if(!reg.test($(this).val())){
          $(this).addClass("red")
          $(this).parent().next().show()
        } else{
            $(this).removeClass("red")
            $(this).parent().next().hide()
        }
    })
    $("#phone").blur(function(){
        var reg=/^1[3456789]\d{9}$/;
        if(!reg.test($(this).val())){
            $(this).addClass("red")
            $(this).parent().next().show()
          } else{
              $(this).removeClass("red")
              $(this).parent().next().hide()
          }
    })
    $("#email").blur(function(){
        var reg=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if(!reg.test($(this).val())){
            $(this).addClass("red")
            $(this).parent().next().show()
          } else{
              $(this).removeClass("red")
              $(this).parent().next().hide()
          }
    })
    $("#hkid").blur(function(){
        var reg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if(!reg.test($(this).val())){
            $(this).addClass("red")
            $(this).parent().next().show()
          } else{
              $(this).removeClass("red")
              $(this).parent().next().hide()
          }
    })
    $("#code").blur(function(){
        var reg=/^([1-9A-GY]{1}[1239]{1}[1-5]{1}[0-9]{5}[0-9A-Z]{10})$/;
        if(!reg.test($(this).val())){
            $(this).addClass("red")
            $(this).parent().next().show()
          } else{
              $(this).removeClass("red")
              $(this).parent().next().hide()
          }
    })
    $("#code1").blur(function(){
        var reg=/^([1-9A-GY]{1}[1239]{1}[1-5]{1}[0-9]{5}[0-9A-Z]{10})$/;
        if(!reg.test($(this).val())){
            $(this).addClass("red")
            $(this).parent().next().show()
          } else{
              $(this).removeClass("red")
              $(this).parent().next().hide()
          }
    })
    $("#qyname").blur(function(){
        var reg=/^[\一-\龥]{2,10}$/;
        if(!reg.test($(this).val())){
            $(this).addClass("red")
            $(this).parent().next().show()
          } else{
              $(this).removeClass("red")
              $(this).parent().next().hide()
          }
    })
    window.onload = function(){
        var obj=document.getElementById("xl");
        var oBtn1=document.getElementById("xl2")
      var oBtn=document.getElementById("xl1");
      oBtn.style.display = "none";
        oBtn1.style.display = "none";
      obj.onclick=function(){
    if(localStorage.length==0){oBtn.style.display="block";}
    else {oBtn1.style.display="block";}       
      }    
      document.onclick=function(event){
       var e=event || window.event;
       var aim=e.srcElement.parentElement || e.target.parent;      
       if(e.srcElement.parentElement){
        var aim=e.srcElement.parentElement;
         if(aim!=oBtn && aim!=obj && aim!=oBtn1){
           oBtn.style.display="none";
            oBtn1.style.display="none";
         }
       }else{
         var aim=e.target.parentElement;
         if(aim!=oBtn && aim!=obj && aim!=oBtn1){
               oBtn.style.display="none";
    oBtn1.style.display="none";
         }
       }
      }     
}
})()