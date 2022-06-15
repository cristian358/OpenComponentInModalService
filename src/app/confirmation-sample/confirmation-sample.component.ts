import { Component, Inject  } from '@angular/core';
import { modalRef } from '../modalService/modalRef';
import { DIALOG_DATA } from '../modalService/modalTokens';

@Component({
  selector: 'app-confirmation-sample',
  templateUrl: './confirmation-sample.component.html',
  styleUrls: ['./confirmation-sample.component.scss'],
})
export class ConfirmationSampleComponent{
  constructor(
    private modalRef: modalRef,
    @Inject(DIALOG_DATA) public data: string,

  ) {}

  close() {
    this.modalRef.close();
  }
}
