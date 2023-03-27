import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'userlist', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'contact', loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule) },
  {path: '', redirectTo: 'userlist', pathMatch: 'full'},

];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
