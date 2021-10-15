/*
* Đầu vào 
- Nhập vào 3 số nguyên bất kỳ
- Nhấn nút đếm

* Xử lý
B1: Tạo hàm Count và gán sự kiện cho nút đếm
B2: Tạo biến number1, number2, number3 và gán giá trị từ 3 ô 
B3: Tạo biến countEven và countOdd
B4: Xét:
- Nếu number1%2 == 0 thì countEven++
- Nếu number2%2 == 0 thì countEven++
- Nếu number3%2 == 0 thì countEvent++
B5: CountOdd = 3 - countEvent;
B6: Xuất giá trị số số chẵn CountEven và số số lẻ CountOdd vào ô kết quả

* Đầu ra 
- Chương trình xuất ra số số lẻ và số số chẵn
*/

//B1
function Count() {
    //B2
    var number1 = document.getElementById("txtNumber1").value;
    var number2 = document.getElementById("txtNumber2").value;
    var number3 = document.getElementById("txtNumber3").value;

    //B3
    var countEven = 0, countOdd = 0;

    //B4
    if (number1 % 2 == 0) {
        countEven++;
    }
    if (number2 % 2 == 0) {
        countEven++;
    }
    if (number3 % 2 == 0) {
        countEven++;
    }

    //B5
    countOdd = 3 - countEven;

    //B6 
    document.getElementById("txtResult").value = "Có " + countEven + " số chẵn, " + countOdd + " số lẻ";
}
document.getElementById("btnCount").onclick = Count;

