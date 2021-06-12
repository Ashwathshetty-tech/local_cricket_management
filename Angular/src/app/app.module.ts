import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EventRegisterComponent } from './Events/event-register/event-register.component';
import { EventDetailsComponent } from './Events/event-details/event-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material.module';
import {AdminEventComponent} from './admin-event/admin-event.component';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { DialogContentExampleDialog } from './admin-event/dialog.component'
// import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventRegisterComponent,
    EventDetailsComponent,
    AdminEventComponent,
    DialogContentExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  entryComponents: [ DialogContentExampleDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
