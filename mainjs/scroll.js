$(document).ready(function () {
        
    $('.subNav li:eq(0)').find('a').addClass('spy');
    //첫번째 서브메뉴 활성화
    
    $('#content div:eq(0)').addClass('boxMove');
    //첫번째 내용글 애니메이션 처리
    var smh= $('.visual').height();
    var h1= $('#content section:eq(2)').offset().top;
    var h2= $('#content section:eq(4)').offset().top;
    var h3= $('#content section:eq(5)').offset().top;

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
       
        $('.text').text(scroll);
        //스크롤 좌표의 값을 찍는다.
        
         //스크롤의 거리의 범위를 처리(스크롤스파이)
        if(scroll>=2800 && scroll<h1){
            
            $('#content section:eq(2)').addClass('boxMove');
            //첫번째 내용 콘텐츠 애니메이션

        }else if(scroll>3800 && scroll<h2){
       
             $('#content section:eq(4)').addClass('boxMove');

         }else if(scroll>=h2 && scroll<h3){
            
             $('#content section:eq(5)').addClass('boxMove');
        
    }
        
    
        
    });


});