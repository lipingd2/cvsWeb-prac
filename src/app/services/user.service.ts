import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfor, UserJson } from '../interfaces/user';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userinfor$ = new BehaviorSubject<UserInfor[]>([])
  userinfor:UserInfor[] = []

  constructor(private http: HttpClient) { }

  getuserinfor() {
    const url: string = "https://randomuser.me/api" 
    return this.http.get<any>(url).pipe(  
      map((data: UserJson) => data.results),
      map((data: UserInfor[]) => 
        data.map((user: UserInfor) => ({
          name: user.name,
          email: user.email,
          picture: user.picture
        }))
      ),
      tap((data: any) => { 
        this.userinfor = [...this.userinfor,data[0]]
        this.userinfor$.next(this.userinfor)
        console.log(this.userinfor)
      }),
    );
  }
}
