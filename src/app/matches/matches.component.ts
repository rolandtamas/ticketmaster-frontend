import { Component, OnInit } from '@angular/core';
import { MatchesService } from './matches.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  public matches: Match[];
  constructor(private matchesService: MatchesService, private router: Router) { }

  ngOnInit() {
    this.matchesService.getData().subscribe(data => { this.matches = data; });
  }

}

interface Match {
  id:string,
  home: string,
  away: string,
  date: string,
  ticketCount:number
}
