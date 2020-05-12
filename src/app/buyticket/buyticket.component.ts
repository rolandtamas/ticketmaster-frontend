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
  public boughtTickets: BoughtTicket[] = new Array<BoughtTicket>(5);
  firstname: string;
  lastname: string;
  email: string;
  sector: string;
  row: number;
  amount: number;
  seats: number[];


  constructor(private actRoute: ActivatedRoute, private buyticketservice: BuyticketService) {
    this.actRoute.paramMap.subscribe(params => this.match_id = params.get('id'));
    this.actRoute.paramMap.subscribe(params => this.match_home = params.get('home'));
    this.actRoute.paramMap.subscribe(params => this.match_away = params.get('away'));
    this.actRoute.paramMap.subscribe(params => this.match_date = params.get('date'));
  }

  ngOnInit() {
  }

  postData() {

    this.boughtTickets[0].id = this.match_id
    this.boughtTickets[0].home = this.match_home;
    this.boughtTickets[0].away = this.match_away;
    this.boughtTickets[0].date = this.match_date;
    this.boughtTickets[0].firstname = this.firstname;
    this.boughtTickets[0].lastname = this.lastname;
    this.boughtTickets[0].email = this.email;
    this.boughtTickets[0].sector = this.sector;
    this.boughtTickets[0].row = this.row;
    this.boughtTickets[0].seats.forEach(seat => this.seats); //

    this.buyticketservice.postData(this.boughtTickets[0]).subscribe(arg => console.log(arg));


  }

}

interface BoughtTicket {
  id: string,
  home: string,
  away: string,
  date: string,
  firstname: string,
  lastname: string,
  email:string,
  sector: string,
  row: number,
  amount: number,
  seats: number[],
}
