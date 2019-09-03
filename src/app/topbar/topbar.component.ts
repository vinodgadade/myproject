import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private router : Router) { }
  activeTab = 'home';

  logOut(){
    localStorage.removeItem('token');
    window.location.href = '/login';
   }

  search(activeTab){
    console.log(activeTab)
    this.activeTab = activeTab;
    this.router.navigate([activeTab]);
  }
  result(activeTab){ 
    this.activeTab = activeTab;
  }
  ngOnInit() {
  }

}
