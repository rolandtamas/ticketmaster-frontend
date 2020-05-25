import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';
import { IUser } from 'src/app/data/users/user';
import { ICreditCard } from 'src/app/data/credit-cards/credit-card';

@Component({
  selector: 'app-credit-card-3d',
  templateUrl: './credit-card-3d.html',
  styleUrls: ['./credit-card-3d.css']
})
export class CreditCard3dComponent {
    @Input() creditCardDetails : ICreditCard;
  constructor(private usersService: UsersService,
    ) { }

 
  }

