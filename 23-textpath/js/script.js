$(function(){
  var morph = new TimelineMax({repeat:-1}); 
      morph
      .to("#ex2-path",1,{morphSVG:".ex2 .path1",ease:Linear.easeNone})
      .to("#ex2-path", 1,{morphSVG:".ex2 .path2",ease:Linear.easeNone});

}) //물결 치듯이 만드는 거