import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { ApiFirmService } from './api-firm.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { DataTablesModule } from 'angular-datatables';
import { CarteComponent } from './carte/carte.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    EnterpriseComponent,
    TopNavbarComponent,
    NavbarComponent,
    CarteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [ApiFirmService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
