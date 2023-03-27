import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercardComponent } from './usercard/usercard.component';
import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UsersComponent }
];

@NgModule({
  declarations: [
    UsersComponent,
    UsercardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ],
  exports:[UsersComponent,UsercardComponent,RouterModule],
})
export class UsersModule { }
