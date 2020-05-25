import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';
import { CreditCardsService } from 'src/app/user-pages/my-credit-cards/credit-cards.service';
import { AuthService } from 'src/app/_services/auth.service';
import { IUser } from 'src/app/data/users/user';
import { ICreditCard } from 'src/app/data/credit-cards/credit-card';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalConfirmDeleteCreditCard } from 'src/app/modal-focus/modal-focus.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-credit-cards-settings',
  templateUrl: './credit-cards-settings.component.html',
  styleUrls: ['./credit-cards-settings.component.css']
})
export class CreditCardsSettingsComponent implements OnInit {
  user: IUser;
  creditCard3dToggle = false;
  buttonText : string;
  model : any;
  constructor(private usersService: UsersService,
    private creditCardsService: CreditCardsService,
    private authService: AuthService,
    private alertify: AlertifyService,
    private modalService: NgbModal,
    private route : ActivatedRoute,
    private router : Router
    ) { }

  ngOnInit() {
    this.buttonText = 'Details';
    this.usersService.getData(this.authService.decodedToken.unique_name).subscribe(data => { 
      this.user = data; 
    });
    this.creditCardsService.getData(this.authService.decodedToken.unique_name).subscribe(data => {this.user.creditCards = data; });
  }

  openCreditCard3d()
  {
    this.creditCard3dToggle = !this.creditCard3dToggle;
    if(this.creditCard3dToggle == true)
    {
      this.buttonText = "Close";
    }
    else
    {
      this.buttonText = 'Details';
    }
  }

  removeCreditCardModal(creditCardId: string)
  {
    
    console.log('states: '+this.route.snapshot.url); // array of states
    console.log('path '+ this.route.snapshot.url[0].path); 
    this.modalService.open(NgbModalConfirmDeleteCreditCard);
  } 
  removeCreditCard(creditCardId : any)
  {
   if(window.confirm('Your Credit Card Will Be Removed'))
   {
    this.creditCardsService.remove(creditCardId).subscribe(() => {
      this.alertify.success('Credit card removed successfully');
      console.log(this.router.url);
      this.router.navigateByUrl(this.router.url);
      /*Re-fetching data*/
      this.usersService.getData(this.authService.decodedToken.unique_name).subscribe(data => { 
        this.user = data; 
      });
      this.creditCardsService.getData(this.authService.decodedToken.unique_name).subscribe(data => {this.user.creditCards = data; });

  }, error => {
    if(error != 'Object reference not set to an instance of an object')
    this.alertify.error(error);
  }); 
  
  } else {
    this.alertify.message('Credit card removal Canceled');
  }
  }

  addCreditCard()
  {
    this.creditCardsService.add(this.model).subscribe(() => {
      this.alertify.success('Credit card added successfully');
      location.reload();
    }, error => {
      this.alertify.error(error);
    });
  }
  navigateToAddCreditCard()
  {
    this.router.navigate(['/settings/addcreditcard']);
  }
}
