import { modalRef } from '../modalService/modalRef';
import { DIALOG_DATA } from '../modalService/modalTokens';
import {Component, Inject  } from '@angular/core';

@Component({
  selector: 'app-form-sample',
  templateUrl: './form-sample.component.html',
  styleUrls: ['./form-sample.component.scss'],
})
export class FormSampleComponent{
  constructor(
    private modalRef: modalRef,
    @Inject(DIALOG_DATA) public data: string,

  ) {}

  close() {
    this.modalRef.close();
  }
}