import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'user', component: UserComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [UserComponent]
})
export class MasterModule { }
