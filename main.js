
// Bài 1
/**
 * Đầu vào:
 *  + Lương 1 ngày
 *  + Số ngày làm
 */
var luongNgay = 100000;
var soNgayLam = 30;

/**
 * Xử lý:
 *  + Tiền lương = Lương 1 ngày * Số ngày làm
 */
var tienLuong = luongNgay * soNgayLam;

/**
 * Đầu ra:
 *  + in ra tiền lương
 *  */
console.log("Tiền lương: " + tienLuong);
//////////////////////////////////////////////

// Bài 2
/**
 * Đầu vào:
 *  + số thứ 1
 *  + số thứ 2
 *  + số thứ 3
 *  + số thứ 4
 *  + số thứ 5
 */
var soThu1 = 10;
var soThu2 = 8;
var soThu3 = 9;
var soThu4 = 5;
var soThu5 = 3;

/**
* Xử lý:
*  + Tổng 5 số = soThu1 + soThu2 + soThu3 + soThu4 + soThu5
*  + Giá trị trung bình = Tổng 5 số / 5
*/
var tong5so = soThu1 + soThu2 + soThu3 + soThu4 + soThu5;
var giaTriTrungBinh = tong5so / 5;

/**
* Đầu ra:
*  + Giá trị trung bình
*  */
console.log("Giá trị trung bình: " + giaTriTrungBinh);
//////////////////////////////////////////////

// Bài 3
/**
 * Đầu vào:
 *  + Giá USD
 *  + Số tiền USD
 */
var giaUSD = 23500;
var soTienUSD = 5;

/**
* Xử lý:
*  + Số tiền sau quy đổi = giaUSD * soTienUSD
*/
var soTienQuyDoi = giaUSD * soTienUSD;
var currentFormat = new Intl.NumberFormat("vn-VN");
/**
* Đầu ra:
*  + Số tiền sau quy đổi
*  */
console.log("Tiền của bạn là: " + currentFormat.format(soTienQuyDoi) + "VND");
//////////////////////////////////////////////

// Bài 4
/**
 * Đầu vào:
 *  + chiều dài
 *  + chiều rộng
 */
var chieuDai = 23;
var chieuRong = 50;

/**
* Xử lý:
*  + Chu vi = (chieuDai + chieuRong) * 2
*  + Diện tích = chieuDai * chieuRong
*/
var chuVi = (chieuDai + chieuRong) * 2;
var dienTich = chieuDai * chieuRong;

/**
* Đầu ra:
*  + Số tiền sau quy đổi
*  */
console.log("Chu vi: " + chuVi);
console.log("Diện tích: " + dienTich);
//////////////////////////////////////////////

// Bài 5
/**
 * Đầu vào:
 *  + Số 2 chữ số
 */
var so = 29;

/**
* Xử lý:
*  + số hàng chục = so / 10;
*  + số hàng đơn vị = so % 10;
*  + Tổng 2 ký số = số hàng chục + số hàng đơn vị;
*/
var soHangChuc = Math.floor(so / 10);
var soHangDv = Math.floor(so % 10);
var tong2Kyso = soHangChuc + soHangDv;

/**
* Đầu ra:
*  + Tổng 2 ký số
*  */
console.log("Tổng 2 ký số " + tong2Kyso);
//////////////////////////////////////////////