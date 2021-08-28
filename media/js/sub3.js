$(document).ready(function(){

    var screenSize = $(window).width();
    var screenHeight = $(window).height();

    $("#content").css('margin-top',screenHeight);

    if( screenSize > 768){
        $('.videoBox img').attr('src','images/sub/sub3_bg.png');
    }
    if(screenSize <= 768){
        $('.videoBox img').attr('src','images/sub/sub3_bg2.png');
    }
    
    $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
    screenSize = $(window).width(); 
    screenHeight = $(window).height();
        
    $("#content").css('margin-top',screenHeight);
        
    if( screenSize > 768){
        $('.videoBox img').attr('src','images/sub/sub3_bg.png');
    }
    if(screenSize <= 768){
        $('.videoBox img').attr('src','images/sub/sub3_bg2.png');
    }
    }); 

    //시디 회전
    var ind=0;

    $('.click_box .playBtn').click(function(e){
        e.preventDefault();
        ind = $(this).parents('li').index();
        console.log(ind);
        $('.music li:eq('+ ind +')').find('img').addClass('rotationImg');
    });

    $('.click_box .stopBtn').click(function(e){
        e.preventDefault();
        ind = $(this).parents('li').index();
        $('.music li:eq('+ ind +')').find('img').removeClass('rotationImg');
    });

});

/* music*/

var audio; //전역변수 선언
        

        function play1(){
            audio=document.getElementById('testAudio1'); 
            audio.play(); //비디오를 재생한다.
        }
        function stop1(){ 
            audio.pause(); //비디오를 재생한다.
        }
        function play2(){
            audio=document.getElementById('testAudio2'); 
            audio.play(); //비디오를 재생한다.
        }
        function stop2(){ 
            audio.pause(); //비디오를 재생한다.
        }
        function play3(){
            audio=document.getElementById('testAudio3'); 
            audio.play(); //비디오를 재생한다.
        }
        function stop3(){ 
            audio.pause(); //비디오를 재생한다.
        }