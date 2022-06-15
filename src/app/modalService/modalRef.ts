import { OverlayRef } from '@angular/cdk/overlay';
import { Subject, Observable } from 'rxjs';

  // Reference to the modal.

export class modalRef {
  private closedSubject = new Subject<any>();

  constructor(private overlayRef: OverlayRef) {}

  //  Closes modal

  public close(result?: any) {
    this.overlayRef.dispose();
    this.closedSubject.next(result);
    this.closedSubject.complete();
  }

    // An Observable when the modal has closed

  public closed(): Observable<any> {
    return this.closedSubject.asObservable();
  }
}
