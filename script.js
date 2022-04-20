function cac(event) {
  event.preventDefault();
  var day = document.getElementById("Day");
  var month = document.getElementById("Month");
  var year = document.getElementById("Year");
  
  var Day = day.value;
  var Month = month.value;
  var Year = year.value;
  
  if (Day==28 && Month==7 && Year==2008) {
document.getElementById("rs").innerHTML="Hmmm... Sự thật đau lồn (à lòng) nhưng mà vẫn là sự thật... Mày sinh ngày 28 tháng 7, bản tính thì muchzay cộng thêm chút thiểu năng hòa quyện với cái nết sống chó tất cả nhòi lại nhét vào nổi nấu chung với DẠI GÁI thì sẽ ra mày!";
document.getElementById("ans").innerHTML="KẾT QUẢ";
} else if (Day==27 && Month==9 && Year==2008) {
document.getElementById("rs").innerHTML="Hmmm... Mày sinh ngày 27 tháng 9, mày thì bản tính tuy hơi muchzay nhưng... không dừng lại ở đó mày còn rất muchzay cộng thêm chút thiểu năng, kết hợp với tí sống chóa và đặc biệt là NỨNG LỒNNNNNNN thì sẽ ra cái nết của mài!";
document.getElementById("ans").innerHTML="KẾT QUẢ";
} else {
document.getElementById("rs").innerHTML="Hmmm... Ra cái nồn nhé đuỵt mọe mài teo biết mài nhập xàm loz nhập lại đê đũy!";
}
}