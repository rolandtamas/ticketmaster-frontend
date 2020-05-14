import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/data/tickets/tickets.service';
import { ITicket } from 'src/app/data/tickets/ticket';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  tickets : ITicket[];

  constructor(private ticketsService: TicketsService,
            private authService: AuthService
    ) { }

  ngOnInit() {
    this.ticketsService.getData(this.authService.decodedToken.unique_name).subscribe(data => { this.tickets = data; })
    
  }

}
