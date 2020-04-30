import { Component, OnInit } from '@angular/core';
import { MatchesService } from './matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  public matches: Match[];
  constructor(private matchesService: MatchesService) { }

  ngOnInit() {
    this.matchesService.getData().subscribe(data => { this.matches = data; })
  }
  

}

interface Match {
  home: string,
  away: string,
  date: string
}
