/*
* Đầu vào
- Nhập ngày, tháng, năm
- Nhấn nút ngày hôm qua, hoặc ngày mai để tính ngày

* Xử lý
B1: Tạo hàm TinhNgayHomQua() và gán sự kiện cho nút btnYesterday
B2: Tạo biến day để lưu giá trị ngày, biến month để lưu giá trị tháng và biến year để lưu giá trị năm từ các ô nhập liệu
B3: Tạo biến yesterday để chứa giá trị ngày hôm qua
B4: Xét các trường hợp giá trị của biến
- if(day == "1" && month == "3" && year%4==0 ) thì yesterday = "29" + "/" + (month - 1) + "/" + (year);
- else if(day == "1") thì với các trường hợp: 
(Dùng swith-case cho biến month)
+ month == "1" thì yesterday = "31" + "/" + "12" + "/" + (year-1);
+ month == "3" thì yesterday = "28" + "/" + (month) + "/" + (year);
+ month ==  "2" , "4", "8", "9", "11" thì yesterday = "31" + "/" + (month - 1) + "/" + (year);
+ month == "5" , "7", "10", "12" thì yesterday = "30" + "/" + (month - 1) + "/" + (year);
+ default: yesterday = "Ngày không xác định"
- else if(day != "1" && month <=12 && month >= 1 && year%4 != 0) thì yesterday = (day-1) + "/" + (month) + "/" + (year);
- else: yesterday = "Ngày không xác định"
B5: Xuất giá trị yerterday vào ô kết quả 
B6: Tạo hàm TinhNgayMai() và gán sự kiện cho nút btnTommorrow
B7: Tạo biến day để lưu giá trị ngày, biến month để lưu giá trị tháng và biến year để lưu giá trị năm từ các ô nhập liệu
B8: Tạo biến tommorrow để chứa giá trị ngày mai
B9: Xét các trường hợp giá trị của biến:
- if(day== "29" && month ="2" && year%4 == 0) thì tommorrow = "1" + (month + 1) + year;
- else if(day == "30") thì ứng với các trường hợp:
(Dùng swith-case cho biến month)
+ month == "4","8","9","11" thì tommorrow  ="1" + "/" + (month+1) + "/" + (year);
+ month == "1", "5", "7", "10", "12" thì tommorrow = (day + 1) + "/" + (month) + "/" + (year); 
+ default: tommorrow = "Ngày không xác định"
- else if(day == "31") thì ứng với các trường hợp:
(Dùng swith-case cho biến month)
+ month == "1", "5", "7", "10" thì tommorrow = 1 + "/" + (month+1) + "/" + (year); 
+ month == "12" thì tommorrow = 1 + "/" + "1" + "/" + (year + 1);
+ default: tommorrow = "Ngày không xác định"
- else if(day == "28" && month == "2") thì tommorrow = 1 + "/" + (month+1) + "/" + (year); 
B10: Xuất giá trị tommorrow vào ô kết quả

* Đầu ra
- Xuât ra giá trị của ngày hôm qua hoặc ngày mai
*/
function TinhNgayHomQua() {
   var day = document.getElementById("txtDay").value;
   var month = document.getElementById("txtMonth").value;
   var year = document.getElementById("txtYear").value;
   var yesterday;
   if (day == "1" && month == "3" && year % 4 == 0) {
      yesterday = "29" + "/" + (month - 1) + "/" + (year);
   }
   else if (day == "29" && month == "2" && year % 4 != 0) {
      yesterday = "Ngày không xác định";
   }
   else if (day == "1") {
      switch (month) {
         case "1": yesterday = "31" + "/" + "12" + "/" + (year - 1);
            break;
         case "3": yesterday = "28" + "/" + (month) + "/" + (year);
            break;
         case "2":
         case "4":
         case "8":
         case "9":
         case "11":
            yesterday = "31" + "/" + (month - 1) + "/" + (year);
            break;
         case "5":
         case "7":
         case "10":
         case "12":
            yesterday = "30" + "/" + (month - 1) + "/" + (year);
            break;
         default: yesterday = "Ngày không xác định"
            break;
      }
   }
   else if (day != "1" && month <= 12 && month >= 1) {
      yesterday = (day - 1) + "/" + (month) + "/" + (year);
   }
   else {
      yesterday = "Ngày không xác định";
   }
   document.getElementById("txtResult").value = yesterday;
}
document.getElementById("btnYesterday").onclick = TinhNgayHomQua;

function TinhNgayMai() {
   var day = document.getElementById("txtDay").value;
   var month = document.getElementById("txtMonth").value;
   var year = document.getElementById("txtYear").value;
   var tommorrow;

   if (day == "29" && month == "2") {
      year % 4 == 0 ? tommorrow = "1" + "/" + (Number(month) + 1) + "/" + year : tommorrow = "Ngày không xác định";
   }
   else if (day == "28" && month == "2" && year % 4 != 0) {
      tommorrow = 1 + "/" + (Number(month) + 1) + "/" + (year);
   }
   else if (day != "31" && day != "30" && month <= 12 && month >= 1) {
      tommorrow = (Number(day) + 1) + "/" + (month) + "/" + (year);
   }
   else if (day == "30") {
      switch (month) {
         case "1":
         case "5":
         case "7":
         case "10":
         case "12":
            tommorrow = (Number(day) + 1) + "/" + (month) + "/" + (year);
            break;
         case "4":
         case "8":
         case "9":
         case "11":
            tommorrow = "1" + "/" + (Number(month) + 1) + "/" + (year);
            break;
         default: tommorrow = "Ngày không xác định"
            break;
      }
   }
   else if (day == "31") {
      switch (month) {
         case "1":
         case "5":
         case "7":
         case "10":
            tommorrow = 1 + "/" + (Number(month) + 1) + "/" + (year);
            break;
         case "12":
            tommorrow = 1 + "/" + "1" + "/" + (Number(year) + 1);
            break;
         default:
            tommorrow = "Ngày không xác định";
            break;
      }
   }
   else { tommorrow = "Ngày không xác định" }
   document.getElementById("txtResult").value = tommorrow;
}
document.getElementById("btnTommorrow").onclick = TinhNgayMai;
