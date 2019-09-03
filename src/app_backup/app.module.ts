import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EdituserComponent } from './edituser/edituser.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BulkUploadComponent } from './bulk-upload/bulk-upload.component';
import { FirstanimationComponent } from './firstanimation/firstanimation.component';
//animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { MaterialangularComponent } from './materialangular/materialangular.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { VideoComponent } from './video/video.component';
import { EmbedVideo } from 'ngx-embed-video';

//import {AppBootstrapModule} from '../../node_modules/bootstrap/app-bootstrap.module';

const myRoutes : Routes = [
  {
    path : 'users',
    component : SecondCompComponent  
  },
  { 
    path : 'edituser/:id', 
    component : EdituserComponent
  }, 
  {
    path : 'addUser',
    component : AddUserComponent,
    data : {animation: 'addUser'}
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'dash',
    component : DashboardComponent,
    data: {animation: 'dash'}
  },
  {
    path : 'bulkUpload',
    component : BulkUploadComponent
  },
  {
    path : 'firstanimation',
    component : FirstanimationComponent,
    data: {animation: 'Firstanimate'}
  },
  {
    path : 'upload',
    component : AngularFormComponent
  },
  {
    path : 'material',
    component : MaterialangularComponent
  },
  {
    path : 'video',
    component : VideoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondCompComponent,
    EdituserComponent,
    AddUserComponent,
    TopbarComponent,
    SideBarComponent,
    LoginComponent,
    DashboardComponent,
    BulkUploadComponent,
    FirstanimationComponent,
    AngularFormComponent,
    MaterialangularComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    EmbedVideo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
