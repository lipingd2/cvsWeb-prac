import { Component } from '@angular/core';
import { BehaviorSubject, Subscription, take } from 'rxjs';
import { UserInfor } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userinfor$!: Subscription
  userinfor!:UserInfor[]
  subs: Subscription[] = [] 
  usrN: number = 8
  
  constructor(private userService: UserService) {
    
  }

  ngOnInit() {
    this.userinfor$ = this.userService.userinfor$.subscribe((data: UserInfor[]) => { 
      this.userinfor = data;
    })
    for (let i = 0; i < this.usrN; i++) {
      this.subs.push(this.userService.getuserinfor().subscribe());
    }

  }

  ngOnDestroy() {
    for (let sub of this.subs) { 
      sub.unsubscribe();
    }
    this.userinfor$.unsubscribe();
  }
}
