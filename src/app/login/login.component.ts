import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';
import { FormBuilder , FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,private data : DataService,private router : Router) { }
  verified : boolean = false;
  message;
  login(username,password){
    
    this.data.authenticate(username,password).subscribe((res:any) => {
      console.log(res);
      var recievedToken = res.token;
      if(recievedToken){
        this.verified = true;
        localStorage.setItem('token',recievedToken.toString(recievedToken));
      }else{
        this.verified = false;
        this.message = res.message;
      }
    },(err)=>{
      console.log(err.error.message);
        //console.log(res);
        this.verified = false;
        this.message = err.error.message;
    }).add(() => {
      if(this.verified){
        //this.router.navigate(['/dash']);
        //this.router.navigate(['/dash'], {skipLocationChange: true})
        window.location.href = '/dash';
      }
    })
  }

  loginForm;

  loginUser(formdata){
    if(this.loginForm.valid){
     // console.log(formdata)
     this.login(formdata.username,formdata.password);
    }else{
      this.validateAllFormFields(this.loginForm); 
    }
  }

  validateAllFormFields(formGroup: FormGroup) {        
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);           
      if (control instanceof FormControl) {           
        control.markAsTouched({ onlySelf: true });    
      } else if (control instanceof FormGroup) {      
        this.validateAllFormFields(control);          
      }
    });
  }


  ngOnInit() {
    this.data.isLoggedIn();
    this.loginForm = this.formBuilder.group({
      username  : ['',Validators.compose([Validators.required,Validators.maxLength(6),Validators.minLength(3)])],
      password : ['',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(1)])]
    });
  }

}
