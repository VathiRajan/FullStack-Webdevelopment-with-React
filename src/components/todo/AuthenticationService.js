

class AuthenticationService{
registerSuccessfullLogin(username,password){
    sessionStorage.setItem('authenticatedUser', username);
    console.log("UserLoggedin");
}
logout(username,password){
    sessionStorage.removeItem('authenticatedUser');
    console.log("UserLoggedout");
}
userLoggedIn(){
let user= sessionStorage.getItem('authenticatedUser');

if( user===null) return false;
return true;

}
getUserLoggedUser(){
    let user= sessionStorage.getItem('authenticatedUser');
    
    if( user===null) return '';
    return user;
    
    }

} 
export default new AuthenticationService();