import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'app-thanks-notification',
   templateUrl: './thanks-notification.component.html',
   styleUrls: ['./thanks-notification.component.scss']
})
export class ThanksNotificationComponent  {

   @Input() formValues: string[];
   @Output() back: EventEmitter<boolean> = new EventEmitter();

   constructor() { 
   }

   goReturn(value: boolean) {
      this.back.emit(value)
   }

}
