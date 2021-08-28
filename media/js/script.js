$(document).ready(function(){
     
    var screenHeight = $(window).height();
    var screenSize = $(window).width();

    $(window).on('scroll',function(){
       var scroll = $(window).scrollTop();
        //스크롤이 움직이면 해당 scrolltop의 값이 저장된다
        
//        $('.text').text(scroll);

        if(scroll>2200){
            $('.img_showbox1').css('left',30);
        }
        else{
            $('.img_showbox1').css('left',-1000);
        }

        if(scroll>3200){
            $('.img_showbox2').css('bottom',600);
        }
        else{
            $('.img_showbox2').css('bottom',-1000);
        }
    });




    // character

    $('.tab01 li:eq(0)').find('img').css('filter','grayscale(100%)');
	
	$('.tab01 a').click(function(e){
        e.preventDefault();

        var screenWSize = $(window).width();           
        if(screenWSize>768){			
                $('.introduce img').hide();
                $('.introduce img').fadeIn('slow');    
        }        
                var ind = $(this).parent('li').index();
                var chr='';		
                
                $('.char_wrap ul img').css('filter','grayscale(0%)');
                $(this).find('img').css('filter','grayscale(100%)');
                
                if(ind==0){
                    $('.introduce img').attr('src','images/joegardner.png'); 
                    
                    chr='<p class="name">Joe Gardner</p>';
                    chr+='<p class="description">A middle-school band teacher, Joe Gardner’s life hasn’t quite gone the way he’s expected. While teaching is a noble profession, his true passion is playing jazz, and he’s good. Joe believes he was born to play professionally, and though he’s 46 years old, he feels his opportunity to land a high-profile gig could come  any day. Joe has an encyclopedic knowledge of jazz history, and even if his passion for music may have hampered his social life over the years, it hasn’t hampered his confidence. He lives alone, immersing himself in what he loves best: music.</p>';              
                    $('.introduce .txt').html(chr);
                    
                }else if(ind==1){
                    $('.introduce img').attr('src','images/22.png'); 
                    
                    chr='<p class="name">22</p>';
                    chr+='<p class="description">22 (the 22nd soul ever created) is a precocious soul who has spent hundreds of years at The You Seminar, where new souls must meet several requirements before going to Earth. Like every soul before her, 22 has been through the Personality Pavilions, which explains her endearing sarcasm, quick wit and occasional moodiness. She’s met every requirement to go to Earth—except one. But no matter how many visits she makes to the Hall of Everything, no matter how many esteemed luminaries have mentored her, she can’t find the spark she needs to fulfill her requirements and make her way to Earth. That’s fine with 22; the truth is—she’s not interested in life on Earth at all.</p>';              
                    $('.introduce .txt').html(chr);
                    
                }else if(ind==2){
                    $('.introduce img').attr('src','images/terry.png'); 
                    
                    chr='<p class="name">Terry</p>';
                    chr+='<p class="description">Terry is a peculiar extension of the team of The Great Before, charged with the singular duty of keeping track of the entrants to The Great Beyond. Each Jerry does their best to tolerate Terry, whose obsession with The Count can be burdensome—especially when its off. So, when Joe Gardner takes a detour to The Great Before, Terry is determined to make things right.</p>';              
                    $('.introduce .txt').html(chr);
                }	
                
            });
            
            $('.tab02 a').click(function(e){
                e.preventDefault();
                
                var screenWSize = $(window).width();           
                if(screenWSize>768){			
                    $('.introduce img').hide();
                    $('.introduce img').fadeIn('slow');    
                }    	
                
                var ind = $(this).parent('li').index();
                var chr='';		
                
                $('.char_wrap ul img').css('filter','grayscale(0%)');
                $(this).find('img').css('filter','grayscale(100%)');
                
                
                if(ind==0){
                    $('.introduce img').attr('src','images/mittens.png'); 
                    
                    chr='<p class="name">Mr. Mittens</p>';
                    chr+='<p class="description">Mr Mittens is a therapy cat spends who spends his days purring, cuddling and comforting patients in their hospital rooms. The cozy cat is enlisted to assist Joe Gardner when he’s hospitalized after an unfortunate fall. Despite a job well done, Mr. Mittens ends up in the wrong place at the wrong time, embarking on an unexpected adventure.</p>';              
                    $('.introduce .txt').html(chr);
                    
                }else if(ind==1){
                    $('.introduce img').attr('src','images/libbagardner.png'); 
                    
                    chr='<p class="name">Libba Gardner</p>';
                    chr+='<p class="description">Libba Gardner is Joe’s mother, his biggest fan, and his kind-hearted truth-teller. She is a proud businesswoman who’s owned a successful tailor shop in Queens for decades. Her late husband, Joe’s father, was a struggling musician, so Libba was the primary breadwinner for the family. She knows that life as a musician can be brutal, so she encourages Joe to have a backup plan, which he interprets as a lack of support. But no matter how pragmatic Libba can be, above all, she loves Joe and wants him to be happy.</p>';              
                    $('.introduce .txt').html(chr); 
                    
                }else if(ind==2){
                    $('.introduce img').attr('src','images/moonwind.png'); 
                    
                    chr='<p class="name">Moonwind</p>';
                    chr+='<p class="description">Moonwind is the product of a midlife awakening, which led his former self to change his name and his day job to seek a happier life. Moonwind is now a devoted sign twirler on a Manhattan street corner—an activity that brings him joy, putting him into the zone, which allows him to mentally and spiritually journey to a mystical place called The Astral Plane (near The Great Before), where he rescues lost souls from their uninspiring, stressful lives.</p>';              
                    $('.introduce .txt').html(chr); 
                }
                
			
	});

	


          
      


});