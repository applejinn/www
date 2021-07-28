
$(document).ready(function() {
  
   //2depth 열기/닫기
   $('ul.dropdownmenu').hover(
      function() { 
         $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
         $('#headerArea').animate({height:400},'fast').clearQueue();
      },function() {
         $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
         $('#headerArea').animate({height:200},'fast').clearQueue();
    });

    //2depth 효과
    $('.dropdownmenu li ul li a').hover(
        function() { 
           $(this).css('color','#e8171f');
           $('.dropdownmenu li a.depth1::before').css('opacity','1');
        },function() {
            $(this).css('color','#333');
            $('.dropdownmenu li a.depth1::before').css('opacity','0');
      });

    //   $('.dropdownmenu li ul').hover(
    //     function() { 
    //         $('.dropdownmenu li a.depth1::before').css('opacity','1');
    //     },function() {
    //         $('.dropdownmenu li a.depth1::before').css('opacity','0');
    //   });
      

    //tab 처리
    $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
       $('ul.dropdownmenu li.menu ul').fadeIn('normal');
       $('#headerArea').animate({height:400},'fast').clearQueue();
    });

   $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
       $('ul.dropdownmenu li.menu ul').hide();
       $('#headerArea').animate({height:200},'fast').clearQueue();
   });
});





//상단이동 코드
$(document).ready(function () {
            
   $('.topMove').hide();  //top버튼 보이지마~~~
 
   $(window).on('scroll',function(){   // 스크롤의 위치가 바뀌면 발생하는 이벤트
        var scroll = $(window).scrollTop();  //스크롤의 상단 부터의 거리
       
       
        //$('.text').text(scroll);  // 스크롤의 거리를 출력
        if(scroll>500){    //스트롤 top의 거리가 500px 보다 커지면
            $('.topMove').fadeIn('slow');  //top메뉴가 보인다
        }else{
            $('.topMove').fadeOut('fast'); //top메뉴가 안보인다
        }
   });
 
    // top메뉴를 클릭하면 상단으로 이동시킨다 
    $('.topMove').click(function(e){
        e.preventDefault();
        //상단으로 스르륵 이동합니다.
       $("html,body").stop().animate({"scrollTop":0},1000); // 스크롤의 위치를 이동시킨다
    });

    
});





/*패밀리사이트 영역 */

$(document).ready(function() {
	/*
	$('.select .arrow').click(function(){
		$('.select .aList').fadeIn('slow');			  
	});
	$('.select .aList').mouseleave(function(){
		$(this).fadeOut('slow');		  
	});
	*/
    $('.family .arrow').toggle(function(){
		$('.family .aList').fadeIn('slow');	
	}, function(){
        $('.family .aList').fadeOut('slow');	
	});

	//tab키 처리
	  $('.family .arrow').on('focus', function () {        
              $('.family .aList').show();	
       });

       $('.family .aList li:last').find('a').on('blur', function () {        
              $('.family .aList').hide();
       });  
});