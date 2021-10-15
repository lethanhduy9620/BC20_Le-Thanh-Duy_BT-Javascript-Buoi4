/*
- Đầu vào
    Nhập 3 số nguyên
    Nhấn nút sắp xếp
- Xử lý
B1: Tạo hàm sắp xếp và gán sự kiện cho nút sắp xếp
B2: Tạo 3 biến number1, number2, number3 và gán giá trị tương ứng với 3 ô
B3: Tạo biến temp để lưu giá trị trung gian khi chuyển vị trí các số
B4: Xét trường hợp
+ Nếu number1 > number2 thì chuyển chổ của số number1 và number2 
+ Nếu number1 > number3 thì chuyển chổ của số number1 và number3
+ Nếu number2 > number3 thì chuyển chổ của số number2 và number3
* Sau bước này, 3 số đã được sắp xếp theo thứ tự tăng dần nhưng vẫn còn trường hợp 2 hoặc cả 3 số đều bằng nhau (Không có trường hợp number1 = number3 và number1 != number2 vì các số đã được xếp thứ tự tăng dần)
+ Nếu cả 3 số bằng nhau thì in ra number1 = number2 = number3
+ Hoặc nếu number1 = number2 thì in ra number1=number2 < number3
+ Hoặc nếu number2 = number3 thì in ra number1 < number2 = number3
+ Hoặc in ra number1 < number2 < number3 
- Đầu ra
Xuất ra 3 số theo thứ tự tăng dần
*/
//B1
function Arrange3Numbers() {
    //B2
    var number1 = document.getElementById("txtNumber1").value;
    var number2 = document.getElementById("txtNumber2").value;
    var number3 = document.getElementById("txtNumber3").value;
    var temp;
    if (number1 > number2) {
        temp = number2;
        number2 = number1;
        number1 = temp;
    }
    if (number1 > number3) {
        temp = number3;
        number3 = number1;
        number1 = temp;
    }
    if (number2 > number3) {
        temp = number3;
        number3 = number2;
        number2 = temp;
    }
    if (number1 === number2 && number1 === number3) {
        document.getElementById("txtResult").value = number1 + " = " + number2 + " = " + number3;
    }
    else if (number1 === number2) {
        document.getElementById("txtResult").value = number1 + " = " + number2 + " < " + number3;
    }
    else if (number2 === number3) {
        document.getElementById("txtResult").value = number1 + " < " + number2 + " = " + number3;
    }
    else {
        document.getElementById("txtResult").value = number1 + " < " + number2 + " < " + number3;
    }
}
//B3
document.getElementById("btnArrange").onclick = Arrange3Numbers;