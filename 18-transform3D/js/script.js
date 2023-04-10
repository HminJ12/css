$(function(){
  $(`.btns button`).click(function(){
    $(`.cube`).removeClass(`front left right back top bottom`)
    $(`.cube`).addClass($(this).val())
  })
})