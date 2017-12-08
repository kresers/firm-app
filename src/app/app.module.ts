import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ApiFirmService } from './api-firm.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    EnterpriseComponent,
    TopNavbarComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiFirmService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
