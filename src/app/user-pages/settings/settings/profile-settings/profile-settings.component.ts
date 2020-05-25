import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { IUser } from 'src/app/data/users/user';
import { UsersService } from 'src/app/_services/users.service';
import { UserDataService } from '../user-data.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { TicketsService } from 'src/app/data/tickets/tickets.service';
import { CreditCardsService } from 'src/app/user-pages/my-credit-cards/credit-cards.service';


@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css'],
})
export class ProfileSettingsComponent implements OnInit {
  model : any;
  user : IUser;
  subscription : Subscription;
  constructor(private userDataService : UserDataService,
    private usersService: UsersService,
    private authService: AuthService,
    private alertify: AlertifyService,
    private ticketsService: TicketsService,
    private creditCardsService : CreditCardsService) {
    
    
    
   }

  updateProfile()
  {
    this.usersService.updateData(this.model, this.authService.decodedToken.unique_name).subscribe(() => {
      this.alertify.success('Profile updated successfully'); 
    }, error => {
      this.alertify.error(error);
    });
  }

  ngOnInit() {
    this.usersService.getData(this.authService.decodedToken.unique_name).subscribe(data => { 
      this.user = data; this.model= data; console.log('our model is : ' + this.model.creditCards[0]);
    });
    this.ticketsService.getData(this.authService.decodedToken.unique_name).subscribe(data => { this.user.tickets = data; });
    this.creditCardsService.getData(this.authService.decodedToken.unique_name).subscribe(data => {this.user.creditCards = data; });
    
  }

}
