import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buyticket',
  templateUrl: './buyticket.component.html',
  styleUrls: ['./buyticket.component.css']
})
export class BuyticketComponent implements OnInit {
  public match_id: string;
  constructor(private actRoute: ActivatedRoute) {
   this.actRoute.paramMap.subscribe(params => this.match_id = params.get('id'))
  }

  ngOnInit() {
  }

}
