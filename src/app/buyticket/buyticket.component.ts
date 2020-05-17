import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuyticketService } from './buyticket.service';

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
  public boughtTickets: string[] = new Array<string>(5);
  matchid: string;
  firstname: string;
  lastname: string;
  email: string;
  sector: string;
  row: string;
  amount: number;


  constructor(private actRoute: ActivatedRoute, private buyticketservice: BuyticketService) {

    this.actRoute.paramMap.subscribe(params => this.match_id = params.get('id'));
    this.actRoute.paramMap.subscribe(params => this.match_home = params.get('home'));
    this.actRoute.paramMap.subscribe(params => this.match_away = params.get('away'));
    this.actRoute.paramMap.subscribe(params => this.match_date = params.get('date'));

  }

  ngOnInit() {
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
    
    this.buyticketservice.postData(data).subscribe(arg => console.log(arg));

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
