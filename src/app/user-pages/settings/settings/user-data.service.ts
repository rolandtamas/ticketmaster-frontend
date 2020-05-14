import { Injectable } from '@angular/core';
import { IUser } from 'src/app/data/users/user';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class UserDataService {
private userSource = new Subject<IUser>();

constructor() { }

get user$()
{
  return this.userSource.asObservable();
}

  addUser(data:IUser)
{
  this.userSource.next(data);
  console.log('We Added the '+ data);
}
}
