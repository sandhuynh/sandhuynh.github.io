$(document).ready(function () {
    var stt = 0;
    var endImg = $("img.slide:last").attr("idx");
  
    $("button").click(function () {
        stt = $(this).attr("idx");
  
        changeImg(stt);
    });
  
  //Danh sách Đa Cấp
    $(".header-list li").hover(function(){
      $(this).find("ul:first").slideDown(500);
      $('img.fireworks1').fadeIn();
      $('img.fireworks2').fadeIn();
    }, function(){
      $(this).find("ul:first").hide(100);
      $('img.fireworks1').fadeOut(300);
      $('img.fireworks2').fadeOut(300);
      
    });

  //Ẩn hiện con bướm
  $('.main').hover(
    function(){
      $('img.buf').fadeIn();
    },
    function(){
      $('img.buf').fadeOut();
    }
    );
  //Quay lên trên
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) $(".Back-to-top").fadeIn();
    else $(".Back-to-top").fadeOut();
    });
    $(".Back-to-top").click(function () {
    $("body,html").animate({scrollTop: 0}, "slow");
    });

  });
  function changeImg(stt) {
    $("img.slide").hide();
    $("img.slide").eq(stt).fadeIn(500);
    $("button").removeClass("active");
    $("button").eq(stt).addClass("active");
  };
  
  