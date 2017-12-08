import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ApiFirmService } from './api-firm.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    EnterpriseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ApiFirmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
