import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data.component';
import { MatchesComponent } from './matches/matches.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'matches', component: MatchesComponent }
    ])
  ],

  declarations: [DataComponent,
    MatchesComponent,
  ]
})
export class DataModule { }
