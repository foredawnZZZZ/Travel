let oldCity = '北京'
try {
  if (localStorage) {
    oldCity = localStorage.getItem('city')
    console.log(oldCity)
  }
} catch (e) {}
export default {
  city: oldCity
}
