$(document).ready(function () {
    var ind =0;
     $('.box ul li a').hover(function(){
            ind = $(this).index('.box ul li a');  // 0 1 2
            $('.box'+(ind+1)).css({
                'left':0,
                'width':'100%',
                'opacity':1,
                'z-index':10
            });
            $(this).css('background','rgba(0,0,0,.3)');
     },function(){
          $('.box'+(ind+1)).css({
                'left':33.33*ind+'%',
                'width':'33.33%',
                'opacity':0,
                'z-index':1
            }); 
            $(this).css('background','rgba(0,0,0,0)');
    });

});

//tab 영역
$(document).ready(function(){
    var cnt=5;  //탭메뉴 개수 ***
    $('.tabs .conlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.tabs .btn1').css; //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
      
      $('.tabs .btn').click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
          
          var ind = $(this).index('.tabs .btn');  // 클릭시 해당 index를 뽑아준다
          //console.log(ind);

          $(".tabs .conlist").hide(); //모든 탭내용을 안보이게...
          $(".tabs .conlist:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
          $('.btn').css; //모든 탭메뉴를 비활성화
          $(this).css; // 클릭한 해당 탭메뉴만 활성화

     });

  });

