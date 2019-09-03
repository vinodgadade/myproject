import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { HttpParams } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit { 

  successMsg : boolean = false;
  constructor(private route:ActivatedRoute,private router : Router,private data: DataService) { }
  
  //add user
  addUser(firstname,lastname){
    if(firstname != "" && lastname != ""){
      this.data.add_user(firstname,lastname).subscribe((res:any) =>{
        //console.log(res);
        if(res.status == 'true'){
         this.successMsg = true;
         this.ngOnInit();
        }
    })
     
    }else{
      alert("Please provide inputs first");
    }
  }
  //delete user
  deleteUser(userid){
    this.data.deleteUser(userid).subscribe((res:any)=>{
      console.log(res);
       if(res.status == 'true'){
        alert('deleted');
        this.ngOnInit();
       }
    });
  }

  users;
  private apidata;
  private activetab;
  x;y;
  ngOnInit() {
    this.activetab = '/addUser';
    this.data.usersFromServer().subscribe((res)=>{
      this.apidata = res;
      this.x = "";
      this.y = "";
      this.users = JSON.parse(this.apidata.finaldata);
      //console.log(JSON.parse(this.users)); 
    }) 
  }


}
