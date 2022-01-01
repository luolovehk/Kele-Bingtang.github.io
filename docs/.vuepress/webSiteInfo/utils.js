// 日期格式化(只获取年月日)
export function dateFormat (date) {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }
  return `${date.getUTCFullYear()}-${zero(date.getUTCMonth() + 1)}-${zero(date.getUTCDate())}`
}

// 小于10补0
export function zero (d) {
  return d.toString().padStart(2, '0')
}

/**
 * 获取两个日期相差多少天
 * @param {*} lowDate 旧日期
 * @param {*} upDate  新日期
 * @returns 相差多少天
 */
 export function getDay (lowDate, upDate) {
  if(!upDate) {
    upDate = lowDate;
    lowDate = new Date();
  }
  lowDate = dateFormat(lowDate);
  upDate = dateFormat(upDate);
  return parseInt(Math.abs(new Date(lowDate) - new Date(upDate)) / (1000 * 60 * 60 * 24));
}