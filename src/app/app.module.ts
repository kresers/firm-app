import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FilterComponent} from './filter/filter.component';
import {EnterpriseComponent} from './enterprise/enterprise.component';
import {TopNavbarComponent} from './top-navbar/top-navbar.component';
import {ApiFirmService} from './api-firm.service';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './navbar/navbar.component';
import {DataTablesModule} from 'angular-datatables';
import {MapComponent} from './map/map.component';
import {RouterModule, Routes} from '@angular/router';
import {AgmCoreModule} from '@agm/core';
import {ExportComponent} from './export/export.component';
import {FilterLinkService} from './filter-link.service';
import {LoaderComponent} from './loader/loader.component';
import { FilterCodeApeComponent } from './filter-code-ape/filter-code-ape.component';



const appRoutes: Routes = [
    {path: '', component: EnterpriseComponent},
    {path: 'carte', component: MapComponent},
    {path: 'export', component: ExportComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        FilterComponent,
        EnterpriseComponent,
        TopNavbarComponent,
        NavbarComponent,
        MapComponent,
        ExportComponent,
        LoaderComponent,
        FilterCodeApeComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        DataTablesModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}
        ),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCZ2D_Hz-63OIhvKl1TbjxToKLJ98jgXbU'
        })
    ],
    providers: [ApiFirmService, FilterLinkService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
