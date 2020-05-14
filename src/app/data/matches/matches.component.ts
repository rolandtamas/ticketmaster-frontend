import { Component, OnInit } from '@angular/core';
import { MatchesService } from './matches.service';
import {IMatch} from './match';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  public matches: IMatch[];
  constructor(private matchesService: MatchesService,
    private authService : AuthService,
    private alertify: AlertifyService
    ) { }

  ngOnInit() {
    this.matchesService.getData().subscribe(data => { this.matches = data; })
  }

  goToBuy()
  {
    if(this.authService.loggedIn())
    {
      /* Proceed to the BUY page*/
    }
    else {
      this.alertify.message('You need to be logged in to buy matches');
    }
  }
  

}

