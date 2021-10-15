/*
* Đầu vào
- Nhập vào 3 cạnh có chiều dài bất kỳ của tam giác
- Nhấn Dự Đoán

* Xử lý
- B1: Tạo hàm Predict và gán sự kiện cho nút dự đoán
- B2: Tạo biến side1, side2, side3 và gán giá trị cho 3 biến này từ 3 ô chiều dài của tam giác 
- B3: 
+ Nếu side1 == side2 && side1 == side3 && side2 == side3 thì in ra màn hình "Hình tam giác đều";
+ Nếu Math.pow(side1,2) == Math.pow(side2,2) + Math.pow(side3,2) || Math.pow(side2,2) == Math.pow(side1,2) + Math.pow(side3,2) || Math.pow(side3,2) == Math.pow(side1,2) + Math.pow(side2,2) thì in ra màn hình "Hình tam giác vuông"
+ Nếu side1 == side2 || side1 == side3 || side2 == side3 thì in ra màn hình "Hình tam giác cân";
+ Nếu không thuộc trường nào phía trên thì in ra "Hình tam giác thường"
}

* Đầu ra
- Chương trình xuất ra xếp loại của tam giác (tam giác thường, tam giác cân, tam giác đều, tam giác vuông)
*/
//B1
function Predict() {
    //B2
    var side1 = document.getElementById("txtSide1").value;
    var side2 = document.getElementById("txtSide2").value;
    var side3 = document.getElementById("txtSide3").value;

    //B3
    if (side1 == side2 && side1 == side2 && side2 == side3) {
        document.getElementById("txtResult").value = "Hình tam giác đều";
    }
    else if (Math.pow(side1, 2) == Math.pow(side2, 2) + Math.pow(side3, 2) || Math.pow(side2, 2) == Math.pow(side1, 2) + Math.pow(side3, 2) || Math.pow(side3, 2) == Math.pow(side1, 2) + Math.pow(side2, 2)) {
        document.getElementById("txtResult").value = "Hình tam giác vuông";
    }
    else if (side1 == side2 || side1 == side3 || side2 == side3) {
        document.getElementById("txtResult").value = "Hình tam giác cân";
    }
    else {
        document.getElementById("txtResult").value = "Hình tam giác thường";
    }
}

document.getElementById("btnPredict").onclick = Predict;