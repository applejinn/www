<? 
	session_start(); 

	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CGV:채용공고</title>
    
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="common/css/sub6common.css">
    <link rel="stylesheet" href="css/write_form.css">
   
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <script src="../common/js/prefixfree.min.js"></script>
    


    <!--[if IE 9]>  
          <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
        <![endif]-->

</head>
<body>
  

<div class="wrap">
   <!-- 서브 헤더영역 -->
   <? include "../common/sub_head.html"?>

    <div class="visual">
        <img src="common/images/visual.jpg" alt="비주얼이미지">
    </div>

    <div class="sub_menu">
        <h3>인재채용</h3>
        <p>recruitment</p>
        <ul>
            <li><a href="../sub6/sub6_1.html">채용정보</a></li>
            <li class="current"><a href="greet/list.php">채용공고</a></li>
        </ul>
    </div>

    <article id="content">
        <div class="title_area">
            <div class="line_map">
                HOME &gt; 인재채용 &gt; <strong>채용공고</strong>
            </div>
            <h2>채용공고</h2>
            <img src="../sub1/common/images/slash.png" alt="slash">
        </div>

        <div class="content_area">
        
            <form  name="board_form" method="post" action="insert.php"> 
            <div id="write_form">
                <div class="write_line"></div>
                <div id="write_row1">
                    <div class="col1"> 닉네임 </div>
                    <div class="col2"><?=$usernick?></div>
                    <div class="col3"><input type="checkbox" name="html_ok" value="y"> HTML 쓰기</div>
                </div>
                <div class="write_line"></div>
                <div id="write_row2"><div class="col1"> 제목   </div>
                                    <div class="col2"><input type="text" name="subject"></div>
                </div>
                <div class="write_line"></div>
                <div id="write_row3"><div class="col1"> 내용   </div>
                                    <div class="col2"><textarea rows="15" cols="79" name="content"></textarea></div>
                </div>
                <div class="write_line"></div>
            </div>

            <div id="write_button">
                <label for="w_submit" class="hidden">등록버튼</label>
                <input type="submit" value="등록">&nbsp;
                <a href="list.php?page=<?=$page?>">목록</a>
            </div>
            </form>

        </div>
    </article>

    <!-- 서브 푸터영역 -->
    <? include "../common/sub_foot.html" ?>
  </div>

  <!-- JQuery -->
  <script src="../common/js/jquery-1.12.4.min.js"></script>
  <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
  <script src="../common/js/fullnav.js"></script>


</body>
</html>