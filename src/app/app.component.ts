import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { CardPayment } from './card-payment';

@Component({
  selector: 'payment-form',
  templateUrl: './app.component.html'
})


export class AppComponent {
  title = 'Any title';
  payment: CardPayment  = {
    cardHolderName: 'Shantonav',
    cardNumber:  '1234567891234567',
    expiryMonth: '05',
    expiryYear : 2022,
    cvv: 234

  };
  paymentForm: FormGroup;
  displayMessage: string;

  createFormGroup(){
    return new FormGroup({
      cardHolderName : new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+')]),
      cardNumber : new FormControl('', [Validators.required, Validators.pattern('^[0-9]{16}')]),
      expiryMonth: new FormControl('',[Validators.required, Validators.pattern('^[0-9]{2}')]),
      expiryYear: new FormControl('',[Validators.required, Validators.pattern('^[0-9]{4}')]),
      cvv: new FormControl('',[Validators.required, Validators.pattern('^[0-9]{3}')]),
      formMsg: new FormControl('')
    }) ;
  }
  constructor() {

    /* Declare Reactive Form Group here */
    this.paymentForm = this.createFormGroup();

  }

  revert() {
    this.paymentForm.reset();
  }

  cardHolderName (){
    return this.paymentForm.get('cardHolderName');
  }

  isFieldValid(field: string) {
    return !this.paymentForm.get(field).valid && ( this.paymentForm.get(field).touched || this.paymentForm.get(field).dirty );
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
        control.markAsDirty( { onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  submitForm() {
    console.log(this.paymentForm);
    if (this.paymentForm.valid) {
      console.log('form submitted');
      this.paymentForm.get('formMsg').setValue('Payment successful');
    } else {
      this.paymentForm.get('formMsg').setValue('Payment failed');
      this.validateAllFormFields(this.paymentForm );
    }

  }
}
