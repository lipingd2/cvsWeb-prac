import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ContactusComponent }
];

@NgModule({
  declarations: [ContactusComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ContactusModule { }
