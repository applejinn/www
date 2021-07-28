$(document).ready(function () {
        
    
    var smh= $('.visual').height();

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
       
        $('.text').text(scroll);
        //스크롤 좌표의 값을 찍는다.
        
        //sticky menu 처리
        if(scroll>smh){ 
            $('#HeaderArea').addClass('navOn');
            //스크롤의 거리가 850px 이상이면 서브메뉴 고정
            
        }else{
            $('#HeaderArea').removeClass('navOn');
            //스크롤의 거리가 850px 보다 작으면 서브메뉴 원래 상태로
           
        }
        
        
        
        //$('#gnb .dropdownmenu li').find('a').removeClass('spy');
        //모든 서브메뉴 비활성화~ 불꺼!!!
        
        
         
    });


});