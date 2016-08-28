$(function () {
  Array.prototype.has = function (x) {
    for (var i = this.length; i--;) {
      if (this[i] == x) {
        return true
      }
    }
  }
  var date = new Date();
  var y = date.getFullYear(), m = date.getMonth() + 1, arr = [1, 3, 5, 7, 8, 10, 12], arr1 = [4, 6, 9, 11], arr2 = [2];
  $(".year").eq(0).html(checkmonth(y,m).year+"年"+checkmonth(y,m).month+"月");
  $(".year").eq(1).html(checkmonth(y,m+1).year+"年"+checkmonth(y,m+1).month+"月");
  $(".year").eq(2).html(checkmonth(y,m+2).year+"年"+checkmonth(y,m+2).month+"月")
  function checkday(m){
    var daynum
    if (arr.has(m)) {
      daynum = 31
    } else if (arr1.has(m)) {
      daynum = 30
    } else {
      daynum = 29
    }
    return daynum;
  }
  function checkmonth (y, m) {
    if (m > 12) {
      m = m - 12;
      y = y + 1;
    } else if (m == 0) {
      m = 1;
    }
    return {year: y, month: m}
  };
  function appendgrid (obj, y, m) {
    var riqi = new Date(y, m - 1, 1);
    var dyt = riqi.getDay();
    for(var i = 1 - dyt; i <= checkday(m); i++){
      if (i < 1 || i > checkday(m)) {
        $(obj).append("<div class='item'></div>")
      } else {
        riqi.setDate(i);
        var weekday = riqi.getDay()
        if (weekday == 0 || weekday == 6) {
          $(obj).append("<div class='item weekend'>" + i + "</div>")
        } else {
          $(obj).append("<div class='item'>" + i + "</div>")
        }
      }
  }}
  appendgrid("#first", checkmonth(y, m).year, checkmonth(y, m).month);
  appendgrid("#second", checkmonth(y, m + 1).year, checkmonth(y, m + 1).month);
  appendgrid("#third", checkmonth(y, m + 2).year, checkmonth(y, m + 2).month);
  function checktoday(obj){
    var len = $(obj).children().length;
    for (var i = len; i--;){
      if ($(obj).children().eq(i).html() == new Date().getDate()) {
        $(obj).children().eq(i).html("今天")
      } else if ($(obj).children().eq(i).html() == new Date().getDate() + 1) {
        $(obj).children().eq(i).html("明天")
      } else if ($(obj).children().eq(i).html()==new Date().getDate() + 2) {
        $(obj).children().eq(i).html("后天")
      } else if ($(obj).children().eq(i).html() < new Date().getDate()) {
        $(obj).children().eq(i).addClass("before")
      }
    }
  }
  checktoday("#first");
})