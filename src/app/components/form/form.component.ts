import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
   selector: 'app-form',
   templateUrl: './form.component.html',
   styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

   notificationForm: boolean;
   formValues: any[];
   form: FormGroup;

   constructor( private data: FormBuilder ) { 
      this.dataForm()
   }

   ngOnInit(): void {}

   get brandCarNoValid() {
      return this.form.get('brandCar').invalid && this.form.get('brandCar').touched
   }
   get modelCarNoValid() {
      return this.form.get('modelCar').invalid && this.form.get('modelCar').touched
   }
   get yearCarNoValid() {
      return this.form.get('yearCar').invalid && this.form.get('yearCar').touched
   }
   get emailNoValid() {
      return this.form.get('email').invalid && this.form.get('email').touched
   }
   get telephoneNoValid() {
      return this.form.get('telephone').invalid && this.form.get('telephone').touched
   }

   dataForm() {
      this.form = this.data.group({
         brandCar : ['', Validators.required],
         modelCar : ['', Validators.required],
         yearCar  : ['', Validators.required],
         email    : ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
         telephone    : ['', [Validators.required, Validators.pattern(".{10}")]],
      })
   }

   sendForm() {
      if(this.form.invalid) {
         return Object.values( this.form.controls ).forEach( control => {
            control.markAsTouched()           
         })
      } else {
         this.formValues = [
            this.form.controls.brandCar.value,
            this.form.controls.modelCar.value,
            this.form.controls.yearCar.value,
            this.form.controls.email.value,
            this.form.controls.telephone.value,
         ]
         this.notificationForm = true;
      }
   }

   goReturn(value:boolean){
      this.notificationForm = !value
      this.form.reset()
   }

}
