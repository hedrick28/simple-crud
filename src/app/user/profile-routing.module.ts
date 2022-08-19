import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "profile",
    component : ProfileComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
