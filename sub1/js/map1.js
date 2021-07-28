map.js

 function initialize() {
  var myLatlng = new google.maps.LatLng(37.2912224322357, 127.06097963981982);
  var myOptions = {
   zoom: 15,
   center: myLatlng

  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 
  var marker = new google.maps.Marker({
   position: myLatlng,
   map: map,
   title:"(주)우리집"
  });  
  
 
  var infowindow = new google.maps.InfoWindow({
   content: "경기도 수원시 영통구 센트럴파크로60"
  });
 
  infowindow.open(map,marker);
 }
 
 
 window.onload=function(){
  initialize();
 }