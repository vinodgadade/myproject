import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators  } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit {
  form1;

  constructor(private formBuilder : FormBuilder,private http:HttpClient) {}

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

  saveData(formdata){
    if(this.form1.valid){
      console.log(formdata)
    }else{
      this.validateAllFormFields(this.form1); //{7}
    }
  }

  ngOnInit() {
    this.form1 = this.formBuilder.group({
      username  : ['',Validators.compose([Validators.required,Validators.maxLength(6),Validators.minLength(3)])],
      firstname : ['',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(1)])]
    });
  }

}
