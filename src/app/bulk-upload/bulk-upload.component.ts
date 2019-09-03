import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators  } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-bulk-upload',
  templateUrl: './bulk-upload.component.html',
  styleUrls: ['./bulk-upload.component.css']
})
export class BulkUploadComponent implements OnInit {

  form1;
  constructor(private formBuilder : FormBuilder,private http:HttpClient) {
    this.form1 = this.formBuilder.group({
      myfile: ''
    });

  }
  private fileToUpload;
  private formData;
  postMethod(files: FileList) {
    this.fileToUpload = files.item(0); 
    this.formData = new FormData(); 
    this.formData.append('file', this.fileToUpload, this.fileToUpload.name);
  }

  private response;
  Message ;
  SaveForm(formData){ 
    var apitoCall = 'http://localhost:3000/myapp/uploadUsers';
    //var apitoCall ='http://localhost:8000/upload';
    this.http.post(apitoCall, this.formData).subscribe((res) => {
      this.response = res;
      if(this.response.status == 'Success'){
        this.Message = "Uploaded";
      }
    },(err)=>{
      this.Message == "Failed";
    });
  }
  ngOnInit() {
  }

}
