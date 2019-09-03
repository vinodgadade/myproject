import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private router : Router) { }

  urltocall = 'http://localhost:3000/myapp/users';
  
  getUsers(){
    return this.http.get(this.urltocall);
  }

//userdetailurl = 'https://oc5lmdbe1f.execute-api.us-east-2.amazonaws.com/test/userbyid?id=';
userdetailurl = 'https://rfplov09pf.execute-api.us-east-2.amazonaws.com/proxy/global?name=userByid';

private user;
 //get Single users details
 userDetails(userid){
    return this.http.get(this.userdetailurl+'&id='+userid);
 } 

 //To delete user by id
 //deleteurl = 'http://localhost:3000/myapp/deleteById/';
 //deleteurl = 'https://t0xl4ozszf.execute-api.us-east-2.amazonaws.com/test/deletebyid?id='
 deleteurl ='https://rfplov09pf.execute-api.us-east-2.amazonaws.com/proxy/global?name=deleteByid';
 deleteUser(userid){
   return this.http.get(this.deleteurl+'&id='+userid);
 }

 //AuthenticateUser
 
 //authenticationUrl =  "http://localhost:3000/myapp/authenticateUser";
 authenticationUrl =  "https://3cao3z0ydi.execute-api.us-east-2.amazonaws.com/test/authenticate?name=authenticate";
 authenticate(username,password){
  const obj =  {
    'username' : username,
    'password' : password
  }
 // console.log(obj);
   return this.http.post(this.authenticationUrl,obj);
 }

 //add USers
 add_user(firstname,lastname){
    //console.log(firstname+lastname)
    //const addUrl = 'http://localhost:3000/myapp/adduser';
    //const addUrl = 'https://44oa0zmca7.execute-api.us-east-2.amazonaws.com/dev/addnew';
    const addUrl ='https://rfplov09pf.execute-api.us-east-2.amazonaws.com/proxy/global?name=addUser';
    const obj = {
      id        : firstname+1,
      firstname : firstname,
      lastname  : lastname
    }
    return this.http.post(addUrl,obj);
 } 


 //from Server
 //allUSersUrl = 'https://19ra2kd3b5.execute-api.us-east-2.amazonaws.com/Testing';
 allUSersUrl = 'https://rfplov09pf.execute-api.us-east-2.amazonaws.com/proxy/global?name=all_users'       
 usersFromServer(){ 
   return this.http.get(this.allUSersUrl);
 } 

//userDetailsUrl = 'http://localhost:3000/myapp/verify';
userDetailsUrl = 'https://3cao3z0ydi.execute-api.us-east-2.amazonaws.com/test/authenticate?name=verify';

// params = params.append('token',localStorage.getItem('token'))
getUserDetails(){
    var params = new HttpParams().append('token',localStorage.getItem('token'));
    return this.http.get(this.userDetailsUrl,{params : params});
}

isLoggedIn(){
  this.getUserDetails().subscribe((res : any) => {
    this.router.navigate(['/dash']);
  },(err) => {

  });
}
 //register user
 registerUserUrl = 'https://3cao3z0ydi.execute-api.us-east-2.amazonaws.com/test/authenticate?name=register';
 registerUser(formData){
   const registerObj = {
     firstname : formData.firstname,
     lastname : formData.lastname,
     email : formData.email,
     username : formData.username
   }
   return this.http.post(this.registerUserUrl,registerObj);
 }
 
//
 testurl = 'https://rfplov09pf.execute-api.us-east-2.amazonaws.com/proxy/global?name=dsf&city=sdafsd';
 proxyFunction(){
  return this.http.get(this.testurl);
  console.log("dd"); 
 }



}
