import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuyticketService } from './buyticket.service';
import { MatchesService } from '../matches/matches.service';

@Component({
  selector: 'app-buyticket',
  templateUrl: './buyticket.component.html',
  styleUrls: ['./buyticket.component.css']
})
export class BuyticketComponent implements OnInit {
  public match_id: string;
  public match_home: string;
  public match_away: string;
  public match_date: string;
  public match_ticketCount: number;
  public boughtTickets: string[] = new Array<string>(5);
  matchid: string;
  firstname: string;
  lastname: string;
  email: string;
  sector: string;
  row: string;
  amount: number;


  constructor(private actRoute: ActivatedRoute, private buyticketservice: BuyticketService, private matchservice: MatchesService) {

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
  }

  postData() {
    
    var data: BoughtTicket = {
      matchid: this.match_id,
      home: this.match_home,
      away: this.match_away,
      date: this.match_date,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      sector: this.sector,
      row: this.row,
      amount: this.amount,
    };
    if (this.amount > this.match_ticketCount) {
      alert("Not enough tickets");
    }
    else { this.match_ticketCount -= this.amount; }
    if (this.match_ticketCount > 0) {
      this.buyticketservice.postData(data).subscribe(arg => console.log(arg));
      this.matchservice.putData(this.match_ticketCount).subscribe(arg => console.log(arg));
      
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
