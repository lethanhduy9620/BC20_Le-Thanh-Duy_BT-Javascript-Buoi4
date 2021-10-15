/*
Đầu vào:
Lựa chọn thành viên
Nhấn nút gửi lời chào để chào hỏi

Xử lý:
B1: Tạo hàm Greeting() và gán sự kiện cho nút Gửi lời chào
B2: Tạo biến member và gán giá trị từ ô chọn thành viên
B3 Dùng switch case để xử lý lời chào cho từng thành viê:
+ Nếu member là bo, in ra màn hình "Xin chào Bố"
+ Nếu member là me, in ra màn hình "Xin chào Mẹ"
+ Tương tự cho 2 trường hợp cho anh trai và em gái ứng với hai giá trị của member bằng anhTrai và emGai
+ Nếu member không thuộc 4 giá trị trên thì không hiện thị lời chào 
Đầu ra:
Lời chào hiện thị trong màn hình
*/
console.log("okay")
//B1
function Greeting() {
    //B2
    var member = document.getElementById("memberSelectBox").value;

    //B3
    switch (member) {
        case "bo":
            document.getElementById("txtGreeting").value = "Xin chào Bố!";
            break;
        case "me":
            document.getElementById("txtGreeting").value = "Xin chào Mẹ!";
            break;
        case "anhTrai":
            document.getElementById("txtGreeting").value = "Xin chào Anh Trai!";
            break;
        case "emGai":
            document.getElementById("txtGreeting").value = "Xin chào Em Gái!";
            break;
        default:
            document.getElementById("txtGreeting").value = "";
            break;
    }
}

//B5
document.getElementById("btnGreeting").onclick = Greeting;