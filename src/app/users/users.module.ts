import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercardComponent } from './usercard/usercard.component';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [
    UsersComponent,
    UsercardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[UsersComponent,UsercardComponent],
})
export class UsersModule { }
