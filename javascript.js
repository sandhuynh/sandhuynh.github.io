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
  }, function(){
    $(this).find("ul:first").hide(300);
  });

});
function changeImg(stt) {
  $("img.slide").hide();
  $("img.slide").eq(stt).fadeIn(500);
  $("button").removeClass("active");
  $("button").eq(stt).addClass("active");
};

