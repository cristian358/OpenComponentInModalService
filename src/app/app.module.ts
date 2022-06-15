import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { FormSampleComponent } from './form-sample/form-sample.component';
import { ConfirmationSampleComponent } from './confirmation-sample/confirmation-sample.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { 
	IgxButtonModule,
	IgxDialogModule,
	IgxRippleModule,
	IgxIconModule,
	IgxInputGroupModule,
 } from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    FormSampleComponent,
    ConfirmationSampleComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    OverlayModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxButtonModule,
    IgxDialogModule,
    IgxRippleModule,
    IgxIconModule,
    IgxInputGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
