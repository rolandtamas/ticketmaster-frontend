import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuyticketService } from './buyticket.service';
<<<<<<< HEAD
import { MatchesService } from '../data/matches/matches.service';
import { IBoughtTicket } from './bought-ticket';
import { CreditCardsService } from '../user-pages/my-credit-cards/credit-cards.service';
import { ICreditCard } from '../data/credit-cards/credit-card';
import { AuthService } from '../_services/auth.service';
import { IUser } from '../data/users/user';
import { UsersService } from '../_services/users.service';
import { AlertifyService } from '../_services/alertify.service';
import {Router} from '@angular/router';

=======
import { MatchesService } from '../matches/matches.service';
>>>>>>> dcd8cd82814da2fab3b4e8f73adbb022b44bc823

@Component({
  selector: 'app-buyticket',
  templateUrl: './buyticket.component.html',
  styleUrls: ['./buyticket.component.css']
})
export class BuyticketComponent implements OnInit {
<<<<<<< HEAD
  selectedCreditCardId:string;
  user: IUser;
=======
>>>>>>> dcd8cd82814da2fab3b4e8f73adbb022b44bc823
  public match_id: string;
  public match_home: string;
  public match_away: string;
  public match_date: string;
  public match_ticketCount: number;
  public boughtTickets: string[] = new Array<string>(5);
<<<<<<< HEAD
  creditCards: ICreditCard[];


=======
>>>>>>> dcd8cd82814da2fab3b4e8f73adbb022b44bc823
  matchid: string;
  firstname: string;
  lastname: string;
  email: string;
  sector: string;
  row: string;
  amount: number;


<<<<<<< HEAD
  constructor(private actRoute: ActivatedRoute, private buyticketservice: BuyticketService, private matchservice: MatchesService,
                  private creditCardsService: CreditCardsService,
                  private authService : AuthService,
                  private usersService: UsersService,
                  private alertify: AlertifyService,
                  private router: Router)

    {
=======
  constructor(private actRoute: ActivatedRoute, private buyticketservice: BuyticketService, private matchservice: MatchesService) {
>>>>>>> dcd8cd82814da2fab3b4e8f73adbb022b44bc823

    this.actRoute.paramMap.subscribe(params => this.match_id = params.get('id'));
    this.actRoute.paramMap.subscribe(params => this.match_home = params.get('home'));
    this.actRoute.paramMap.subscribe(params => this.match_away = params.get('away'));
    this.actRoute.paramMap.subscribe(params => this.match_date = params.get('date'));
    var count;
    this.actRoute.paramMap.subscribe(params => count = params.get('ticketCount'));
    this.match_ticketCount = Number(count);

  }

  ngOnInit() {
    console.log(this.match_ticketCount);
<<<<<<< HEAD
    this.creditCardsService.getData(this.authService.decodedToken.unique_name).subscribe( data => { this.creditCards = data; }
    );

    this.usersService.getData(this.authService.decodedToken.unique_name).subscribe(data => { 
      this.user = data;
      
    });

  }

selectCreditCard(creditCardId:string) : void
{  this.selectedCreditCardId=creditCardId;

  
}

  putData() {
    console.log("Entering Buying Process");
    var data: IBoughtTicket = {
=======
  }

  postData() {
    
    var data: BoughtTicket = {
>>>>>>> dcd8cd82814da2fab3b4e8f73adbb022b44bc823
      matchid: this.match_id,
      home: this.match_home,
      away: this.match_away,
      date: this.match_date,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      sector: this.sector,
      row: this.row,
<<<<<<< HEAD
      amount: this.amount
    };
    if (this.amount > this.match_ticketCount) {
      this.alertify.error("You have selected more tickets than available");
      return;
    }
    if (this.match_ticketCount > 0) {
      this.buyticketservice.putData(data).subscribe( () => {
        this.alertify.success('Ticket bought successfully!');
        this.router.navigate(['/tickets']);
      }, error => {
        this.alertify.error(error);
      });
      
      
    }
  }
}

=======
      amount: this.amount,
    };
    if (this.amount > this.match_ticketCount) {
      alert("Not enough tickets");
    }
    else { this.match_ticketCount -= this.amount; }
    if (this.match_ticketCount > 0) {
      this.buyticketservice.postData(data).subscribe(arg => console.log(arg));
      this.matchservice.putData(this.match_ticketCount).subscribe(arg => console.log(arg));
      alert("Ticket bought successfully");
    }
  }
}
interface BoughtTicket {
  matchid:string,
  home: string,
  away: string,
  date: string,
  firstname: string,
  lastname: string,
  email:string,
  sector: string,
  row: string,
  amount: number
}
>>>>>>> dcd8cd82814da2fab3b4e8f73adbb022b44bc823
