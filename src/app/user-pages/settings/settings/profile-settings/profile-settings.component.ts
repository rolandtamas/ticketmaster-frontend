import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/data/users/user';
import { UsersService } from 'src/app/_services/users.service';
import { UserDataService } from '../user-data.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css'],
})
export class ProfileSettingsComponent implements OnInit {
  user : IUser;
  subscription : Subscription;
  constructor(private userDataService : UserDataService,
    private usersService: UsersService,
    private authService: AuthService) {
    userDataService.user$.subscribe(u => {this.user = u;
    console.log(u);
  });
    
      
    
    
   }

  ngOnInit() {
    this.usersService.getData(this.authService.decodedToken.unique_name).subscribe(data => this.user=data);
    
  }

}
