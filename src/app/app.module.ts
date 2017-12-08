import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FilterComponent} from './filter/filter.component';
import {EnterpriseComponent} from './enterprise/enterprise.component';
import {ApiFirmService} from './api-firm.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        FilterComponent,
        EnterpriseComponent
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
