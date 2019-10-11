import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OSDataComponent } from './sharedComponents/osdata/osdata.component';
import { MalwareDetectionComponent } from './sharedComponents/malware-detection/malware-detection.component';


const routes: Routes = [
  { path: '', component: OSDataComponent },
  { path: 'overview', component: OSDataComponent },
  { path: 'scan', component: MalwareDetectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }