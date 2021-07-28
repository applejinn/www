$(document).ready(function(){

    $('#footerArea .top_btn').click(function(e){
        e.preventDefault();
        $("html,body").animate({"scrollTop": 0}, 700)
    })

})