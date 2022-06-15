import { Component } from '@angular/core';
import { ModalService } from './modalService/Modal.service';
import { FormSampleComponent } from './form-sample/form-sample.component';
import { ConfirmationSampleComponent } from './confirmation-sample/confirmation-sample.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test';
  constructor(private dialog: ModalService
              ) {}
  openFormSample() {
    // Open component in modal service call
    const ModalRef = this.dialog.open(FormSampleComponent, { data: 'Send data to form' });
    ModalRef.closed().subscribe(() => {
      // Subscription when modal is closed
      console.log('Modal closed!');
    });
  }

  openConfirmationSample() {
    // Open component in modal service call
    const ModalRef = this.dialog.open(ConfirmationSampleComponent, { data: 'Do you want to submit this form' });
    ModalRef.closed().subscribe(() => {
      // Subscription when modal is closed
      console.log('Modal closed!');
    });
  }
}
