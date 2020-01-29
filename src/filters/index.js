/**
 * 获取指定时间距离此刻时间
 * @param {*} date 时间
 */
const getDateDiff = (date) => {
  // 判断是日期对象还是毫秒数
  let newDate = typeof date === 'object' ? date : new Date(date)
  let dateStr = newDate.getTime()
  let now = Date.now() // 获取当前时间
  let diff = now - dateStr

  let res = ''

  switch (true) {
    case (diff < 6000):
      res = '刚刚'
      break
    case (diff < 1000 * 3600):
      res = Math.floor(diff / 60000) + '分钟前'
      break
    case (diff < 6000 * 3600 * 24):
      res = Math.floor(diff / (1000 * 3600)) + '小时前'
      break
    default:
      res = Math.floor(diff / (1000 * 3600 * 24)) + '天前'
      break
  }
  return res;
}


const getFullYear = (date) => new Date(date).getFullYear()

const getMonth = (date) => new Date(date).getMonth() + 1

const getDate = (date) => new Date(date).getDate()

export default {
  getDateDiff,
  getFullYear,
  getMonth,
  getDate
}