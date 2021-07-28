

    $(document).ready(function(){
        $('.tabs .con li:first').fadeIn('slow');
        $('.tabs .tab_menu li:first i').fadeIn('slow');

        $('.tabs .tab_menu li a').click(function(e){
            e.preventDefault();
            var ind = $(this).index('.tabs .tab_menu a'); // 0 1 2 3
        
            $('.tabs .con li').hide();
            $('.tabs .con li:eq('+ind+')').fadeIn('slow');
            $('.tabs .tab_menu li i').hide();
            $('.tabs .tab_menu li:eq('+ind+') i').fadeIn('slow');
            


        });
    });
