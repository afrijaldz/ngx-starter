import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../lib/modules/shared.module';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: '**', redirectTo: '' },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    MainComponent,
    NavigationComponent,
  ],
})
export class MainModule { }
