import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OSDataComponent } from './sharedComponents/osdata/osdata.component';

const routes: Routes = [
  { path: '', component: OSDataComponent },
  { path: 'overview', component: OSDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }