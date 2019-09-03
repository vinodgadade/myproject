import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpParams,HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  successMsg : boolean = false;
  title = "Edit USer";
  constructor(private data:DataService, private route: ActivatedRoute,private router : Router, private http : HttpClient) { }

 //update user
 updateUser(firstname,lastname){
    //console.log(firstname);
   this.route.params.subscribe((params)=>{
   const userid = params['id'];
   //const uri = 'http://localhost:3000/myapp/updateUser';
   const uri = 'https://rfplov09pf.execute-api.us-east-2.amazonaws.com/proxy/global?name=updateUser';

    const obj = {
      id : userid,
      firstname: firstname,
      lastname: lastname
    }
   // const options = new HttpHeaders();
    //options.append('content-type','application/x-www-form-urlencoded');

    return this.http.post(uri,obj).subscribe((res: any)=>{
      console.log(res.status);
       if(res.status == 'true'){
          this.successMsg = true;
          this.ngOnInit();
       }
    });
   }); 
 }
 
 user;
 apidata;
 ngOnInit() {
    this.route.params.subscribe(params => {
      //console.log(params['id']);
      let firstname = '';
      let lastname = '';
      let id = '';
      this.data.userDetails(params['id']).subscribe((res)=>{ //user details return in data.service.ts
        this.apidata = res;
        //console.log(res);
        this.user = JSON.parse(this.apidata.finaldata);
        console.log(this.user);
      });
    });
  }

}
