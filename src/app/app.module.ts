
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
import { SysteminfoService } from './sharedComponents/osdata/systeminfo.service';
import { DevicelistComponent } from './sharedComponents/devicelist/devicelist.component';
import { DeviceService } from './sharedComponents/devicelist/device.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './commonComponents/login/login.component';
import { LoginService } from './commonComponents/login/login.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    OSDataComponent,
    NavBarComponentComponent,
    MalwareDetectionComponent,
    DevicelistComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule
  ],
  providers: [SysteminfoService, DeviceService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
