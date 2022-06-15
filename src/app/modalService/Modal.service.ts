import { Overlay, ComponentType } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { modalRef } from './modalRef';
import { DIALOG_DATA } from './modalTokens';

// Modal interface data used as input data to send to component
export interface ModalConfig {
  data?: any;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  /**
   * Open component in modal
   */
  open<T>(component: ComponentType<T>, config?: ModalConfig): modalRef {
    // Centered position
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    // Create the overlay with customizable options
    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'modalBackground',
      panelClass: 'modalPanel',
    });

    // Create ModalgRef to return
    const ModalRef = new modalRef(overlayRef);

    // Create injector that offer possibility to reference the DialogRef from within the component
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: modalRef, useValue: ModalRef },
        { provide: DIALOG_DATA, useValue: config?.data },
      ],
    });

    // Attach component portal to the overlay
    const portal = new ComponentPortal(component, null, injector);
    overlayRef.attach(portal);

    return ModalRef;
  }
}
