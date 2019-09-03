import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-second-comp', 
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})

export class SecondCompComponent implements OnInit {

  constructor(private data : DataService) { }

  users;
  ngOnInit() {
    var Items = '';
    this.data.usersFromServer().subscribe((res)=>{
      this.users = res;
      console.log(this.users);
    });

    this.data.proxyFunction().subscribe((res)=> {
    //  console.log(res);
     // console.log("dd dsf");
    })
  }

}
