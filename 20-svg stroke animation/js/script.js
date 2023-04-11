$(function(){

  $(`.ex3 button`).click(function(){
    var deg = parseInt($(this).val())
    
    $(`.ex3 .circle2`).css({'stroke-dashoffset':`${deg}px`})
  })

  var reqID
  function fn(){
    var elT = $(`.ex4`).offset().top
    if(scrT >= elT - winH * 0.8){
      $(`.ex4`).addClass(`active`)
    }else{
      $(`.ex4`).removeClass(`active`)
    }
  }

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })


}) //ready