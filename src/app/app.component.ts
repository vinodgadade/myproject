import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router'
import { slideInAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
}) 
export class AppComponent {
  title = 'First App';
  constructor(private data: DataService,private router : Router) { }

  //initiate route animation
  prepareRoute(outlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}

  currentRoute;
  isLoggedIn : boolean = false;
  ngOnInit(){  
    this.data.getUserDetails().subscribe((res: any) => {
      this.currentRoute = this.router.url;
      if(this.currentRoute == '/'){
        this.currentRoute = '/dash';
      }
      this.router.navigate([this.currentRoute]); 
      this.isLoggedIn = true;
    console.log(this.router.url); 
    },(err) => {
      this.router.navigate(['/login']);
      //window.location.href = '/login'; 
      this.isLoggedIn = false;
    });
  }
}

 