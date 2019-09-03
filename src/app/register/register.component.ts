import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {  FormBuilder , FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,private dataservice : DataService) { }
  registerForm;
  message;
  register(formData){
    var result ;
    if(this.registerForm.valid){
        //console.log(formData);
        this.dataservice.registerUser(formData).subscribe((res:any) =>{
          //console.log(res);
          result = res;
          if(result.message == 'inserted'){
            this.message = "User Added";
          }
        })

    }else{
      this.validateAllFormFields(this.registerForm);
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
    this.registerForm = this.formBuilder.group({
      username  : ['', Validators.compose([Validators.required,Validators.minLength(4)])],
      firstname : ['', Validators.compose([Validators.required])],
      lastname : ['', Validators.compose([Validators.required])],
      email : ['', Validators.compose([Validators.required])]
    })
  }

}
