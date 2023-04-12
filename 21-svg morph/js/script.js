$(function(){
  /*사용법1
  TweenMax.to(".path1",1,{morphSVG:".path2",fill:"#000",ease:Linear.easeNone})
  특정한 순간, 이벤트와 사용함*/

  var morph1 = new TimelineMax({repeat:-1}); 
  morph1
  .to(".ex1 .path1", 1, {morphSVG:".ex1 .path2",ease:Linear.easeNone})
  .to(".ex1 .path1", 1, {morphSVG:".ex1 .path3",ease:Linear.easeNone})
  .to(".ex1 .path1", 1, {morphSVG:".ex1 .path4",ease:Linear.easeNone})

  morph1.play();

  $(`.ex1`).mouseenter(function(){
    morph1.pause();
  }).mouseleave(function(){
    morph1.play();
  })

  /* ex2 */
  var morph2 = new TimelineMax({repeat:-1}); 
  morph2
  .to(".ex2 .path1", 1, {morphSVG:".ex2 .path2",ease:Linear.easeNone})
  .to(".ex2 .path1", 1, {morphSVG:".ex2 .path3",ease:Linear.easeNone})
  .to(".ex2 .path1", 1, {morphSVG:".ex2 .path4",ease:Linear.easeNone})

  morph2.play();

  
  /* ex3 */

  $(`.ex3 button`).mouseenter(function(){
    var n = $(this).attr(`data-n`)
    TweenMax.to(".btn"+n+" .path1", 0.5, {morphSVG:".btn"+n+" .path2",ease:Linear.easeNone})
  }).mouseleave(function(){
    var n = $(this).attr(`data-n`)
    TweenMax.to(".btn"+n+" .path1", 0.5, {morphSVG:".btn"+n+" .path3",ease:Linear.easeNone})
  })


})//ready