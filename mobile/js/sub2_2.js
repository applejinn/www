//tab 영역

$(document).ready(function(){
  var cnt=3;  //탭메뉴 개수 ***
  $('.tabs .conlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
  $('.tabs .tab1').css('border','1px solid #e8171f').css('box-shadow','1px 1px 5px 1px #999');

    $('.tabs .tab').click(function(e){
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
        
        var ind = $(this).index('.tabs .tab');  // 클릭시 해당 index를 뽑아준다
        //console.log(ind);

        $(".tabs .conlist").hide(); //모든 탭내용을 안보이게...
        $(".tabs .conlist:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라 //모든 탭메뉴를 비활성화
        $('.tab').css('border','1px solid #ccc').css('box-shadow','1px 1px 5px 1px #fff');
        $(this).css('border','1px solid #e8171f').css('box-shadow','1px 1px 5px 1px #999');
  

   });

});


