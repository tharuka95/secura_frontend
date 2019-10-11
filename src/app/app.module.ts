
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OSDataComponent } from './sharedComponents/osdata/osdata.component';
import { NavBarComponentComponent } from './commonComponents/nav-bar-component/nav-bar-component.component';
import { AppRoutingModule } from './app-routing.module';
import { MalwareDetectionComponent } from './sharedComponents/malware-detection/malware-detection.component';
import { FileUploadService } from './sharedComponents/malware-detection/file-upload.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    OSDataComponent,
    NavBarComponentComponent,
    MalwareDetectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
    