import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OSDataComponent } from './sharedComponents/osdata/osdata.component';
import { MalwareDetectionComponent } from './sharedComponents/malware-detection/malware-detection.component';
import { DevicelistComponent } from './sharedComponents/devicelist/devicelist.component';
import { LoginComponent } from './commonComponents/login/login.component';
import { NavBarComponentComponent } from './commonComponents/nav-bar-component/nav-bar-component.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'overview',
    component: NavBarComponentComponent,
    children: [
      { path: 'osdata', component: OSDataComponent },
      { path: 'devices', component: DevicelistComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }