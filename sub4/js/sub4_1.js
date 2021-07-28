$(document).ready(function () {
    
    $('.con_box li:eq(0)').addClass('boxMove');
    //첫번째 내용글 애니메이션 처리
    var smh= $('.visual').height();
    var h1= $('.con_box li:eq(1)').offset().top-500 ;
    var h2= $('.con_box li:eq(2)').offset().top-500 ;
    var h3= $('.con_box li:eq(3)').offset().top-500 ;
    var h4= $('.con_box li:eq(4)').offset().top-500 ;
});