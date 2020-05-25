import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/data/tickets/tickets.service';
import { ITicket } from 'src/app/data/tickets/ticket';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  tickets : ITicket[];

  constructor(private ticketsService: TicketsService,
            private authService: AuthService,
            private alertify: AlertifyService
    ) { }

  ngOnInit() {
    this.ticketsService.getData(this.authService.decodedToken.unique_name).subscribe(data => { this.tickets = data; })
    
  }
  cancelBoughtTicket(ticketId : any)
  {
   if(window.confirm('Your Ticket Will Be Cancelled And Removed'))
   {
    this.ticketsService.cancelBoughtTicket(ticketId).subscribe(() => {
      this.alertify.success('Ticket cancelled successfully');
      this.ngOnInit();
  }, error => {
    if(error != 'Object reference not set to an instance of an object')
    this.alertify.error(error);
  }); 
  } else {
    this.alertify.message('Ticket cancelation has been aborted');
  }
  }

}
