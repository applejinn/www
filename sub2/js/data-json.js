
var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // When readystate changes

//if(xhr.status === 200) {                      // If server status was ok
  responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
                                                   // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.

  console.log(responseObject);                                                 
 
  var newContent = '';

  newContent+='<table>';
  newContent+='<thead>';
  newContent+='<tr>';
  newContent+='<th scope="col">No.</th>';
  newContent+='<th scope="col">Site</th>';
  newContent+='<th scope="col">City</th>';
  newContent+='<th scope="col">Opening Date</th>';
  newContent+='<th scope="col">Screen</th>';
  newContent+='<th class="last" scope="col">Seat</th>';
  newContent+='</tr>';
  newContent+='</thead>';
  newContent+='<tbody>';
  
  for (var i = 0; i < responseObject.china.length; i++) {   // 0 1 2 3 4
    newContent += '<tr>';
    newContent += '<td>'+ responseObject.china[i].number +'</td>';
    newContent += '<td>'+ responseObject.china[i].site +'</td>' ;
    newContent += '<td>'+ responseObject.china[i].city +'</td>' ;
    newContent += '<td>'+ responseObject.china[i].openingDate +'</td>' ;
    newContent += '<td>'+ responseObject.china[i].screen +'</td>';
    newContent += '<td class="last">'+ responseObject.china[i].seat +'</td>';
    newContent += '</tr>';
  }

  newContent+='<tbody>';
  newContent+='</table>';

  document.getElementById('table1').innerHTML = newContent;

//}
};

xhr.open('GET', 'data/china.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다