import { Component, OnInit } from '@angular/core';
import { CreditCardsService } from 'src/app/user-pages/my-credit-cards/credit-cards.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.component.html',
  styleUrls: ['./add-credit-card.component.css']
})
export class AddCreditCardComponent implements OnInit {
  model: any = {};

  constructor(private creditCardsService : CreditCardsService,
    private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  addCreditCard()
  {
    this.creditCardsService.add(this.model).subscribe(() => {
      
      
      console.log(this.router.url);
      window.location.reload();
      this.alertify.success('Credit card added successfully');
    }, error => {
      this.alertify.error(error);
    });
  }
  cancel() {
    this.router.navigate(['/settings/creditcards']);
    this.alertify.message('Registration cancelled');
  }

}
