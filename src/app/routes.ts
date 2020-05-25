import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatchesComponent } from './data/matches/matches.component';
import { TicketsComponent } from './user-pages/my-tickets/tickets/tickets.component';
import { SettingsComponent } from './user-pages/settings/settings/settings.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './_guards/auth.guard';
import { ProfileSettingsComponent } from './user-pages/settings/settings/profile-settings/profile-settings.component';
import { CreditCardsSettingsComponent } from './user-pages/settings/settings/credit-cards-settings/credit-cards-settings.component';
import { TicketFormComponent } from './user-pages/my-tickets/ticket-form/ticket-form.component';
import { AddCreditCardComponent } from './user-pages/settings/settings/credit-cards-settings/add-credit-card/add-credit-card/add-credit-card.component';
import { BuyticketComponent } from './buyticket/buyticket.component';


export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'matches', component: MatchesComponent},
    {path: 'buyticket/:id/:home/:away/:date/:ticketCount', component: BuyticketComponent},
    {path: 'contact', component: ContactComponent},
    {path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        {path: 'tickets', component: TicketsComponent,
        children: [
            {path: '', redirectTo: 'tickets', pathMatch: 'full'},
            {path: 'ticket-form', component: TicketFormComponent}
        ]
        },
        {path: 'settings', component: SettingsComponent,
        children: [
            {path: '', redirectTo: 'settings', pathMatch: 'full'},
            {path:'profile', component: ProfileSettingsComponent},
            {path: 'creditcards', component: CreditCardsSettingsComponent},
            {path: 'creditcards/:id', component: CreditCardsSettingsComponent},
            {path: 'addcreditcard', component: AddCreditCardComponent},
            {path: 'tickets', component: TicketsComponent,
            children: [
                {path: '', redirectTo: 'tickets', pathMatch: 'full'},
                {path: 'ticket-form', component: TicketFormComponent}
            ]
            }
            ]
        }
    ]
    },
    
    
    
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];