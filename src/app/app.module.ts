import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';


=======
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ContactService } from './contact/contact.service';
import { MatchesService } from './matches/matches.service';
import { BuyticketService } from './buyticket/buyticket.service';
>>>>>>> dcd8cd82814da2fab3b4e8f73adbb022b44bc823
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error-interceptor.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './routes';
import { MatchesComponent } from './data/matches/matches.component';
import { TicketsComponent } from './user-pages/my-tickets/tickets/tickets.component';
import { SettingsComponent } from './user-pages/settings/settings/settings.component';
import { CreditCardsSettingsComponent } from './user-pages/settings/settings/credit-cards-settings/credit-cards-settings.component';
import { ProfileSettingsComponent } from './user-pages/settings/settings/profile-settings/profile-settings.component';
import { TicketFormComponent } from './user-pages/my-tickets/ticket-form/ticket-form.component';
import { CreditCard3dComponent } from './user-pages/settings/settings/credit-cards-settings/credit-card-3d/credit-card-3d';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCreditCardComponent } from './user-pages/settings/settings/credit-cards-settings/add-credit-card/add-credit-card/add-credit-card.component';
import { NgbdModalFocus, NgbdModalConfirm, NgbdModalConfirmAutofocus, NgbModalConfirmDeleteCreditCard } from './modal-focus/modal-focus.component';
import { BuyticketComponent } from './buyticket/buyticket.component';
import { SelectCreditCardComponent } from './buyticket/select-credit-card/select-credit-card/select-credit-card.component';

=======
import { MatchesComponent } from './matches/matches.component';
import { BuyticketComponent } from './buyticket/buyticket.component';
>>>>>>> dcd8cd82814da2fab3b4e8f73adbb022b44bc823

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ContactComponent,
<<<<<<< HEAD
    RegisterComponent,
    MatchesComponent,
    TicketsComponent,
    TicketFormComponent,
    SettingsComponent,
    ProfileSettingsComponent,
    CreditCardsSettingsComponent,
    
    CreditCard3dComponent,
    AddCreditCardComponent,
    NgbdModalFocus, NgbdModalConfirm, NgbdModalConfirmAutofocus, NgbModalConfirmDeleteCreditCard,
    BuyticketComponent,
    SelectCreditCardComponent

=======
    MatchesComponent,
    BuyticketComponent
>>>>>>> dcd8cd82814da2fab3b4e8f73adbb022b44bc823
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    
    BsDropdownModule.forRoot(),
    NgbModule,

    RouterModule.forRoot(appRoutes, {
      onSameUrlNavigation: 'reload'
    })
  ],
  providers: [AuthService, 
    NgbActiveModal,
    NgbModal,
    ErrorInterceptorProvider

  ],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalConfirm, NgbdModalConfirmAutofocus,NgbModalConfirmDeleteCreditCard]
=======
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'contact', component: ContactComponent },
      { path: 'matches', component: MatchesComponent },
      { path: 'buyticket/:id/:home/:away/:date/:ticketCount', component: BuyticketComponent }
    ])
  ],
  providers: [ContactService, MatchesService, BuyticketService],
  bootstrap: [AppComponent]
>>>>>>> dcd8cd82814da2fab3b4e8f73adbb022b44bc823
})
export class AppModule { }
