const weekday = ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"];

function startTime() {
  var date = new Date(),
      hour = date.getHours(),
      minute = checkTime(date.getMinutes()),
      ss = checkTime(date.getSeconds());

  function checkTime(i) {
    if( i < 10 ) {
      i = "0" + i;
    }
    return i;
  }

if ( hour > 12 ) {
  hour = hour - 12;
  if ( hour == 12 ) {
    hour = checkTime(hour);
  document.getElementById("tt").innerHTML = hour+":"+minute+" AM";
  }
  else {
    hour = checkTime(hour);
    document.getElementById("tt").innerHTML = hour+":"+minute+" PM";
  }
}
else {
  document.getElementById("tt").innerHTML = hour+":"+minute+" AM";;
}
var time = setTimeout(startTime,1000);
}



const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("today").innerHTML = day;