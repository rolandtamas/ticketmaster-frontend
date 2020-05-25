import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';
import { AuthService } from 'src/app/_services/auth.service';
import { IUser } from 'src/app/data/users/user';
import { TicketsService } from 'src/app/data/tickets/tickets.service';
import { UserDataService } from './user-data.service';
import { CreditCardsService } from '../../my-credit-cards/credit-cards.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [UserDataService]
})
export class SettingsComponent implements OnInit {
  user : IUser;

  constructor(private usersService:UsersService,
            private authService:AuthService,
            private ticketsService:TicketsService,
            private creditCardsService: CreditCardsService,
            private userData : UserDataService
    ) { }

  ngOnInit() {
    this.usersService.getData(this.authService.decodedToken.unique_name).subscribe(data => { 
      this.user = data;
      this.userData.addUser(data);
    });
    this.ticketsService.getData(this.authService.decodedToken.unique_name).subscribe(data => { this.user.tickets = data; });
    this.creditCardsService.getData(this.authService.decodedToken.unique_name).subscribe(data => {this.user.creditCards = data; });
    
    console.log(this.user);
  }

}
