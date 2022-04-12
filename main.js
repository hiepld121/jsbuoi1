// Bài 1: tình tiền lương nhân viên
// Đầu vào:
// nhập tiền lương
// nhập số ngày đi làm
// Xử lý:
// lấy tiền lương nhân với số ngày đi làm
// Đầu ra: 
// Tiền lương tháng


var luongNgay = 100000;
var ngayDiLam = 24;

var tienLuong = luongNgay * ngayDiLam;

console.log(tienLuong);


// Bài 2: Tính giá trị trung bình
// Đầu vào: 
// nhập 5 số, ví dụ: 1 2 3 4 5
// Xử lý:
// - tổng của 5 số 1 2 3 4 5 vừa nhập
// - lấy tổng chia 5
// Đầu ra:
// Giá trị trung bình của 5 số đã nhập

var so1 = 1;
var so2 = 2;
var so3 = 3;
var so4 = 4;
var so5 = 5;

var tong = so1 + so2 + so3 + so4 + so5;

var giaTriTrungBinh = tong / 5;

console.log(giaTriTrungBinh);

// Bài 3: Quy đổi tiền
// Đầu vào:
// số tiền usd nhập vào, ví dụ 10 usd
// giá tiền quy đổi hiện tại, ví dụ 23.500
// Xử lý:
// lấy tiền usd nhập vào nhân cho giá tiền quy đổi
// Đầu ra:
// tiền Việt đổi được từ 10 usd

var usd = 10;
var giaQuyDoi = 23500;

var tienDoiDuoc = usd * giaQuyDoi;

console.log(tienDoiDuoc);

// Bài 4: Tính diện tích, chu vi hình chữ nhật
// Đàu vào: 
// - nhập chiều rộng và chiều dài
// Xử lý:
// - Diện tích bằng dài nhân rộng
// - chu vi bằng tổng của dài rộng rồi nhân 2
// Đầu ra:
// Diện tích và chu vi hình chữ nhật

var dai = 15;
var rong = 20;

var chuVi = (dai + rong) * 2;
var dienTich = dai * rong;

console.log(chuVi, dienTich);

// Bài 5: tính tổng 2 ký số của số vừa nhập
// Đầu vào:
// - nhập 1 số ví dụ 14;
// Xử lý:
// - xác định số hàng chục
// - xác định số hàng đơn vị
// - lấy số hàng chục cộng số hàng đơn vị
// Đầu ra:
// - tổng 2 ký số bằng số hàng chục cộng số hàng đơn vị

var soNhap = 14;

var soChuc = Math.floor(soNhap % 100 / 10);
var soDonVi = soNhap % 10;
var soRa = soChuc + soDonVi;

console.log(soChuc);
console.log(soRa);