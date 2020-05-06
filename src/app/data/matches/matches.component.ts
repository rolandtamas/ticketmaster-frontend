import { Component, OnInit } from '@angular/core';
import { MatchesService } from './matches.service';
import {IMatch} from './match';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  public matches: IMatch[];
  constructor(private matchesService: MatchesService) { }

  ngOnInit() {
    this.matchesService.getData().subscribe(data => { this.matches = data; })
  }
  

}

