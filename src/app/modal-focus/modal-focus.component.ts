import {Component, Type, Output, EventEmitter} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreditCardsService } from '../user-pages/my-credit-cards/credit-cards.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'ngbd-modal-confirm',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Profile deletion</h4>
    <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to delete <span class="text-primary">"John Doe"</span> profile?</strong></p>
    <p>All information associated to this user profile will be permanently deleted.
    <span class="text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
  </div>
  `
})
export class NgbdModalConfirm {
  constructor(public modal: NgbActiveModal) {}
}

@Component({
  selector: 'ngbd-modal-confirm-autofocus',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Profile deletion</h4>
    <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to delete <span class="text-primary">"John Doe"</span> profile?</strong></p>
    <p>All information associated to this user profile will be permanently deleted.
    <span class="text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" ngbAutofocus class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
  </div>
  `
})
export class NgbdModalConfirmAutofocus {
  constructor(public modal: NgbActiveModal) {}
}

@Component({
  selector: 'ngbd-modal-confirm-delete-credit-card',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Credit card removal</h4>
    <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to remove this credit card from your account? </strong></p>
    <p>All information associated to this credit card will be permanently deleted.
    <span class="text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="OnClickCancel()">Cancel</button>
    <button type="button" ngbAutofocus class="btn btn-danger" (click)="OnClickRemove()">Ok</button>
  </div>
  `
})
export class NgbModalConfirmDeleteCreditCard{
  @Output() valueFromOnClickRemove = new EventEmitter();
  id : string = "";
  constructor(public modal: NgbActiveModal,
    private creditCardsService: CreditCardsService,
    private route: ActivatedRoute,
    private router: Router,
    private alertify:AlertifyService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('This is the route: ' + this.route.snapshot.url);
  }

  OnClickCancel()
  {
    this.modal.dismiss();
    
    this.router.navigate(['/settings/creditcards']);
  }

  OnClickRemove()
  {
    
    let id = this.route.snapshot.paramMap.get('id');


    console.log('Reading the id of the cc: ' + id);
    
    
    
    this.creditCardsService.remove(id).subscribe(() => {
      this.alertify.success('Credit card removed successfully');
  }, error => {
    this.alertify.error(error);
  });
  this.router.navigate(['/settings/creditcards']);
  this.modal.close();

  }
}

const MODALS: {[name: string]: Type<any>} = {
  focusFirst: NgbdModalConfirm,
  autofocus: NgbdModalConfirmAutofocus,
  deleteCreditCard: NgbModalConfirmDeleteCreditCard,
};

@Component({
  selector: 'ngbd-modal-focus',
  templateUrl: './modal-focus.component.html'
})
export class NgbdModalFocus {
  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;

  constructor(private _modalService: NgbModal) {}

  open(name: string) {
    this._modalService.open(MODALS[name]);
  }
}
