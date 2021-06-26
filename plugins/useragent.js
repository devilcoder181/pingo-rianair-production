const userDevices = {
    name: 'Test',
    agent() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            return false
          }else{
            return true
          }
    }
  }
 export default ({app}, inject) => {
     inject('userAgent',userDevices)
 };