import { Component, Input } from '@angular/core';
import { UserInfor } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent {
@Input() user!:UserInfor

  
}
