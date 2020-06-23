import axios from 'axios';

class ToDoDataService  {
    retriveAllTodos(name){
        return  axios.get(`http://localhost:8080/users/${name}/todos`);
  
      }
    }
    export default  new ToDoDataService();




