import axios from 'axios'

class HelloWorldService   {
    executeHello(){
      return  axios.get(`http://localhost:8080/hello`);

    }
    
}
 
export default new HelloWorldService();