import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ContactService } from './contact/contact.service';
import { MatchesService } from './matches/matches.service';
import { BuyticketService } from './buyticket/buyticket.service';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MatchesComponent } from './matches/matches.component';
import { BuyticketComponent } from './buyticket/buyticket.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ContactComponent,
    MatchesComponent,
    BuyticketComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'contact', component: ContactComponent },
      { path: 'matches', component: MatchesComponent },
      { path: 'buyticket/:id/:home/:away/:date', component: BuyticketComponent }
    ])
  ],
  providers: [ContactService, MatchesService, BuyticketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
