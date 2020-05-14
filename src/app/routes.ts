import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatchesComponent } from './data/matches/matches.component';
import { TicketsComponent } from './user-pages/my-tickets/tickets/tickets.component';
import { SettingsComponent } from './user-pages/settings/settings/settings.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './_guards/auth.guard';
import { ProfileSettingsComponent } from './user-pages/settings/settings/profile-settings/profile-settings.component';
import { CreditCardsSettingsComponent } from './user-pages/settings/settings/credit-cards-settings/credit-cards-settings.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'matches', component: MatchesComponent},
    {path: 'contact', component: ContactComponent},
    {path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        {path: 'tickets', component: TicketsComponent},
        {path: 'settings', component: SettingsComponent,
        children: [
            {path: '', redirectTo: 'settings', pathMatch: 'full'},
            {path:'profile', component: ProfileSettingsComponent},
            {path: 'creditcards', component: CreditCardsSettingsComponent}
            ]
        }
    ]
    },
    
    
    
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];