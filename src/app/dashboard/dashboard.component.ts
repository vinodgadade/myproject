import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';
import { transition, trigger, query, style, animate, group, animateChild } from '@angular/animations';
//import { bounce } from 'ng-animate';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations : [
    trigger('loadwithbounce',[
      transition(':enter', [style({
        transform: 'translateY(-10%)'
      }), animate('1000ms')])
    ])
  ]
})//end of component
export class DashboardComponent implements OnInit {

  constructor(private data : DataService,private router : Router) { }

  mytoken
  logOut(){
   localStorage.removeItem('token');
    //this.ngOnInit();
    //this.router.navigate(['/login']);
    window.location.href = '/login';
  }
   user;
  ngOnInit() {
    this.data.getUserDetails().subscribe((res:any) => {
        console.log(res);
        if(res.tokenData){
          this.user= res.tokenData;
        }else{
          this.router.navigate(['/login']);
        }
    },(err)=>{
      console.log(err);
      this.router.navigate(['/login']);
    });
  }

} 
